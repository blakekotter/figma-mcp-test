# Admin Dashboard React App

This is a React implementation of an Admin Dashboard based on a Figma design. The application was created using React and features a responsive interface that matches the Figma design.

## Features

- Responsive admin dashboard UI built with React
- Component-based architecture for better maintainability
- React hooks for state management
- Animated data loading simulation
- Interactive elements with hover effects
- Mobile-friendly design

## Project Structure

- `src/` - Source code
  - `components/` - React components
    - `Header.js` - Dashboard header component
    - `StatCard.js` - Stats card component
    - `UploadsTable.js` - Table component for showing recent uploads
    - `ActionButton.js` - Interactive button component
  - `App.js` - Main application component
  - `App.css` - Application styles

## Figma Source

This implementation is based on the Figma design: [Admin Dashboard](https://www.figma.com/design/5ddpJqH2rQ7MzzEdloMhSX/Untitled?node-id=0-1&t=0lrswpqBmPpT0EVK-1)

## How to Run

1. Clone the repository
2. Navigate to the `react-admin-app` directory
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser to http://localhost:3000

## Build for Production

To build the app for production, run: `npm run build`

## Note

This is a static implementation. In a real-world scenario, you would connect it to a backend API for data fetching and updates.