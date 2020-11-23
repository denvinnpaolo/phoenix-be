
exports.up = function(knex) {
    return (knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('type').notNullable();
            tbl.string('email', 128).unique().notNullable();
            tbl.string('name');
            tbl.string('password', 128).notNullable();
            tbl.string('job').notNullable();
            tbl.string('phone').notNullable();
            tbl.integer('company_id').notNullable();
        })
        .createTable('orgs', tbl => {
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
        .dropTableIfExists('orgs')
    );
};
