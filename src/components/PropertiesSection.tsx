import React from 'react';
import PropertyCard from './PropertyCard';
import { Property } from '../types';

// Sample property data
const properties: Property[] = [
  {
    id: 1,
    title: "Modern Apartment",
    price: "$350,000",
    address: "123 Main St, Anytown, USA",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    title: "Luxury Villa",
    price: "$1,250,000",
    address: "456 Ocean Ave, Beachtown, USA",
    bedrooms: 5,
    bathrooms: 4,
    area: 3500,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    title: "Cozy Cottage",
    price: "$225,000",
    address: "789 Forest Rd, Woodland, USA",
    bedrooms: 3,
    bathrooms: 1,
    area: 1000,
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    title: "Downtown Loft",
    price: "$420,000",
    address: "101 Urban St, Metropolis, USA",
    bedrooms: 1,
    bathrooms: 1,
    area: 950,
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 5,
    title: "Suburban Family Home",
    price: "$550,000",
    address: "202 Maple Dr, Suburbia, USA",
    bedrooms: 4,
    bathrooms: 3,
    area: 2200,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 6,
    title: "Waterfront Property",
    price: "$875,000",
    address: "303 Lake View, Lakeside, USA",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

const PropertiesSection: React.FC = () => {
  return (
    <div className="properties-section">
      <div className="section-header">
        <h2>Featured Properties</h2>
        <p className="section-description">
          Explore our handpicked selection of premium properties in the most desirable locations
        </p>
      </div>
      <div className="filter-options">
        <button className="filter-button active">All</button>
        <button className="filter-button">For Sale</button>
        <button className="filter-button">For Rent</button>
        <button className="filter-button">New Listings</button>
      </div>
      <div className="properties-grid">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <div className="view-more-container">
        <button className="view-more-button">View More Properties</button>
      </div>
    </div>
  );
};

export default PropertiesSection;
