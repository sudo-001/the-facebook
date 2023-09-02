import React from 'react'
import Story from './Story'

type Props = {}

function Feed({}: Props) {
  return (
    <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <Story />
    </div>
  )
}

export default Feed