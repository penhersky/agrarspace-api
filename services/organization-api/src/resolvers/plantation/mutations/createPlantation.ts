import { Plantation } from '@agrarspace/shared';

import { CreatePlantation } from '../../../types/resolvers';
import { createPlantationService } from '../../../service/plantations/createPlantation.service';

export const createPlantation: CreatePlantation = async (
  _,
  { data },
  { user },
) => {
  const result = await createPlantationService(
    Plantation,
    data,
    user?.organizationId as number,
  );

  return {
    id: result?.id as number,
  };
};
