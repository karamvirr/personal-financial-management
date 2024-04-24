# Server

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

To run the server in demo mode, which uses a mock database, run `npm run start:demo`

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Environment Variables

The server uses the following environment variables:

- `PLAID_CLIENT_ID` - The client ID for the Plaid API
- `PLAID_SECRET` - The secret for the Plaid API
- `PLAID_ENV` - The environment for the Plaid API
- `PLAID_PRODUCTS` - The products to use with the Plaid API
- `PLAID_COUNTRY_CODES` - The country codes to use with the Plaid API
- `MONGODB_CLUSTER_URL` - The URL for the MongoDB cluster
- `PORT` - The port to run the server on
- `DEMO_MODE` - Whether to run the server in demo mode

## API Endpoints

The server has the following API endpoints:

- `POST /plaid/link_token` - Creates a link token, which is used to initialize the Plaid Link flow.
- `POST /plaid/reauthentication_link_token` - Creates a link token, which is used to initialize the Plaid Link flow for reauthentication. It requires the `access_token` of the item in the request body.
- `POST /plaid/access_token` - Exchanges a public token for an access token. Access tokens are used to access the Plaid API and do not expire unless the user revokes access.
- `GET /links` - Gets all external links, sorted by institution name.
- `POST /links` - Adds an external link.
- `DELETE /links/:id` - Deletes an external link.
- `PUT /links/:id/balance` - Updates the balance data for an external link.
- `PUT /links/:id/transactions` - Updates the transaction data for an external link.
- `PUT /links/:id/transactions/:transaction_id` - Updates transaction item data.
