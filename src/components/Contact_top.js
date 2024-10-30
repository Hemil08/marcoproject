import React from 'react'
import { useState } from 'react'

const Contact_top = () => {

    const [email,setEmail] = useState('');
    const [loading,setLoading] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            alert(`Submitted: ${email}`);
            setEmail('');
        },2000)
    }

  return (
    <div className='contact_top'>
        <div className='hour_section'>
            <div>
                <h2>Opening Hours</h2>
                <span>Monday-Friday</span>
                <span>08.00 am - 10.00 pm</span>
                <hr/>
                <span>Saturday</span>
                <span>08.00 am - 10.00 pm</span>
                <hr/>
                <span>Sunday</span>
                <span>08.00 am - 10.00 pm</span>
                <hr/>
            </div>
        </div>

        <div className='contact_us_section'>
            <h2>Contact Us</h2>
            <p>
            56/8, los angeles, rochy beach, Santa monica, United states of america - 1205
            </p>

            <p className='number'>
            012-6532-568-9746
            <br/>
            012-6532-569-9748
            </p>
        </div>

        <div className='newsletter_section'>
            <h2>Newsletter</h2>
            <p>You can trust us.we only send promo offers, not a single spam. </p>

            <form className='email_bar' onSubmit={handleSubmit}>
                <input 
                    type='email' placeholder='Your Email address' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <div>
                <button type='submit'>
                <span class="material-symbols-outlined">
                arrow_forward
                </span>
                </button>
                </div>
            </form>

            {loading && <p className='loading_massage'>Submitting...</p>}
        </div>
    </div>
  )
}

export default Contact_top