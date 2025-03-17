import React, { useRef } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const CustomerReviews = () => {
  const testimonialsRef = useRef(null);

  const scroll = (direction) => {
    if (testimonialsRef.current) {
      const { scrollLeft, clientWidth } = testimonialsRef.current;
      const cardWidth = 436; // Width of each testimonial card
      const gap = 16; // Space between cards
      const cardsToScroll = 3; // Number of visible cards
      const scrollAmount = direction === "left"
        ? scrollLeft - (cardWidth + gap) * cardsToScroll
        : scrollLeft + (cardWidth + gap) * cardsToScroll;
      testimonialsRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const testimonials = [
    {
      name: "Emily R.",
      location: "Seattle, WA",
      date: "05/10/2024",
      review: "Emily provided exceptional service during my printer setup. She was patient and explained everything clearly, ensuring I understood all the features. The setup process was seamless, and I truly appreciated her expertise.",
      rating: 5,
      verified: true,
    },
    {
      name: "Daniel P.",
      location: "Austin, TX",
      date: "06/15/2024",
      review: "Daniel was fantastic! He walked me through the entire setup process for my new device and even transferred my data from my old phone. His attention to detail made all the difference.",
      rating: 5,
      verified: true,
    },
    {
      name: "Sophia M.",
      location: "New York, NY",
      date: "07/22/2024",
      review: "Sophia did a great job setting up my home network. She optimized the settings and made sure everything was running smoothly. Her tips for maintaining the system were incredibly helpful!",
      rating: 5,
      verified: true,
    },
    {
      name: "Liam H.",
      location: "Miami, FL",
      date: "08/30/2024",
      review: "Liam was very knowledgeable and efficient in installing my audio system. He took the time to explain the features and even provided tips for achieving the best sound quality. Highly recommended!",
      rating: 5,
      verified: true,
    },
    {
      name: "Olivia T.",
      location: "San Diego, CA",
      date: "09/05/2024",
      review: "Olivia made my computer setup a breeze. She was thorough, removing unnecessary software and showing me how to optimize performance. Her personalized advice was invaluable.",
      rating: 5,
      verified: true,
    },
    {
      name: "Noah J.",
      location: "Portland, OR",
      date: "09/10/2024",
      review: "Noah did an outstanding job with my tablet setup. He explained everything clearly and made sure I knew how to use all the features. The entire process was smooth and easy!",
      rating: 5,
      verified: true,
    },
  ];

  return (
    <div className="bg-white py-10 relative w-[1431px] ml-[231px]">
      <h2 className="text-center text-3xl font-bold mb-6 text-[#1E3A8A] mt-[30px]">What our customers say</h2>
      <div className="relative">
        <button
          className="absolute top-1/2 left-0 transform text-black p-2 rounded-full shadow-md focus:outline-none ml-[-55px] transition-colors duration-300 z-10"
          onClick={() => scroll("left")}
          style={{ width: '32px', height: '32px' }}
        >
          <ArrowBackIosIcon style={{ fontSize: '20px' }} />
        </button>
        <button
          className="absolute top-1/2 right-0 transform  text-black p-2 rounded-full shadow-md focus:outline-none transition-colors duration-300 z-10"
          onClick={() => scroll("right")}
          style={{ width: '32px', height: '32px' }}
        >
          <ArrowForwardIosIcon style={{ fontSize: '20px' }} />
        </button>
        <div
          ref={testimonialsRef}
          className="flex overflow-x-hidden"
          style={{ width: 'calc(100% - 64px)', padding: '0 16px' }}
        >
          <div className="flex" style={{ gap: '16px' }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg flex-shrink-0"
                style={{ width: '436px' }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-yellow-500">
                    {"★".repeat(testimonial.rating)}
                  </div>
                  <div className="text-gray-500 text-sm">{testimonial.date}</div>
                </div>
                <p className="mt-4">{testimonial.review}</p>
                <div className="mt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  {testimonial.verified && (
                    <p className="text-[#1E3A8A] text-sm">Verified ✓</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
