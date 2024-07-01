import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'
import parse from "html-react-parser";
function PostCard({
    $id, //appwrite syntax for id
    title,
    featured_image,
    content='content'
}) {

  return (
    <Link  to={`/post/${$id}`}>
        <div className='h-[300px] border-2 border-black   overflow-hidden bg-yellow-50 rounded-xl p-4 '>
<div className=' w-full h-[160px] overflow-hidden justify-center mb-4'>
<img  src={appwriteService.getImagePreview(featured_image)} alt="{title}"
className='rounded-xl h-[100%] w-[100%] object-contain ' />
</div>
<h2 className='text-xl text-center text-black font-bold'>{title}</h2>
<div className='font-poppins'>{parse(content)}</div>
        </div>
    </Link>
  )
}

export default PostCard