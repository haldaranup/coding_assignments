import React from "react";


const links = ["Services", "Projects", "About"]

function Links(){
  return <div  className="link">
    {links.map((e)=>{
      return <p>{e}</p>
    })}
  </div>
}

export default Links