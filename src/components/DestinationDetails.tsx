import React, { useState } from 'react';
import destinationsData from '../backend/destinations.json';
import './DestinationDetails.css'; // Import the CSS file

const DestinationDetails: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<string>('');

  const handleSelectDestination = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDestination(event.target.value);
  };

  const selectedDestinationData = destinationsData.locations.find(
    (location) => location.name === selectedDestination
  );

  const handleAttractionMapClick = (latitude: number, longitude: number) => {
    window.open(`https://maps.google.com/maps?q=${latitude},${longitude}`, '_blank');
  };

  const handleDestinationMapClick = () => {
    if (selectedDestinationData) {
      const { latitude, longitude } = selectedDestinationData;
      window.open(`https://maps.google.com/maps?q=${latitude},${longitude}`, '_blank');
    }
  };

  return (
    <div className="destination-details-container">
      <h1>Select a Destination:</h1>
      <select className="destination-select" value={selectedDestination} onChange={handleSelectDestination}>
        <option value="">Select Destination</option>
        {destinationsData.locations.map((location) => (
          <option key={location.name} value={location.name}>
            {location.name}
          </option>
        ))}
      </select>

      {selectedDestinationData && (
        <div className="destination-details">
          <h2>{selectedDestinationData.name}</h2>
          <img className="destination-image" src={selectedDestinationData.image} alt={selectedDestinationData.name} />
          <p>{selectedDestinationData.description}</p>
          <p>Province: {selectedDestinationData.province}</p>

          <div className="map-button-container">
          <button className="map-button" onClick={handleDestinationMapClick}>
           View on Map
          </button>
          </div>
          <h3>Main Attractions:</h3>
          <div className="attraction-list">
            {selectedDestinationData.attractions.map((attraction) => (
              <div key={attraction.name} className="attraction-card">
                <img className="attraction-image" src={attraction.image} alt={attraction.name} />
                <div className="attraction-info">
                  <h4>{attraction.name}</h4>
                  <p>{attraction.description}</p>
                  <div className="map-button-container">

                  <button
                    className="map-button"
                    onClick={() => handleAttractionMapClick(attraction.latitude, attraction.longitude)}
                  >
                     View on Map
                  </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationDetails;
