import React, { useState } from 'react';

const slides = [
    {
      id: 1,
      image: 'https://i.ibb.co/zbSRt23/146-1464939-visa-on-arrival-paris-climate-agreement-map-hd-removebg-preview.png',
      title: 'Explore Visa Opportunities with Visa Navigator',
      description: 'Find the best visa options for your travels and make your journey smoother!',
      cta: 'Get Started',
      link: '/register'
    },
    {
      id: 2,
      image: 'https://i.ibb.co/L5gMw80/istockphoto-1434060654-612x612-removebg-preview.png',
      title: 'Seamless Visa Applications with Visa Navigator',
      description: 'Easily navigate through the visa application process with expert guidance.',
      cta: 'Get Started',
      link: '/register'
    },
    {
      id: 3,
      image: 'https://i.ibb.co/K5x1LGG/banner.png',
      title: 'Plan Your Travels with Visa Navigator',
      description: 'Prepare for your next adventure with the right visa in hand.',
      cta: 'Get Started',
      link: '/register'
    }
  ];
  

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative  mt-10 mx-auto h-64 md:h-96 overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 rounded-md transition-opacity dark:bg-gray-900 text-black dark:text-white bg-slate-100 duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="absolute md:p-12 p-2 inset-0  flex flex-col justify-center items-start p-8">
                        <h2 className="text-2xl md:text-4xl   font-bold">{slide.title}</h2>
                        <p className="mt-4 ">{slide.description}</p>
                        <a href={slide.link} className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                            {slide.cta}
                        </a>
                    </div>
                    <div className="justify-end items-end text-center">
                    <div className="flex justify-end">
    <img src={slide.image} alt="Description" />
</div>                   
</div>
                </div>
            ))}

            <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow-lg hover:bg-gray-200">
                &#10094;
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow-lg hover:bg-gray-200">
                &#10095;
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 w-2 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Banner;