import React from 'react'
import Button from './Button'
import statics2 from "../assets/images/statics2.png"

const StaticsAndAlarm = React.forwardRef( ({bgColor,divHeaderColor,textContentColor,headerText,contentLineOne,contentLineTwo,buttonStyle,buttonTextColor,imgSrc,imgStyle}, ref) => {
    return (
        <div ref={ref} className={` ${bgColor} pt-10  flex flex-col items-end `}>
            <div className={`w-[25%] h-8 bg-gray-200 ${divHeaderColor} right-0 mb-16`}></div>
            <div className='pr-10 text-right mb-5 z-10'>
                <p className={`text-5xl font-headerWeight  ${textContentColor}`}>{headerText}</p>
                <p className={`text-4xl  mb-5  ${textContentColor} `}>{contentLineOne}</p>
                <p className={`text-4xl  mb-8  ${textContentColor} `}>{contentLineTwo}</p>
                <Button className={` text-xl ${buttonStyle} `} textColor={` ${buttonTextColor}`} text="طلب الخدمه" />

            </div>
            <div className='flex flex-row w-full justify-between mt-[-100px] items-end z-0'>
                <img src={statics2} className='w-[35%]' />
                <img src={imgSrc} className={`  ${imgStyle}  `} />

            </div>
        </div>
    )
})

export default StaticsAndAlarm
