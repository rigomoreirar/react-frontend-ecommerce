import React, { useRef, useEffect } from 'react';

import './Map.css';

const loadGoogleMapsScript = (callback) => {
  if (window.google) {
    callback();
    return;
  }

  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAOH9YuFqD4LSk-yO2OyyX6ELNXu2W6CAg`;
  script.async = true;
  script.defer = true;
  script.onload = callback;
  document.head.appendChild(script);
};

const Map = props => {
  const mapRef = useRef();
  
  const { center, zoom } = props;

  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom: zoom
      });

      new window.google.maps.Marker({ position: center, map: map });
    };

    loadGoogleMapsScript(initMap);
  }, [center, zoom]);  

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
