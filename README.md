# Getting Started with Vite

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and migrated to [Vite](https://vitejs.dev/) for faster development and build times.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode using Vite.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload when you make edits.\
You will also see any errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the Vite documentation for more information about [building for production](https://vitejs.dev/guide/build.html).

### `npm run preview`

Locally preview the production build.\
This command will start a local server to serve the built files from the `dist` folder.

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/).

To learn React, check out the [React documentation](https://reactjs.org/).

## Deployment

This project includes AWS deployment scripts:
- `npm run create-web` - Creates the S3 bucket and configures it for web hosting
- `npm run deploy-web` - Deploys the built application to S3

The production build is created in the `dist` folder and deployed to S3.

## Testing

Note: Test configuration with Jest/Vitest is not included in this migration. For testing setup, consider migrating to [Vitest](https://vitest.dev/) which is specifically designed to work with Vite.
