module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    return queryInterface.createTable('category', {
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
      image: {
        type: new Sequelize.STRING(132),
        allowNull: true,
      },
      icon: {
        type: new Sequelize.STRING(64),
        allowNull: true,
      },
      description: {
        type: new Sequelize.STRING(64),
        allowNull: true,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface: any) => {
    return queryInterface.dropTable('category');
  },
};
