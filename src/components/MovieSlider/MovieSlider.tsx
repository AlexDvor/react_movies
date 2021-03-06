import Slider from 'react-slick';

type TProps = {
  children: number | JSX.Element | JSX.Element[];
};

export default function MovieSlider({ children }: TProps) {
  const settings = {
    dots: false,
    infinite: true, // Infinitely wrap around contents
    slidesToShow: 8,
    slidesToScroll: 3,
    arrows: true,
    draggable: false,
    swipe: true,
    initialSlide: 0,
    touchThreshold: 15, //swipe-speed

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          infinite: true,
        },
      },

      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
        },
      },

      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
}
