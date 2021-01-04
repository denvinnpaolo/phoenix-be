
exports.up = function(knex) {
  return (knex.schema
    .createTable('available', tbl => {
        tbl.increments('id').primary();
        tbl.string('address').notNullable();
        tbl.string('date_posted').notNullable();
        tbl.string('exp').notNullable();
        tbl.string('img');
        tbl.string('items').notNullable();
        tbl.string('price').notNullable();
        tbl.integer('producer_id').notNullable();
        tbl.string('time_available').notNullable();
        tbl.string('type').notNullable();

    })
    .createTable('pick_up', tbl => {
      tbl.increments().primary();
      tbl.string('address').notNullable();
      tbl.string('date_posted').notNullable();
      tbl.string('exp').notNullable();
      tbl.string('img');
      tbl.string('items').notNullable();
      tbl.string('pick_up_date').notNullable();
      tbl.string('price').notNullable();
      tbl.integer('producer_id').notNullable();
      tbl.string('time_available')
      tbl.integer('transformer_id').notNullable();
      tbl.string('type').notNullable();
    })
    .createTable('completed', tbl => {
      tbl.increments().primary();
      tbl.string('address').notNullable();
      tbl.string('date_posted').notNullable();
      tbl.string('exp').notNullable();
      tbl.string('img');
      tbl.string('items').notNullable();
      tbl.string('pick_up_date').notNullable();
      tbl.string('price').notNullable();
      tbl.integer('producer_id').notNullable();
      tbl.string('time_available')
      tbl.integer('transformer_id').notNullable();
      tbl.string('type').notNullable();
    })
    .createTable('canceled', tbl => {
      tbl.increments().primary();
      tbl.string('address').notNullable();
      tbl.string('date_posted').notNullable();
      tbl.string('exp').notNullable();
      tbl.string('img');
      tbl.string('items').notNullable();
      tbl.string('pick_up_date').notNullable();
      tbl.string('price').notNullable();
      tbl.integer('producer_id').notNullable();
      tbl.string('time_available')
      tbl.integer('transformer_id').notNullable();
      tbl.string('type').notNullable();
    })
    .createTable('archive', tbl => {
      tbl.increments().primary();
      tbl.string('date_posted').notNullable();
      tbl.string('items').notNullable(); 
      tbl.string('pick_up_date').notNullable();
      tbl.string('price').notNullable();
      tbl.integer('producer_id').notNullable();
      tbl.string('status').notNullable();
      tbl.integer('transformer_id').notNullable();
      tbl.string('type').notNullable();
  })
  )
};

exports.down = function(knex) {
  return (knex.schema
    .dropTableIfExists('available')
    .dropTableIfExists('pick_up')
    .dropTableIfExists('completed')
    .dropTableIfExists('canceled')
    .dropTableIfExists('archive')

  )
};
