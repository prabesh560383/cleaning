import React from 'react'

const Button = ({label, className}) => {
  return (
    <button className = {`py-1.5 px-4 min-w-[130px] bg-white rounded-2xl text-center font-light ${className}`}>
        {label}
    </button>
  )
}

export default Button