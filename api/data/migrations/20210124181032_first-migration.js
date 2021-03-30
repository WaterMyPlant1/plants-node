exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('user_username', 200).notNullable()
      users.string('user_password', 200).notNullable()
      users.integer('phone_number', 320).notNullable()
    })
    .createTable('plants', (plants) => {
      plants.increments('plant_id')
      plants.string('nickname', 200).notNullable()
      plants.string('species', 200).notNullable()
      plants.integer('watering frequency').notNullable()
      plants.integer('user_id')
      .unsigned()
      .notNullable()
      .references('user_id')
      .inTable('users')

    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('plants')
  await knex.schema.dropTableIfExists('users')
}
