import { useSession } from 'next-auth/react';
import React from 'react'

import { HiBookOpen } from "react-icons/hi";
import { TfiVideoClapper } from "react-icons/tfi";
import { AiOutlinePlus } from "react-icons/ai";
import SingleStory from './SingleStory';

type Props = {}

function Story({ }: Props) {
    const singleStoryData = [
        {
            title: "The Anthony",
            img: "/images/users/anthony.png",
            postImg: "bg-[url(/images/posts/post1.jpg)]",
        },
        {
            title: "Lucie",
            img: "/images/users/lucie.jpg",
            postImg: "bg-[url(/images/posts/post2.jpg)]",
        },
        {
            title: "Lucie",
            img: "/images/users/alfred.jpg",
            postImg: "bg-[url(/images/posts/post3.jpg)]",
        },
        {
            title: "👑King👑",
            img: "/images/users/alfred.jpg",
            postImg: "bg-[url(/images/posts/post7.jpg)]",
        },
        {
            title: "Emmanuel",
            img: "/images/users/lucie.jpg",
            postImg: "bg-[url(/images/posts/post6.jpg)]",
        },
        {
            title: "The Anthony",
            img: "/images/users/anthony.png",
            postImg: "bg-[url(/images/posts/post5.jpg)]",
        },
    ];

    const { data: session } = useSession();
    return (
        <div className="px-4 bg-white rounded-[17px] shadow-md">
            <div className="grid grid-cols-2 bg-white border-b border-gray-300">
                <div className="relative">
                    <div className="mx-auto w-fit flex gap-2 items-center text-primary py-2">
                        <HiBookOpen className="text-[30px]" />
                        <p className="font-bold">Stories</p>
                    </div>
                    <div className="bg-primary h-[3px]"></div>
                </div>

                <div>
                    <div className="mx-auto w-fit flex gap-2 items-center text-gray-500 py-2">
                        <TfiVideoClapper className='text-[26px]' />
                        <p className='font-bold'>Reels</p>
                    </div>
                </div>
            </div>

            <div className="flex mt-5 pb-5 overflow-x-scroll scrollbar-hide">
                <div className="w-[112px] shadow-md rounded-[15px] pb-2 shrink-0">
                    <img src={session?.user?.image!} alt="image" className="w-full h-full rounded-t-[15px] object-fit" />
                    <div>
                        <div className="bg-primary w-[35px] h-[35px] rounded-full grid place-items-center text-[24px] text-white mx-auto -mt-[20px] relative outline outline-[6px] outline-white">
                            <AiOutlinePlus />
                        </div>
                        <p className='text-center mt-2 font-medium'>Create Story</p>
                    </div>
                </div>
                {
                    singleStoryData.map(({title, img, postImg}, index) => {
                        return (
                            <SingleStory key={index} title={title} img={img} postImg={postImg} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Story