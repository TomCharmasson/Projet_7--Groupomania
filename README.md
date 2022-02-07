# INSTALLATION

Here are the dependancies you need to install:

- NodeJS

On Windows, these installations require to use PowerShell in administrator mode.

Then, clone this repo.

# BACKEND

## Installation

From the backend folder run `npm install`.

## Usage

Run `node server`. This should run the server on the port 3000.
If you have Nodemon install, run `nodemon server`

Use `Ctrl+C` in the terminal to stop the local server.

## DB Installation

In the backend folder add a config folder and your config.json file in it.
It must look like this :

{
  "development": {
    "username": "root",
    "password": "PASSWORDHERE",
    "database": "groupomania",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false
  },
}

# FRONTEND

## Installation

From the frontend folder run `npm install`.

## Usage

Run `npm run serve`. This should both run the local server and launch your browser.

If your browser fails to launch, or shows a 404 error, navigate your browser to http://localhost:8080.

The app should reload automatically when you make a change to a file.

Use `Ctrl+C` in the terminal to stop the local server.
