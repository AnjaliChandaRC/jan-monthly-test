import React, { useState } from 'react'
import mintImg from "../assets/images/png/mint-img.png"
import minusImg from "../assets/images/svg/minus-icon.svg"
import plusImg from "../assets/images/svg/plus-icon.svg"

const MintNft = () => {
  const [value, setValue]=useState(0)
  return (
    <>
      <div className="bg-[url('./assets/images/webp/mint-bg.webp')] bg-center	bg-no-repeat mint_bg">
      <div className='container xl:max-w-[1140px] mx-auto py-20 xl:pt-[100px] xl:pb-36 px-5'>
        <h3 className='text-[35px] sm:text-[48px] ff_black_sans text-white text-center'>Mint NFT</h3>
        <div className='lg:flex items-center pt-10'>
        <div className='lg:w-1/2'>
          <img className='mx-auto lg:mx-0' src={mintImg} alt="mint-img" />
        </div>
        <div className='lg:w-1/2 pt-14 lg:pt-0'>
            <div className='rounded-[8px] mint_box_bg sm:w-[458px] h-[294px] text-center pt-10 mx-auto lg:mx-0'>
              <div className='flex justify-center'>
                <img src={plusImg} alt="plus" className='cursor-pointer' onClick={()=>setValue(value-1)} />
                <p className='text-4xl text-white ff_black_sans px-9'>{value} / 5656</p>
                <img src={minusImg} alt="minus"className='cursor-pointer' onClick={()=>setValue(value+1)} />
              </div>
              <p className='tet-lg ff_M_plus font-semibold text-white opacity-80 pt-5'>Max 4 NFTs per transaction</p>
              <p className='tet-lg ff_M_plus font-semibold text-white opacity-80'>75 ADA per NFT</p>
           <div className="flex justify-center pt-14">
                <div className="button_border button_border_2 button_border-hover-style">
                  <span className="block mint_btn p-1">
                    <a href="#connect-wallet">
                      <button className="common_btn text-base ff_black_sans text-white px-[24px] py-[6px] rounded-[2px]">Mint Now</button>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div> 
        </div>
    </>
  )
}

export default MintNft