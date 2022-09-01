import React, { useState, useCallback } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

import Banner from "../Banner/Banner";
import ReachOut from "../ReachOut/ReachOut";

import { darkMapStyles } from "../../mapStyles";
import "./Contact.css";
import SectionHeader from "../SectionHeader/SectionHeader";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 6.524379,
  lng: 3.379206,
};

const Contact = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  return (
    <div className="contact">
      <Banner
        heading="Reach out to us"
        subHeading="How Can We Serve You Better"
      />

      <div className="mt-4">
        <ReachOut />
      </div>

      <div className="map-group-container">
        <div className="container mb-4 contact-header-container">
          <SectionHeader
            header="Locate Us"
            subHeader="Make your way to a destination you will never forget"
          />
        </div>

        {isLoaded ? (
          <div className="map-container">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
              options={{
                clickableIcons: false,
                zoomControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
                styles: darkMapStyles,
              }}
            >
              <MarkerF position={center} title="Lagos, Nigeria" />
            </GoogleMap>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default React.memo(Contact);
