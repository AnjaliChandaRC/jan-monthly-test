import React from 'react'
import aboutUsImg from "../assets/images/png/about-us-img.png"
const AboutUs = () => {
  return (
    <>
      <div className='container xl:max-w-[1140px] mx-auto lg:flex items-center py-20 xl:pt-40 xl:pb-36 px-5'>
        <div className='lg:w-1/2'>
          <img className='mx-auto lg:mx-0' src={aboutUsImg} alt="about-us-img" />
        </div>
        <div className='lg:w-1/2'>
          <h2 className='text-[35px] sm:text-[48px] ff_black_sans text-white'>About Us</h2>
          <p className='ff_M_plus text-white text-base opacity-70 xl:pe-4'>Hi goaties call me legion with a pen. From an early age I was influenced by my selfless loving mother who inspired  me to become a pet and art lover. As young as I was then, My mother would read goat story to me even though I didn't understand it. During the course of time I have played countless video games, watched movies and read books on pets particularly on goat.I made this art to portray my illustration of the psychedelic goats and I hope you can appreciate that everyone has a history. With regards to why non-fungibles.</p>
           <div className="flex pt-8">
                <div className="button_border button_border-hover-style">
                  <span className="block bg-black p-1">
                    <a href="#connect-wallet">
                      <button className="common_btn text-base ff_black_sans text-white px-[24px] py-[6px] rounded-[2px]">Read More</button>
                    </a>
                  </span>
                </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs