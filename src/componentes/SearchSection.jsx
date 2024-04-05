import React from 'react'
import Icons from '../themes/icons'

const SearchSection = () => {
    return (
        <div className='py-16 pr-10 bg-gradient-to-r from-buttonColor-baseColor to-buttonColor-aquaBaseColor flex flex-col items-end '>
            <p className='text-fontColor-whiteBaseColor text-2xl font-headerWeight mb-10'>البحث في منصة إعتماد</p>
            <div className="relative">
                <input
                    className='block  bg-white w-[20rem]  rounded-2xl border-0  py-2.5 px-2 '
                    
                />
             
                    <div
                        className="absolute inset-y-0 pr-3 right-0  flex items-center "
                        onClick={()=>{}}
                    >
                        <Icons.Search/>
                    </div>
                
            </div>
        </div>
    )
}

export default SearchSection
