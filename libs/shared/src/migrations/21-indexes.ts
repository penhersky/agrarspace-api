module.exports = {
  up: async (queryInterface: any) => {
    queryInterface.addIndex('culture', ['categoryId'], {
      name: 'culture_by_categoryId',
      fields: ['categoryId'],
      unique: false,
    });
    queryInterface.addIndex('culture', ['parentId'], {
      name: 'culture_by_parentId',
      fields: ['parentId'],
      unique: false,
    });
    queryInterface.addIndex('yield', ['cultureId'], {
      name: 'yield_by_cultureId',
      fields: ['cultureId'],
      unique: false,
    });
  },

  down: async (queryInterface: any) => {
    queryInterface.removeIndex('culture', 'culture_by_categoryId');
    queryInterface.removeIndex('culture', 'culture_by_parentId');
    queryInterface.removeIndex('yield', 'yield_by_cultureId');
  },
};
