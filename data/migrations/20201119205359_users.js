
exports.up = function(knex) {
    return (knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('type').notNullable();
            tbl.string('company_name').notNullable();
            tbl.integer('company_size').notNullable();
            tbl.string('website');
            tbl.string('company_address');
            tbl.string('company_phone');
            tbl.string('name');
            tbl.string('job_title').notNullable();
            tbl.string('phone').notNullable();
            tbl.string('email', 128).unique().notNullable();
            tbl.string('password', 128).notNullable();
        })
    )
};

exports.down = function(knex) {
    return (knex.schema
        .dropTableIfExists('users')
    );
};
