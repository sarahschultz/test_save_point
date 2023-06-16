import React from 'react'
import {Link, useParams} from 'react-router-dom'

function PostDeets() { 
    const {id} = useParams()
    console.log(id)
  return (
<>
    <div>PostDeets</div>
    <Link to="/">Back to Home</Link>
</>
  )
}

export default PostDeets

