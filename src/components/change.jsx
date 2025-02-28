import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const videoSources = ["/video1.mp4", "/video2.mp4", "/video3.mp4"];

const Change = () => {
  const swiperRef = useRef(null);
  const videoRefs = useRef([]); // Store video elements
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to play the next video when the current one ends
  const handleVideoEnd = () => {
    if (swiperRef.current) {
      const nextIndex = (activeIndex + 1) % videoSources.length;
      swiperRef.current.slideTo(nextIndex); // Move to the next slide
    }
  };

  // Play the active video when slide changes
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.play().catch(() => console.log("Auto-play blocked")); // Play active video
        } else {
          video.pause(); // Pause other videos
          video.currentTime = 0; // Reset video to start
        }
      }
    });
  }, [activeIndex]);

  return (
    <div className="w-full md:min-h-[100vh] h-[60vh] bg-black flex items-center justify-center">
      <div className="carouseal-div w-[90vw] md:w-[85vw] h-[35vh] md:h-[43vw] flex items-center justify-center pt-10">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Track active slide
          direction="vertical"
          slidesPerView={1}
          allowTouchMove={false} // Disable manual swiping
          className="w-full h-full"
        >
          {videoSources.map((video, index) => (
            <SwiperSlide
              key={index}
              className="relative flex items-center justify-center font-grotesk"
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={video}
                className="w-full h-full md:rounded-2xl object-cover"
                muted
                onEnded={handleVideoEnd} // Move to next video after ending
              ></video>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Change;
