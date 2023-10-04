import React, { useEffect, useState } from "react";
import "../../styles/events-styles/events.css";

import image1 from "../../assets/image/events/1.jpg";
import image2 from "../../assets/image/events/2.jpg";
import image3 from "../../assets/image/events/3.jpg";
import image4 from "../../assets/image/events/4.jpg";

const Events = () => {
  const [shuffleIndex, setShuffleIndex] = useState(0);
  const imageShuffleTime = 4000; // in ms

  useEffect(() => {
    setTimeout(() => {
      shuffleIndex !== EventImages.length - 1
        ? setShuffleIndex(shuffleIndex + 1)
        : setShuffleIndex(0);
    }, imageShuffleTime);
  }, [shuffleIndex]);

  return (
    <section id="events" className="events-container">
      <div className="events-area">
        <div className="events-zone left">
          <p className="events-header">Neler Yaptık?</p>
          <div className="events-events">
            {EventList.map((event, index) => {
              return (
                <div key={index} className="events-event-box">
                  <p className="events-event-title">{event.title}</p>
                  <p className="events-event-info">{event.info}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="events-zone right">
          <div className="events-image-area">
            {EventImages.map((image, index) => {
              return (
                <div
                  key={index}
                  className={`events-image-box ${
                    shuffleIndex === index
                      ? "current"
                      : shuffleIndex - 1 === index
                      ? "prev"
                      : index === EventImages.length - 1 && shuffleIndex === 0
                      ? "prev"
                      : shuffleIndex + 1 === index
                      ? "next"
                      : shuffleIndex === EventImages.length - 1 && index === 0
                      ? "next"
                      : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`image` + index}
                    className="events-image"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const EventList = [
  {
    title: "GEEKDAY",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec lorem eu purus dignissim feugiat eget in ex. Integer nec orci eget    dolor malesuada iaculis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec lorem eu purus dignissim feugiat eget in ex. Integer nec orci eget    dolor malesuada iaculis.",
  },
  {
    title: "GEEKDAY",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec lorem eu purus dignissim feugiat eget in ex. Integer nec orci eget    dolor malesuada iaculis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec lorem eu purus dignissiiscing elit. Proin nec lorem eu purus dignissim feugiat eget in ex. Integer necm feugiat eget in ex. Integer nec orci eget    dolor malesuada iaculis.",
  },
  {
    title: "GEEKDAY",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec lorem eu purus dignissim feugiat eget in ex. Integer nec orci eget    dolor malesuada iaculis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec lorem eu purus dignissim feugiat eget in ex. Integer nec orci eget    dolor malesuada iaculis.",
  },
  {
    title: "GEEKDAY",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec lorem eu purus dignissim feugiat eget in ex. Integer nec orci eget    dolor malesuada iaculis.Lorem ipsum dolor sit amet, consectetur adip orci eget    dolor malesuada iaculis.",
  },
];

const EventImages = [image1, image2, image3, image4];

export default Events;
