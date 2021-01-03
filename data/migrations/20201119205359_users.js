
exports.up = function(knex) {
    return (knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('type').notNullable();
            tbl.string('company_name').notNullable();
            tbl.integer('company_size').notNullable();
            tbl.string('website');
            tbl.string('address').notNullable();
            tbl.string('city').notNullable();
            tbl.string('state').notNullable();
            tbl.string('country').notNullable();
            tbl.string('name').notNullable();
            tbl.string('job_title').notNullable();
            tbl.string('phone').notNullable();
            tbl.string('email', 128).unique().notNullable();
            tbl.string('password', 128).notNullable();
            tbl.string('img');
        })
    )
};

exports.down = function(knex) {
    return (knex.schema
        .dropTableIfExists('users')
    );
};
