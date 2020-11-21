
exports.up = function(knex) {
    return (knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('email', 128).unique().notNullable();
            tbl.string('password', 128).notNullable();
            tbl.string('job').notNullable();
            tbl.integer('phone').notNullable();
            tbl.integer('company_id').notNullable();
        })
        .createTable('waste_producers', tbl => {
            tbl.increments();
            tbl.string('type').notNullable();
            tbl.string('name').notNullable();
            tbl.string('address').notNullable();
            tbl.string('city').notNullable();
            tbl.integer('zipcode').notNullable();
            tbl.integer('phone').notNullable();
            tbl.string('email').unique().notNullable();
            tbl.string('password').notNullable();
            tbl.string('url');
            tbl.string('about', 500);
        })
        .createTable('waste_transformers', tbl => {
            tbl.increments();
            tbl.string('type').notNullable();
            tbl.string('name').notNullable();
            tbl.string('address').notNullable();
            tbl.string('city').notNullable();
            tbl.integer('zipcode').notNullable();
            tbl.integer('phone').notNullable();
            tbl.string('email').unique().notNullable();
            tbl.string('password').notNullable();
            tbl.string('url');
            tbl.string('about', 500);
        })
    )
};

exports.down = function(knex) {
    return (knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('waste_producers')
        .dropTableIfExists('waste_transformers')
    );
};
