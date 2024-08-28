import React from "react";
import video from "../../assets/videoframe_0.mp4";

function Main() {
  return (
    <>
      {/* Phàn slider  */}
      <div className="slider h-[530px] slider-bg bg-cover bg-no-repeat bg-bottom mb-24">
        <div
          className="w-full h-full flex justify-center
         items-center bg-gray-900 bg-opacity-30"
        >
          <div className=" mx-16 text-white text-center">
            <div className=" uppercase text-sm mb-6 font-bold">
              Best place to buy Coffee
            </div>
            <div className=" font-medium text-5xl mb-6">Coffee Mugs</div>
            <div className="font-medium text-lg mb-6">
              The most versatile furniture system ever created. Designed to fit
              your life, made to move and grow.
            </div>
            <div className="flex justify-center">
              {/* w-max: Đặt chiều rộng của div theo nội dung bên trong, không vượt quá nội dung.
            tracking-wider: Tăng khoảng cách giữa các ký tự trong chuỗi "Explore Our Products". */}
              <div className=" bao-button bg-white text-gray-900 w-max">
                Explore Our Products
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End phần slider */}

      {/* Phần story */}

      <div className="bao-subheadline ">
        <div className="bao-subheadline-deco-line "></div>
        <div className="bao-subheadline-label ">Ours Story Coffee</div>
        <div className="bao-subheadline-deco-line "></div>
      </div>

      <div className="story flex flex-col lg:flex-row justify-center gap-4 items-center w-[95%] lg:w-[65%] mx-auto mb-20">
        <div className="basis-1/2">
          <video autoPlay loop muted className="w-full h-full object-cover min-h-[300px]">
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="  basis-1/2 text-center lg:text-left lg:pl-8">
          <div className="text-2xl mb-6 leading-10">
            Even the all-powerful Pointing has no control about the blind texts.
          </div>
          <div className="text-gray-500 leading-6 mb-6">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth.
            <br className="hidden lg:block" />
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life. One day, however, a small line
            of blind text by the name of Lorem Ipsum decided to leave for the
            far World of Grammar.
          </div>

          <div className="">
            <a
              href="abc"
              className="text-coffee-400 hover:text-coffee-600 relative
               after:absolute after:-bottom-2 after:left-0 after:bg-coffee-50 hover:after:bg-coffee-200 
               after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-300"
            >
              Read the full Story
            </a>
          </div>
        </div>
      </div>

      {/* End phần story */}

      {/* --------------Phần Featured Mugs------------------ */}
      <div className="bao-subheadline ">
        <div className="bao-subheadline-deco-line "></div>
        <div className="bao-subheadline-label ">Featured Mugs</div>
        <div className="bao-subheadline-deco-line "></div>
      </div>
      <div className="featured-mugs w-[95%] lg:w-[65%] mx-auto mb-20">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 md:gap-4">
          {/* Ảnh 1 */}
          <div className="bao-product-cart ">
            {/* ảnh */}
            <div className=" h-[400px] sm:h-[530px] bg-[url('/src/assets/featured-mugs-01.jpg')] bg-cover bg-no-repeat bg-bottom">
              <a href="#" alt="Bao" />
              {/* Để group ở đây để nó có thể kiểm soát hover */}
              <div
                className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10
               hover:transition-all hover:ease-in-out hover:duration-300 relative group "
              >
                {/* <div className="absolute right-3 top-3 bg-white py-2 px-4 text-center font-semibold text-coffee-400 rounded">
                  On Sale
                </div> */}
                <div className=" flex justify-center ">
                  <div
                    className="bao-button absolute bg-white text-gray-900 w-11/12 bottom-4 
                    hidden group-hover:block group-hover:animate-fadeIn "
                  >
                    Explore Mug
                  </div>
                </div>
              </div>
            </div>

            {/* Title and price */}
            <div className="text-center mt-8">
              <a href="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Pink Premium Ceramic
                </div>
              </a>
              <div className="bao-price">
                {/* <span className="text-lg text-coffee-200"> $50.00</span> */}
                <span className=" text-gray-400 line-through">$99.00 USD</span>
              </div>
            </div>
          </div>
          {/* End ảnh 1 */}

          {/* Ảnh 2 */}
          <div className="bao-product-cart ">
            {/* ảnh */}
            <div className="h-[400px] sm:h-[530px] bg-[url('/src/assets/featured-mugs-02.jpg')] bg-cover bg-no-repeat bg-bottom">
              <a href="#" alt="Bao" />
              {/* Để group ở đây để nó có thể kiểm soát hover */}
              <div
                className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10
               hover:transition-all hover:ease-in-out hover:duration-300 relative group "
              >
                <div className="absolute right-3 top-3 bg-white py-2 px-4 text-center font-semibold text-coffee-400 rounded">
                  On Sale
                </div>
                <div className=" flex justify-center ">
                  <div
                    className="bao-button absolute bg-white text-gray-900 w-11/12 bottom-4 
                    hidden group-hover:block group-hover:animate-fadeIn "
                  >
                    Explore Mug
                  </div>
                </div>
              </div>
            </div>

            {/* Title and price */}
            <div className="text-center mt-8">
              <a href="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Golden Designers Mug
                </div>
              </a>
              <div className="bao-price">
                <span className="text-lg text-coffee-200"> $50.00</span>
                <span className="ml-2 text-gray-400 line-through">
                  $69.00 USD
                </span>
              </div>
            </div>
          </div>
          {/*End  Ảnh 2 */}
        </div>
      </div>

      {/* --------------End Phần Featured Mugs------------------ */}

      {/* ------------Phần More-Product---------------- */}
      <div className="bao-subheadline ">
        <div className="bao-subheadline-deco-line "></div>
        <div className="bao-subheadline-label ">More Product</div>
        <div className="bao-subheadline-deco-line "></div>
      </div>
      <div className="more-products w-[95%] lg:w-[65%] mx-auto mb-16">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
          {/* Ảnh 1 */}
          <div className="bao-product-cart ">
            {/* ảnh */}
            <div className=" h-[300px] bg-[url('/src/assets/featured-mugs-01.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#" alt="Bao" />
              {/* Để group ở đây để nó có thể kiểm soát hover */}
              <div
                className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10
               hover:transition-all hover:ease-in-out hover:duration-300 relative group "
              >
                {/* <div className="absolute right-3 top-3 bg-white py-2 px-4 text-center font-semibold text-coffee-400 rounded">
                  On Sale
                </div> */}
                <div className=" flex justify-center ">
                  <div
                    className="bao-button absolute bg-white text-gray-900 w-11/12 bottom-4 
                    hidden group-hover:block group-hover:animate-fadeIn "
                  >
                    Explore Mug
                  </div>
                </div>
              </div>
            </div>

            {/* Title and price */}
            <div className="text-center my-8">
              <a href="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Pink Premium Ceramic
                </div>
              </a>
              <div className="bao-price">
                {/* <span className="text-lg text-coffee-200"> $50.00</span> */}
                <span className=" text-gray-400 line-through">$99.00 USD</span>
              </div>
            </div>
          </div>
          {/* End ảnh 1 */}

          {/* Ảnh 2 */}
          <div className="bao-product-cart ">
            {/* ảnh */}
            <div className=" h-[300px] bg-[url('/src/assets/featured-mugs-02.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#" alt="Bao" />
              {/* Để group ở đây để nó có thể kiểm soát hover */}
              <div
                className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10
               hover:transition-all hover:ease-in-out hover:duration-300 relative group "
              >
                <div className="absolute right-3 top-3 bg-white py-2 px-4 text-center font-semibold text-coffee-400 rounded">
                  On Sale
                </div>
                <div className=" flex justify-center ">
                  <div
                    className="bao-button absolute bg-white text-gray-900 w-11/12 bottom-4 
                    hidden group-hover:block group-hover:animate-fadeIn "
                  >
                    Explore Mug
                  </div>
                </div>
              </div>
            </div>

            {/* Title and price */}
            <div className="text-center mt-8">
              <a href="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Golden Designers Mug
                </div>
              </a>
              <div className="bao-price">
                <span className="text-lg text-coffee-200"> $50.00</span>
                <span className="ml-2 text-gray-400 line-through">
                  $69.00 USD
                </span>
              </div>
            </div>
          </div>
          {/*End  Ảnh 2 */}
          {/* Ảnh 3 */}
          <div className="bao-product-cart ">
            {/* ảnh */}
            <div className=" h-[300px] bg-[url('/src/assets/featured-mugs-01.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#" alt="Bao" />
              {/* Để group ở đây để nó có thể kiểm soát hover */}
              <div
                className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10
               hover:transition-all hover:ease-in-out hover:duration-300 relative group "
              >
                {/* <div className="absolute right-3 top-3 bg-white py-2 px-4 text-center font-semibold text-coffee-400 rounded">
                  On Sale
                </div> */}
                <div className=" flex justify-center ">
                  <div
                    className="bao-button absolute bg-white text-gray-900 w-11/12 bottom-4 
                    hidden group-hover:block group-hover:animate-fadeIn "
                  >
                    Explore Mug
                  </div>
                </div>
              </div>
            </div>

            {/* Title and price */}
            <div className="text-center my-8">
              <a href="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Pink Premium Ceramic
                </div>
              </a>
              <div className="bao-price">
                {/* <span className="text-lg text-coffee-200"> $50.00</span> */}
                <span className=" text-gray-400 line-through">$99.00 USD</span>
              </div>
            </div>
          </div>
          {/*End  Ảnh 3 */}
          {/* Ảnh 4 */}
          <div className="bao-product-cart ">
            {/* ảnh */}
            <div className=" h-[300px] bg-[url('/src/assets/featured-mugs-01.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#" alt="Bao" />
              {/* Để group ở đây để nó có thể kiểm soát hover */}
              <div
                className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10
               hover:transition-all hover:ease-in-out hover:duration-300 relative group "
              >
                {/* <div className="absolute right-3 top-3 bg-white py-2 px-4 text-center font-semibold text-coffee-400 rounded">
                  On Sale
                </div> */}
                <div className=" flex justify-center ">
                  <div
                    className="bao-button absolute bg-white text-gray-900 w-11/12 bottom-4 
                    hidden group-hover:block group-hover:animate-fadeIn "
                  >
                    Explore Mug
                  </div>
                </div>
              </div>
            </div>

            {/* Title and price */}
            <div className="text-center my-8">
              <a href="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Pink Premium Ceramic
                </div>
              </a>
              <div className="bao-price">
                {/* <span className="text-lg text-coffee-200"> $50.00</span> */}
                <span className=" text-gray-400 line-through">$99.00 USD</span>
              </div>
            </div>
          </div>
          {/*End  Ảnh 3 */}
          {/*  Ảnh 5 */}
          <div className="bao-product-cart ">
            {/* ảnh */}
            <div className=" h-[300px] bg-[url('/src/assets/featured-mugs-01.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#" alt="Bao" />
              {/* Để group ở đây để nó có thể kiểm soát hover */}
              <div
                className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10
               hover:transition-all hover:ease-in-out hover:duration-300 relative group "
              >
                {/* <div className="absolute right-3 top-3 bg-white py-2 px-4 text-center font-semibold text-coffee-400 rounded">
                  On Sale
                </div> */}
                <div className=" flex justify-center ">
                  <div
                    className="bao-button absolute bg-white text-gray-900 w-11/12 bottom-4 
                    hidden group-hover:block group-hover:animate-fadeIn "
                  >
                    Explore Mug
                  </div>
                </div>
              </div>
            </div>

            {/* Title and price */}
            <div className="text-center my-8">
              <a href="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Pink Premium Ceramic
                </div>
              </a>
              <div className="bao-price">
                {/* <span className="text-lg text-coffee-200"> $50.00</span> */}
                <span className=" text-gray-400 line-through">$99.00 USD</span>
              </div>
            </div>
          </div>
          {/*End  Ảnh 5 */}
          {/* Ảnh 6 */}
          <div className="bao-product-cart ">
            {/* ảnh */}
            <div className=" h-[300px] bg-[url('/src/assets/featured-mugs-01.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#" alt="Bao" />
              {/* Để group ở đây để nó có thể kiểm soát hover */}
              <div
                className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10
               hover:transition-all hover:ease-in-out hover:duration-300 relative group "
              >
                {/* <div className="absolute right-3 top-3 bg-white py-2 px-4 text-center font-semibold text-coffee-400 rounded">
                  On Sale
                </div> */}
                <div className=" flex justify-center ">
                  <div
                    className="bao-button absolute bg-white text-gray-900 w-11/12 bottom-4 
                    hidden group-hover:block group-hover:animate-fadeIn "
                  >
                    Explore Mug
                  </div>
                </div>
              </div>
            </div>

            {/* Title and price */}
            <div className="text-center my-8">
              <a href="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Pink Premium Ceramic
                </div>
              </a>
              <div className="bao-price">
                {/* <span className="text-lg text-coffee-200"> $50.00</span> */}
                <span className=" text-gray-400 line-through">$99.00 USD</span>
              </div>
            </div>
          </div>
          {/*End  Ảnh 6 */}
        </div>
      </div>
      {/* ------------End Phần More-Product---------------- */}

      {/* --------------Start coffee magazine free -------------- */}

      <div className="bao-subheadline ">
        <div className="bao-subheadline-deco-line "></div>
        <div className="bao-subheadline-label ">
          Buy 2 mugs and get a coffee magazine free
        </div>
        <div className="bao-subheadline-deco-line "></div>
      </div>
      <div className="coffee-magazine w-[95%] lg:w-[65%] mx-auto mb-24">
        <div className="flex flex-col md:flex-row justify-center items-center ">
          <div className="bao-magazine-image basis-1/2 md:flex md:flex-row gap-5 w-full ">
            <div className="bao-magazine-big-image h-[280px] basis-2/3 mb-4 md:mb-0 bg-[url('/src/assets/magazine-image-01.jpg')] bg-cover bg-no-repeat bg-center"></div>

            <div className="bao-magazine-small-image basis-1/3 flex flex-row md:flex-col gap-5">
              <div className=" h-[130px] xs:h[200px] md:h-[130px] basis-1/2 bg-[url('/src/assets/magazine-image-02.jpg')] bg-cover bg-no-repeat bg-center "></div>
              <div className=" h-[130px] xs:h[200px] md:h-[130px]  basis-1/2 bg-[url('/src/assets/magazine-image-03.jpg')] bg-cover bg-no-repeat bg-center"></div>
            </div>
          </div>

          <div className="bao-magazine-post basis-1/2 pl-8 xl:pl-14 text-center md:text-left">
            <div className="uppercase tracking-widest text-gray-500 font-medium text-[14px] mb-4">
              Premium Offer
            </div>
            <div className="text-4xl mb-4">Get our Coffee Magazine</div>
            <div className="text-gray-500 leading-6 mb-4">
              The most versatile furniture system ever created. Designed to fit
              your life.
            </div>
            <div className="bao-button bg-gray-900 text-white w-max mb-4 mx-auto md:mx-0 md:mb-0">
              Start Shopping
            </div>
          </div>
        </div>
      </div>
      <div
        className=" h-[400px] md:h-[500px] bg-[url('/src/assets/Section-Image.jpg')] bg-cover bg-no-repeat bg-center
      mb-24 bg-fixed w-[100vw] relative left-[calc(-50vw+50%)]"
      ></div>

      {/* --------------End coffee magazine free -------------- */}

      {/* --------------Start -------------- */}

      <div className="bao-subheadline ">
        <div className="bao-subheadline-deco-line "></div>
        <div className="bao-subheadline-label ">
          Behind the mugs, lifestyle stories
        </div>
        <div className="bao-subheadline-deco-line "></div>
      </div>
      <div className="lifestyle-stories  w-[95%] lg:w-[65%] mx-auto mb-24">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 ">
          {/* Ảnh 1 */}
          <div className="bao-lifestyle-stories-cart cursor-pointer">
            {/* ảnh */}
            <div className=" h-[300px] bg-[url('/src/assets/lifestyle-image-01.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#" alt="Bao" />
              {/* Để group ở đây để nó có thể kiểm soát hover */}
              <div
                className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10
               hover:transition-all hover:ease-in-out hover:duration-300 relative group "
              >
                {/* <div className="absolute right-3 top-3 bg-white py-2 px-4 text-center font-semibold text-coffee-400 rounded">
                  On Sale
                </div> */}
                <div className=" flex justify-center ">
                  <div
                    className="bao-button absolute bg-white text-gray-900 w-11/12 bottom-4 
                    hidden group-hover:block group-hover:animate-fadeIn "
                  >
                    READ THE FULL STORY
                  </div>
                </div>
              </div>
            </div>

            <div className="text-left my-5">
              <a href="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Health Check: why do I get a headache when I haven’t had my
                  coffee?
                </div>
              </a>
              <div className="text-gray-500 leading-6 mb-3">
                {/* <span className="text-lg text-coffee-200"> $50.00</span> */}
                It is a paradisematic country, in which roasted parts of
                sentences fly into your mouth.
              </div>
              <div className=" uppercase text-gray-500 leading-6 text-[13px] font-semibold tracking-widest">
                {/* <span className="text-lg text-coffee-200"> $50.00</span> */}
                October 9, 2018
              </div>
            </div>
          </div>
          {/* End ảnh 1 */}

          {/* Ảnh 2 */}
          <div className="bao-lifestyle-stories-cart cursor-pointer">
            {/* ảnh */}
            <div className=" h-[300px] bg-[url('/src/assets/lifestyle-image-02.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#" alt="Bao" />
              {/* Để group ở đây để nó có thể kiểm soát hover */}
              <div
                className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10
               hover:transition-all hover:ease-in-out hover:duration-300 relative group "
              >
                {/* <div className="absolute right-3 top-3 bg-white py-2 px-4 text-center font-semibold text-coffee-400 rounded">
                  On Sale
                </div> */}
                <div className=" flex justify-center ">
                  <div
                    className="bao-button absolute bg-white text-gray-900 w-11/12 bottom-4 
                    hidden group-hover:block group-hover:animate-fadeIn "
                  >
                    READ THE FULL STORY
                  </div>
                </div>
              </div>
            </div>

            <div className="text-left my-5">
              <a href="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  How long does a cup of coffee keep you awake?
                </div>
              </a>
              <div className="text-gray-500 leading-6 mb-3">
                {/* <span className="text-lg text-coffee-200"> $50.00</span> */}
                It is a paradisematic country, in which roasted parts. Vel qui
                et ad voluptatem.
              </div>
              <div className=" uppercase text-gray-500 leading-6 text-[13px] font-semibold tracking-widest">
                {/* <span className="text-lg text-coffee-200"> $50.00</span> */}
                October 9, 2018
              </div>
            </div>
          </div>
          {/* End ảnh 2 */}
          {/* Ảnh 3 */}
          <div className="bao-lifestyle-stories-cart cursor-pointer">
            {/* ảnh */}
            <div className=" h-[300px] bg-[url('/src/assets/lifestyle-image-03.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#" alt="Bao" />
              {/* Để group ở đây để nó có thể kiểm soát hover */}
              <div
                className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10
               hover:transition-all hover:ease-in-out hover:duration-300 relative group "
              >
                {/* <div className="absolute right-3 top-3 bg-white py-2 px-4 text-center font-semibold text-coffee-400 rounded">
                  On Sale
                </div> */}
                <div className=" flex justify-center ">
                  <div
                    className="bao-button absolute bg-white text-gray-900 w-11/12 bottom-4 
                    hidden group-hover:block group-hover:animate-fadeIn "
                  >
                    READ THE FULL STORY
                  </div>
                </div>
              </div>
            </div>

            <div className="text-left my-5">
              <a href="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Recent research suggests that heavy coffee drinkers may reap
                  health benefits.
                </div>
              </a>
              <div className="text-gray-500 leading-6 mb-3">
                {/* <span className="text-lg text-coffee-200"> $50.00</span> */}
                It is a paradisematic country, in which roasted parts of
                sentences fly into your mouth.
              </div>
              <div className=" uppercase text-gray-500 leading-6 text-[13px] font-semibold tracking-widest">
                {/* <span className="text-lg text-coffee-200"> $50.00</span> */}
                October 9, 2018
              </div>
            </div>
          </div>
          {/* End ảnh 3 */}
        </div>
      </div>
      {/* ---------------End------------- */}

      {/* --------------Start Subscribe-------------- */}

      <div className="subscribe h-[350px] bg-[#1d1f2e] flex flex-col justify-center items-center mb-24">
        <div className=" flex justify-center items-center mb-3">
          <div className="w-8 h-px bg-orange-500"></div>
          <div className="uppercase mx-4 tracking-widest text-gray-500 font-bold text-[12px] md:text-[14px] text-center">
            Sign up and get free coffee bags
          </div>
          <div className="w-8 h-px bg-orange-500"></div>
        </div>
        <div className="text-4xl mb-3 text-center text-white">
          Coffee Updates
        </div>
        <div className="bao-form">
          <div className="flex flex-col md:flex-row justify-center items-center gap-3">
            <div className="bao-form-item text-center">
              <input
                type="email"
                placeholder="baovl@gmail.com"
                className="px-5 py-3 w-[350px] max-w-[80%] xs:max-w-full bg-inherit border-[1px] border-gray-700
                            outline-none text-white hover:border-gray-300 duration-500
                          focus:border-gray-300 placeholder:uppercase placeholder:tracking-widest placeholder:font-semibold"
              />
            </div>
            <div className="bao-form-item">
              <button
                type="submit"
                className="bao-button bg-white text-gray-700 w-max max-h-[48px]"
              >
                Subcribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------End Subscribe------------- */}
      <div className="h-[100px]"></div>
    </>
  );
}

export default Main;
