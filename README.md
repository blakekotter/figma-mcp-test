# Figma to React Admin Dashboard

This project is a React implementation of a Figma design for an admin dashboard.

## About

This project converts a Figma design into a functional React application using:
- React for the component structure
- Tailwind CSS for styling

## Features

- Responsive admin dashboard layout
- Stats cards showing key metrics
- Recent uploads section with asset preview
- Category management section with action buttons

## Setup and Installation

1. Clone this repository:
   ```
   git clone https://github.com/blakekotter/figma-mcp-test.git
   cd figma-mcp-test
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Project Structure

```
src/
  ├── components/
  │   ├── Dashboard.js       # Main dashboard layout
  │   ├── StatsCard.js       # Card for displaying stats
  │   ├── RecentUploads.js   # Recent uploads list
  │   └── CategoryManagement.js # Category management buttons
  ├── App.js                 # Root component
  └── index.js               # Entry point
```

## Design Implementation

The application is built based on the Figma design with:
- Matching colors, typography, and spacing
- Responsive layout
- Interactive elements
