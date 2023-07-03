const projects = [
  {
    title: 'Shiver Down the Bookspine',
    image: './assets/projects/bookdetail.png',
    badge:
      'https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white',
    github: 'https://github.com/BiceSchembri/shiver-down-the-bookspine',
    description:
      'Laravel web application. A collection of books and authors created by the admin. Users can register to post comments.',
    features:
      'CRUD flow * MVC structure * Eloquent relationships * Authentication * Authorization',
  },
  {
    title: 'Tattoo E-Shop',
    image: './assets/projects/api-products.png',
    badge:
      'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
    github: 'https://github.com/BiceSchembri/express-API-tattoo',
    description:
      "Backend for a web application build with Node.js and Express. Collection of tattoos posted by the admin. Users can publish posts and comment under other users's posts.",
    features:
      'CRUD flow * API - JSON data * Dynamic routes * JWT password authentication * Middlewares',
  },
  {
    title: 'JavaScript Games',
    image: './assets/projects/rock-paper-scissors.png',
    badge:
      'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
    github: 'https://github.com/BiceSchembri/javascript-games',
    description:
      'Simple games written in JavaScript: a number guessing game, and a game of rock-paper-scissors with animated GIFs.',
    features: 'DOM Manipulation * Events * Randomized choice',
  },
];

export default projects;
