import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const items = [
  {
    src: '/IMG/agency/1.jpg',
    // altText: 'Slide 1',
    // caption: 'Slide 1'
  },
  {
    src: './IMG/agency/2.jpg',
    // altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  {
    src: './IMG/agency/3.jpg',
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  },
  {
    src: './IMG/agency/4.jpg',
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  },
  {
    src: './IMG/agency/5.jpg',
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  }
];

const CarrouselAgency = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
      <div className="carrouselDiv">
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
  );
}

export default CarrouselAgency;