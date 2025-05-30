

export const getAllJob = async ({ filter }: { filter: URLSearchParams }) => {
  console.log("⚽ Fetching jobs... ⚽");

  try {
    const queryString = new URLSearchParams(filter).toString();

    const response = await fetch(`http://localhost:8000/api/jobs?${queryString}`)
    const data=await response.json()
    console.log(data, "🃏 Response received 🃏");
    return data; // No need for .json()
  } catch (err) {
    console.log("🛶 Error fetching jobs 🛶");
    console.error(err);
  }
};

    




export const getjobById=async({name}:{name:String})=>{

  try{
  const response=await fetch(`http://127.0.0.1:8000/api/job/${name}`)
  console.log(response,'🥼🥼🥼🥼🥼🥼🥼🥼🥼🥼🥼🥼🥼')
  let data=await response.json()


  return data;
  }catch(err){
    console.log(err)
  }
}