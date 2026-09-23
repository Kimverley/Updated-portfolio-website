/* =========================================================================
   Kimverley Herrera — Portfolio interactivity
   All project data lives in one array of objects (`projects`) and every
   page renders its cards from it, so adding a new project only ever means
   adding one object here.
   ========================================================================= */

const projects = [
  { id: "flashcard", title: "Flashcard", img: "image/flashcard.png", desc: "CSS and JS dynamically rotate flashcards on click, built to make studying less boring.", link: "https://kimverley.github.io/Flashcard/", category: "layout", featured: true },
  { id: "employee-search", title: "Employee Search", img: "image/employee.png", desc: "Vanilla JS showcasing different use cases for array search methods.", link: "https://kimverley.github.io/Employee_search/", category: "tool", featured: true },
  { id: "budget-planner", title: "Budget Planner", img: "image/budget.png", desc: "A vanilla JavaScript app for building and tracking a budgeting plan.", link: "https://kimverley.github.io/budget-planner/", category: "tool", featured: true },
  { id: "grade-checker", title: "Student Grade Checker", img: "image/student.png", desc: "Single-page student portal built with HTML & CSS.", link: "https://kimverley.github.io/dashboard/", category: "tool", featured: false },
  { id: "blog-page", title: "Blog Page", img: "image/grid.png", desc: "A simple, responsive blog magazine layout built with CSS Grid.", link: "https://kimverley.github.io/magazine/", category: "layout", featured: false },
  { id: "photo-collage", title: "Photo Collage", img: "image/gridmonkey.png", desc: "A responsive image gallery app built with CSS Grid properties.", link: "https://kimverley.github.io/images/", category: "layout", featured: false },
  { id: "html-forms", title: "HTML Forms", img: "image/formhtml.png", desc: "A responsive HTML form for creating an account and signing up an email.", link: "https://kimverley.github.io/Contact-form/", category: "layout", featured: false },
  { id: "voting-app", title: "Voting App", img: "image/poll.png", desc: "Simple JavaScript voting app with live user interaction.", link: "https://kimverley.github.io/voting/", category: "tool", featured: false },
  { id: "event-speaker", title: "Event Speaker", img: "image/employeecard.png", desc: "A simple object-array use case modeled with JavaScript.", link: "https://kimverley.github.io/Event-Speaker/", category: "layout", featured: false },
  { id: "task-manager", title: "Task Manager", img: "image/taskmanage.png", desc: "A vanilla JavaScript app for adding, editing, and deleting tasks.", link: "https://kimverley.github.io/Task-Manager/", category: "tool", featured: false },
  { id: "guessing-number", title: "Guessing Number", img: "image/guessnum.png", desc: "JavaScript generates a random number; the player guesses with high/low hints.", link: "https://kimverley.github.io/Guess-Number/", category: "game", featured: false },
  { id: "calculator", title: "Calculator", img: "image/calc.png", desc: "A JavaScript calculator that performs basic arithmetic operations.", link: "https://kimverley.github.io/Calculator/", category: "tool", featured: false },
  { id: "length-calc", title: "Length Unit Calculator", img: "image/unitconvert.png", desc: "Converts length units using formula-based mathematical ratios.", link: "https://kimverley.github.io/Length-Calc/", category: "tool", featured: false },
  { id: "expense-tracker", title: "Expense Tracker", img: "image/expensetrack.png", desc: "A vanilla JS project that helps you add, delete, and edit expenses.", link: "https://kimverley.github.io/Expense-Tracker/", category: "tool", featured: false },
  { id: "text-formatter", title: "Text Formatter", img: "image/textform.png", desc: "Vanilla JS that manipulates input strings, applying styles and formatting.", link: "https://kimverley.github.io/text-format/", category: "tool", featured: false },
  { id: "book-manager", title: "Book Manager System", img: "image/bookmanager.png", desc: "Manipulates the DOM to add and remove books from an array-backed shelf.", link: "https://kimverley.github.io/book-manager/", category: "tool", featured: false },
  { id: "eta-calc", title: "ETA Calculator", img: "image/eta.png", desc: "A vanilla JS script that calculates remaining time based on progress.", link: "https://kimverley.github.io/ETA-calculator/", category: "tool", featured: false },
  { id: "age-calc", title: "Age Calculator", img: "image/age.png", desc: "A simple web-based tool that calculates exact age from a date input.", link: "https://kimverley.github.io/Age-calculator/", category: "tool", featured: false },
  { id: "transition-card", title: "Transition Card", img: "image/cardflip.png", desc: "An interactive card-flip effect built with vanilla JavaScript and CSS.", link: "https://kimverley.github.io/card/", category: "layout", featured: false },
  { id: "memory-game", title: "Memory Game", img: "image/emoji-2d.png", desc: "A JS 2D grid memory game that matches emojis pulled from an array.", link: "https://kimverley.github.io/Memory_Game/", category: "game", featured: false },
  { id: "seating-chart", title: "Seating Chart", img: "image/seatingchart.png", desc: "A JS 2D array seating chart used to assign and remove names.", link: "https://kimverley.github.io/Seating-Chart/", category: "tool", featured: false },
  { id: "array-collage", title: "Array Collage", img: "image/monkey-2d.png", desc: "A JS array collage that displays multiple pictures in a grid layout.", link: "https://kimverley.github.io/2d-Array-Collage/", category: "layout", featured: false },
  { id: "ecommerce", title: "Ecommerce Webpage", img: "image/eccommerce.png", desc: "An e-commerce webpage mockup using vanilla JS, HTML, and CSS.", link: "https://kimverley.github.io/Tech-Ecommerce-webPage/", category: "layout", featured: false },
  { id: "wack-a-monkey", title: "Wack-A-Monkey", img: "image/Wack-A-Monkey.png", desc: "My first ever game, built using only vanilla JS and HTML.", link: "https://kimverley.github.io/Wack-A-Monkey/", category: "game", featured: false },
  { id: "tic-tac-toe", title: "Tic-Tac-Toe", img: "image/tic-tac-toe.png", desc: "Two players alternate marking a 3x3 grid to get three in a row.", link: "https://kimverley.github.io/tic-tac-toe/", category: "game", featured: false },
  { id: "pizza-delivery", title: "Pizza Delivery App", img: "image/pizza-delivery.png", desc: "A mock delivery app built to practice timers and intervals in JS.", link: "https://kimverley.github.io/Pizza-delivery/", category: "game", featured: false },
  { id: "json-project", title: "JSON Project", img: "image/JSON.png", desc: "A use case for JSON data, modeled around a car garage.", link: "https://kimverley.github.io/json/", category: "tool", featured: false },
];

const categoryLabels = {
  all: "All",
  tool: "Tools",
  game: "Games",
  layout: "Layouts",
};

const categoryDot = {
  tool: "#1f9d5a",
  game: "#f2ac2e",
  layout: "#6b3fa0",
};

/* ---------- render a set of project cards into a container ---------- */
function renderProjects(containerId, list) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = list
    .map(
      (p) => `
      <div class="project-card" data-category="${p.category}">
        <div class="card-tab">
          <span class="file-dot" style="background:${categoryDot[p.category]}"></span>
          ${p.id}.js
        </div>
        <img src="${p.img}" alt="${p.title} preview" loading="lazy">
        <div class="card-body">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <a class="card-link" href="${p.link}" target="_blank" rel="noopener">View project →</a>
        </div>
      </div>`
    )
    .join("");
}

/* ---------- highlighted work on the home page ---------- */
function renderFeatured() {
  const featured = projects.filter((p) => p.featured);
  renderProjects("featuredGrid", featured);
}

/* ---------- full project grid + filters on project.html ---------- */
function initProjectGrid() {
  const grid = document.getElementById("allProjectsGrid");
  if (!grid) return;

  renderProjects("allProjectsGrid", projects);

  const pills = document.querySelectorAll(".filter-pill");
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      const category = pill.dataset.category;
      const filtered =
        category === "all" ? projects : projects.filter((p) => p.category === category);
      renderProjects("allProjectsGrid", filtered);
    });
  });
}

/* ---------- hero "editor" typing effect ---------- */

// This is the code that gets typed out inside the hero window.
// It's just one plain string — edit it here if you want to change what it says.
const heroCode =
  "const kimverley = {\n" +
  "  age: 17,\n" +
  '  role: "front-end dev in training",\n' +
  '  stack: ["HTML", "CSS", "JavaScript"],\n' +
  '  basedIn: "Phoenix, AZ",\n' +
  "  openToOffers: true // yes, right now\n" +
  "};";

// Adds one letter at a time to the editor window, like someone typing it live.
function typeCode() {
  const codeBox = document.getElementById("heroCode");
  if (!codeBox) return;

  let letterIndex = 0;

  function addNextLetter() {
    if (letterIndex < heroCode.length) {
      codeBox.textContent = codeBox.textContent + heroCode[letterIndex];
      letterIndex = letterIndex + 1;
      setTimeout(addNextLetter, 18);
    }
  }

  addNextLetter();
}

/* ---------- hire-me button: a small, honest moment of delight ---------- */
function initHireButton() {
  const btn = document.getElementById("hireBtn");
  const response = document.getElementById("hireResponse");
  if (!btn || !response) return;

  const messages = [
    "$ opening mail client…",
    "$ status: available for internships ✓",
    "$ reply time: usually under 24h",
  ];
  let idx = 0;

  btn.addEventListener("click", () => {
    response.textContent = messages[idx % messages.length];
    response.classList.add("show");
    idx++;
    window.location.href = "mailto:kimverleyherrera73@gmail.com?subject=Let's%20talk%20about%20an%20opportunity";
  });
}

/* ---------- mark the current page's nav link active ---------- */
function markActiveNav() {
  const links = document.querySelectorAll(".menu a");

  links.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (window.location.href.includes(linkPage)) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  initProjectGrid();
  typeCode();
  initHireButton();
  markActiveNav();
});