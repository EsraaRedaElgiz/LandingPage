import React from 'react'
import fotter1 from "../assets/images/fotter1.png"
import fotter3 from "../assets/images/fotter3.png"
import fotterlastimg from "../assets/images/fotterlastimg.png"
import Icons from '../themes/icons'
const Fotter = () => {
    
    return (
        <div className='grid grid-cols-1 sm:grid-cols-5 bg-gray-200 px-10 sm:px-24 py-10'>
            <div className='order-4 sm:order-1 flex   justify-center items-start sm:justify-start '>
                <img  src={fotter1} className='w-full sm:w-auto' />
            </div>
            <div className='order-3 sm:order-2 my-5 sm:my-0 sm:mb-0'>
                <p className='text-center text-xl text-fontColor-textBlue'>@ Monafsat</p>
                <div className='flex flex-row  justify-center flex-wrap'>
                    <div  className='w-[2rem] h-[2rem] mx-3 sm:mx-1 rounded-[1rem] bg-fontColor-textBlue hover:cursor-pointer flex justify-center items-center'>
                        <a href='https://www.linkedin.com/in/monafsat-b8022b257/'><Icons.LinkedIn/></a>
                    </div>
                    <div className='w-[2rem] h-[2rem] mx-3 sm:mx-1 rounded-[1rem] bg-fontColor-textBlue hover:cursor-pointer flex justify-center items-center'>
                        <a href='https://twitter.com/monafsat1?s=20&t=LQC9tuSRcJiWx92BfBqULg'><Icons.Twitter/></a>
                    </div>
                    <div className='w-[2rem] h-[2rem] mx-3 sm:mx-1 rounded-[1rem] bg-fontColor-textBlue hover:cursor-pointer flex justify-center items-center'>
                        <Icons.Envelope/>
                    </div>
                </div>
            </div>
            <div className='order-2 sm:order-3 '>
                <p className='text-center mb-4 text-fontColor-textBlue'>جميع الحقوق محفوظة لمنصة إعتماد</p>
                <p className='text-center  text-fontColor-textBlue'>تدعم خدمة منافسات منصة إعتماد</p>
            </div>
            <div className='order-1 sm:order-4 flex  justify-center items-start'>
                <img src={fotter3} className='w-full sm:w-auto' />
            </div>
            <div className='order-0 sm:order-5 mb-3 sm:mb-0 flex  justify-center md:justify-end items-start '>
                <img src={fotterlastimg} className='w-full sm:w-auto'  />
            </div>

        </div>
    )
}

export default Fotter
