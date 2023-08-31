import Image from 'next/image'
import React from 'react'

type Props = {
    image: string,
    text: string,
}

function LeftSidebarLink({image = "", text = ""}: Props) {
  return (
    <div className="flex items-center gap-5 w-[500px] py-2 pl-1 cursor-pointer hover:bg-gray-500">
        <img className='h-[30px] w-[30px] rounded-full' src={image} alt="icon" />
        <h1 className='text-[16px] font-medium'>{text}</h1>
    </div>
  )
}

export default LeftSidebarLink