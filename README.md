
# FastBite Admin Dashboard

A modern restaurant admin dashboard built with React, Vite, Tailwind CSS, Express, and MongoDB.

## Features

- 🔐 Authentication with localStorage
- 🍔 Food Management (CRUD operations)
- 📦 Order Management
- 📊 Dashboard with statistics
- 🎨 Dark theme with yellow accents
- 📱 Responsive design

## Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- React Router
- Lucide Icons

**Backend:**
- Node.js
- Express
- MongoDB
- Mongoose

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally or MongoDB Atlas)

### Installation

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Create a `.env` file in the root directory:
   \`\`\`
   MONGODB_URI=mongodb://localhost:27017/fastbite
   PORT=5000
   \`\`\`

4. Start MongoDB (if running locally):
   \`\`\`bash
   mongod
   \`\`\`

5. Start the backend server:
   \`\`\`bash
   npm run server:dev
   \`\`\`

6. In a new terminal, start the frontend:
   \`\`\`bash
   npm run dev
   \`\`\`

7. Open your browser and navigate to `http://localhost:3000`

## Default Login

Use any email and password to login (authentication is simulated with localStorage).

## API Endpoints

### Foods
- `GET /api/foods` - Get all foods
- `GET /api/foods/:id` - Get single food
- `POST /api/foods` - Create food
- `PUT /api/foods/:id` - Update food
- `DELETE /api/foods/:id` - Delete food

### Orders
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create order
- `PATCH /api/orders/:id/status` - Update order status
- `DELETE /api/orders/:id` - Delete order

## Project Structure

\`\`\`
fastbite-admin-dashboard/
├── backend/
│   ├── models/
│   │   ├── Food.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── foodRoutes.js
│   │   └── orderRoutes.js
│   └── server.js
├── src/
│   ├── components/
│   │   ├── ui/
│   │   └── Layout.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── AddFood.jsx
│   │   ├── ManageFoods.jsx
│   │   ├── Orders.jsx
│   │   └── Login.jsx
│   ├── services/
│   │   └── api.js
│   ├── hooks/
│   │   └── use-toast.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── package.json
└── vite.config.js
\`\`\`

## License

MIT
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> 8063193fbc6eeb22c0cf00269c35077025144856
