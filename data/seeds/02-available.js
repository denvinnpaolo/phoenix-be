
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('available').insert([

        {id:1,
        type: "restaurant",
        producer_id: 2,
        address: "123 lane st",
        description: "organic waste",
        time_available: "morning",
        exp: "2020-11-26",
        items: "Bag 2 XL, 3 S",
        date_posted: "2020-11-23"},
        {id:2,
          type: "hotel",
          producer_id: 2,
          address: "421 ave st",
          description: "organic waste",
          time_available: "afternoon",
          exp: "2020-12-12",
          items: "Bag 2 XL, 3 S",
          date_posted: "2020-12-08"},

      ]);
};
