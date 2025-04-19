import React from 'react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="property-card">
      <div className="property-image-container">
        <img 
          className="property-image" 
          src={property.image} 
          alt={property.title} 
        />
        <div className="property-badge">For Sale</div>
      </div>
      <div className="property-details">
        <div className="property-price">{property.price}</div>
        <h3 className="property-title">{property.title}</h3>
        <div className="property-address">
          <i className="location-icon">📍</i> {property.address}
        </div>
        <div className="property-features">
          <div className="feature">
            <i className="feature-icon">🛏️</i>
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="feature">
            <i className="feature-icon">🚿</i>
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="feature">
            <i className="feature-icon">📏</i>
            <span>{property.area} sq ft</span>
          </div>
        </div>
        <button className="view-property-button">View Details</button>
      </div>
    </div>
  );
};

export default PropertyCard;
