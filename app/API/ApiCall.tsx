 export const getAllJob=async({filter}:{filter:URLSearchParams})=>{
  try{
    const queryString=new URLSearchParams(filter).toString();;
  const response=await fetch(`http://127.0.0.1:8000/api/job?${queryString}`)
  const data=await response.json()
  return data;
  }catch(err){
    console.log(err)
  }
}



export const getjobById=async({name}:{name:String})=>{

  try{
  const response=await fetch(`http://127.0.0.1:8000/api/job/${name}`)
  // if(!response.ok){
  //   console.error("Data can not fetched")
  // }
  let data=await response.json()
  console.log(data.message,'🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈')

  return data;
  }catch(err){
    console.log(err)
  }
}