import React, { useEffect, useState } from 'react'
import './Crush.css';
import name from './images/workinggirl.jpg'
const Crush = () => {
  const [first, setFirst] = useState(0);
  useEffect(() => console.log("Good going"), [first]);
  return (
    // <div className='container'>
    //   <div className='left-logo'>
    //     <img src={name} alt='Logo' className='name-logo'></img>
    //   </div>
    // <div className='col-md-6'>
    //   <div className='script-thought'>
    //     <h4>Nidhi, your hard work and honesty are the fuel for your success. Stay dedicated, for every effort you put in is a step toward greatness. Your authenticity shines bright, turning challenges into stepping stones. Keep going, and let your journey be a testament to your unwavering spirit.</h4>
    //   </div>
    // </div>
    // </div>
    <div className='full-main mb-5'>
      {first === 0 && <div className='eat-img'>
        <img src='https://media.tenor.com/CedXUNwq3fcAAAAj/tkthao219-bubududu.gif' alt='wait'></img>
        <h2>Hello Nidhi...</h2>
        <h2>I want to express so many thoughts to you, and now is the perfect moment to share them....</h2>

      </div>}
      {first === 1 && <div className='eat-img'>
        <img src='https://media.tenor.com/A6zUPAu_fDcAAAAM/credits-to-milkmochabear-milk-and-mocha.gif' alt='wait'></img>
        <h2>I want to go on so many dates with you....</h2>
      </div>}
      {first === 2 && <div className='eat-img'>
        <img src='https://media.tenor.com/fDmMTzoyZCYAAAAj/tkthao219-bubududu.gif' alt='wait'></img>
        <h2>I want to have too many cold coffee dates with you....</h2>
      </div>}
      {first === 3 && <div className='eat-img'>
        <img src='https://media.tenor.com/Ln8IqVQSpZMAAAAM/lele-iyi.gif' alt='wait'></img>
        <h2>I want to go on a long drive with you....</h2>
      </div>}
      {first === 4 && <div className='eat-img'>
        <img src='https://media.tenor.com/Rp6atGbxpAAAAAAj/tkthao219-bubududu.gif' alt='wait'></img>
        <img src='https://media.tenor.com/skrbv0aeoB0AAAAj/muddu.gif' alt='wait'></img>
        <h2>I want to dance with you...........</h2>
      </div>}
      {first === 5 && <div className='eat-img'>
        <img src='https://media.tenor.com/qfIdK2F8hroAAAAj/kater-work-kater.gif' alt='wait'></img>
        <h2>We have to put in much hard work in our lives.....</h2>
      </div>}
      {first === 6 && <div className='eat-img'>
        <img src='https://media.tenor.com/sipDF8tPQ-cAAAAj/tkthao219-bubududu.gif' alt='wait'></img>
        <h2>But we also have to enjoy our full life.......</h2>
      </div>}
      {first === 7 && <div className='eat-img'>
        <img src='https://media.tenor.com/0nb_g8Y5NzQAAAAj/milk-and-mocha-cute.gif' alt='wait'></img>
        <h2>Sometime i get mad at you.......</h2>
      </div>}
      {first === 8 && <div className='eat-img'>
        <img src='https://media.tenor.com/PpV43ddYxr8AAAAj/peach-goma.gif' alt='wait'></img>
        <h2>But I love you so much.......</h2>
      </div>}
      {first === 9 && <div className='eat-img'>
        <img src='https://media.tenor.com/mZ17kKBUMq8AAAAj/bear-run-cant-run.gif' alt='wait'></img>
        <h2>I will never let you go away from me.......</h2>
      </div>}
      {first === 10 && <div className='eat-img'>
        <img src='https://media.tenor.com/t8NcXPOxTNcAAAAj/bear-panda.gif' alt='wait'></img>
        {/* <img src='https://media.tenor.com/b0I_RPLBlicAAAAj/mimibubu.gif' alt='wait'></img> */}
        <h2>I always take care of you....</h2>
      </div>}
      {first === 11 && <div className='eat-img'>
        <img src='https://media.tenor.com/yxFDgO3QStQAAAAj/bear-love.gif' alt='wait'></img>
        {/* <img src='https://media.tenor.com/b0I_RPLBlicAAAAj/mimibubu.gif' alt='wait'></img> */}
        <h2>I am always there for you anytime whenever you need me....</h2>
      </div>}
      {first === 12 && <div className='eat-img'>
        <img src='https://media.tenor.com/FZfcPyYj1r4AAAAM/peach-goma-goma-peach.gif' alt='wait'></img>
        {/* <img src='https://media.tenor.com/b0I_RPLBlicAAAAj/mimibubu.gif' alt='wait'></img> */}
        <h2>just be my forever....</h2>
      </div>}
      {first === 13 && <div className='eat-img'>
        <img src='https://media.tenor.com/u1OqA3bNXyQAAAAM/hi-waving.gif' alt='wait'></img>
        {/* <img src='https://media.tenor.com/b0I_RPLBlicAAAAj/mimibubu.gif' alt='wait'></img> */}
        <h2>I love you so much, Nidhi...</h2>
        <h2>I promise never to leave you in any situation, in any phase of your life...</h2>
        <h3>say Yes or No...?</h3>

      </div>}
      {first === 14 && <div className='eat-img'>
        <img src='https://media.tenor.com/wod_ljXc5iQAAAAj/milk-and-mocha-cute.gif' alt='wait'></img>
        {/* <img src='https://media.tenor.com/b0I_RPLBlicAAAAj/mimibubu.gif' alt='wait'></img> */}
        <h2>Now your are mine Nidhi forever....</h2>
      </div>}
      <div className='yes-no-btn'>
        {first < 14 && <button className='yes-btn' onClick={() => setFirst(first + 1)}>{first < 11 ? 'next' : 'Yes'}</button>}
        {first === 13 && <button className='no-btn' >No</button>}
      </div>
    </div>
  )
}

export default Crush;
