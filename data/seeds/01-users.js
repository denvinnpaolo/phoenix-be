
exports.seed = function(knex) {
    return knex('users').insert([
      {id: 1, type: "wt", company_name:"Sake 2 Me", company_size: 10,website: "www.sake2me.com", company_address: "123 south st, Cerritos, CA", company_phone: "818-990-0101", name: "Joe Oh", job_title: "Manager", phone:"990-029-9291", email: "sake2me@yahoo.com", password: "$2a$12$Ug84d2oWl20lw9/hPcWzsOQh2ROGypJ01QTj6E2t7Z3DyuNYoGOFu" }
    ]);
};
