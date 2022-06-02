
import ContactList from "./ContactList"
import { useState } from "react"
import {UserData} from "./data"


function Contact(){
  const [data, setData] = useState(UserData)


  return (
    <div>
      {data.map((i)=>(
        <ContactList key={i.key} img={i.img} name={i.name} email={i.email} phone={i.phone} />
      ))}
    </div>
  )
}

export default Contact