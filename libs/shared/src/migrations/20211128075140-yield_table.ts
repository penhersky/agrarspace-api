module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    return queryInterface.createTable('yield', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      cultureId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      area: {
        type: new Sequelize.DOUBLE(),
        allowNull: false,
      },
      plantedWeight: {
        type: new Sequelize.DOUBLE(),
        allowNull: true,
      },
      collectedWeight: {
        type: new Sequelize.DOUBLE(),
        allowNull: false,
      },
      dateOfSowingStart: {
        type: new Sequelize.DATE(),
        allowNull: false,
      },
      dateOfSowingEnd: {
        type: new Sequelize.DATE(),
        allowNull: false,
      },
      dateOfCollectionStart: {
        type: new Sequelize.DATE(),
        allowNull: false,
      },
      dateOfCollectionEnd: {
        type: new Sequelize.DATE(),
        allowNull: false,
      },
      description: {
        type: new Sequelize.TEXT(),
        allowNull: true,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface: any) => {
    return queryInterface.dropTable('yield');
  },
};
