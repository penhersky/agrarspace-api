import { Year, Employee, Plantation, Organization } from '@agrarspace/shared';

import {
  getCulturesCountInOrganization,
  getEmployeesCountInOrganization,
  getPlantationsCountInOrganization,
  getTotalOrganizationAreaSize,
  getTotalOrganizationResourcesPerYear,
} from '../../../service/organization/getGeneralInformation.service';
import { findOrganizationById } from '../../../service/organization';

import { GetOrganizationGeneralInfoResolver } from '../../../types/resolvers';
import { OrganizationGeneralInfo } from './../../../types/graphql';
import { AppError } from '../../../utils/error';

export const getOrganizationGeneralInfo: GetOrganizationGeneralInfoResolver =
  async (_, { data: { id, year } }) => {
    let info: OrganizationGeneralInfo = {};

    const organization = await findOrganizationById(Organization, +id);

    if (!organization) AppError.userInput('Organization is das not exists');

    try {
      const employeesCount = await getEmployeesCountInOrganization(
        Employee,
        id,
      );
      info.countOfEmployees = employeesCount;
    } catch {}

    try {
      const plantationCount = await getPlantationsCountInOrganization(
        Plantation,
        id,
      );
      info.plantationsCount = plantationCount;
    } catch {}

    try {
      const totalArea = await getTotalOrganizationAreaSize(Plantation, id);
      info.totalAreaSize = totalArea;
    } catch {}

    try {
      const countOfCultures = await getCulturesCountInOrganization(Year, id);
      info.countOfCultures = countOfCultures;
    } catch {}

    try {
      const date = new Date();

      const plantedResources = await getTotalOrganizationResourcesPerYear(
        id,
        year || date.getUTCFullYear(),
      );
      info.plantedResources = plantedResources?.totalPlanted;
      info.collectedResources = plantedResources?.totalCollected;
    } catch {}

    return info;
  };
