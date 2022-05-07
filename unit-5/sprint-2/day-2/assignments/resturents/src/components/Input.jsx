import React from 'react'
import {useState} from 'react'
import axios from 'axios'

export default function Input() {
  const init = {
    name : '',
    des: '',
    cost : '',
    iscard : '',
    iscash :'',
    isupi : '',
    rev : ''
  }
  const [list, setList] = useState(init);

  const handleChange = (e) => {
    
    let {name, value,checked,type} = e.target;
   console.log(e.target.value)
    value = type === 'checkbox' ? checked : value
    setList((p)=> ({...p,[name] : value}))
   }
   const {name , des, cost , iscard , iscash , isupi ,rev } = list;
   const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post("http://localhost:3001/restaurant",list).then((response)=>{
      console.log(response);
    })
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name :</label>
            <input name="name" type="text" value={name} onChange={handleChange}/>
            <br />
            <label>description :</label>
            <textarea name="des"  rows="2" cols="21" value={des} onChange={handleChange}></textarea>
            <br />
            <label> ₹ :</label>
            <input name="cost" type="text" value={cost} onChange={handleChange}/>
            <br />
            <label>Payment method :</label>
            <label>card</label>
            <input type="checkbox" name="iscard" onChange={handleChange} checked={iscard}/>
            <label>cash</label>
            <input type="checkbox" name="iscash" onChange={handleChange} checked={iscash}/>
            <label>upi</label>
            <input type="checkbox" name="isupi" onChange={handleChange} checked={isupi}/>
            <br />
            <label>Review</label>
            <select name="rev" id="" value={rev} onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
