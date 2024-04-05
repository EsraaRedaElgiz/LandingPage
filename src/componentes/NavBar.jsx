import React, { useState } from 'react'
import Button from './Button'
import Icons from './../themes/icons';
import { Link } from 'react-router-dom';
const NavBar = () => {
    const [clicked, setClicked] = useState(false)
    return (
        <div className="navbar shadow-xl bg-slate-50 sticky top-0  py-3 px-0  ">
            <div className="navbar-start ">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" onClick={() => { setClicked(clicked => !clicked) }} className="btn btn-ghost  hover:bg-transparent hover:border-gray-300 lg:hidden border-1 p-2 rounded-sm  border-gray-300 ml-3 ">
                        <Icons.List />
                    </div>
                    {clicked &&
                        <div tabIndex={0} className=' menu menu-sm dropdown-content  lg:hidden  bg-slate-50  w-[98vw]   pl-16 md:pl-0 md:flex  md:flex-row-reverse '>
                            <div>
                                <ul>
                                    <li className='my-2' ><a style={{backgroundColor:'transparent'}} className='hover:bg-transparent font-custom text-baseNav  text-fontColor-textBlue '>عن منافسات</a></li>
                                    <li className='my-2'><a style={{backgroundColor:'transparent'}} className='hover:bg-transparent font-custom text-baseNav text-fontColor-textBlue'>خدمة الإحصائيات</a></li>
                                    <li className='my-2'><a style={{backgroundColor:'transparent'}} className='hover:bg-transparent font-custom text-baseNav text-fontColor-textBlue'>خدمة التنبيهات</a></li>
                                </ul>
                            </div>
                            <div className='  md:px-10 flex justify-end flex-row ' >
                                <div className="btn btn-ghost hover:bg-transparent ">
                                    <Icons.Person />
                                </div>
                                <Button text={"التسجيل"} textColor="text-fontColor-whiteBaseColor" className="bg-gradient-to-r from-buttonColor-baseColor to-buttonColor-aquaBaseColor" />
                            </div>
                        </div>
                    }
                </div>
                <div className="btn btn-ghost text-xl hidden lg:flex hover:bg-transparent ml-3">
                    <Icons.Person />
                </div>
                <Button text={"التسجيل"} textColor="text-fontColor-whiteBaseColor" className="hidden lg:flex bg-gradient-to-r from-buttonColor-baseColor to-buttonColor-aquaBaseColor " />
            </div>
            <div className="  lg:navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className=' font-custom text-baseNav'><a style={{backgroundColor:'transparent'}} className='hover:bg-transparent text-fontColor-textBlue '
                    >خدمة التنبيهات
                    </a></li>
                    <li className=' font-custom text-baseNav' ><a style={{backgroundColor:'transparent'}} className='hover:bg-transparent text-fontColor-textBlue'>خدمة الإحصائيات</a></li>
                    <li className=' font-custom text-baseNav' ><a style={{backgroundColor:'transparent'}} className='hover:bg-transparent text-fontColor-textBlue'>عن منافسات</a></li>
                </ul>
            </div>
            <div className="sm:navbar-end sm:mr-16 ">
                <p className='mr-2'><Icons.Logo /></p>
                <div className='text-center ' style={{ lineHeight: "1.1rem" }} >
                    <p className='text-fontColor-textBlue font-custom text-logo '>منافسات</p>
                    <p className='tracking-widest text-fontColor-aquaBaseColor font-custom'>TENDERS</p>
                </div>
            </div>
            <div className='navbar-end flex sm:hidden'></div>

        </div>
    )
}

export default NavBar
