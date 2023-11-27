# [Project Name](http://localhost:3000)

> **Warning**
> This project is still in development and is not ready for production use.

## Prerequisites

You will need [Node.js](https://nodejs.org) version 16.x.x or greater installed on your system.

## Tech Stack

- **Core:** [React](https://react.dev), [TypeScript](https://www.typescriptlang.org)
- **Framework:** [Next.js](https://nextjs.org)
- **ORM:** [Prisma ORM](https://www.prisma.io)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs), [React-query](https://tanstack.com/query)
- **Authentification:** [Clerk](https://clerk.com)
- **Work with API:** [TRPC](https://trpc.io), [Axios](https://axios-http.com)
- **Testing:** Unit - [Jest](https://jestjs.io), Integration - [React-testing-library](https://testing-library.com), E2E - [Playwright](https://playwright.dev)

## Running Locally

### 1. Install PNPM

```bash
npm i pnpm -g
```

### 2. Clone the repository

```bash
git clone https://github.com/Marian1309/Next.js
```

### 3. Install dependencies

```bash
pnpm install
```

### 4. Create a `.env` file

Create a `.env` file in the root directory and add the environment variables as shown in the `.env.example` file.

### 5. Push database

```bash
pnpm run db:push
```

### 6. Run the application

```bash
pnpm run dev
```

The app should now be up and running at http://localhost:3000 🚀
