import React from 'react'
import "./Style/Contact.scss"

const Contact = () => {
  return (
    <div className='contacts'>
    
      <main>
        <h1>CONTACT US</h1>
        <form >
          <div>
            <label>
              Name
            </label>
            <input type="text" required placeholder='Name' />
          </div>
          <div>
            <label>Email</label>
            <input type="Email" placeholder='abc@gmail.com' required />
          </div>
          <div>
            <label>Queries</label>
            <input type="text" placeholder='Tell us about your query...' />
          </div>
          <button type='submit'>Send</button>
        </form>
      </main>
      
    </div>
  )
}

export default Contact
