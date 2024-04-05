import React from 'react'
import Button from './Button'
import bell from "../assets/images/bell.png"
import statics2 from "../assets/images/statics2.png"
const AlarmServices = () => {
    return (
        <div className='pt-10 bg-gray-200  flex flex-col items-end '>
            <div className='w-[25%] h-8 bg-gradient-to-r from-buttonColor-baseColor to-buttonColor-aquaBaseColor mb-16'></div>
            <div className='pr-10 text-right mb-5'>
                <p className='text-5xl font-headerWeight  text-fontColor-textBlue '>خدمة التنبيهات</p>
                <p className='text-4xl  mb-5  text-fontColor-textBlue '>وهي خدمة تمكنك من تصنيف النشاطات والجهات الحكومية وتسمح</p>
                <p className='text-4xl  mb-8  text-fontColor-textBlue '>للمستخدم باستلام الرسائل التذكيرية للمنافسات الجديده وغيرها</p>
                <Button className="bg-gradient-to-r from-buttonColor-baseColor to-buttonColor-aquaBaseColor  text-xl" textColor="text-fontColor-whiteBaseColor" text="طلب الخدمه" />
            </div>
            <div className='flex flex-row w-full justify-between mt-[-130px] items-end'>
                <img src={statics2} className='w-[35%]' />
                <img src={bell} className='h-[15rem] w-[10%] ' />

            </div>
        </div>
    )
}

export default AlarmServices
