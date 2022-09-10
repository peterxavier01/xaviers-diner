import DishOne from "./assets/rest4.jpg";
import DishTwo from "./assets/rest15.jpg";
import DishThree from "./assets/rest8.jpg";
import MealOne from "./assets/rest.jpg";
import MealTwo from "./assets/rest2.jpg";
import MealThree from "./assets/rest3.jpg";
import MealFour from "./assets/rest4.jpg";
import MealFive from "./assets/rest6.jpg";
import MealSix from "./assets/rest7.jpg";
import TestimonialOne from "./assets/customer1.jpg";
import TestimonialTwo from "./assets/customer2.jpg";
import TestimonialThree from "./assets/customer3.jpg";
import TestimonialFour from "./assets/customer4.jpg";
import TestimonialFive from "./assets/customer5.jpg";
import Breakfast from "./assets/breakfast.png";
import Lunch from "./assets/lunch.png";
import Dinner from "./assets/dinner.png";
import Dessert from "./assets/dessert.png";
import ChefOne from "./assets/chef.jpg";
import ChefTwo from "./assets/chef1.jpg";
import ChefThree from "./assets/chef2.jpg";
import BreakOne from "./assets/rest.jpg";
import BreakTwo from "./assets/rest2.jpg";
import BreakThree from "./assets/rest3.jpg";
import BreakFour from "./assets/rest4.jpg";
import BreakFive from "./assets/rest7.jpg";
import BreakSix from "./assets/rest6.jpg";
import LunchOne from "./assets/rest7.jpg";
import LunchTwo from "./assets/rest8.jpg";
import LunchThree from "./assets/rest9.jpg";
import LunchFour from "./assets/rest10.jpg";
import LunchFive from "./assets/rest11.jpg";
import LunchSix from "./assets/rest12.jpg";
import DinnerOne from "./assets/rest13.jpg";
import DinnerTwo from "./assets/rest14.jpg";
import DinnerThree from "./assets/rest15.jpg";
import DinnerFour from "./assets/rest16.jpg";
import DinnerFive from "./assets/rest17.jpg";
import DinnerSix from "./assets/rest.jpg";
import { AiFillStar } from "react-icons/ai";

export const dishes = [
  {
    src: DishOne,
    title: "Cheese burger with tomato",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ut maiores debitis ipsum dolores magni!",
  },
  {
    src: DishTwo,
    title: "Avocado Egg & Vegetables",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ut maiores debitis ipsum dolores magni!",
  },
  {
    src: DishThree,
    title: "Ham Salad Sauce & Red wine",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ut maiores debitis ipsum dolores magni!",
  },
];

export const meals = [
  {
    src: MealOne,
    title: "Tuna Tartare",
    body: "The most exquisite taste in all the world",
  },
  {
    src: MealTwo,
    title: "Prawn Sauce",
    body: "The most exquisite taste in all the world",
  },
  {
    src: MealThree,
    title: "Shrimp Sauce",
    body: "The most exquisite taste in all the world",
  },
  {
    src: MealFour,
    title: "Cheese Burger",
    body: "The most exquisite taste in all the world",
  },
  {
    src: MealFive,
    title: "Pizza al Padellino",
    body: "The most exquisite taste in all the world",
  },
  {
    src: MealSix,
    title: "Chicken Wings",
    body: "The most exquisite taste in all the world",
  },
];

export const testimonials = [
  {
    src: TestimonialOne,
    title: "Shaun Grey",
    body: "The service offered to customers is top-notch and the meals are extremely delicious.",
    rating: <AiFillStar />,
  },
  {
    src: TestimonialTwo,
    title: "Mark Twain",
    body: "The service offered to customers is top-notch and the meals are extremely delicious.",
    rating: <AiFillStar />,
  },
  {
    src: TestimonialThree,
    title: "Bella Black",
    body: "The service offered to customers is top-notch and the meals are extremely delicious.",
    rating: <AiFillStar />,
  },
  {
    src: TestimonialFour,
    title: "Angela Michaels",
    body: "The service offered to customers is top-notch and the meals are extremely delicious.",
    rating: <AiFillStar />,
  },
  {
    src: TestimonialFive,
    title: "Jessica Jones",
    body: "The service offered to customers is top-notch and the meals are extremely delicious.",
    rating: <AiFillStar />,
  },
];

export const links = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/products", title: "Menu" },
  { path: "/contact", title: "Contact" },
];

export const cards = [
  {
    id: 1,
    src: Breakfast,
    title: "Refreshing Breakfast",
    content: "lorem ipsum dolor sit ametcons ecteturadipis icing elit",
  },
  {
    id: 2,
    src: Lunch,
    title: "Amazing Lunch",
    content: "lorem ipsum dolor sit ametcons ecteturadipis icing elit",
  },
  {
    id: 3,
    src: Dinner,
    title: "Delicious Dinner",
    content: "lorem ipsum dolor sit ametcons ecteturadipis icing elit",
  },
  {
    id: 4,
    src: Dessert,
    title: "Soothing Dessert",
    content: "lorem ipsum dolor sit ametcons ecteturadipis icing elit",
  },
];

export const chefs = [
  { src: ChefOne, name: "Jimmy Chang", title: "Head Chef" },
  { src: ChefTwo, name: "John Shinobu", title: "Assistant Chef" },
  { src: ChefThree, name: "Alex Rodrigo", title: "Assistant Chef" },
];

export const breakfast = [
  {
    src: BreakOne,
    title: "French toast",
    body: "The most exquisite taste in all the world",
  },
  {
    src: BreakTwo,
    title: "Breakfast sandwich",
    body: "The most exquisite taste in all the world",
  },
  {
    src: BreakThree,
    title: "Avocado toast",
    body: "The most exquisite taste in all the world",
  },
  {
    src: BreakFour,
    title: "Cheese Burger",
    body: "The most exquisite taste in all the world",
  },
  {
    src: BreakFive,
    title: "Chicken and waffles",
    body: "The most exquisite taste in all the world",
  },
  {
    src: BreakSix,
    title: "pancakes",
    body: "The most exquisite taste in all the world",
  },
];

export const lunch = [
  {
    src: LunchOne,
    title: "Classic hot dog",
    body: "The most exquisite taste in all the world",
  },
  {
    src: LunchTwo,
    title: "Reuben sandwich",
    body: "The most exquisite taste in all the world",
  },
  {
    src: LunchThree,
    title: "Barbeque ribs",
    body: "The most exquisite taste in all the world",
  },
  {
    src: LunchFour,
    title: "Apple pie",
    body: "The most exquisite taste in all the world",
  },
  {
    src: LunchFive,
    title: "Beef jerky",
    body: "The most exquisite taste in all the world",
  },
  {
    src: LunchSix,
    title: "Buffalo Chicken Wings",
    body: "The most exquisite taste in all the world",
  },
];

export const dinner = [
  {
    src: DinnerOne,
    title: "Marcaroni and Cheese",
    body: "The most exquisite taste in all the world",
  },
  {
    src: DinnerTwo,
    title: "Meatloafs",
    body: "The most exquisite taste in all the world",
  },
  {
    src: DinnerThree,
    title: "Fajitas",
    body: "The most exquisite taste in all the world",
  },
  {
    src: DinnerFour,
    title: "Tater tots",
    body: "The most exquisite taste in all the world",
  },
  {
    src: DinnerFive,
    title: "Baked beans",
    body: "The most exquisite taste in all the world",
  },
  {
    src: DinnerSix,
    title: "Grilled cheese sandwich",
    body: "The most exquisite taste in all the world",
  },
];

export const navbarVariants = {
  hidden: {
    y: "-10px",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.2,
    },
  },
};

export const headerVariants = {
  hidden: {
    scale: 0.7,
  },
  visible: {
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const fadeInLeftVariants = {
  hidden: {
    opacity: 0,
    x: "10px",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const fadeInRightVariants = {
  hidden: {
    opacity: 0,
    x: "-10px",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const fadeInVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const fadeInUpVariants = {
  hidden: {
    opacity: 0,
    y: "30px",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
