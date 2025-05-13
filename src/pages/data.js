import img1 from "../assets/Lash.jpg";
import img2 from "../assets/Eyeshadow.jpg";
import img3 from "../assets/Powder.jpg";
import img4 from "../assets/Polish.jpg";
import img5 from "../assets/Lipstik.jpg";
import img6 from "../assets/Dior.jpg";
import img7 from "../assets/Coco.jpg";
import img8 from "../assets/Gucci.jpg";
import img9 from "../assets/Bed.jpg";
import img10 from "../assets/Sofa.jpg";
import img11 from "../assets/Table.jpg";
import img12 from "../assets/Knoll.jpg";
import img13 from "../assets/Apple.jpg";
import img14 from "../assets/SinkMirror.jpg";
import img15 from "../assets/Beef.jpg";
import img16 from "../assets/CatFood.jpg";
import img17 from "../assets/Oil.jpg";
import img18 from "../assets/Cucumber.jpg";
import img19 from "../assets/DogFood.jpg";
import img20 from "../assets/Eggs.jpg";
import img21 from "../assets/Pepper.jpg";
import img22 from "../assets/ChilliPepper.jpg";
import img23 from "../assets/Honey.jpg";
import img24 from "../assets/IceCream.jpg";
import img25 from "../assets/Kiwi.jpg";
import img26 from "../assets/Lemon.jpg";
import img27 from "../assets/MulBerry.jpg";
import img28 from "../assets/Potatoes.jpg";
import img29 from "../assets/Tissue.jpg";
const products = [
  {
    id: 1,
    name: "Knoll Saarinen Executive Conference...",
    image: img12,
    oldprice: 500.84,
    price: 423.84,
    inStock: true,
    rating: "4",
    Brand: "Knoll",
    Category: "furniture",
    Stock: "47",
    About:
      "The Knoll Saarinen Executive Conference Chair is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },

  {
    id: 2,
    name: "Eyeshadow Palette with mirror",
    image: img2,
    oldprice: 25.89,
    price: 18.89,
    inStock: true,
    rating: "3.1",
    Brand: "Glamour Beauty",
    Category: "beauty",
    Stock: "44",
    About:
      "The Eyeshadow Palette with Mirror is the perfect blend of convenience and style. It offers a versatile selection of shades that can elevate any makeup look. With its compact design, it is easy to carry wherever you go. The built-in mirror allows for effortless touch-ups on the go. Ideal for both beginners and makeup enthusiasts, it provides endless possibilities for creative looks. The sleek and elegant packaging adds a touch of luxury to your beauty routine. This palette is a must-have for anyone who loves to experiment with colors.",
  },
  {
    id: 3,
    name: "Poweder Canister",
    image: img3,
    oldprice: 16.27,
    price: 12.27,
    inStock: true,
    rating: "3",
    Brand: "Valvent Touch",
    Category: "beauty",
    Stock: "59",
    About:
      "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 4,
    name: "Red Nail Polish",
    image: img4,
    oldprice: 13.77,
    price: 8.77,
    inStock: true,
    rating: "3",
    Brand: "Nail Couture",
    Category: "beauty",
    Stock: "71",
    About:
      "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors",
  },
  {
    id: 5,
    name: "Red Lipstik",
    image: img5,
    oldprice: 14.52,
    price: 10.52,
    inStock: true,
    rating: "2",
    Brand: "Chic Cosmetics",
    Category: "beauty",
    Stock: "68",
    About:
      "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 6,
    name: "Dior Jadore",
    image: img6,
    oldprice: 90.3,
    price: 74.3,
    inStock: true,
    rating: "3",
    Brand: "Dior",
    Category: "fragrances",
    Stock: "91",
    About:
      "J`adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 7,
    name: "Chanel Coco Noir Eau de ",
    image: img7,
    oldprice: 130.76,
    price: 105.76,
    inStock: true,
    rating: "2",
    Brand: "chanel",
    Category: "fragrances",
    Stock: "41",
    About:
      "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 8,
    name: "Gucci Bloom Eau de",
    image: img8,
    oldprice: 90.87,
    price: 72.87,
    inStock: true,
    rating: "2",
    Brand: "Gucci",
    Category: "fragrances",
    Stock: "93",
    About:
      "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It`s a modern and romantic scent. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },

  {
    id: 9,
    name: "Annibale Colombo Bed",
    image: img9,
    oldprice: 900.99,
    price: 799.99,
    inStock: true,
    rating: "4",
    Brand: "Annibale Colombo",
    Category: "furniture",
    Stock: "47",
    About:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 10,
    name: "Annibale Colombo Sofa",
    image: img10,
    oldprice: 990.99,
    price: 899.99,
    inStock: true,
    rating: "3",
    Brand: "Annibale Colombo",
    Category: "furniture",
    Stock: "16",
    About:
      "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 11,
    name: "Bedside Table African Cherry",
    image: img11,
    oldprice: 400.25,
    price: 271.25,
    inStock: true,
    rating: "4",
    Brand: "Furniture Co.",
    Category: "furniture",
    Stock: "16",
    About:
      "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 12,
    name: "Essence Mascara Lash Princess",
    image: img1,
    oldprice: 12.27,
    price: 9.27,
    inStock: true,
    rating: "3",
    Brand: "Essence",
    Category: "beauty",
    Stock: "5",
    About:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 13,
    name: "Apple",
    image: img13,
    oldprice: 3.95,
    price: 1.95,
    inStock: true,
    rating: "2",
    Brand: "Apple",
    Category: "groceries",
    Stock: "9",
    About:
      "Fresh and crisp apples, perfect for snacking or incorporating into various recipes. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 14,
    name: "Wooden Bathroom Sink With Mirror",
    image: img14,
    oldprice: 800.23,
    price: 710.23,
    inStock: true,
    rating: "3",
    Brand: "Bath Trends",
    Category: "furniture",
    Stock: "95",
    About:
      "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 15,
    name: "Beaf Steak",
    image: img15,
    oldprice: 15.65,
    price: 10.65,
    inStock: true,
    rating: "2",
    Brand: "Beef",
    Category: "groceries",
    Stock: "96",
    About:
      "High-quality beef steak, great for grilling or cooking to your preferred level of doneness. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 16,
    name: "Cat Food",
    image: img16,
    oldprice: 10.13,
    price: 8.13,
    inStock: true,
    rating: "2",
    Brand: "Food",
    Category: "groceries",
    Stock: "13",
    About:
      "Nutritious cat food formulated to meet the dietary needs of your feline friend. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 17,
    name: "Cooking Oil",
    image: img17,
    oldprice: 8.05,
    price: 4.05,
    inStock: true,
    rating: "4",
    Brand: "Cooking",
    Category: "groceries",
    Stock: "22",
    About:
      "Versatile cooking oil suitable for frying, sautéing, and various culinary applications. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 18,
    name: "Cucumber",
    image: img18,
    oldprice: 3.32,
    price: 1.32,
    inStock: true,
    rating: "4",
    Brand: "Cucumber",
    Category: "groceries",
    Stock: "22",
    About:
      "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 19,
    name: "Dog Food",
    image: img19,
    oldprice: 12.99,
    price: 9.99,
    inStock: true,
    rating: "2.74",
    Brand: "Foods",
    Category: "groceries",
    Stock: "40",
    About:
      "Specially formulated dog food designed to provide essential nutrients for your canine companion. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 20,
    name: "Eggs",
    image: img20,
    oldprice: 4.82,
    price: 2.82,
    inStock: true,
    rating: "4.46",
    Brand: "Foods",
    Category: "groceries",
    Stock: "10",
    About:
      "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 21,
    name: "Green Bell Pepper",
    image: img21,
    oldprice: 3.09,
    price: 1.09,
    inStock: true,
    rating: "4.28",
    Brand: "Foods",
    Category: "groceries",
    Stock: "89",
    About:
      "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 22,
    name: "Green Chili Pepper",
    image: img22,
    oldprice: 1.82,
    price: 0.82,
    inStock: true,
    rating: "4.43",
    Brand: "Foods",
    Category: "groceries",
    Stock: "8",
    About:
      "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 23,
    name: "Honey Jar",
    image: img23,
    oldprice: 9.86,
    price: 6.86,
    inStock: true,
    rating: "3.35",
    Brand: "Foods",
    Category: "groceries",
    Stock: "25",
    About:
      "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 24,
    name: "Ice Cream",
    image: img24,
    oldprice: 7.07,
    price: 5.07,
    inStock: true,
    rating: "3.77",
    Brand: "Foods",
    Category: "groceries",
    Stock: "76",
    About:
      "Creamy and delicious ice cream, perfect for satisfying your sweet tooth. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 25,
    name: "Kiwi",
    image: img25,
    oldprice: 3.23,
    price: 2.23,
    inStock: true,
    rating: "4.37",
    Brand: "Foods",
    Category: "groceries",
    Stock: "12",
    About:
      "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 26,
    name: "Lemon",
    image: img26,
    oldprice: 1.65,
    price: 0.65,
    inStock: true,
    rating: "5.00",
    Brand: "Foods",
    Category: "groceries",
    Stock: "37",
    About:
      "Juicy and tangy lemon, perfect for adding a zesty flavor to your dishes. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 27,
    name: "Mulberry",
    image: img27,
    oldprice: 5.17,
    price: 4.17,
    inStock: true,
    rating: "4.25",
    Brand: "Foods",
    Category: "groceries",
    Stock: "79",
    About:
      "Sweet and juicy mulberries, perfect for snacking or adding to desserts and cereals. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 28,
    name: "Potatoes",
    image: img28,
    oldprice: 4.09,
    price: 2.09,
    inStock: true,
    rating: "3.20",
    Brand: "Foods",
    Category: "groceries",
    Stock: "8",
    About:
      "Versatile and starchy potatoes, great for roasting, mashing, or as a side dish. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  },
  {
    id: 29,
    name: "Tissue Papper Box",
    image: img29,
    oldprice: 2.61,
    price: 1.61,
    inStock: true,
    rating: "4.10",
    Brand: "Foods",
    Category: "groceries",
    Stock: "51",
    About:
      "Sweet and juicy mulberries, perfect for snacking or adding to desserts and cereals. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.",
  }
];

export default products;
