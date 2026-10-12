# ⚛️ React Practice Projects

A collection of small React projects built with **React 19** and **Vite**, created while learning core React concepts: components, props, state, lists, and forms.

## 📁 Projects

| Project | Description | Concepts Practiced |
|---|---|---|
| [`static_card`](./static_card) | "ReactFacts" – a static page with fun facts about React | JSX, Fragments, importing assets, basic styling |
| [`travel_card`](./travel_card) | "My Travel Journal" – a list of travel entry cards rendered from data | Components, props, `map()`, spread operator, optional chaining |
| [`dynamic_page`](./dynamic_page) | "Chef Claude" – add ingredients to a list and get ready for a recipe | `useState`, form actions, conditional rendering, lists |

## 🛠️ Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- ESLint
- CSS

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Clone the repository

```bash
git clone https://github.com/anushkaasarraf/<your-repo-name>.git
cd react-projects
```

### Run any project

Each project is independent and has its own dependencies. Replace `<project>` with `static_card`, `travel_card`, or `dynamic_page`.

```bash
cd <project>
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## 📂 Repository Structure

```
.
├── static_card/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── static.css
│   │   └── static.jsx
│   ├── index.html
│   └── package.json
├── travel_card/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── entry.jsx
│   │   │   └── header.jsx
│   │   ├── data.js
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
├── dynamic_page/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   └── Main.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
└── README.md
```

## 🗺️ Roadmap

- [ ] Connect "Chef Claude" to an AI API to generate real recipes
- [ ] Add remove/clear options for ingredients
- [ ] Deploy projects with GitHub Pages or Vercel

## 🤝 Contributing

This is a personal learning repository, but suggestions are welcome. Feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
