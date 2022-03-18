module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    const culture = queryInterface.createTable('culture', {
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
        references: {
          model: 'category',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      parentId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'culture',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    });

    culture.associate = (models: any) => {
      culture.belongsTo(models.category);
      culture.hasMany(models.yield);
      culture.hasOne(models.culture);
    };

    return culture;
  },

  down: async (queryInterface: any) => {
    return queryInterface.dropTable('culture');
  },
};
