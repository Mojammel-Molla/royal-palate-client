import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import useAxios from '../../../hooks/useAxios';
const CustomerReviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    axios.get('/all-reviews').then(res => {
      setAllReviews(res.data);
    });
  }, [axios]);

  console.log(allReviews);
  return (
    <div className="bg-[#f4f1ea] border-t-2">
      <h1 className="text-center md:text-5xl font-bold bg-white mb-10">
        -- Our Honorable Clients --
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {allReviews?.map(review => (
          <SwiperSlide key={review.id}>
            <div className="text-center max-w-2xl mx-auto bg-white md:h-[300px] px-5 space-y-3 py-5">
              <Rating
                className="mx-auto"
                style={{ maxWidth: 180, width: '100%' }}
                readOnly
                value={review.rating}
              />

              <p className="text-xl">"{review.comment}"</p>
              <h4 className="text-[#c7403e] font-medium">
                {review.customer_name}
              </h4>
              <img
                className="w-12 h-12 rounded-full mx-auto"
                src={review.customer_photo}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReviews;
