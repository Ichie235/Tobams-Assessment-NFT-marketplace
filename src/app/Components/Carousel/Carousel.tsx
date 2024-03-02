import { NftLatestproject } from "../../../../library/nftData";
import React, { useState, useEffect, useRef } from "react";
import RightArrowSlide from "../../../../svg/RightArrowSlide";
import LatestNftCard from "../NftCard/LatestNftCard";
import Link from "next/link";
import LeftArrowSlide from "../../../../svg/LeftArrowSlide";

export default function Carousel() {
  const itemsToShow = 5;
  const [activeIndex, setActiveIndex] = useState(0);
  const autoSlideTime = 5000;
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % (NftLatestproject.length - itemsToShow + 1)
      );
    }, autoSlideTime);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex(
      (current) => (current + 1) % (NftLatestproject.length - itemsToShow + 1)
    );
  };

  const prevSlide = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + NftLatestproject.length - itemsToShow + 1) %
        (NftLatestproject.length - itemsToShow + 1)
    );
  };

  // Calculate the translateX percentage for the smooth sliding effect
  const slidePercentage = -(60 / itemsToShow) * activeIndex;
  return (
    <>
      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-4 transition-transform duration-700 ease-out"
          style={{ transform: `translateX(${slidePercentage}%)` }}
        >
          {NftLatestproject.slice(activeIndex, activeIndex + itemsToShow).map(
            (item, index) => (
              <Link key={index} href={`/NFT/${item.slug}`}>
                <span
                  className={`w-1/${itemsToShow} flex-none transition-transform duration-500 ease-in-out`}
                >
                  <LatestNftCard
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    creatorImage=""
                    image={item.image}
                    time={item.time}
                    bidersIcon={item.bidersIcon}
                    bidersNumber={item.bidersNumber}
                    likes={item.likes}
                  />
                </span>
              </Link>
            )
          )}
        </div>
      </div>
      <button className="absolute  -left-12 md:left-3 top-[74rem] md:top-[90rem] lg:top-[104rem]" onClick={prevSlide}>
        <LeftArrowSlide />
      </button>
      <button className="absolute -right-12 md:right-3 top-[74rem] md:top-[90rem] lg:top-[104rem]" onClick={nextSlide}>
        <RightArrowSlide />
      </button>
    </>
  );
}
