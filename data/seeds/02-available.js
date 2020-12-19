
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('available').insert([

        {id:1,
        type: "restaurant",
        producer_id: 2,
        address: "123 lane st, Los Angeles, CA",
        description: "organic waste",
        time_available: "morning",
        exp: "2020-12-26",
        items: "Bag 2 XL, 3 S",
        date_posted: "2020-12-23"},
        {
          id:2,
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, Los Angeles, CA",
          description: "organic waste",
          time_available: "afternoon",
          exp: "2020-12-22",
          items: "Bag 2 XL, 3 S",
          date_posted: "2020-12-08"
        },
        {
          id:3,
          type: "business",
          producer_id: 2,
          address: "421 ave st, Los Angeles, CA",
          description: "organic waste",
          time_available: "evening",
          exp: "2020-12-29",
          items: "Bag 2 XL, 3 S",
          date_posted: "2020-12-08"
        },        {
          id:4,
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, New York, NY",
          description: "organic waste",
          time_available: "afternoon",
          exp: "2020-12-25",
          items: "Bag 2 XL, 3 S",
          date_posted: "2020-12-19"
        },        {
          id:5,
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, Colorado Springs, CO",
          description: "organic waste",
          time_available: "morning",
          exp: "2020-12-23",
          items: "Bag 2 XL, 3 S",
          date_posted: "2020-12-18"
        },        {
          id:6,
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, Louieville, KY",
          description: "organic waste",
          time_available: "afternoon",
          exp: "2020-27-12",
          items: "Bag 2 XL, 3 S",
          date_posted: "2020-12-19"
        },        {
          id:7,
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, Tucson, AZ",
          description: "organic waste",
          time_available: "afternoon",
          exp: "2020-12-24",
          items: "Bag 2 XL, 3 S",
          date_posted: "2020-12-18"
        },        {
          id:8,
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, Las Vegas, NV",
          description: "organic waste",
          time_available: "morning",
          exp: "2020-12-22",
          items: "Bag 2 XL, 3 S",
          date_posted: "2020-12-15"
        },        
        {
          id:9,
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, San Francisco, CA",
          description: "organic waste",
          time_available: "evening",
          exp: "2020-12-31",
          items: "Bag 2 XL, 3 S",
          date_posted: "2020-12-20"
        },

      ]);
};
