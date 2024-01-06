import React from 'react'
import lineImg from "../assets/images/svg/roadmap-line.svg"
const Roadmap = () => {
  return (
    <>
      <div className='container xl:max-w-[1140px] mx-auto xl:pb-36 px-5 relative'>
        <h3 className='text-[35px] sm:text-[48px] ff_black_sans text-white text-center'>Roadmap</h3>
            <img src={lineImg} alt="roadmap-line" className='absolute top-[22%] h-[60%] xl:h-[47%] left-[9%] lg:left-[17%] xl:left-[16%] hidden sm:block' />
          <div className='pt-10 xl:pt-[80px] sm:ps-20'>
            <div className='relative'>
              <div className='hidden sm:block absolute w-[24px] h-[24px] bg-black rounded-[50%] border-white border-[1px] top-[22%] lg:top-[23%] left-[-6.5%] lg:left-[7%]'>
              </div>
            <div className='roadmap_card_bg rounded-[8px] lg:w-[752px] mx-auto py-6 px-6 '>
               <h5 className='text-[40px] ff_black_sans font-normal text-[#FF7D01]'>10%</h5>
            <h6 className='text-[24px] ff_black_sans font-normal text-white'>Giveaway of Goat NFT</h6>
            <p className='text-base ff_M_plus font-normal text-white opacity-70'>Feugiat felis, egestas cursus et ut lacus viverra. Rhoncus ornare tortor sociis vulputate arcu pellentesque eu ornare tempus. Et mi arcu quam tellus feugiat quisque urna velit.</p>
          </div>
            </div>
            <div className='relative'>
              <div className='hidden sm:block absolute w-[24px] h-[24px] bg-black rounded-[50%] border-white border-[1px] top-[22%] lg:top-[23%] left-[-6.5%] lg:left-[7%]'>
              </div>
          <div className='roadmap_card_bg rounded-[8px] lg:w-[752px] mx-auto py-6 px-6 mt-2'>
               <h5 className='text-[40px] ff_black_sans font-normal text-[#FF7D01]'>50%</h5>
            <h6 className='text-[24px] ff_black_sans font-normal text-white'>Merch store</h6>
            <p className='text-base ff_M_plus font-normal text-white opacity-70'>Adipiscing vehicula dui sollicitudin venenatis. A feugiat iaculis amet magna. Odio elementum, purus egestas convallis et vulputate. Dictumst vitae nulla aliquam, vivamus nunc. Volutpat nunc non platea mauris sem dui scelerisque. </p>
              </div>
            </div>
            <div className='relative'>
              <div className='hidden sm:block absolute w-[24px] h-[24px] bg-black rounded-[50%] border-white border-[1px] top-[22%] lg:top-[23%] left-[-6.5%] lg:left-[7%]'>
              </div>
          <div className='roadmap_card_bg rounded-[8px] lg:w-[752px] mx-auto py-6 px-6 mt-2'>
               <h5 className='text-[40px] ff_black_sans font-normal text-[#FF7D01]'>100%</h5>
            <h6 className='text-[24px] ff_black_sans font-normal text-white'>Charity donation</h6>
            <p className='text-base ff_M_plus font-normal text-white opacity-70'>Condimentum tristique sit pretium ipsum. Et egestas venenatis consectetur ornare ipsum elementum nulla imperdiet imperdiet. </p>
              </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Roadmap