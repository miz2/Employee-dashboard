# Employee Activity Dashboard

## Overview
The Employee Activity Dashboard is a web application built with React and Vite. It displays a list of employees with details like their rank, name, designation, hours worked, and changes in their working hours. 

## Features
- **Employee List**: Displays employees' rank, name, designation, hours worked, and changes in hours.
- **Employee of the Month**: Highlights a special employee.
- **Navbar**: Shows the current date and time.
- **Responsive Design**: Adapts to different screen sizes for a better user experience.

## Installation
To run this project locally, follow these steps:
Used Vite to create our project 


1. **Install dependencies:**
   ```bash

   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

The app will run at `http://localhost:5173`.

## Scripts
- **dev**: Starts the development server using Vite.
- **build**: Builds the application for production.
- **lint**: Runs ESLint to check for linting issues.
- **preview**: Previews the built application.

## File Structure
Here is a brief overview of the main files and directories in the project:

- **public/**: Contains the HTML template.
- **src/**: Contains the main React components and styles.
  - **assets/**: Contains images of the employees.
  - **components/**: Contains React components like `Dashboard`, `EmployeeCard`, `EmployeeOfMonth`, and `Navbar`.
  - **data/**: Contains employee data.
  - **styles.css**: Contains custom styles for the project.
  - **App.js**: Main app component that renders the `Dashboard`.
  - **main.jsx**: Entry point of the React application.

## Components
### Dashboard
The main component that displays the employee list and the Employee of the Month.

### EmployeeCard
Displays individual employee details including their rank, name, designation, hours worked, and changes in hours.

### EmployeeOfMonth
Highlights the Employee of the Month with their image, name, and designation.

### Navbar
Shows the current date and time.

## Styling
Custom styles are defined in `styles.css`. The design includes a dark theme with light grey text and responsive layouts for different screen sizes.

## Employee Data
Employee data is stored in `src/data.js` and includes information like rank, name, designation, hours worked, and changes in hours.

```

## Customization
Feel free to customize the styles and components to suit your needs. You can modify the employee data, add new features, or change the layout as required.

## Dependencies
- **@emotion/react**: For styling.
- **@emotion/styled**: For styled components.
- **@mui/icons-material**: Material-UI icons.
- **@mui/material**: Material-UI components.
- **bootstrap**: For additional styling and layout.
- **react**: React library.
- **react-dom**: React DOM library.

## Dev Dependencies
- **@types/react**: TypeScript types for React.
- **@types/react-dom**: TypeScript types for React DOM.
- **@vitejs/plugin-react**: Vite plugin for React.
- **eslint**: Linting tool.
- **eslint-plugin-react**: ESLint plugin for React.
- **eslint-plugin-react-hooks**: ESLint plugin for React hooks.
- **eslint-plugin-react-refresh**: ESLint plugin for React refresh.
- **vite**: Frontend build tool.



