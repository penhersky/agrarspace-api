import { TCultureModel, TYieldModel, Sequelize } from '@agrarspace/shared';

import { DatabaseError } from '../../utils/apolloError';

export const getTopCulturesByYield = async (
  CultureModel: TCultureModel,
  YieldModel: TYieldModel,
) => {
  try {
    const stats = await YieldModel.findAll({
      attributes: [
        'cultureId',
        [
          Sequelize.fn('sum', Sequelize.col('collectedWeight')),
          'totalCollectedWeight',
        ],
      ],
      order: [['collectedWeight', 'DESC']],
      group: ['cultureId', 'collectedWeight', 'culture.id'],
      limit: 5,
      include: [
        {
          model: CultureModel,
          as: 'culture',
          attributes: ['id', 'name'],
        },
      ],
    });
    return stats;
  } catch (err: Error | unknown) {
    if (err instanceof Error) throw new DatabaseError(err.message);
  }
};
