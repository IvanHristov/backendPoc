const createModel = (table) => ({
  async findMany(filter) {
    return await table.findAll({
      where: filter,
      order: ['id']
    });
  },
  async findOne(filter) {
    return await table.findOne({
      where: filter,
      order: [['id', 'DESC']]
    });
  },
  async create(input) {
    return await table.create(input);
  },
  async update(input, filter) {
    const result = await table.update(input, {
      returning: true,
      where: filter,
    });
    return result[1];
  },
  async delete(input) {
    const result = await this.findMany(input);
    await table.destroy({
      where: input
    });

    return result;
  }
})

module.exports = createModel
