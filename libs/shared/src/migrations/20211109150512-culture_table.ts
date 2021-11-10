module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    return queryInterface.createTable('culture', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: new Sequelize.STRING(64),
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      image: {
        type: new Sequelize.STRING(132),
        allowNull: true,
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
    return queryInterface.dropTable('culture');
  },
};
