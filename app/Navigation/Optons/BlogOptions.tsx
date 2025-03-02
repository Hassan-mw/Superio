import React from 'react';

const BlogOptions = () => {
 const blog=[
 'Blog Grid','Blog List','Blog Full','Blog Details',
 ]


  return (
    <div className='w-full h-full flex items-start border-t-2  border-blue-700 justify-start    min-w-[200px] p-3'>

    
     <div className='grid grid-cols-1 grid-rows-4 grid-flow-col'>
      {blog.map((data,index)=>
      <div key={index} className="px-2 py-2  text-[#656667] hover:text-[#4181d9]  text-sm hover:cursor-pointer">{data}</div>
      )}
     </div>
     </div>
    
   
   
  );
};

export default BlogOptions;
