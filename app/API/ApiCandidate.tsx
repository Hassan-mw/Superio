import { error } from "console";

export const getAllCandidate=async({filter}:{filter:URLSearchParams})=>{
try{
    const url =new URLSearchParams(filter).toString();
const response=await fetch(`http://127.0.0.1:8000/api/candidate?${url}`)
if(!response.ok){
    console.error("Can not fetch the data")
}
const data=await response.json();
return data
}catch(err){
console.error(err)
}
}
 
export const getCandidateById=async({nameJob}:{nameJob:URLSearchParams})=>{
try{
const response=await fetch(`http://127.0.0.1:8000/api/candidate/${nameJob}`)

 const data=await response.json()
 console.log(data)
return data;

}catch(err){
      console.log(err)
}
  }

 