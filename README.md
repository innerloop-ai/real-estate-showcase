# 🔗 PropertyPulse - InnerLoop Integration

## Project Overview

This project demonstrates how to embed InnerLoop images and videos into a real estate web application. It showcases how media content can be seamlessly integrated within a modern property listing website, allowing users to explore virtual property tours and browse high-quality images.

## Features

- Responsive design that works on desktop and mobile devices
- InnerLoop video embedding for virtual property tours and walkthroughs
- InnerLoop image selection for high-quality property visuals
- Grid of real estate property listings
- Property details including price, address, bedrooms, bathrooms, and area
- Interactive media selection allowing users to choose different property views and tours

## Technologies Used

This project is built with:

- React
- TypeScript
- CSS/SCSS
- Create React App
- InnerLoop Video API
- InnerLoop Image Selection Components

## Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

To run this project locally:

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

- `components/` - Directory containing React components
  - `Footer.tsx` - Footer component for the application
  - `HeroSection.tsx` - Hero section component with main property showcase
  - `PropertiesSection.tsx` - Component for the properties grid
  - `PropertyCard.tsx` - Component for individual property cards
  - `VideoSection.tsx` - Component for property video tours using InnerLoop
- `App.tsx` - The main React component
- `index.html` - The HTML template
- `index.tsx` - The entry point for the React application
- `styles.css` - Global styles
- `types.ts` - TypeScript interfaces
- `.gitignore` - Git ignore configuration
- `package.json` & `package-lock.json` - NPM package configuration
- `tsconfig.json` - TypeScript configuration
- `webpack.config.js` - Webpack configuration

## InnerLoop Media Integration

PropertyPulse leverages InnerLoop's powerful media capabilities to enhance the real estate browsing experience:

- **Video Embedding**: Showcase professional property walkthroughs, drone footage, and neighborhood tours
- **Image Selection**: Allow users to browse through high-quality images of properties with interactive controls

## Customization

- To modify InnerLoop video settings, adjust the video options in `components/VideoSection.tsx`
- To configure image properties, update the configuration in `components/HeroSection.tsx`
- To add or modify property listings, update the properties array in `components/PropertiesSection.tsx`
