"use client";
import { useEffect, useRef } from "react";

export default function Map() {
  const mapRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const iframe = entry.target as HTMLIFrameElement;
            iframe.src = iframe.dataset.src || "";
            observer.unobserve(iframe);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  return (
    <div className="aspect-[16/9] rounded-2xl overflow-hidden">
      <iframe
        ref={mapRef}
        data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.13643523478!2d-60.7039908!3d-32.9474071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7acc8d43fd183%3A0xc4884b26a8339737!2sMontevideo%205965%2C%20S2008DPS%20Rosario%2C%20Santa%20Fe!5e0!3m2!1sen!2sar!4v1734206211917!5m2!1sen!2sar"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label="Mapa de ubicación de Ivan Barinaga"
        title="Mapa de ubicación de Ivan Barinaga"
      />
    </div>
  );
}
