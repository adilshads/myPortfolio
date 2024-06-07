import tenmo from '@/assets/background.jpg';
import vendingMachine from '@/assets/background.jpg';
import libraryScreenShot from '@/assets/libraryScreenShot.png';
import ticTacToeScreenShot from '@/assets/ticTacToeScreenShot.png';
import adminDashboardScreenShot from '@/assets/adminDashboardScreenShot.png';
import signUpFormScreenShot from '@/assets/signUpScreenShot.png';
import calculatorScreenShot from '@/assets/calculatorScreenShot.png';
import etchASketchScreenShot from '@/assets/etchASketchScreenShot.png';
import rockPaperScissorsScreenShot from '@/assets/rockPaperScissorsScreenShot.png';
import landingPageScreenShot from '@/assets/landingPageScreenShot.png';

export const projects = [
  {
    id: 1,
    title: 'Payment Service (TEnmo)',
    description: 'Created an online payment service allowing users to transfer TE Bucks between friends, complete with user registration, authentication, and transaction management.',
    technologies: 'Java, SQL, Spring Boot, Jdbc Template, Model Classes',
    link: 'https://github.com/yourusername/tenmo',
    imageUrl: tenmo
  },
  {
    id: 2,
    title: 'Vending Machine',
    description: 'Developed a vending machine application featuring inventory management, money input management, purchase flow, and transaction logging. This project utilized modular and testable classes, integrated CSV, and a user-friendly interface.',
    technologies: 'Java, CSV parsing, Object-Oriented Design, GitLab',
    link: 'https://github.com/yourusername/vending-machine',
    imageUrl: vendingMachine
  },
  {
    id: 3,
    title: 'Library',
    description: 'Built an application enabling users to manage their books, movies, TV shows, and podcast collections. Integrated with CI/CD processes and implemented Google Analytics for monitoring user interactions and website traffic.',
    technologies: 'JavaScript, HTML, CSS, CI/CD, GitHub Actions, Google Analytics',
    link: 'https://github.com/yourusername/library',
    imageUrl: libraryScreenShot
  },
  {
    id: 4,
    title: 'Tic-Tac-Toe',
    description: 'I am excited to share a web-based Tic-Tac-Toe game that provides an interactive gaming experience directly in your browser. This project showcases development of the game itself and incorporates testing methodologies and analytics to enhance the overall quality and user experience.',
    technologies: 'HTML, CSS, JavaScript, Google Analytics',
    link: 'https://github.com/adilshads/tic-tac-toe',
    imageUrl: ticTacToeScreenShot
  },
  {
    id: 5,
    title: 'Admin Dashboard',
    description: 'My Admin Dashboard is a web-based project management and collaboration tool that leverages HTML, CSS, it establishes the completed front end portion of an admin dashboard.',
    technologies: 'HTML, CSS, JavaScript, Font Awesome, GitHub Actions',
    link: 'https://github.com/adilshads/adminDashboard',
    imageUrl: adminDashboardScreenShot
  },
  {
    id: 6,
    title: 'Sign-up Form',
    description: 'Sign up users to an online account. Our sign-up form utilizes client-side validation and password strength display to ensure the integrity of user data.',
    technologies: 'HTML, CSS, JavaScript, Google Analytics',
    link: 'https://adilshads.github.io/signUpForm/index.html',
    imageUrl: signUpFormScreenShot
  },
  {
    id: 7,
    title: 'Calculator',
    description: 'This project was built using HTML, CSS, JavaScript, DOM manipulation, and implements testing strategies utilizing Jest for automated testing.',
    technologies: 'HTML, CSS, JavaScript, Jest, Google Analytics',
    link: 'https://github.com/adilshads/calculator',
    imageUrl: calculatorScreenShot
  },
  {
    id: 8,
    title: 'Etch-a-Sketch: Space Exploration',
    description: 'The project is built with HTML, CSS, and JavaScript, where I utilized these languages to create a captivating and interactive application.',
    technologies: 'HTML, CSS, JavaScript, DOM Manipulation, Google Analytics',
    link: 'https://adilshads.github.io/etchASketch/',
    imageUrl: etchASketchScreenShot
  },
  {
    id: 9,
    title: 'Rock Paper Scissors',
    description: 'I developed a web-based game: "Rock Paper Scissors" using HTML, CSS, and JavaScript.',
    technologies: 'HTML, CSS, JavaScript, Google Analytics',
    link: 'https://adilshads.github.io/rockPaperScissors/',
    imageUrl: rockPaperScissorsScreenShot
  },
  {
    id: 10,
    title: 'Landing Page',
    description: 'Exciting Travel Destinations - Landing Page Project aims to provide a visually appealing and informative landing page for travel enthusiasts.',
    technologies: 'HTML, CSS, Google Analytics',
    link: 'https://adilshads.github.io/landing-page/',
    imageUrl: landingPageScreenShot
  }
];