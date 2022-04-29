module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    const yearModel = queryInterface.createTable('year', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      cultureId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'culture',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      organizationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'organization',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      plantationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'plantation',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      plantedArea: {
        type: new Sequelize.DOUBLE(),
        allowNull: true,
        defaultValue: 0,
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
    });

    yearModel.associate = (models: any) => {
      yearModel.belongsTo(models.culture);
      yearModel.belongsTo(models.organization);
      yearModel.belongsTo(models.plantation);
    };

    return yearModel;
  },

  down: async (queryInterface: any) => {
    return queryInterface.dropTable('year');
  },
};
