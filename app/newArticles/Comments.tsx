// 'use client';
// import useFunction from '@/hooks/useFunction';
// import React, { useState } from 'react'
// import Comment from './Comment';
// import { text } from 'stream/consumers';
// const commentes={
//     id:1,
//     text:'Hello world',
//     items:[]
// }
// const Comments = () => {
 
//     const [comments,setComments]=useState(commentes)
//     // console.log(comments)
//     const {addComment,deleteCommet}=useFunction()
//     const handleAddComments=(commentId:number,comment:string)=>{
//         console.log(commentId,comment,"From main page")
//     const updatedTree=addComment(comments,commentId,comment)
//     setComments(updatedTree)
//     }
    
//     const handleCommentDelete=(commentId:number)=>{
//       const updatedTree=deleteCommet(comments,commentId)
//     setComments(updatedTree)
    
//     }
//       return (
//         <div>
//          <Comment
//          comments={comments}
//          handleAddComments={handleAddComments}
//           handleCommentDelete={handleCommentDelete} />
//         </div>
//       )
//     }

// export default Comments