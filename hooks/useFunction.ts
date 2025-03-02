// const useFunction=()=>{

//     const addComment=(tree,commentId,newComment)=>{
//         console.log(tree,commentId,newComment)
//      if(tree.id===commentId){
//         tree.replies.unshift(newComment)
//         return tree;
//      }

//     const updatedReplies=tree.replies.map((data)=>
//     addComment(data,commentId,newComment))
//     return {...tree,replies:updatedReplies}
//     }


//     const deleteCommet=(tree,commentId)=>{
//  if(tree.id===commentId){
//     console.log(tree)
//   return   tree.replies.filter((data)=>data.id!==commentId )
//  }
//  const updatedReplies=tree.replies.map((data)=>
//     deleteCommet(data,commentId))
//     return {...tree,replies:updatedReplies}
    
//     }
//     return {addComment,deleteCommet}
// }

// export default useFunction