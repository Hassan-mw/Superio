// 'use client';
// import React, { useState } from 'react'

// const Comment = ({comments,handleAddComments,handleCommentDelete}) => {

//     const [showInput,setShowInput]=useState(true)
//     const [comment,setComment]=useState("")
//     // console.log(comments)
//   console.log(comment)
//     function handleAdd(){
//       let newComment={
//         id:Date.now(),
//         text:comment,
//         replies:[]
//       }
//       handleAddComments(comments.id,newComment)
//       setShowInput(false)
//     }
//     return (
//       <div>
//         <div className={`${comments?.text && "comment-container"}`}>
//           <h3>{comments.text}</h3>
//       { showInput &&    <input type="text" value={comment} onChange={(e)=>setComment(e.target.value)} autoFocus />}
//       { showInput ?(
  
//         <div className='space-x-20'>
//           <button onClick={()=>handleAdd()}>Add</button>
//           <button  onClick={()=>setShowInput(false)} >Cacel</button>
//         </div>
//       )  :(
        
//           comments?.text?(
//              <div>
//         <button onClick={()=>setShowInput(true)}>Replay </button>
//         <button onClick={()=>handleCommentDelete(comments.id)}>Delete</button>
//       </div>
//           ): null
        
//       )
  
       
//       }
//         </div>
//         <div className="pl-6">{
//    comments?.replies?.map((data)=>
//    (  <Comment key={data.id} comments={data} handleAddComments={handleAddComments} handleCommentDelete={handleCommentDelete} />))
//   }</div>
//       </div>
//     );
//   };
// export default Comment