import React, { useEffect } from 'react'
import appwriteService from '../appwrite/config'
import { PostCard,Container } from '../components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function MyPosts() {
    const Navigate = useNavigate()
    const userId = useSelector((state) => {
        if(state.auth.userData){
            return state.auth.userData.userData.$id
        
        }
    })
    const [posts, setPosts] = React.useState([])
    useEffect(()=>{
        appwriteService.getPosts([]).then((postss)=> {
            postss.documents.map((post)=>{
                if(post.userId === userId){
                    console.log(post)
                    setPosts((prev)=>[...prev,post])
                }
                
            })
        }).finally(()=>console.log('the final posts',posts))
    },[Navigate])
  return (
    <div className='w-full h-auto py-8'>

<Container>
    <div className='grid gap-2 w-full  ' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', justifyContent:'center'}}>

        {
            posts.map((post)=>(
                <div key={post.$id} className='p-2 '>
                    <PostCard $id={post.$id} title={post.Title} featured_image={post.featuredImage} content={post.Content} />
                    </div>
            ))
        }

    </div>
</Container>

    </div>
  )
}

export default MyPosts