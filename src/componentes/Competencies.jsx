import React from 'react'
import Icons from '../themes/icons'

const Competencies = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className='pr-10 pl-10 py-16 bg-gray-200 grid grid-cols-1 sm:grid-cols-2 '>
            <div className=' order-1 sm:order-0    py-16 '>
                <div className=' bg-gradient-to-r from-buttonColor-baseColor to-buttonColor-aquaBaseColor py-4 border-1 rounded-sm shadow-xl	'>
                    <p className='text-center text-fontColor-whiteBaseColor mb-2'>منافسات</p>
                    <p className='text-center text-fontColor-whiteBaseColor'>هي منصة لخدمة الـقـطـاع المـؤسـسي والــتـي تــهــدف لــعـرض الإحـصـائـيـات وتـحليـل الـبـيـانـات ورؤيـة الـمـنـافـسـات في مـنـصـة إعـتـمـاد</p>
                    <p className='text-center text-fontColor-whiteBaseColor text-3xl my-2'>المميزات</p>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        <div className=' order-1 sm:order-0 boder-0 sm:border-r-[.1rem]  sm:border-white px-3'>
                            <p className='text-center text-fontColor-whiteBaseColor my-3'>امكانية البحث وتحليل البيانات عن مجال المنافسات والانشطه</p>
                            <hr className='w-[90%] mx-auto ' />
                            <p className='text-center text-fontColor-whiteBaseColor my-3'>امكانية التنبؤ بالقيمة المتوقعه للمنافسات القائمة باستخدام تقنية الذكاء الاصطناعي</p>
                        </div>
                        <div className=' order-0 sm:order-1 px-3'>
                            <p className='text-center text-fontColor-whiteBaseColor my-3'>تحليل منافسات الجهات الحكومية واعطاء بروفايل كامل عن كل جهه حكومية ومشاريعها</p>
                            <hr className='w-[90%] mx-auto ' />
                            <p className='text-center text-fontColor-whiteBaseColor my-3'>تحليل بيانات المنافسات في الشركات الخاصه واعطاء بروفايل خاص لكل شركة ومدى نجاحها</p>
                            <hr className='w-[40%] mx-auto sm:flex md:hidden mb-6 ' />
                        </div>
                    </div>
                    <p className='text-center text-fontColor-whiteBaseColor  sm:mt-3'>قم بالتسجيل والوصول لجميع الخدمات المقدمة والخدمات التي ستطلق قريباً</p>

                </div>
            </div>
            <div className='flex flex-col justify-between  text-right order-0 sm:order-1 bg-white  pt-4 border-1 rounded-sm shadow-xl	' >
                <div>
                    <p className='text-center text-fontColor-textBlue my-3 text-xl'>تسعير</p>
                    <p className='text-center text-fontColor-textBlue my-3 text-xl'>قم بالتسجيل والاشتراك بالخدمات فوراً</p>
                    <p className='text-center text-fontColor-textBlue  text-6xl my-10'>مجاناً</p>
                    <div className='flex flex-row w-[80%]  justify-around mx-auto mb-7'>
                        <p className=' text-right w-[70%] text-fontColor-textBlue  '>خدمة التنبيهات للمنافسات المحددة في منصة اعتماد</p>
                        <div className='w-[30px] h-[30px] p-1  bg-fontColor-textBlue flex items-center justify-center'><Icons.Bell /></div>
                    </div>
                    <div className='flex flex-row w-[80%]  justify-around mx-auto mb-7 items-center'>
                        <p className=' text-right w-[70%] text-fontColor-textBlue  '>خدمة الإحصائيات لجميع المنافسات السابقة في اعتماد</p>
                        <div className='w-[30px] h-[30px] p-1  bg-fontColor-textBlue flex items-center justify-center'><Icons.Statics /></div>
                    </div>
                    <div className='flex flex-row w-[80%]  justify-around mx-auto mb-7'>
                        <p className=' text-right w-[70%] text-fontColor-textBlue  '>الإطلاع على جميع الخدمات الأخرى</p>
                        <div className='w-[30px] h-[30px] p-1  bg-fontColor-textBlue flex items-center justify-center' ><Icons.Plus /></div>
                    </div>

                </div>
                <div className='bg-gradient-to-r from-buttonColor-baseColor to-buttonColor-aquaBaseColor py-1 '>
                    <div className='flex flex-row  justify-center items-center'>
                        <div className='w-[20px] h-[20px] rounded-[10px] bg-white flex items-center justify-center mr-1'>
                            <Icons.LeftArrow />
                        </div>
                        <p className='text-fontColor-whiteBaseColor hover:cursor-pointer hover:underline'>تسجيل الدخول والاشتراك</p>

                    </div>
                </div>

            </div>
        </div>
    )
})

export default Competencies
