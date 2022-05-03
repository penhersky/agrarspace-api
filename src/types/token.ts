import { UserTypes, UserRoles, EmployeeRoles } from '@agrarspace/shared';

import { UserDeviceInfo } from '../types/graphql';

export interface IRefreshToken {
  id: number;
  type: UserTypes;
  system: UserDeviceInfo;
}

export interface ISessionToken {
  userId: number;
  type: UserTypes;
  userRole?: UserRoles;
  employeeRole?: EmployeeRoles;
  organizationId?: number;
  organizationOwnerId?: number;
}
