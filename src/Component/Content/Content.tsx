"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Content.scss";
import SmallScreen from "./smallScreen/SmallScreen";

// Define a type for vehicle

interface SelectedVehicle {
  title: string;
  image: string;
  parts: VehicleParts[];
}
interface VehicleParts {
  id: number;
  title: string;
  image: string;
  video: string;
}
interface Vehicle {
  id: number;
  title: string;
  description: string;
  parts: VehicleParts[];
}

const vehicleParts: VehicleParts[] = [
  {
    id: 1,
    title: "Complete Body",
    image: "./CompleteBody.png",
    video:
      "https://supreme-group.vercel.app/static/media/Passenger%20Alpha.bc06b347f5b526ad9a60.mp4",
  },
  {
    id: 2,
    title: "Front",
    image: "./front.png",
    video:
      "https://supreme-group.vercel.app/static/media/Front.8f5fda304d3095ab6b02.mp4",
  },
  {
    id: 3,
    title: "Trunk",
    image: "./trunk.png",
    video:
      "https://supreme-group.vercel.app/static/media/Trunk.54bfaa734c0395172c08.mp4",
  },
  {
    id: 4,
    title: "Exterior",
    image: "./exterior.png",
    video:
      "https://supreme-group.vercel.app/static/media/Exterior.a127ebb308e655c7e32c.mp4",
  },
];

const truck: VehicleParts[] = [
  {
    id: 6,
    title: "Complete Body",
    image:
      "https://supreme-group.vercel.app/static/media/commercial-body.497c72f2daf47ca41c4fd25f86191b69.svg",
    video:
      "https://supreme-group.vercel.app/static/media/Commercial%20Alpha.92c92d40f9116c837d1d.mp4",
  },
  {
    id: 7,
    title: "Engine",
    image:
      "https://supreme-group.vercel.app/static/media/commercial-engine.474985507c936157fc7a6daa457d4f04.svg",
    video:
      "https://supreme-group.vercel.app/static/media/Commercial-Engine.d8957f7c027ca396858e.mp4",
  },
  {
    id: 8,
    title: "Cabin",
    image:
      "https://supreme-group.vercel.app/static/media/commercial-cabin.7981ee5cadcf17dbe57012daa413c584.svg",
    video:
      "https://supreme-group.vercel.app/static/media/Commercial-Cabin.69adf15a8021267cbe8c.mp4",
  },
];

const vehicles: Vehicle[] = [
  {
    id: 1,
    title: "Passenger vehicles",
    description: "Revving up innovation from interior to exterior",
    parts: [...vehicleParts],
  },
  {
    id: 2,
    title: "Commercial vehicles",
    description: "Advancing engineering for heavy-duty vehicles",
    parts: [...truck],
  },
];

const Content: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState<string>("invisble");
  const [vehicle, setVehicle] = useState<SelectedVehicle>({
    title: "Passenger vehicles",
    image: "./Car.png",
    parts: vehicleParts,
  });

  const [vehiclePartVideo, setVehiclePartVideo] = useState<string>(
    vehicleParts[0]?.video
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible("contentCont");
          console.log("true");
        }
      },
      {
        threshold: 0.01,
      }
    );

    const current = ref.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const vehicleHandler = (text: string) => {
    if (text === "Passenger vehicles") {
      setVehicle({ title: text, image: "./Car.png", parts: vehicleParts });
      setVehiclePartVideo(vehicleParts[0]?.video);
    } else if (text === "Commercial vehicles") {
      setVehicle({ title: text, image: "./Truck.png", parts: truck });
      setVehiclePartVideo(truck[0]?.video);
    }
  };

  const vehiclePartHandler = (videoUrl: string) => {
    setVehiclePartVideo(videoUrl);
  };

  return (
    <div ref={ref}>
      <div className={isVisible}>
        <div className="titleCont">
          <h1 className="titleText">
            Evolving the drive with <span>360-degree </span> comprehensive
            solutions
          </h1>
        </div>

        <div className="contentMCont">
          <div className="content">
            {vehicles.map((item) => (
              <React.Fragment key={item?.id}>
                <div
                  className={`textCont ${
                    vehicle?.title === item?.title ? "active" : ""
                  }`}
                  onClick={() => vehicleHandler(item?.title)}
                >
                  <h1 className="title">{item?.title}</h1>
                  <p>{item?.description}</p>
                </div>
                <SmallScreen vehicleParts={item.parts} />
              </React.Fragment>
            ))}
          </div>
          <div className="imgCont bigScreen">
            <div className="imgTopCont">
              <video key={vehiclePartVideo} autoPlay muted>
                <source src={vehiclePartVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="imgBottomCont">
              {vehicle.parts.map((item) => (
                <div
                  key={item?.id}
                  onClick={() => vehiclePartHandler(item?.video)}
                  className={`catItems ${
                    item?.video === vehiclePartVideo && "activeIcon"
                  }`}
                >
                  {" "}
                  <img alt={item?.title} src={item?.image} />
                  <span>{item?.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
