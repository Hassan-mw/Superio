'use client';


import { useContext, useState } from "react";
import { createContext } from "react";

const DataContext=createContext({
    search: "",
  location: "",
});

function DataProvider({children}:{children:React.ReactNode}){
const [search,setSearch]=useState<String>('')
const [location,setLocation]=useState<String>('')
function handleSearchChange(data:string){
    setSearch(data)
}
function handleLocationChange(data:string){
    setLocation(data)
}
console.log(search,location)
    return <DataContext.Provider value={{search,handleSearchChange,location,handleLocationChange}}>
        {children}
    </DataContext.Provider>

}


function UseData(){
const context=useContext(DataContext);
if(context===undefined){
   console.error("Using outside")
}

return context;
}


export {DataProvider,DataContext,UseData}