export const signUp=async({filter})=>{
    try{
      const queryString=new URLSearchParams(filter).toString();;
    const response=await fetch(`http://127.0.0.1:8000/api/user/signup?${queryString}`)
    const data=await response.json()
    return data;
    }catch(err){
      console.log(err)
    }
  }
  