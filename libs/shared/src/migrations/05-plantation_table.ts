import Sequelize from 'sequelize';

module.exports = {
  up: async (queryInterface: any) => {
    const plantation = queryInterface.createTable('plantation', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },

      organizationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'organization',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      name: {
        type: new Sequelize.STRING(124),
        allowNull: false,
      },

      status: {
        type: new Sequelize.STRING(64),
        allowNull: true,
      },

      areaSize: {
        type: new Sequelize.DOUBLE(),
        allowNull: false,
      },

      region: {
        type: new Sequelize.STRING(256),
        allowNull: false,
      },

      description: {
        type: new Sequelize.TEXT(),
        allowNull: true,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });

    plantation.associate = (models: any) => {
      plantation.belongsTo(models.organization);
      plantation.hasMany(models.year);
    };

    return plantation;
  },

  down: async (queryInterface: any) => {
    return queryInterface.dropTable('plantation');
  },
};
