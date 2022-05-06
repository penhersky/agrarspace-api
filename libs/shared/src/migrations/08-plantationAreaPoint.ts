module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    const plantationAreaPoint = queryInterface.createTable(
      'plantationAreaPoint',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        plantationId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'plantation',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        lat: {
          type: new Sequelize.DECIMAL(8, 6),
          allowNull: false,
        },
        lng: {
          type: new Sequelize.DECIMAL(9, 6),
          allowNull: false,
        },
        description: {
          type: new Sequelize.TEXT(),
          allowNull: true,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      },
    );

    plantationAreaPoint.associate = (models: any) => {
      plantationAreaPoint.belongsTo(models.plantation);
    };

    return plantationAreaPoint;
  },

  down: async (queryInterface: any) => {
    return queryInterface.dropTable('plantationAreaPoint');
  },
};
