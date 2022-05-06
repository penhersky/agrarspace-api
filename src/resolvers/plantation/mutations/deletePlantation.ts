import { Plantation } from '@agrarspace/shared';

import { DeletePlantation } from '../../../types/resolvers';
import { deletePlantationService } from '../../../service/plantations/deletePlantation.service';

export const deletePlantation: DeletePlantation = async (
  _,
  { id },
  { user },
) => {
  const result = await deletePlantationService(
    Plantation,
    id,
    user?.organizationId as number,
  );

  return {
    id: result?.id as number,
  };
};
