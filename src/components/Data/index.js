const products = [
  {
    id: 1,
    name: "Veg Biryani",
    description: "yum",
    price: 200,
    discount: "10%OFF",
    resturant: "empire",
    gender: "men",
    type:"veg",
    img: "https://4.imimg.com/data4/JS/HP/MY-35740180/mutton-biryani-500x500.jpg",
    inCart: false
    
  },
  {
    id: 2,
    name: "NonVeg Starters",
    description: "yum",
    price: 250,
    discount: "15%OFF",
    resturant: "empire",
    gender: "women",
    type:"veg",
    img: "https://blog.railrestro.com/wp-content/uploads/2020/07/Non-veg-starters-1.jpg",
    inCart: false
    
  },
  {
    id: 3,
    name: "Mutton Stew",
    description: "yum",
    price: 299,
    discount: "20%OFF",
    resturant: "empire",
    gender: "men",
    type:"veg",
    img: "https://4.imimg.com/data4/XO/FT/MY-35740180/mutton-stew-500x500.jpg",
    inCart: false
    
  },
  {
    id: 4,
    name: "Veg Fried Rice",
    description: "yum",
    price: 200,
    discount: "10%OFF",
    resturant: "empire",
    gender: "men",
    type:"veg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXh0M2lcFVEEZUY11wEv8Up-IftnGAsea5-Q&usqp=CAU",
    inCart: false
    
  },
  {
    id: 5,
    name: "Chicken Kurma",
    description: "yum",
    price: 300,
    discount: "20%OFF",
    resturant: "empire",
    gender: "men",
    type:"veg",
    img: "https://4.imimg.com/data4/TH/PX/MY-35740180/chicken-qorma-500x500.jpg",
    inCart: false
    
  },
  {
    id: 6,
    name: "Gobhi Rice",
    description: "yum",
    price: 200,
    discount: "15%OFF",
    resturant: "empire",
    gender: "men",
    type:"veg",
    img: "https://4.imimg.com/data4/TH/PX/MY-35740180/chicken-qorma-500x500.jpg",
    inCart: false
    
  },
  {
    id: 7,
    name: "Gobhi Aloo",
    description: "yum",
    price: 150,
    discount: "20%OFF",
    resturant: "empire",
    gender: "men",
    type:"veg",
    img: "https://www.geetakiduniya.com/wp-content/uploads/2021/02/aloo-gobi.jpg",
    inCart: false
    
  },
  {
    id: 8,
    name: "Chicken Stew",
    description: "yum",
    price: 299,
    discount: "15%OFF",
    resturant: "empire",
    gender: "men",
    type:"veg",
    img: "https://4.imimg.com/data4/DV/RR/MY-35740180/chicken-biryani-500x500.jpg",
    inCart: false
    
  },
  {
    id: 9,
    name: "Paneer Kurchan",
    description: "yum",
    price: 150,
    discount: "10%OFF",
    resturant: "empire",
    gender: "men",
    type:"veg",
    img: "https://c.ndtvimg.com/2020-07/1lm82rsg_paneer-tiffin_625x300_29_July_20.jpg",
    inCart: false
    
  },
  {
    id: 10,
    name: "Chicken Curry",
    description: "yum",
    price: 200,
    discount: "20%OFF",
    resturant: "atria",
    gender: "men",
    type:"veg",
    img: "https://media.istockphoto.com/photos/indian-chicken-curry-picture-id471614507?k=20&m=471614507&s=612x612&w=0&h=snprycYKdTlsTn9vDNuFkWVPv-mwwRJoz2UidfhKvwQ=",
    inCart: false
    
  },
  {
    id: 11,
    name: "Masala Dosa",
    description: "yum",
    price: 100,
    discount: "20%OFF",
    resturant: "atria",
    gender: "men",
    type:"veg",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/0b/ab/53/22/saravana-pure-veg-south.jpg",
    inCart: false
    
  },
  {
    id: 12,
    name: "Malai Kofta",
    description: "yum",
    price: 150,
    discount: "15%OFF",
    resturant: "atria",
    gender: "men",
    type:"veg",
    img: "https://www.thespruceeats.com/thmb/g_qSl37HLBa_w5aHWotMzxZJi44=/4494x3000/filters:no_upscale():max_bytes(150000):strip_icc()/malai-kofta-vege-balls-in-a-thick-sauce-1957964_hero-01-474bc099313944668d3b2c68b88549d5.jpg",
    inCart: false
    
  },
  {
    id: 13,
    name: "Baked Samosa",
    description: "yum",
    price: 100,
    discount: "10%OFF",
    resturant: "atria",
    gender: "men",
    type:"veg",
    img: "https://www.thespruceeats.com/thmb/_3Ui6lMP7GXiYK2o2GmOMgzsLnA=/566x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/quick-and-easy-baked-vegetarian-samosas-3377863-hero-01-2847c412661144d686bfa4d123232109.jpg",
    inCart: false
    
  },
  {
    id: 14,
    name: "Bhatura ",
    description: "yum",
    price: 150,
    discount: "20%OFF",
    resturant: "atria",
    gender: "men",
    type:"veg",
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2010/06/bhatura-recipe-280x280.jpg",
    inCart: false
    
  },
  {
    id: 15,
    name: "Tomato Soup",
    description: "yum",
    price: 120,
    discount: "10%OFF",
    resturant: "atria",
    gender: "men",
    type:"veg",
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/tomato-soup-recipe-280x280.jpg",
    inCart: false
   
  },
  {
    id: 16,
    name: "Dal Khichidi",
    description: "yum",
    price: 140,
    discount: "15%OFF",
    resturant: "atria",
    gender: "men",
    type:"veg",
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/02/khichdi-recipe-1-280x280.jpg",
    inCart: false
   
  },
  {
    id: 17,
    name: "Dahi Vada",
    description: "yum",
    price: 70,
    discount: "12%OFF",
    resturant: "atria",
    gender: "men",
    type:"veg",
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/01/dahi-vada-280x280.jpg",
    inCart: false
   
  },
  {
    id: 18,
    name: "Hara Bhara Kabab",
    description: "yum",
    price: 180,
    discount: "15%OFF",
    resturant: "atria",
    gender: "men",
    type:"veg",
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2013/01/hara-bhara-kabab-2-280x280.jpg",
    inCart: false
    
  },
  {
    id: 19,
    name: "Milk Cake",
    description: "yum",
    price: 100,
    discount: "15%OFF",
    resturant: "a2b",
    gender: "men",
    type:"veg",
    img: "https://cdn.urbanpiper.com/media/bizmedia/l/2021/07/14/baby_milk_cake_COMPRESSED.jpg?width=300",
    inCart: false
  },
  {
    id: 20,
    name: "Chocolate Burfi",
    description: "yum",
    price: 140,
    discount: "15%OFF",
    resturant: "a2b",
    gender: "men",
    type:"veg",
    img: "https://cdn.urbanpiper.com/media/bizmedia/l/2021/07/14/chocolate_burfi_COMPRESSED.jpg?width=300",
    inCart: false
  },
  {
    id: 21,
    name: "Malai Peda",
    description: "yum",
    price: 80,
    discount: "15%OFF",
    resturant: "a2b",
    gender: "men",
    type:"veg",
    img: "https://cdn.urbanpiper.com/media/bizmedia/l/2021/07/23/Malai_Peda_COMPRESSED.jpg?width=300",
    inCart: false
  },
  {
    id: 22,
    name: "Shon Halwa",
    description: "yum",
    price: 110,
    discount: "15%OFF",
    resturant: "a2b",
    gender: "men",
    type:"veg",
    img: "https://cdn.urbanpiper.com/media/bizmedia/l/2021/07/14/soan_halwa_COMPRESSED.jpg?width=300",
    inCart: false
  },
  {
    id: 23,
    name: "Spl Laddu",
    description: "yum",
    price: 140,
    discount: "15%OFF",
    resturant: "a2b",
    gender: "men",
    type:"veg",
    img: "https://cdn.urbanpiper.com/media/bizmedia/l/2021/07/14/spl_laddu_COMPRESSED.jpg?width=300",
    inCart: false
  },
  {
    id: 24,
    name: "Ajmeer Cake",
    description: "yum",
    price: 180,
    discount: "15%OFF",
    resturant: "a2b",
    gender: "men",
    type:"veg",
    img: "https://cdn.urbanpiper.com/media/bizmedia/l/2021/09/30/AJMEER_CAKE_COMPRESSED.png?width=300",
    inCart: false
  },
  {
    id: 25,
    name: "White Soan Papdi",
    description: "yum",
    price: 160,
    discount: "15%OFF",
    resturant: "a2b",
    gender: "men",
    type:"veg",
    img: "https://cdn.urbanpiper.com/media/bizmedia/l/2021/07/26/W._Soan_Papdi_COMPRESSED.jpg?width=300",
    inCart: false
  },
  {
    id: 26,
    name: "Dry Fruit Halwa",
    description: "yum",
    price: 180,
    discount: "15%OFF",
    resturant: "a2b",
    gender: "men",
    type:"veg",
    img: "https://cdn.urbanpiper.com/media/bizmedia/l/2021/07/26/Dry_Fruit_Halwa_COMPRESSED.jpg?width=300",
    inCart: false
  },
  {
    id: 27,
    name: "Chocolate Chip Cookies",
    description: "yum",
    price: 90,
    discount: "15%OFF",
    resturant: "a2b",
    gender: "men",
    type:"veg",
    img: "https://cdn.urbanpiper.com/media/bizmedia/l/2021/07/23/Chocolate_Chip_Cookie_COMPRESSED_COMPRESSED.jpg?width=300",
    inCart: false
  },
  {
    id: 28,
    name: "Bacon Egg and Cheese Bsicuit",
    description: "yum",
    price: 80,
    discount: "15%OFF",
    resturant: "mcdonalds",
    gender: "men",
    type:"veg",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Bacon-Egg-Cheese-Biscuit-Regular-Size-Biscuit-1:1-4-product-tile-desktop",
    inCart: false
  },
  {
    id: 29,
    name: "Fruit and Mapple Oatmeal",
    description: "yum",
    price: 130,
    discount: "15%OFF",
    resturant: "mcdonalds",
    gender: "men",
    type:"veg",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Fruit-Maple-Oatmeal-1:1-4-product-tile-desktop",
    inCart: false
  },
  {
    id: 30,
    name: "Cheeseburger",
    description: "yum",
    price: 160,
    discount: "15%OFF",
    resturant: "mcdonalds",
    gender: "men",
    type:"veg",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Cheeseburger-1:1-4-product-tile-desktop",
    inCart: false
  },
  {
    id: 31,
    name: "Hamburger",
    description: "yum",
    price: 180,
    discount: "15%OFF",
    resturant: "mcdonalds",
    gender: "men",
    type:"veg",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Hamburger:1-4-product-tile-desktop",
    inCart: false
  },
  {
    id: 32,
    name: "Spicy Crispy Chicken Sandwich",
    description: "yum",
    price: 210,
    discount: "15%OFF",
    resturant: "mcdonalds",
    gender: "men",
    type:"veg",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-spicy-crispy-chicken-sandwich:1-4-product-tile-desktop",
    inCart: false
  },
  {
    id: 33,
    name: "Chicken McNuggets",
    description: "yum",
    price: 180,
    discount: "15%OFF",
    resturant: "mcdonalds",
    gender: "men",
    type:"veg",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Chicken-McNuggets-4pc-1:1-4-product-tile-desktop",
    inCart: false
  },
  {
    id: 34,
    name: "Hamburger Happy Meal",
    description: "yum",
    price: 280,
    discount: "15%OFF",
    resturant: "mcdonalds",
    gender: "men",
    type:"veg",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Hamburger:1-4-product-tile-desktop",
    inCart: false
  },
  {
    id: 35,
    name: "Cheesebuerger Combo Meal",

    description: "yum",
    price: 260,
    discount: "15%OFF",
    resturant: "mcdonalds",
    gender: "men",
    type:"veg",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-2-Cheeseburger-Extra-Value-Meals:1-4-product-tile-desktop",
    inCart: false
  },
  {
    id: 36,
    name: "Big Mac Combo Meal",
    description: "yum",
    price: 270,
    discount: "15%OFF",
    resturant: "mcdonalds",
    gender: "men",
    type:"veg",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Big-Mac-Extra-Value-Meals:1-4-product-tile-desktop",
    inCart: false
  },


];

export default products;

