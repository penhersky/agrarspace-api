module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    const employee = queryInterface.createTable('employee', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },

      position: {
        type: Sequelize.STRING(64),
        allowNull: true,
      },

      password: {
        type: Sequelize.STRING(164),
        allowNull: false,
      },

      passExpiresIn: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date(),
      },

      role: {
        type: Sequelize.DataTypes.ENUM('director', 'manager', 'worker'),
        allowNull: false,
        defaultValue: 'worker',
      },

      expiresIn: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },

      organizationId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'organization',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });

    employee.associate = (models: any) => {
      employee.belongTo(models.organization);
    };
    return employee;
  },

  down: async (queryInterface: any) => {
    return queryInterface.dropTable('employee');
  },
};
