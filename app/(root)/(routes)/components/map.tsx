"use client";

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_API_GOOGLE_MAPS!,
        version: process.env.VERSION!,
      });

      const { Map } = await loader.importLibrary("maps");

      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const position = {
        lat: -24.1934049,
        lng: -65.2865829,
      };

      const mapOptions = {
        center: position,
        zoom: 19,
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      new Marker({ map: map, position: position });
    };

    initMap();
  });
  return <div className="w-full h-[20rem] bg-transparent" ref={mapRef} />;
}
