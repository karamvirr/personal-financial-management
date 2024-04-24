# Personal Financial Management Application

This personal finance application allows users to effortlessly connect their bank accounts and access a holistic view of their financial landscape. Built with React for the frontend and Node.js for the backend, it integrates the Plaid API to ensure secure connectivity with banks, while utilizing MongoDB for robust data storage. The backend features a custom API that facilitates efficient communication between the frontend, Plaid API, and the database, thereby optimizing the user experience and data retrieval processes.

## :hammer: Technologies

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [axios](https://axios-http.com/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Plaid API](https://plaid.com/)
- [Jest](https://jestjs.io/)

## :books: Requirements
- **Git**: You will need Git to clone the repository.
- **Node.js**: [Node.js](https://nodejs.org/) 10.x or higher is required.
- **MongoDB**: The application uses MongoDB as a database. You must have MongoDB installed and running on your machine or use a cloud-based instance. MongoDB can be installed from [MongoDB's official site](https://www.mongodb.com/try/download/community).
- **npm** or **Yarn**: You will need npm (which comes with Node.js) or Yarn to install dependencies. Install npm through Node.js or get Yarn from [Yarn's official site](https://yarnpkg.com).
- **Plaid API Keys**: You will need to create an account on [Plaid](https://plaid.com/) and obtain your API keys.

## :rocket: Getting started

To get started with this application, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/karamvirr/personal-financial-management.git
cd personal-financial-management
```

2. Install backend dependencies:
```bash
cd server
npm install # or 'yarn install'
```

3. Install frontend dependencies:
```bash
cd ../client
npm install # or 'yarn install'
```

4. Set up your environment variables in a `.env` file located in the `server` directory.
```plaintext
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=
MONGODB_CLUSTER_URL=
PORT=
```

5. Run the backend:
```bash
npm run start # or 'yarn start'
# to run in demo mode, which uses a mock database, use 'npm run start:demo' or 'yarn start:demo'
```

6. In a new terminal, start the frontend:
```bash
cd client
npm run start # or 'yarn start'
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

Here you can link your bank accounts and start tracking your financial transactions and account balances. The dashboard provides a comprehensive overview of your finances, including detailed visualizations of your cash flows and transactions.

