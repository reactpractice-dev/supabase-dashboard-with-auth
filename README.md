# Build the Github Issue Filter component

> This repository is the companion to the ["Build a simple auth app with Supabase"](https://reactpractice.dev/exercise/build-a-simple-auth-app-with-supabase/?utm_source=github&utm_medium=social&utm_campaign=simple-supabase-auth-app) practice exercise.

Build a login / register / logout flow using React and Supabase.

Users should be able to create a new account with email and password.
Once an account is created, they can use it to login and they can view a dummy "Dashboard" page.

For the backend, create a simple Supabase project - it's enough to just use the default settings when creating the app.
For the frontend, you can connect to Supabase using Supabase JS.

If the user is logged in:

- show dashboard available at /

Otherwise, redirect to /login:

- shows username and password
- links to /signup in case the user doesn't have an account yet

You can use Tailwind CSS to style the app and React Router for routing.

When you're ready to check your work, take a look at the [official solution](https://reactpractice.dev/solution/tutorial-build-a-simple-auth-app-with-supabase/?utm_source=github&utm_medium=social&utm_campaign=simple-supabase-auth-app).

## Getting started:

- `npm install`
- `npm run dev`
