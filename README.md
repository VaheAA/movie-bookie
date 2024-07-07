# Movies Project

## Table of Contents

- [Overview](#overview)
- [Demo](#demo)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Scripts](#scripts)
- [License](#license)

## Overview

This project is a web application built using Vue for the frontend and Node.js (Express) with TypeScript and Sequelize for the backend. The application manages movies data and provides an interface for users to view and interact with the movie listings.

## Demo

You can view a live demo of the project [here](https://movie-bookie.vercel.app/).

## Technologies

### Frontend
- Vue 3
- TypeScript
- Vite
- Pinia
- Vue Router
- PrimeVue
- TailwindCSS

### Backend
- Node.js
- Express
- TypeScript
- Sequelize
- PostgreSQL

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd movies
    ```

### Frontend

2. Navigate to the client directory and install dependencies:
    ```bash
    cd client
    npm install
    ```

### Backend

3. Navigate to the api directory and install dependencies:
    ```bash
    cd api
    npm install
    ```

## Usage

### Frontend

1. Run the development server:
    ```bash
    npm run dev
    ```

2. Build the project for production:
    ```bash
    npm run build
    ```

3. Preview the production build:
    ```bash
    npm run preview
    ```

### Backend

1. Run the development server:
    ```bash
    npm run dev
    ```

2. Build the project for production:
    ```bash
    npm run build
    ```

3. Start the production server:
    ```bash
    npm start
    ```

4. Seed the database:
    ```bash
    npm run seed
    ```

## Deployment

### Frontend

The frontend is deployed to Vercel. You can view the live demo [here](https://movie-bookie.vercel.app/).

### Backend

The backend API is deployed to Railway App.

## Scripts

### Frontend Scripts

- `dev`: Runs the Vite development server.
- `build`: Type checks the code and builds the project for production.
- `preview`: Previews the production build.
- `type-check`: Runs type checking using `vue-tsc`.
- `lint`: Runs ESLint on the project files and fixes issues.
- `format`: Formats the code using Prettier.

### Backend Scripts

- `build`: Builds the project for production using TypeScript.
- `start`: Starts the production server.
- `dev`: Runs the development server with Nodemon.
- `seed`: Seeds the database using Sequelize CLI.
- `lint:fix`: Runs ESLint on the project files and fixes issues.
