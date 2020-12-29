
exports.up = function(knex) {
  return (knex.schema
    .createTable('available', tbl => {
        tbl.increments();
        tbl.integer('producer_id').notNullable();
        tbl.string('type').notNullable();
        tbl.string('items').notNullable();
        tbl.string('address').notNullable();
        tbl.string('price').notNullable();
        tbl.string('time_available').notNullable();
        tbl.string('date_posted').notNullable();
        tbl.string('exp').notNullable();
        tbl.string('img');
    })
    .createTable('pick_up', tbl => {
        tbl.increments();
        tbl.string('date_posted').notNullable();
        tbl.string('exp').notNullable();
        tbl.string('pick_up_date').notNullable();
        tbl.string('time_available').notNullable();
        tbl.string('type').notNullable();
        tbl.string('address').notNullable();
        tbl.string('items').notNullable();
        tbl.string('price').notNullable();
        tbl.integer('producer_id').notNullable();
        tbl.integer('transformer_id').notNullable();
        tbl.string('img');
    })
    .createTable('completed', tbl => {
      tbl.increments();
      tbl.string('date_posted').notNullable();
      tbl.string('exp').notNullable();
      tbl.string('pick_up_date').notNullable();
      tbl.string('time_available')
      tbl.string('type').notNullable();
      tbl.string('address').notNullable();
      tbl.string('items').notNullable();
      tbl.string('price').notNullable();
      tbl.integer('producer_id').notNullable();
      tbl.integer('transformer_id').notNullable();
      tbl.string('img');
    })
    .createTable('canceled', tbl => {
      tbl.increments();
      tbl.string('date_posted').notNullable();
      tbl.string('exp').notNullable();
      tbl.string('pick_up_date').notNullable();
      tbl.string('time_available')
      tbl.string('type').notNullable();
      tbl.string('address').notNullable();
      tbl.string('items').notNullable();
      tbl.string('price').notNullable();
      tbl.integer('producer_id').notNullable();
      tbl.integer('transformer_id').notNullable();
      tbl.string('img');
    })
    .createTable('archive', tbl => {
      tbl.increments();
      tbl.string('date_posted').notNullable();
      tbl.string('pick_up_date').notNullable();
      tbl.string('type').notNullable();
      tbl.string('items').notNullable(); 
      tbl.string('price').notNullable();
      tbl.integer('producer_id').notNullable();
      tbl.integer('transformer_id').notNullable();
      tbl.string('status').notNullable();
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
