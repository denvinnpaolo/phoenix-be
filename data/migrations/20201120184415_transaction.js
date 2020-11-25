
exports.up = function(knex) {
  return (knex.schema
    .createTable('available', tbl => {
        tbl.increments();
        tbl.string('type').notNullable();
        tbl.integer('producer_id').notNullable();
        tbl.string('date_posted').notNullable();
        tbl.string('exp').notNullable();
    })
    .createTable('pick_up', tbl => {
        tbl.increments();
        tbl.string('date_posted').notNullable();
        tbl.string('exp').notNullable();
        tbl.string('pick_up_date').notNullable();
        tbl.string('type').notNullable();
        tbl.string('description').notNullable();
        tbl.integer('producer_id').notNullable();
        tbl.integer('transformer_id').notNullable();
        tbl.string('producer_emp').notNullable();
        tbl.string('transformer_emp').notNullable();

    })
    .createTable('completed', tbl => {
        tbl.increments();
        tbl.string('date_posted').notNullable();
        tbl.string('exp').notNullable();
        tbl.string('pick_up_date').notNullable();
        tbl.string('type').notNullable();
        tbl.string('description').notNullable();
        tbl.integer('producer_id').notNullable();
        tbl.integer('transformer_id').notNullable();
        tbl.string('producer_emp').notNullable();
        tbl.string('transformer_emp').notNullable();

    })
    .createTable('archive', tbl => {
        tbl.increments();
        tbl.string('date_posted').notNullable();
        tbl.string('exp').notNullable();
        tbl.string('pick_up_date').notNullable();
        tbl.string('type').notNullable();
        tbl.string('description').notNullable();
        tbl.integer('producer_id').notNullable();
        tbl.integer('transformer_id').notNullable();
        tbl.string('producer_emp').notNullable();
        tbl.string('transformer_emp').notNullable();

    })
  )
};

exports.down = function(knex) {
  return (knex.schema
    .dropTableIfExists('available')
    .dropTableIfExists('pick_up')
    .dropTableIfExists('completed')
    .dropTableIfExists('archive')
  )
};
