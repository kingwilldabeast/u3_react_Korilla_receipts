const receipts = [
    {
      id: 1,
      person: 'Jeremy',
      order: {
        main: 'Burrito',
        protein: 'Skirt Steak',
        rice: 'Purple Rice',
        sauce: 'Green Habanero',
        toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
        drink: 'Thai Iced Tea',
        cost: 22,
       isVegetarian: false
      },
      paid: false,
    },
    {
      id: 2,
      person: 'Brittany',
      order: {
        main: 'Rice Bowl',
        protein: 'Ginger Chicken',
        rice: 'Sticky Rice',
        sauce: 'Korilla',
        toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
        drink: 'Korchata',
        cost: 19,
       isVegetarian: false,
      },
      
      paid: false,
    },
    {
      id: 3,
      person: 'Tom',
      order: {
        main: 'Salad Bowl',
        protein: 'Organic Tofu',
        rice: null,
        sauce: "K'lla",
        toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
        drink: 'Sparkling Blood Orange Soda',
        cost: 20,
       isVegetarian: true
      },
      paid: false,
    },
    {
      id: 4,
      person: 'Jessica',
      order: {
        main: 'Burrito Bowl',
        protein: 'Carnitas',
        rice: null,
        sauce: "Jalapeno Honey",
        toppings: ['Grilled Corn', 'Pico De Gallo', 'Guacamole'],
        drink: 'Pineapple Jarritos',
        cost: 23,
      isVegetarian: false
      },
      
      paid: true,
    },
  {
      id: 5,
      person: 'Sophie',
      order: {
        main: 'Burrito Bowl',
        protein: 'Birria',
        rice: 'white rice',
        sauce: "Hot Honey",
        toppings: ['Grilled Corn', 'Mango Salsa', 'Guacamole'],
        drink: 'Tamarind Jarritos',
        cost: 23,
       isVegetarian: false
      },
      
      paid: true,
    },
    {
      id: 6,
      person: 'Frank',
      order: {
        main: 'Taco Bowl',
        protein: 'Barbacoa',
        rice: 'yellow rice',
        sauce: null,
        toppings: null,
        drink: 'Mexican Coca Cola',
        isVegetarian: false,
        cost: 19,
      },
      
      paid: false,
    },
  {
      id: 7,
      person: 'Dennis',
      order: {
        main: 'Burrito Bowl',
        protein: 'Tofu',
        rice: 'white rice',
        sauce: 'jalapeno honey',
        toppings: null,
        drink: null,
        cost: 15,
       isVegetarian: true
      },
      
      paid: false,
    },
  {
      id: 8,
      person: 'Charlie',
      order: {
        main: 'Burrito',
        protein: 'Tofu',
        rice: 'yellow rice',
        sauce: null,
        toppings: ['guacamole', 'pico de gallo', 'red onion'],
        drink: 'lime jarritos',
        isVegetarian: true,
        cost: 18
      },
      
      paid: true,
    },
  {
      id: 9,
      person: 'Mac',
      order: {
        main: 'Taco Bowl',
        protein: 'Carnitas',
        rice: 'Purple rice',
        sauce: 'Red Hot',
        toppings: ['guacamole', 'Pineapple Slaw'],
        drink: null,
        cost: 19,
        isVegetarian: false
      },
     
      paid: false,
    }
  ];

  export default receipts