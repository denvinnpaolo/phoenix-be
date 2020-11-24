
exports.up = function(knex) {
  return (knex.schema
    .createTable('available', tbl => {
        tbl.increments();
        tbl.string('type').notNullable();
        tbl.integer('producer_id').notNullable();
        tbl.string('date').notNullable();
        tbl.string('exp').notNullable();
    })
    .createTable('pick_up', tbl => {
        tbl.increments();
        tbl.string('date').notNullable();
        tbl.string('type').notNullable();
        tbl.string('description').notNullable();
        tbl.integer('producer_id')
            .unsigned()
            .references('id')
            .inTable('orgs')
            .notNullable();

        tbl.integer('transformer_id')
            .unsigned()
            .references('id')
            .inTable('orgs')
            .notNullable();

        tbl.string('producer_emp')
            .unsigned()
            .references('id')
            .inTable('user')
            .notNullable();

        tbl.string('transformer_emp')
            .unsigned()
            .references('id')
            .inTable('user')
            .notNullable();
    })
    .createTable('completed', tbl => {
        tbl.increments();
        tbl.string('date').notNullable();
        tbl.string('type').notNullable();
        tbl.string('description').notNullable();
        tbl.integer('producer_id')
            .unsigned()
            .references('id')
            .inTable('orgs')
            .notNullable();

        tbl.integer('transformer_id')
            .unsigned()
            .references('id')
            .inTable('orgs')
            .notNullable();

        tbl.string('producer_emp')
            .unsigned()
            .references('id')
            .inTable('user')
            .notNullable();

        tbl.string('transformer_emp')
            .unsigned()
            .references('id')
            .inTable('user')
            .notNullable();
    })
    .createTable('archive', tbl => {
        tbl.increments();
        tbl.string('date').notNullable();
        tbl.string('type').notNullable();
        tbl.string('description').notNullable();
        tbl.integer('producer_id')
            .unsigned()
            .references('id')
            .inTable('waste_producer')
            .notNullable();

        tbl.integer('transformer_id')
            .unsigned()
            .references('id')
            .inTable('waste_transformer')
            .notNullable();

        tbl.string('producer_emp')
            .unsigned()
            .references('id')
            .inTable('user')
            .notNullable();

        tbl.string('transformer_emp')
            .unsigned()
            .references('id')
            .inTable('user')
            .notNullable();
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
