module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    return queryInterface.createTable('user', {
      id: {
        type: Sequelize.INTEGER(),
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(48),
        allowNull: false,
        unique: true,
      },
      phonNumber: {
        type: Sequelize.STRING(18),
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING(164),
        allowNull: true,
      },
      provider: {
        type: Sequelize.STRING(64),
        allowNull: false,
        defaultValue: 'email',
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface: any) => {
    return queryInterface.dropTable('user');
  },
};
