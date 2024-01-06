import React from 'react'
import Header from "../components/Header"
import bgLeaves from "../assets/images/png/hero-bg-leaves.png"
const Hero = () => {
  return (
    <>
      <div className="bg-[url('./assets/images/webp/hero-bg.webp')] bg-center	bg-no-repeat bg-cover	min-h-[120vh] relative flex flex-col z-[2]">
        <div className='absolute bottom-[30px] lg:bottom-[-170px] -z-0 w-full'>
          <img src={bgLeaves} alt="hero-bg-leaves" className='w-full' />
        </div>
        <Header />
          <div className='text-center flex justify-end flex-col grow mx-auto h-full px-5'>
            <h1 className='ff_black_sans text-[40px] sm:text-[64px] text-white'>Trippy Goat</h1>
            <p className='text-base ff_M_plus text-white font-normal lg:max-w-[558px] mx-auto'>Trippy Goats is a limited collection of 5656 Psychedelic goats, randomly generated from over 40 hand drawn traits. Each goat comes with ownership and commercial usage rights.</p>
        <div className="flex justify-center pt-8">
                <div className="button_border button_border-hover-style">
                  <span className="block bg-black p-1">
                    <a href="#connect-wallet">
                      <button className="common_btn text-base ff_black_sans text-white px-[27px] py-[6px] rounded-[2px]">Mint Now</button>
                    </a>
                  </span>
                </div>
        </div>
      </div> </div>
    </>
  )
}

export default Hero