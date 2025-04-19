# Real Estate Showcase - React Application

A React application that showcases real estate properties with a featured property tour video.

## Features

- Responsive design that works on desktop and mobile devices
- Featured property tour video (YouTube embed)
- Grid of real estate property listings
- Property details including price, address, bedrooms, bathrooms, and area

## Technologies Used

- React
- TypeScript
- HTML5
- CSS3
- Webpack
- YouTube Embed API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`

### Building for Production

- To build the application for production:
  ```
  npm run build
  ```
- The build artifacts will be stored in the `dist/` directory

## Project Structure

- `src/index.html` - The HTML template
- `src/index.tsx` - The entry point for the React application
- `src/App.tsx` - The main React component
- `src/components/` - Directory containing React components
  - `VideoSection.tsx` - Component for the YouTube video
  - `PropertiesSection.tsx` - Component for the properties grid
  - `PropertyCard.tsx` - Component for individual property cards
- `src/types.ts` - TypeScript interfaces
- `src/styles.css` - Global styles
- `dist/` - The compiled JavaScript and HTML files (generated after build)

## Customization

- To change the featured video, update the `youtubeVideoId` variable in `src/components/VideoSection.tsx`
- To add or modify property listings, update the `properties` array in `src/components/PropertiesSection.tsx`
