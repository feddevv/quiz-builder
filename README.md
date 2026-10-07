# Quiz Builder

A full-stack quiz management application built with **React**, **Vite**, **Tailwind CSS**, **Node.js/Express**, **TypeScript**, and **Prisma ORM** with **PostgreSQL**.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Database Setup](#-database-setup)
- [Starting the Application](#-starting-the-application)
- [Creating a Sample Quiz](#-creating-a-sample-quiz)
  - [Method 1: Database Seed Script](#method-1-database-seed-script-recommended)
  - [Method 2: Through the Web UI](#method-2-through-the-web-ui)
  - [Method 3: Via REST API (`curl`)](#method-3-via-rest-api-curl)
- [Available Scripts](#-available-scripts)
- [API Reference](#-api-reference)

---

## ✨ Features

- **Dynamic Quiz Creation**: Create quizzes with multiple question types:
  - **Boolean**: True / False questions
  - **Text Input**: Open-ended single answer questions
  - **Checkbox**: Multiple-choice questions with customizable options
- **Quiz Browsing & Taking**: View list of available quizzes, inspect questions, and delete quizzes.
- **Form Validation**: Strict schema validation on both frontend and backend using **Zod**.
- **Modern UI**: Clean, responsive design styled with **Tailwind CSS**.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite, React Router v8, React Hook Form, Zod, Tailwind CSS v4
- **Backend**: Node.js, Express, TypeScript, Zod, Nodemon, tsx
- **Database & ORM**: PostgreSQL, Prisma ORM (v7) with `@prisma/adapter-pg`

---

## 📁 Project Structure

```text
quiz-builder/
├── backend/
│   ├── prisma/
│   │   ├── migrations/      # Prisma migration history
│   │   ├── schema.prisma    # Database schema
│   │   └── seed.ts          # Seed script for sample quizzes
│   ├── src/
│   │   ├── db/              # Prisma client instance
│   │   ├── errors/          # Custom error handlers
│   │   ├── middleware/      # Zod validation middleware
│   │   ├── quizzes/         # Quizzes routes, controllers, services, repositories
│   │   └── app.ts           # Express application entry point
│   ├── .env.example         # Backend environment variable template
│   ├── package.json
│   ├── prisma7.config.ts
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── hooks/           # Custom React hooks (e.g. useFetch)
│   │   ├── pages/           # Pages: Quizzes, Create, QuizDetails, Error
│   │   ├── App.tsx          # Router configuration
│   │   └── main.tsx         # Frontend entry point
│   ├── package.json
│   └── vite.config.ts
├── package.json             # Root scripts helper
└── README.md
```

---

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v18.x or higher)
- **npm** (or yarn / pnpm)
- **PostgreSQL** server running locally or accessible remotely

---

## 🗄️ Database Setup

### 1. Create a PostgreSQL Database

Ensure your PostgreSQL service is running and create a database (e.g. `quiz_builder`):

```bash
# Using psql CLI
psql -U postgres -c "CREATE DATABASE quiz_builder;"
```

### 2. Configure Environment Variables

Create a `.env` file in the `backend/` directory by copying the example template:

```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env` with your PostgreSQL credentials:

```env
PORT=3000
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/quiz_builder"
```

> Replace `<username>`, `<password>`, and `quiz_builder` with your actual PostgreSQL connection credentials.

### 3. Run Migrations & Generate Prisma Client

From the project root:

```bash
# Apply migrations to database
npm run db:migrate

# Generate Prisma Client
npm run db:generate
```

Alternatively, from the `backend/` directory:

```bash
cd backend
npx prisma migrate dev
npx prisma generate
```

---

## 🚀 Starting the Application

### 1. Install Dependencies

Install all root, backend, and frontend dependencies:

```bash
npm run install:all
```

Or install them individually:

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 2. Start Backend & Frontend

Open two terminal windows:

#### Terminal 1 — Start Backend:

```bash
npm run dev:backend
# or: cd backend && npm run dev
```

The backend API server will start on [http://localhost:3000](http://localhost:3000).

#### Terminal 2 — Start Frontend:

```bash
npm run dev:frontend
# or: cd frontend && npm run dev
```

The frontend application will start on [http://localhost:5173](http://localhost:5173).

---

## 📝 Creating a Sample Quiz

You can create sample quizzes using any of the following methods:

### Method 1: Database Seed Script (Recommended)

Populate the database with pre-configured sample quizzes (featuring Boolean, Input, and Checkbox questions):

```bash
# From project root
npm run seed

# Or from backend directory
cd backend && npm run seed
```

### Method 2: Through the Web UI

1. Open your browser and go to [http://localhost:5173](http://localhost:5173).
2. Click the **+ Create New Quiz** button in the top right corner.
3. Fill in the **Quiz Title** (e.g., `JavaScript Fundamentals`).
4. Click **+ Boolean**, **+ Text Input**, or **+ Checkbox** to add questions:
   - **Boolean**: Enter a question statement.
   - **Text Input**: Enter a prompt.
   - **Checkbox**: Enter a question and add at least two options.
5. Click **Create Quiz** to submit. You will be redirected to the quiz details view.

### Method 3: Via REST API (`curl`)

Send a `POST` request to `http://localhost:3000/api/quizzes`:

```bash
curl -X POST http://localhost:3000/api/quizzes \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Full-Stack Web Quiz",
    "questions": [
      {
        "type": "boolean",
        "question": "TypeScript is a superset of JavaScript."
      },
      {
        "type": "input",
        "question": "Which HTTP method is typically used to create a new resource?"
      },
      {
        "type": "checkbox",
        "question": "Which of the following are relational database management systems?",
        "options": [
          { "title": "PostgreSQL" },
          { "title": "MySQL" },
          { "title": "Redis" }
        ]
      }
    ]
  }'
```

---

## 📜 Available Scripts

### Root Scripts (`package.json`)

| Command                | Description                                                      |
| :--------------------- | :--------------------------------------------------------------- |
| `npm run dev:backend`  | Start the Express backend with hot-reloading (`nodemon` + `tsx`) |
| `npm run dev:frontend` | Start the Vite development server for React frontend             |
| `npm run seed`         | Run the Prisma seed script to insert sample quizzes              |
| `npm run db:migrate`   | Run database migrations via Prisma                               |
| `npm run db:generate`  | Generate Prisma client artifacts                                 |
| `npm run db:studio`    | Open Prisma Studio GUI in browser                                |
| `npm run install:all`  | Install dependencies for root, backend, and frontend             |

### Backend Scripts (`backend/package.json`)

| Command               | Description                                        |
| :-------------------- | :------------------------------------------------- |
| `npm run dev`         | Run backend in development mode with nodemon & tsx |
| `npm run seed`        | Populate database with sample quiz data            |
| `npm run db:migrate`  | Execute Prisma migrations (`prisma migrate dev`)   |
| `npm run db:generate` | Generate Prisma client (`prisma generate`)         |
| `npm run db:studio`   | Open Prisma Studio GUI                             |

### Frontend Scripts (`frontend/package.json`)

| Command           | Description                            |
| :---------------- | :------------------------------------- |
| `npm run dev`     | Start Vite dev server                  |
| `npm run build`   | Type-check and build production bundle |
| `npm run preview` | Preview production build locally       |
| `npm run lint`    | Run ESLint check                       |

---

## 🔌 API Reference

| Method   | Endpoint           | Description                                                      |
| :------- | :----------------- | :--------------------------------------------------------------- |
| `GET`    | `/api/quizzes`     | Get list of all quizzes with total questions count               |
| `GET`    | `/api/quizzes/:id` | Get details of a single quiz including all questions and options |
| `POST`   | `/api/quizzes`     | Create a new quiz with questions                                 |
| `DELETE` | `/api/quizzes/:id` | Delete a quiz by ID (cascades related questions and options)     |
