import React from 'react'

const Button = ({className,text,textColor,fontSize,...rest}) => {
  return (
    <button className={`btn px-16 hover:bg-transparent rounded-[3rem] ${className} `} {...rest}>
        <p className={`${textColor} ${fontSize}`}>{text}</p>
    </button>
  )
}

export default Button
