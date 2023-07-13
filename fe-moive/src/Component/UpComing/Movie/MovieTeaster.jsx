// import { Box } from "@mui/material";
// import React, { useEffect, useRef } from "react";
// import Slider from "react-slick";
// import { styled } from "styled-components";
// import { SwiperSlide } from "swiper/react";

// const MediaVideo = ({ video }) => {
//   const iframeRef = useRef();
//   console.log("video", video);
//   useEffect(() => {
//     console.log("ifram");
//     const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
//     iframeRef.current.setAttribute("height", height);
//   }, [video]);

//   return (
//     <Box sx={{ height: "max-content" }}>
//       <iframe
//         key={video.key}
//         src={`https://www.youtube.com/embed/${video.key}?controls=0`}
//         ref={iframeRef}
//         width="100%"
//         title={video.id}
//         style={{ border: 0 }}
//       ></iframe>
//     </Box>
//   );
// };
// const MovieTeaster = ({ videoTester }) => {
//   console.log("videoTesterrr", videoTester);
//   const Container = styled.div`
//     height: 100%;
//     width: 60%;
//   `;
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     // nextArrow: <SampleNextArrow className="sample" />,
//     // prevArrow: <SamplePrevArrow />,

//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <Container>
//       <h1 className="text-center mb-5" style={{ color: "wheat" }}>
//         Teaster
//       </h1>
//       <Box
//         sx={{
//           "& .swiper-slide": {
//             width: { xs: "50%", md: "25%", lg: "20.5%" },
//             color: "primary.contrastText",
//           },
//         }}
//       >
//         {videoTester?.map((video, index) => {
//           <SwiperSlide key={index}>
//             <MediaVideo video={video} />
//           </SwiperSlide>;
//         })}
//       </Box>
//     </Container>
//   );
// };

// export default MovieTeaster;
import React from "react";
import Slider from "react-slick";
import { styled } from "styled-components";

const MovieTeaster = ({ videoTester }) => {
  console.log("videoTesterr", videoTester);
  const Container = styled.div`
    height: 100%;
    width: 60%;
  `;
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // nextArrow: <SampleNextArrow className="sample" />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <h1 className="text-center mb-5" style={{ color: "wheat" }}>
        Trailer
      </h1>
      <Slider {...settings}>
        {videoTester?.map((item) => {
          return (
            <div>
              <iframe
                type="text/html"
                style={{ backgroundColor: "#000" }}
                width="1000px"
                height="500px"
                src={`https://www.youtube.com/embed/${item?.key}?controls=1`}
                // src={"https://www.themoviedb.org/video/play?key=" + videoTester?.key}
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          );
        })}
      </Slider>
    </Container>
  );
};

export default MovieTeaster;