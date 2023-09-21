import React, { useEffect, useState } from 'react'
import Story from './Story'
import WhatIsInYourMind from '../WhatIsInYourMind.tsx'
import Post from '../posts'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../../../firebase'

type Props = {}

function Feed({ }: Props) {

  const [posts, setPosts] = useState([]);

  useEffect(() =>
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    ), []
  );

  return (
    <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <Story />
      <WhatIsInYourMind />
      {posts.map((post) => {
        // console.log(post);
        return <Post data={post.data()} id={post.id} key={post.id} />
      })}
    </div>
  )
}

export default Feed