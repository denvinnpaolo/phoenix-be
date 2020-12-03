
exports.up = function(knex) {
  return (knex.schema
    .createTable('available', tbl => {
        tbl.increments();
        tbl.integer('producer_id').notNullable();
        tbl.string('type').notNullable();
        tbl.string('address').notNullable();
        tbl.string('description').notNullable();
        tbl.string('time_available').notNullable();
        tbl.string('date_posted').notNullable();
        tbl.string('exp').notNullable();
    })
    .createTable('pick_up', tbl => {
        tbl.increments();
        tbl.string('date_posted').notNullable();
        tbl.string('exp').notNullable();
        tbl.string('pick_up_date').notNullable();
        tbl.string('pick_up_time')
        tbl.string('type').notNullable();
        tbl.string('description').notNullable();
        tbl.integer('producer_id').notNullable();
        tbl.integer('transformer_id').notNullable();

    })
    .createTable('completed', tbl => {
        tbl.increments();
        tbl.string('date_posted').notNullable();
        tbl.string('exp').notNullable();
        tbl.string('pick_up_date').notNullable();
        tbl.string('pick_up_time')
        tbl.string('type').notNullable();
        tbl.string('description').notNullable();
        tbl.integer('producer_id').notNullable();
        tbl.integer('transformer_id').notNullable();

    })
    .createTable('cancelled', tbl => {
      tbl.string('date_posted').notNullable();
      tbl.string('exp').notNullable();
      tbl.string('pick_up_date').notNullable();
      tbl.string('pick_up_time')
      tbl.string('type').notNullable();
      tbl.string('description').notNullable();
      tbl.integer('producer_id').notNullable();
      tbl.integer('transformer_id').notNullable();
    })
  )
};

exports.down = function(knex) {
  return (knex.schema
    .dropTableIfExists('available')
    .dropTableIfExists('pick_up')
    .dropTableIfExists('completed')
    .dropTableIfExists('cancelled')

  )
};
