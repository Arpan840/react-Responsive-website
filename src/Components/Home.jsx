import React from 'react'
import "./Style/Home.scss"
import vg from "./Assets/Aif.png"

import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"




const Home = () => {
    
    
  return (
    <>
    <div className="homes" id='home'>
      <main>
      <h1>Tech<span>Stars</span></h1>
      <p>Solution of all your problems</p>
      </main>
    </div>
    <div className="home2">
      <img src={vg} alt="Graphics" />
      <div>
      <p>
      A software company creates products that take the form of various types of software. They work on technology, distribution, and product development.
      </p>
    </div>
   
    </div>
    <div className="home3" id='about'>
   
      <div>
      <h1>Who we Are?</h1>
        
      <p>That's why we have a lot of respect for the brands that have done it right. These are the companies that have figured out how to convey their value propositions to their buyer personas in just one, short sentence — and a quippy one, at that.

So if you're looking to get a little slogan inspiration of your own, take a look at some of our favorite company slogans and taglines from both past and present. But before we get into specific examples, let's quickly go over what a slogan is, how it differs from a tagline, and what makes these branded one-liners stand out.</p>
</div>
    </div>
    
    <div className="home4" id='brands'>
      <div>
        <h1>BRANDS</h1>
        <article>
          <div style={{animationDelay:"0.3s"}}> <AiFillGoogleCircle></AiFillGoogleCircle>
          <p>Google</p></div>
         <div style={{animationDelay:"0.5s"}}><AiFillAmazonCircle></AiFillAmazonCircle>
          <p>Amazon</p></div>
          <div style={{animationDelay:"0.7s"}}>
          <AiFillInstagram></AiFillInstagram>
          <p>Instagram</p>
          </div>
          <div style={{animationDelay:"0.10s"}}>
         
          <AiFillYoutube></AiFillYoutube>
          <p>YouTube</p>
          </div>
        </article>
      
    </div>
    </div>
    

    </>

  )
}

export default Home
