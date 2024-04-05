import React, { useState } from 'react'
import Button from './Button'
import Icons from './../themes/icons';
import fotter3 from "../assets/images/fotter3.png"

const NavBar = ({ handleScroll }) => {
    const [clicked, setClicked] = useState(false)
    console.log(handleScroll)
    return (
        <div className="navbar shadow-xl bg-slate-50 sticky top-0  py-3 px-0  z-50 ">
            <div className="navbar-start ">
                <div className="dropdown  absolute w-full ">
                    <div tabIndex={0} role="button" onClick={() => { setClicked(clicked => !clicked) }} className="btn btn-ghost  hover:bg-transparent hover:border-gray-300 lg:hidden border-1 p-2 rounded-sm  border-gray-300 ml-3 ">
                        <Icons.List />
                    </div>
                    {clicked &&
                        <div tabIndex={0} className=' absolute w-full menu menu-sm dropdown-content  lg:hidden  bg-slate-50     pl-16 md:pl-0 md:flex  md:flex-row-reverse '>
                            <div>
                                <ul>
                                    <li className='my-2' onClick={() => { handleScroll(1) }}><p style={{ backgroundColor: 'transparent' }} className='hover:bg-transparent font-custom text-baseNav  text-fontColor-textBlue '>عن منافسات</p></li>
                                    <li className='my-2' onClick={() => { handleScroll(2) }}><p style={{ backgroundColor: 'transparent' }} className='hover:bg-transparent font-custom text-baseNav text-fontColor-textBlue'>خدمة الإحصائيات</p></li>
                                    <li className='my-2' onClick={() => { handleScroll(3) }}><p style={{ backgroundColor: 'transparent' }} className='hover:bg-transparent font-custom text-baseNav text-fontColor-textBlue'>خدمة التنبيهات</p></li>
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
                    <li className=' font-custom text-baseNav' onClick={() => { handleScroll(3) }}><p style={{ backgroundColor: 'transparent' }} className='hover:bg-transparent text-fontColor-textBlue '>خدمة التنبيهات</p></li>
                    <li className=' font-custom text-baseNav' onClick={() => { handleScroll(2) }} ><p style={{ backgroundColor: 'transparent' }} className='hover:bg-transparent text-fontColor-textBlue'>خدمة الإحصائيات</p></li>
                    <li className=' font-custom text-baseNav' onClick={() => { handleScroll(1) }} ><p style={{ backgroundColor: 'transparent' }} className='hover:bg-transparent text-fontColor-textBlue'>عن منافسات</p></li>
                </ul>
            </div>
            <div className="sm:navbar-end sm:mr-16 ">
                <img src={fotter3}  />

            </div>
            <div className='navbar-end flex sm:hidden'></div>

        </div>
    )
}

export default NavBar
