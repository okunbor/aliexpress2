
import { BrowserView, MobileOnlyView } from "react-device-detect"
import cat1 from   "../assets/images/category/category-1.jpg"
import cat2 from   "../assets/images/category/category-2.jpg"
import cat3 from   "../assets/images/category/category-3.jpg"
import cat4 from   "../assets/images/category/category-4.jpg"
import cat5 from "../assets/images/category/category-5.jpg"




import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom"


// import  "../assets/main.css"

const Categories = () => {
    
    return (
        // <!-- categories -->
  <>      
     <BrowserView>
        <div className="container py-16    ">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6 ">shop by category</h2>

    <Swiper
        modules={[Virtual, Navigation, Pagination]}
        // onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={true}
        virtual
      >
            {/* <div className="grid grid-cols-3 gap-3   "> */}
            <SwiperSlide>
                <div className="relative  w-36 h-36 overflow-hidden rounded-full group ">
                    <img src=
                    {cat1} alt="category 1" className="  w-36 h-36 rounded-full" />
                  <Link   to="#"
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Bedroom</Link>
                </div>

                </SwiperSlide>

                <SwiperSlide>
                <div className="relative  w-36 h-36 rounded-full overflow-hidden group div-slide">
                    <img src={cat2} alt="category 1" className=" w-36 h-36 rounded-full"/>
                    <Link to="#"
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Mattrass</Link>
                </div>

                </SwiperSlide>

                <SwiperSlide>

                <div className="relative w-36 h-36 rounded-full overflow-hidden group div-slide">
                    <img src={cat3} alt="category 1" className=" w-36 h-36 rounded-full"/>
                    <Link to="#"
                        className="absolute  inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Outdoor
                    </Link>
                </div>

                </SwiperSlide>

                <SwiperSlide>

                <div className="relative w-36 h-36 rounded-full overflow-hidden group div-slide">
                    <img src={cat4} alt="category 1" className=" w-36 h-36 rounded-full"/>
                    <Link to="#"
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Sofa</Link>
                </div>

                </SwiperSlide>
                <SwiperSlide>

                <div className="relative w-36 h-36 rounded-full overflow-hidden group div-slide">
                    <img src={cat5} alt="category 1" className="  w-36 h-36 rounded-full"/>
                    <Link to="#"
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Living
                        Room</Link>
                </div>
                </SwiperSlide>
                <SwiperSlide>

                <div className="relative w-36 h-36 rounded-full overflow-hidden group div-slide">
                    <img src={cat1} alt="category 1" className=" w-36 h-36 rounded-full"/>
                    <Link to="#"
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Kitchen</Link>
                {/* </div> */}

            </div>

                </SwiperSlide>

            </Swiper>
        </div>
    </BrowserView>


    <MobileOnlyView>
    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6 ">shop by category</h2>
      <Swiper
        // onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
                >
                   
        <SwiperSlide>
             <div className="relative  w-36 h-36 gap-3 overflow-hidden rounded group ">
                    <img src=
                    {cat1} alt="category 1" className="  w-36 h-36  " />
                    <Link to="#"
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Bedroom</Link>
                </div>
        </SwiperSlide>
        <SwiperSlide> <div className="relative  w-36 h-36 overflow-hidden rounded group ">
                    <img src=
                    {cat1} alt="category 1" className="  w-36 h-36 rounded" />
                    <Link to="#"
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Bedroom</Link>
                </div></SwiperSlide>
                    <SwiperSlide>
                    <div className="relative  w-36 h-36 overflow-hidden rounded group ">
                    <img src=
                    {cat1} alt="category 1" className="  w-36 h-36 rounded-sm" />
                    <Link to="#"
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Bedroom</Link>
                </div>
        </SwiperSlide>
                    <SwiperSlide>
                    <div className="relative  w-36 h-36 overflow-hidden rounded-5 group ">
                    <img src=
                    {cat1} alt="category 1" className="  w-36 h-36 rounded" />
                    <Link to="#"
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Bedroom</Link>
                </div>
        </SwiperSlide>
      </Swiper>

                
    </MobileOnlyView>
 </>       

    )
}


export default Categories;



