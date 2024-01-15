import React, { useEffect, useState } from "react";
import OurFlowersCard from "./OurFLowersCard/OurFlowersCard";
import "./OurFlowers.scss"
function OurFlowers() {
  const [dbData, setDbData] = useState([]);
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState(null)
  async function getFetch() {
    const result = await fetch("http://localhost:3003/");
    const data = await result.json();
    setDbData(data);
  }
  useEffect(() => {
    getFetch();
  }, []);

  return (
    <div className="ourFlowers">
      <div className="filters">
      <input type="text" placeholder="enter name.." name="search " id="" onChange={(e)=>setSearch(e.target.value)}/>
      <button onClick={()=>setSortBy({field:"title",asc:true})} >A-z</button>
      <button  onClick={()=>setSortBy({field:"title",asc:false})}>Z-a</button>
      <button  onClick={()=>setSortBy({field:"price",asc:true})}>ucuz-baha</button>
      <button  onClick={()=>setSortBy({field:"price",asc:false})}>baha-ucuz</button>
      <button  onClick={()=>setSortBy(null)}>Default</button>




      </div>
      {dbData
      .filter((x)=>x.title.toLowerCase().includes(search.toLowerCase()))
      .sort((a,b)=>{
        if (!sortBy) {
          return 0          
        }
        else if(sortBy.asc){
         return (a[sortBy.field] > b[sortBy.field]) ? 1 : ((b[sortBy.field] > a[sortBy.field]) ? -1 : 0)
        }
        else if(sortBy.asc===false)
        return (a[sortBy.field] > b[sortBy.field]) ? -1 : ((b[sortBy.field] > a[sortBy.field]) ? 1 : 0)

      })
      .map((x) => (
        <OurFlowersCard
          key={x._id}
          item={x}
          image={x.image}
          title={x.title}
          price={x.price}
        />
      ))}
    </div>
  );
}

export default OurFlowers;
