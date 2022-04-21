module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    const user = queryInterface.createTable('user', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(48),
        allowNull: false,
        unique: true,
      },
      phoneNumber: {
        type: Sequelize.STRING(24),
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
      role: {
        type: Sequelize.DataTypes.ENUM('user', 'admin'),
        allowNull: false,
        defaultValue: 'user',
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });

    user.associate = (models: any) => {
      user.hasOne(models.organization);
    };
    return user;
  },

  down: async (queryInterface: any) => {
    return queryInterface.dropTable('user');
  },
};
