import React, { useState, useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { RiStarSFill } from "react-icons/ri";
import { Title } from "./Title";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const reviews = [
    {
      name: "Jackie Chan",
      image:
        "https://s3-alpha-sig.figma.com/img/5128/8c19/4113e2acec5d80ff83f718dc17e06b01?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vwb~wCMGLBe-3D2NS1XiaXZpisGhCw--SN4JUOtZIYClvg3XJ12nqQhJy3niu5bhkaYKx8nentDIB1jBIBzTXj8bc7vKWdj7HqW-Zt~qQrbMoCl39s2hoU9cCXZDj6BX8mehexLUK3iwi6Qs0yuZ9WRE4Ac04XhvALLImAmneGSqYRC1Ma0F4~luq-7OmDm9lqhUm-0x8RpDC-n5Km-YEoj4GdZl9zRXtQy7SfluXa5nQs0CnMA5gKzZdfJAa1IY6V3wdZRf0BdixvoZEUWz2mulGP31wncRoobhafcOTQKBfqztYvjEI2QGhmtOEkaghNeYqOoF5s5RJsmk6RjQGg__",
      title: "Ferrimy Construction",
      content: "“We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.“",
      stars: Array(5).fill(<RiStarSFill />),
    },
    {
      name: "James Smith",
      image:
        "https://s3-alpha-sig.figma.com/img/6921/d21f/23f56e42de01100fc8a8984566289a24?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nEowjapplVxOIRoMp6eH47b8PrA3bAWnFOPNdKSxGPziwyu4hlg~MmbdG36iJxW-C-HqfK~5OvtK0Y7JwBoQ2pRLRYuSObsbN0rNczIeWXcREXC8zltWb2IoZtTHk7Fh-58RuUTAadA-804piMHjTgGXWI6cD1JY-M9q-TXg5rrnNpZGnaJEqAvftQetR-GUtWQwS5A4pzxqvjuqE8eGfVthsbJ3~jGdirKB1oOJKHo6sPkYiTbmSph5L2ewh7TiS3QBoztr5XuOgNYt5Uu-a0C7FxMMxBdLpVUW-tcf3K~DDFPrWpT0In8BTXWBBH8yMmt1YoQ6V0SFZjjNiAEU4g__",
      title: "VU Creative Studio",
      content: "“We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.”",
      stars: Array(4).fill(<RiStarSFill />),
    },
    {
      name: "Jane Smith",
      image:
        "https://s3-alpha-sig.figma.com/img/fe38/4b01/9ae4eb8e457d9965fe6cfdd023632a34?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PJRVUrxJBaSVrvZAk6J4But8oxgZLsVP0on5PHa8d30PidOyM1ByIJz8T7RmbEHmI0o2HL6JzOWotb0jultAmUc4bYYiIVZ2jlQn2pGraqHWD3cZFEOhmxVd9pX1XkieYCpNu-rtFDXJvAIZwkbm~1GHZKemzmbsvcjhk7LJxFWohPeWW4qo2sos0XV-o79OXSRw3puXxk-5xWgHIkyLbSDErsU4Duhr4mAmPaJCrGS8dORrjw51ldNvyH35eGdnNHWJXysU-qfvIuHr7~dGIdm-WhM~vJhkEcKNTQ8VDgbS5AJG6YJi35A~-ofYIWiNxUXQSE9nWNjHly2WeuG1Bg__",
      title: "Peka Restaurant",
      content: "“We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.”",
      stars: Array(3).fill(<RiStarSFill />),
    },
    {
      name: "Jerry Stone",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "ABG Construction, Inc.",
      content: "“We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.”",
      stars: Array(3).fill(<RiStarSFill />),
    },
    
  ];

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <div className="rounded-2xl  2xl:px-0 mt-[60px] md:mt-[140px]">
         <Title
        title={"Testimonials"}
        description={
          "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        }
      />
      <div className="bg-[#1a1a1a] text-white pt-14 rounded-2xl px-4 md:flex md:space-x-10  z-[600]">
      {/* <img className="hidden lg:block  absolute top-32 left-40 -z-10 w-3/4" src={vector} alt="" />
      <img className="hidden lg:block  absolute top-0 left-20 -z-10 w-[600px] h-[420px]" src={ellipse} alt="" /> */}
        <div className="py-6 lg:text-right px-6 lg:w-96">
          <h1 className="text-4xl font-semibold">What Clients Say About Us</h1>
          <div className="lg:flex hidden lg:space-x-4 py-10 items-center justify-end z-[8000]">
            <button
              onClick={() => {
                if (currentIndex !== 0) {
                  swiperRef.current.swiper.slidePrev();
                }
              }}
              style={{ opacity: currentIndex === 0 ? 0.4 : 1 }}
            >
              <FaArrowLeft className="border rounded-full h-12 w-12 p-3 text-[#B9F73E] border-[#B9F73E]" />
            </button>
            <button
              onClick={() => {
                if (currentIndex !== reviews.length - 1) {
                  swiperRef.current.swiper.slideNext();
                }
              }}
              style={{ opacity: currentIndex === reviews.length - 1 ? 0.4 : 1 }}
            >
              <FaArrowRight className="border rounded-full h-12 w-12 p-3 text-[#B9F73E] border-[#B9F73E]" />
            </button>
          </div>
        </div>
        <Swiper
          ref={swiperRef}
          className="sm:w-3/4"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
        //   pagination={{ clickable: true }}
          effect="fade"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          fadeEffect={{ crossFade: true }}
          breakpoints={{
            468: {
              slidesPerView: 1.1,
            },
            1024: {
              slidesPerView: 3,
              pagination: false,
            },
          }}
        >
          <div className="flex">
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`bg-[#1a1a1a] opacity-100 py-4 px-4 text-white border-2 rounded-2xl mb-10 min-h-60 z-[8000] ${
                    currentIndex === index ? "bg-[#1a1a1a] opacity-100" : "opacity-40"
                  }`}
                >
                  <p className="flex items-center justify-end text-[#B9F73E]">
                    {review.stars}
                  </p>
                  <p className="py-4">{review.content}</p>
                  <div className="">
                    {/* <img
                      className="object-cover w-20 h-20 rounded-full"
                      src={review.image}
                      alt=""
                    /> */}
                    <div>
                      <h2 className=" font-bold">-{review.name}</h2>
                      <h3 className=" text-sm text-gray-300">
                        {review.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};
