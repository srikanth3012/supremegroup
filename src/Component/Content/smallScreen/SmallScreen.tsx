import React, { useState } from "react";

type SmallScreenProps = {
  vehicleParts: {
    id: number;
    title: string;
    image: string;
    video: string;
  }[];
};

const SmallScreen: React.FC<SmallScreenProps> = ({ vehicleParts }) => {
  const [vehiclePartVideo, setVehiclePartVideo] = useState<string>(
    vehicleParts[0]?.video
  );

  const vehiclePartHandler = (item: string) => {
    setVehiclePartVideo(item);
  };
  return (
    <div className="imgCont smallScreen">
      <div className="imgTopCont">
        <video key={vehiclePartVideo} autoPlay muted loop>
          <source src={vehiclePartVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="imgBottomCont">
        {vehicleParts.map((item) => (
          <div
            key={item.id}
            className={`catItems ${
              item?.video === vehiclePartVideo && "activeIcon"
            }`}
            onClick={() => vehiclePartHandler(item.video)}
          >
            <img alt={item.title} src={item.image} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallScreen;
