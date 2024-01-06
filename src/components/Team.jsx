import React from 'react'
import imgOne from "../assets/images/png/team-img-1.png"
import imgTwo from "../assets/images/png/team-img-2.png"
import imgThree from "../assets/images/png/team-img-3.png"
const Team = () => {
  return (
    <>
      <div className='container xl:max-w-[1140px] mx-auto pb-[80px] xl:pb-[167px] px-5'>
        <h3 className='text-[35px] sm:text-[48px] ff_black_sans text-white text-center'>Team</h3>
          <div className='pt-10 sm:pt-14 flex gap-10 justify-center flex-wrap'>
            <div className="w-[294px] transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
              <img src={imgOne} alt="team-img-1" />
              <div className='text-center py-4 team_bg rounded-[0px_0px_0px_63.002px]'>
                <h6 className='text-xl ff_black_sans text-white font-normal team_text_shadow'>Vilar</h6>
                <p className='text-base ff_M_plus text-white font-normal opacity-80 pt-1'>Founder & Developer</p>
              </div>
          </div>
           <div className="w-[294px] transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
              <img src={imgTwo} alt="team-img-2" />
              <div className='text-center py-4 team_bg'>
                <h6 className='text-xl ff_black_sans text-white font-normal team_text_shadow'>Arwen</h6>
                <p className='text-base ff_M_plus text-white font-normal opacity-80 pt-1'>Co-founder & Designer</p>
              </div>
          </div>
           <div className="w-[294px] transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
              <img src={imgThree} alt="team-img-3" />
              <div className='text-center py-4 team_bg rounded-[0px_0px_63.002px_0px]'>
                <h6 className='text-xl ff_black_sans text-white font-normal team_text_shadow'>John</h6>
                <p className='text-base ff_M_plus text-white font-normal opacity-80 pt-1'>Developer</p>
              </div>
            </div>
        </div>
        </div> 
    </>
  )
}

export default Team