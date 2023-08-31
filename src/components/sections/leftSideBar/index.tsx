import React from 'react'
import LeftSidebarLink from './LeftSidebarLink'
import { useSession } from 'next-auth/react'
import { BiChevronDown } from 'react-icons/bi';

type Props = {}

function LeftSideBar({}: Props) {
    const {data: session} = useSession();

  return (
    <div className='px-4 fixed mt-5 hidden lg:block'>
        <div className="flex flex-col gap-2">
            <LeftSidebarLink image={session?.user?.image!} text={session?.user?.name!} />

            <LeftSidebarLink image="/icons/friend.png" text="Friends" />
            <LeftSidebarLink image={session?.user?.image!} text="Groups" />
            <LeftSidebarLink image={session?.user?.image!} text="Marketplace" />
            <LeftSidebarLink image={session?.user?.image!} text="Saved" />
            <LeftSidebarLink image={session?.user?.image!} text="Pages" />
            <LeftSidebarLink image={session?.user?.image!} text="Events" />
            <LeftSidebarLink image={session?.user?.image!} text="Most Recent" />

            <div className="flex items-center gap-3 w-[200px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
                <div className="bg-gray-300 h-[30px] grid place-items-center rounded-full">
                    <BiChevronDown />
                </div>
                <h1 className='text-[16px] font-medium'>See More</h1>
            </div>

            <p className='text-[14px] text-gray-500 mt-2'>Privacy - terms - Advertising . Ad choices . <br />Coolies - Meta @{new Date().getFullYear()}</p>

        </div>
        LeftSideBar
    </div>
  )
}

export default LeftSideBar