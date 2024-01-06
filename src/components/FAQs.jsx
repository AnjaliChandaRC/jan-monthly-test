import React, { useState } from 'react'
import { faqs } from '../common/Helper';
import iconOne from "../assets/images/svg/faq-icon-1.svg"
import iconTwo from "../assets/images/svg/faq-icon-2.svg"
import iconThree from "../assets/images/svg/faq-shade-1.svg"
import iconFour from "../assets/images/svg/faq-shade-2.svg"
const FAQs = () => {
   const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <div className="bg-[url('./assets/images/png/faqs.png')] bg-center bg-no-repeat relative">
        <div>
          <img className='absolute right-0 top-[-15%] hidden sm:block' src={iconOne} alt="icon-one" />
          <img className='absolute right-0 top-[-40%] xl:top-[-80%] w-[400px] xl:w-[700px]' src={iconThree} alt="icon-one" />
          <img className='absolute top-[30%] hidden sm:block' src={iconTwo} alt="icon-one" />
          <img className='absolute top-[-20%] xl:top-[-60%] w-[400px] xl:w-[700px]' src={iconFour} alt="icon-one" />
        </div>
       <div className='container xl:max-w-[1140px] mx-auto pb-[80px] xl:pb-[90px] px-5 pt-4 relative z-10'>
        <h3 className='text-[35px] sm:text-[48px] ff_black_sans text-white text-center xl:pb-16'>FAQs</h3>
          {faqs.map((faq, index) => (
        <div key={index} className='sm:w-[670px] mx-auto faq_bg mt-5'>
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left px-4 py-3 focus:outline-none transition duration-300 ease-in-out"
          >
            <span className="text-lg font-bold text-white ff_M_plus">{faq.question}</span>
            <span className="float-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  activeIndex === index ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-[250px] sm:max-h-[130px]" : "max-h-0"
            }`}
          >
            <div className="text-base text-white ff_M_plus px-4 pb-3 opacity-80">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
        </div> 
        </div>
    </>
  )
}

export default FAQs