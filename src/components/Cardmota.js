import React from 'react'
import Fade from 'react-reveal/Fade';

const Cardmota = ({per}) => {
  return (
    <Fade right><div className='box'>
    <div className='cardinfotop'>
      <div className='cardblod'>
        <p>{per.blod}</p>
      </div>
      <div className='cardadres'>
        <p>الولاية : <span>{per.wilaya}</span></p>
        <p>الدائرة : <span>{per.daira}</span></p>
      </div>
    </div>
    <div className='cardinfobottom'>
      <p>{per.telephone}</p>
    </div>
  </div></Fade>
  )
}

export default Cardmota
