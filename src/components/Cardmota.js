import React from 'react'
import Fade from 'react-reveal/Fade';

const Cardmota = ({ onedonor }) => {
  return (
    <Fade right><div className='box'>
      <div className='cardinfotop'>
        <div className='cardblod'>
          <p>{onedonor.blood}</p>
        </div>
        <div className='cardadres'>
          <p>الولاية : <span>{onedonor.wilaya}</span></p>
          <p>الدائرة : <span>{onedonor.daiira}</span></p>
        </div>
      </div>
      <div className='cardinfobottom'>
        <p>{onedonor.n_tel}</p>
      </div>
    </div></Fade>
  )
}

export default Cardmota
