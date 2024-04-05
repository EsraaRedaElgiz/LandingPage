import React from 'react'
import Button from './Button'
import statics from "../assets/images/statics.png"
import statics2 from "../assets/images/statics2.png"

const StaticsServices = () => {
    return (
        <div className='pt-10 bg-gradient-to-r from-buttonColor-baseColor to-buttonColor-aquaBaseColor flex flex-col items-end '>
            <div className='w-[25%] h-8 bg-gray-200 right-0 mb-16'></div>
            <div className='pr-10 text-right mb-5'>
                <p className='text-5xl font-headerWeight text-fontColor-whiteBaseColor '>خدمة الإحصائيات</p>
                <p className='text-4xl  mb-5 text-fontColor-whiteBaseColor '>وهي خدمة تستطـــيع من خلالها الإطـــلاع علــــى جميــــع</p>
                <p className='text-4xl  mb-8 text-fontColor-whiteBaseColor '>احصائيات المنافســــات المتعلقــــة بنشـــاط الشركة</p>
                <Button className="bg-white hover:bg-gray-300 text-xl " onClick={()=>{alert(1)}} textColor="text-fontColor-textBlue" text="طلب الخدمه" />
            </div>
            <div className='flex flex-row w-full justify-between mt-[-100px] items-end'>
                <img src={statics2} className='w-[35%]' />
                <img src={statics} className='h-40 w-[15%] ' />

            </div>
        </div>
    )
}

export default StaticsServices
