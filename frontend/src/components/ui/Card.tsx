import React from 'react'

interface CardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
}


const Card = ({icon,subtitle,title,value}:CardProps) => {
  return (
    <div className=' shadow-xl/30 px-2 py-3 w-3xs text-center '>
        <div className='flex items-center gap-2 ' >
           <i className= {`${icon} text-4xl text-blue-700 `} ></i>
           <p className=' font-medium '> {title} </p>
            
        </div>
        <div>
            <p className=' font-bold '> {value} </p>
            <p> {subtitle}</p>
        </div>
    </div>
  )
}

export default Card