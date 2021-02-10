
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('available').insert([

      {
      type: "restaurant",
      producer_id: 2,
      address: "123 lane st, Los Angeles, CA, USA",
      price: "0.00",
      time_available: "morning",
      exp: "2021-02-15",
      items: "Bag 2 XL, 3 S",
      date_posted: "2021-02-10"
      },
      {
        type: "hotel",
        producer_id: 2,
        address: "421 ave st, Los Angeles, CA, USA",
        price: "0.00",
        time_available: "afternoon",
        exp: "2021-02-15",
        items: "Bag 2 XL, 3 S",
        date_posted: "2021-02-10"
      },
      {
        type: "business",
        producer_id: 2,
        address: "421 ave st, Los Angeles, CA, USA",
        price: "0.00",
        time_available: "evening",
        exp: "2021-02-15",
        items: "Bag 2 XL, 3 S",
        date_posted: "2021-02-10"
      },        
      {
        type: "hotel",
        producer_id: 2,
        address: "421 ave st, New York, NY, USA",
        price: "0.00",
        time_available: "afternoon",
        exp: "2021-02-15",
        items: "Bag 2 XL, 3 S",
        date_posted: "2021-02-10"
      },        
      {
        type: "hotel",
        producer_id: 2,
        address: "421 ave st, Colorado Springs, CO, USA",
        price: "0.00",
        time_available: "morning",
        exp: "2021-02-15",
        items: "Bag 2 XL, 3 S",
        date_posted: "2021-02-10"
      },        
      {
        type: "hotel",
        producer_id: 2,
        address: "421 ave st, Louieville, KY, USA",
        price: "0.00",
        time_available: "afternoon",
        exp: "2021-02-15",
        items: "Bag 2 XL, 3 S",
        date_posted: "2021-02-10"
      },        
      {
        type: "hotel",
        producer_id: 2,
        address: "421 ave st, Tucson, AZ, USA",
        price: "0.00",
        time_available: "afternoon",
        exp: "2021-02-15",
        items: "Bag 2 XL, 3 S",
        date_posted: "2021-02-10"
      },        
      {
        type: "hotel",
        producer_id: 2,
        address: "421 ave st, Las Vegas, NV, USA",
        price: "0.00",
        time_available: "morning",
        exp: "2021-02-15",
        items: "Bag 2 XL, 3 S",
        date_posted: "2021-02-10"
      },        
      {
        type: "hotel",
        producer_id: 2,
        address: "421 ave st, San Francisco, CA, USA",
        price: "0.00",
        time_available: "evening",
        exp: "2021-02-15",
        items: "Bag 2 XL, 3 S",
        date_posted: "2021-02-10"
      },

      {
        type: "restaurant",
        producer_id: 2,
        address: "123 lane st, Los Angeles, CA, USA",
        price: "0.00",
        time_available: "morning",
        exp: "2021-02-15",
        items: "Bag 2 XL, 3 S",
        date_posted: "2021-02-10"},
        {
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, Los Angeles, CA, USA",
          price: "0.00",
          time_available: "afternoon",
          exp: "2021-02-15",
          items: "Bag 2 XL, 3 S",
          date_posted: "2021-02-10"
        },
        {
          type: "business",
          producer_id: 2,
          address: "421 ave st, Los Angeles, CA, USA",
          price: "0.00",
          time_available: "evening",
          exp: "2021-02-15",
          items: "Bag 2 XL, 3 S",
          date_posted: "2021-02-10"
        },        
        {
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, New York, NY, USA",
          price: "0.00",
          time_available: "afternoon",
          exp: "2021-01-03",
          items: "Bag 2 XL, 3 S",
          date_posted: "2021-02-10"
        },        
        {
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, Colorado Springs, CO, USA",
          price: "0.00",
          time_available: "morning",
          exp: "2021-02-15",
          items: "Bag 2 XL, 3 S",
          date_posted: "2021-02-109"
        },        
        {
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, Louieville, KY, USA",
          price: "0.00",
          time_available: "afternoon",
          exp: "2021-02-15",
          items: "Bag 2 XL, 3 S",
          date_posted: "2021-02-10"
        },        
        {
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, Tucson, AZ, USA",
          price: "0.00",
          time_available: "afternoon",
          exp: "2021-02-15",
          items: "Bag 2 XL, 3 S",
          date_posted: "2021-02-10"
        },        
        {
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, Las Vegas, NV, USA",
          price: "0.00",
          time_available: "morning",
          exp: "2021-02-15",
          items: "Bag 2 XL, 3 S",
          date_posted: "2021-02-10"
        },        
        {
          type: "hotel",
          producer_id: 2,
          address: "421 ave st, San Francisco, CA, USA",
          price: "0.00",
          time_available: "evening",
          exp: "2021-02-15",
          items: "Bag 2 XL, 3 S",
          date_posted: "2021-02-10"
        }
      ]);
};
