import React from 'react'
import Button from './Button'
import hero from "../assets/images/hero.png"
const HeroSection = () => {
    return (
        <div className='pr-10  py-20  bg-gray-200  grid grid-cols-1 sm:grid-cols-2'>
            <div className=' order-1 sm:order-0 '>
                <img src={hero} />
            </div>
            <div className=' text-right order-0 sm:order-1  ' >
                <p className='text-fontColor-textBlue text-4xl  '>منافسات</p>
                <p className='text-fontColor-textBlue text-3xl sm:pl-28 my-5'>هي منصة تخدم رواد الأعمال و القطاع المؤسسي والتي تهدف لعرض المنافسات ومبالغها ، وتحليل بيانات المنافسات باستخدام الذكاء الاصطناعي، لإعطاء رؤية باسهاب عن مشاريع القطاعات والوزارات والجهات المستفيده</p>
                <Button text={"المزيد عن منافسات"} fontSize="text-xl" textColor="text-fontColor-whiteBaseColor" className="bg-gradient-to-r from-buttonColor-baseColor to-buttonColor-aquaBaseColor mb-5 sm:mb-0"/>
            </div>
        </div>
    )
}

export default HeroSection
