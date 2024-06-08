# portfolio
# My Portfolio

Welcome to my portfolio! This project showcases my work as a Full Stack Software Engineer, including my skills, projects, and ways to contact me.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This portfolio website is built using Vue.js and showcases my projects and skills as a Full Stack Software Engineer. The site includes sections such as About Me, Portfolio, and a Contact Form.

## Features

- Responsive design
- Interactive navigation
- Project showcase
- Contact form
- Deployment using GitHub Pages

## Technologies Used

- Vue.js
- Vue Router
- Axios
- Bootstrap Vue
- Tailwind CSS
- Nodemailer
- SendGrid

## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine
- Vue CLI installed globally (optional)

### Steps

1. Clone the repository

```bash
git clone https://github.com/adilshads/myPortfolio.git
cd myPortfolio

2. npm install

3. 
'''
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/myPortfolio/' : '/'
}
'''

4. Usage

    To run the project locally, use the following command:

    npm run serve

    This will start the development server and you can view the application in your browser at http://localhost:8080.
 
5. Deploying to GitHub Pages
   
   To deploy the project to GitHub Pages, use the following command:

   npm run deploy

   This will build the project and push the contents of the dist directory to the gh-pages branch of your repository.

Project Structure

portfolio
├── node_modules
├── public
│   ├── index.html
├── src
│   ├── assets
│   │   ├── profile-picture.jpg
│   │   ├── tech-illustration.png
│   ├── components
│   │   ├── AppHeader.vue
│   │   ├── ProfileSection.vue
│   │   ├── MainContent.vue
│   │   ├── Home.vue
│   │   ├── Portfolio.vue
│   │   ├── AboutMe.vue
│   │   ├── Miscellaneous.vue
│   ├── App.vue
│   ├── main.js
│   ├── router
│   │   └── index.js
├── .gitignore
├── babel.config.js
├── package.json
├── README.md
└── vue.config.js

Contact

Adil Shad - adilshads15@gmail.com

Project Link: https://github.com/adilshads/myPortfolio

Thank you for visiting my portfolio! Feel free to reach out if you have any questions or feedback.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
