
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('available').insert([

      {id:1,
      type: "restaurant",
      producer_id: 2,
      address: "123 lane st, Los Angeles, CA",
      price: "0.00",
      time_available: "morning",
      exp: "2021-01-01",
      items: "Bag 2 XL, 3 S",
      date_posted: "2020-12-28"
      },
      {
        id:2,
        type: "hotel",
        producer_id: 2,
        address: "421 ave st, Los Angeles, CA",
        price: "0.00",
        time_available: "afternoon",
        exp: "2021-01-05",
        items: "Bag 2 XL, 3 S",
        date_posted: "2020-12-28"
      },
      {
        id:3,
        type: "business",
        producer_id: 2,
        address: "421 ave st, Los Angeles, CA",
        price: "0.00",
        time_available: "evening",
        exp: "2021-01-05",
        items: "Bag 2 XL, 3 S",
        date_posted: "2020-12-28"
      },        {
        id:4,
        type: "hotel",
        producer_id: 2,
        address: "421 ave st, New York, NY",
        price: "0.00",
        time_available: "afternoon",
        exp: "2021-01-06",
        items: "Bag 2 XL, 3 S",
        date_posted: "2020-12-28"
      },        {
        id:5,
        type: "hotel",
        producer_id: 2,
        address: "421 ave st, Colorado Springs, CO",
        price: "0.00",
        time_available: "morning",
        exp: "2021-01-06",
        items: "Bag 2 XL, 3 S",
        date_posted: "2020-12-28"
      },        {
        id:6,
        type: "hotel",
        producer_id: 2,
        address: "421 ave st, Louieville, KY",
        price: "0.00",
        time_available: "afternoon",
        exp: "2021-01-06",
        items: "Bag 2 XL, 3 S",
        date_posted: "2020-12-28"
      },        {
        id:7,
        type: "hotel",
        producer_id: 2,
        address: "421 ave st, Tucson, AZ",
        price: "0.00",
        time_available: "afternoon",
        exp: "2020-12-28",
        items: "Bag 2 XL, 3 S",
        date_posted: "2020-12-27"
      },        {
        id:8,
        type: "hotel",
        producer_id: 2,
        address: "421 ave st, Las Vegas, NV",
        price: "0.00",
        time_available: "morning",
        exp: "2020-12-30",
        items: "Bag 2 XL, 3 S",
        date_posted: "2020-12-29"
      },        
      {
        id:9,
        type: "hotel",
        producer_id: 2,
        address: "421 ave st, San Francisco, CA",
        price: "0.00",
        time_available: "evening",
        exp: "2021-01-02",
        items: "Bag 2 XL, 3 S",
        date_posted: "2020-12-29"
      },

      {id:10,
        type: "restaurant",
        producer_id: 2,
        address: "123 lane st, Los Angeles, CA",
        price: "0.00",
        time_available: "morning",
        exp: "2021-01-10",
        items: "Bag 2 XL, 3 S",
        date_posted: "2020-12-29"},
        {
          id:11,
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, Los Angeles, CA",
          price: "0.00",
          time_available: "afternoon",
          exp: "2021-01-01",
          items: "Bag 2 XL, 3 S",
          date_posted: "2020-12-29"
        },
        {
          id:12,
          type: "business",
          producer_id: 2,
          address: "421 ave st, Los Angeles, CA",
          price: "0.00",
          time_available: "evening",
          exp: "2021-01-06",
          items: "Bag 2 XL, 3 S",
          date_posted: "2020-12-29"
        },        {
          id:13,
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, New York, NY",
          price: "0.00",
          time_available: "afternoon",
          exp: "2021-01-03",
          items: "Bag 2 XL, 3 S",
          date_posted: "2020-12-29"
        },        {
          id:14,
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, Colorado Springs, CO",
          price: "0.00",
          time_available: "morning",
          exp: "2021-01-04",
          items: "Bag 2 XL, 3 S",
          date_posted: "2020-12-29"
        },        {
          id:15,
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, Louieville, KY",
          price: "0.00",
          time_available: "afternoon",
          exp: "2021-01-10",
          items: "Bag 2 XL, 3 S",
          date_posted: "2020-12-29"
        },        {
          id:16,
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, Tucson, AZ",
          price: "0.00",
          time_available: "afternoon",
          exp: "2021-01-06",
          items: "Bag 2 XL, 3 S",
          date_posted: "2020-12-29"
        },        {
          id:17,
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, Las Vegas, NV",
          price: "0.00",
          time_available: "morning",
          exp: "2021-01-07",
          items: "Bag 2 XL, 3 S",
          date_posted: "2020-12-29"
        },        
        {
          id:18,
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, San Francisco, CA",
          price: "0.00",
          time_available: "evening",
          exp: "2020-12-28",
          items: "Bag 2 XL, 3 S",
          date_posted: "2020-12-25"
        }
      ]);
};
