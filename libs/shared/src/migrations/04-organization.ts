module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    const organization = queryInterface.createTable('organization', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'user',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      name: {
        type: new Sequelize.STRING(124),
        allowNull: false,
      },
      confirmed: {
        type: new Sequelize.BOOLEAN(),
        allowNull: false,
        defaultValue: false,
      },
      description: {
        type: new Sequelize.TEXT(),
        allowNull: true,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });

    organization.associate = (models: any) => {
      organization.belongsTo(models.user);
      organization.hasMany(models.year);
      organization.hasMany(models.employee);
      organization.hasMany(models.plantation);
    };

    return organization;
  },

  down: async (queryInterface: any) => {
    return queryInterface.dropTable('organization');
  },
};
