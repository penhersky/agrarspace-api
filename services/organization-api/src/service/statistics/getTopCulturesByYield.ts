import { TCultureModel, TYearModel, Sequelize } from '@agrarspace/shared';

import { AppError } from '../../utils/error';

export const getTopCulturesByYield = async (
  CultureModel: TCultureModel,
  YearModel: TYearModel,
) => {
  try {
    const stats = await YearModel.findAll({
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
    if (err instanceof Error) AppError.database(err.message);
  }
};
