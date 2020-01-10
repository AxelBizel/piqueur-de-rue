import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import image1 from '../img/agency/1_resize.jpg'
import image2 from '../img/agency/2_resize.jpg'
import image3 from '../img/agency/3_resize.jpg'
import image4 from '../img/agency/4_resize.jpg'
import image5 from '../img/agency/5_resize.jpg'
import './carrouselAgency.css'

const items = [
  {
    src: `${image1}`,
  },
  {
    src: `${image2}`,
  },
  {
    src: `${image3}`,
  },
  {
    src: `${image4}`,
  },
  {
    src: `${image5}`,
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
        interval={2100}
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

// import React, { useState, useEffect } from 'react';
// import { useTransition, animated, config } from 'react-spring';
// import image1 from '../img/agency/1_resize.jpg';
// import image2 from '../img/agency/2_resize.jpg';
// import image3 from '../img/agency/3_resize.jpg';
// import image4 from '../img/agency/4_resize.jpg';
// import image5 from '../img/agency/5_resize.jpg';

// const slides = [
//   { id: 0, url: `${image1}`},
//   { id: 1, url: `${image2}`},
//   { id: 2, url: `${image3}`},
//   { id: 3, url: `${image4}`},
//   { id: 4, url: `${image5}`},
// ]

// const CarrouselAgency = () => {
//   const [index, set] = useState(0)
//   const transitions = useTransition(slides[index], item => item.id, {
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//     config: config.molasses,
//   })
//   useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 4000), [])
//   return transitions.map(({ item, props, key }) => (
//     <animated.div
//       key={key}
//       class="bg"
//       style={{ ...props, backgroundImage: `url(${item.url})` }}
//     />
//   ))
// }

// export default CarrouselAgency;