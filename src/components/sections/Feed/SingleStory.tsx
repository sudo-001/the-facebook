import React from 'react'

type Props = {
    title: string,
    img: string,
    postImg: string,
};

function SingleStory({title, img, postImg}: Props) {
  return (
    <div className={`relative w-[112px] mx-1 shadow-md rounded-[15px] pb-2 bg-cover shrink-0 ${postImg} singleStory`}>
        <img src={img} alt={title} className="w-[40px] h-[40px] rounded-full object-cover outline outline-primary m-[14px]" />
        <p className='text-white absolute w-full text-center bottom-2'>{title}</p>
    </div>
  );
}

export default SingleStory