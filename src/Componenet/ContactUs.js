import React, { useState } from 'react'

export default function ContactUs() {
  const serverURL = 'http://localhost:5000/submit/post';
  const [user, setUser] = useState({ name: "", email: "", phone: "", description: "" });

  let value;

  const handleInput = (e) => {
    // console.log( e.target.value)
    value = e.target.value;

    setUser({ ...user, [e.target.name]: value })
    // console.log(user)
  }

  const postData = async (e) => {
    // e.preventDefault();
    const { name, email, phone, description } = user;
    await fetch(serverURL, {
      mode: 'cors',
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, description
      })
    });
    // location.reload();
  }

  return (
    // <div className='contactus'>
      <form >
        <div className="contactbox">
          <div className='my'>
            <div><label htmlFor='name'>NAME</label></div>
            <div><input type="text" name="name" id="name" onChange={handleInput} /></div>
          </div>
          <div className='my'>
            <div><label htmlFor='email'>EMAIL</label></div>
            <div><input type="email" name="email" id="email" onChange={handleInput} /></div>
          </div>
          <div className='my'>
            <div><label htmlFor='phone'>PHONE NO</label></div>
            <div><input type="number" name="phone" id="phone" onChange={handleInput} /></div>
          </div>
          <div className='my'>
            <div><label htmlFor='description'>DESCRIPTION</label></div>
            <div><textarea name="description" id="description" rows="3" onChange={handleInput}> </textarea></div>
          </div>
          <div className='my'>
            <button type="submit" style={{ cursor: "pointer" }} onClick={postData}>SUBMIT</button>
          </div>
        </div>
      </form>
    // </div>
  )
}
