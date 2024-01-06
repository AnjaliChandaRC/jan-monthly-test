import React from 'react'
import bgImg from "../assets/images/png/footer-bg.png"
import footerLogo from "../assets/images/svg/footerlogo.svg"
import instaImg from "../assets/images/svg/insta.svg"
import twitterImg from "../assets/images/svg/twitter.svg"
import discordImg from "../assets/images/svg/discord.svg"
import footerIconOne from "../assets/images/svg/footer-icon-1.svg"
import footerIconTwo from "../assets/images/svg/footer-icon-2.svg"
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="relative">
          <img className='absolute bottom-0' src={bgImg} alt="footer-bg" />
          <img className='absolute bottom-0 hidden sm:block' src={footerIconOne} alt="footer-shade-1" />
          <img className='absolute bottom-0 hidden sm:block right-0' src={footerIconTwo} alt="footer-shade-2" />
          <div className='w-[304px] h-[304px] rounded-[304px] bg-[#FDFE7C] blur-[280px] absolute right-0 bottom-0'></div>
          <div className='w-[304px] h-[304px] rounded-[304px] bg-[#FDFE7C] blur-[280px] absolute left-0 bottom-0'></div>
        <div className='container xl:max-w-[1140px] mx-auto sm:pt-20 xl:pt-[126px] px-5 text-center relative z-10'>
          <a href="/">
            <img src={footerLogo} alt="footer-logo" className='mx-auto w-[35%] sm:w-[20%]' />
            </a>
          <p className='text-base font-normal ff_M_plus text-white max-w-[500px] mx-auto pt-6'>Vitae cras pellentesque amet, pretium ut consectetur pretium orci arcu. Aenean turpis ipsum nunc adipiscing fusce enim, eget rhoncus at.</p>
           <div className="flex gap-3 justify-center pt-7">
            <a href="/">
              <img className="transition-all duration-300 ease-in-out hover:scale-125" src={instaImg} alt="insta-img" />
            </a>
            <a href="/">
              <img className="transition-all duration-300 ease-in-out hover:scale-125" src={twitterImg} alt="twitter" />
            </a>
            <a href="/">
              <img className="transition-all duration-300 ease-in-out hover:scale-125" src={discordImg} alt="discord" />
              </a>
            </div>
        </div> 
        <div className='pt-[62px]'>
          <hr />
          <p className='ff_M_plus text-base text-white opacity-70 font-normal py-3 text-center'>copyright@{year}</p>
        </div>
        </div> 
    </>
  )
}

export default Footer