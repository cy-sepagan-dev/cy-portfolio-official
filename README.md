This My Personal Porfolio

Structure im planning:

my-portfolio/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── assets/
│       └── images/          # Optional for static/public images
│           └── logo.png
│
├── src/
│   ├── assets/
│   │   └── images/          # Images imported in JS/JSX (Webpack handles)
│   │       └── hero-bg.jpg
│   │       └── profile.png
│   │
│   ├── components/
│   │   ├── common/          # Shared UI components (Button, Card, etc.)
│   │   └── homepage/        # Page-specific sections (Hero, About, etc.)
│   │       └── Hero.jsx
│   │       └── About.jsx
│   │
│   ├── pages/               # Full-page components
│   │   └── Home.jsx
│   │   └── Projects.jsx
│   │   └── Contact.jsx
│   │
│   ├── routes/              # React Router setup
│   │   └── AppRouter.jsx
│   │
│   ├── styles/              # Global/custom CSS or Tailwind config overrides
│   │   └── index.css
│   │
│   ├── App.jsx
│   ├── index.js
│   └── tailwind.config.js
│
├── .gitignore
├── package.json
└── README.md