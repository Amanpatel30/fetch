# Fetch

A simple full-stack project with a Node.js/Express backend and a React (Vite) frontend.

## Features

- **Backend (Express):**
  - `/` — Returns a hello message.
  - `/quote` — Returns an inspirational quote.
  - `/healtTip` — Returns a health tip.
  - 404 and error handling for undefined routes.

- **Frontend (React + Vite):**
  - `/` — Home page.
  - `/quote` — Displays the quote from the backend.
  - `/healtTip` — Displays the health tip from the backend.
  - Navigation between routes using React Router.

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

### Setup

#### 1. Clone the repository
```zsh
git clone <your-repo-url>
cd fetch
```

#### 2. Install dependencies

**Backend:**
```zsh
cd backend
npm install
```

**Frontend:**
```zsh
cd ../frontend
npm install
```

#### 3. Environment Variables

- In the `backend` folder, you can create a `.env` file to specify a custom port:
  ```
  PORT=3000
  ```
- In the `frontend` folder, create a `.env` file and set the backend URL:
  ```
  VITE_BACKEND_URL=http://localhost:3000
  ```

#### 4. Run the app

**Start the backend:**
```zsh
cd backend
npm start
# or
npx nodemon server.js
```

**Start the frontend:**
```zsh
cd ../frontend
npm run dev
```

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:3000](http://localhost:3000)

## Project Structure

```
fetch/
  backend/
    app.js
    server.js
    package.json
    ...
  frontend/
    src/
      App.jsx
      AppRouter.jsx
      componets/
        HealthTip.jsx
        Quote.jsx
      ...
    package.json
    ...
  .gitignore
  README.md
```

## License

This project is for learning and demonstration purposes.
