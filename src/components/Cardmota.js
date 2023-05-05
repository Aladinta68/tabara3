import React from 'react'
import Fade from 'react-reveal/Fade';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SmsIcon from '@mui/icons-material/Sms';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
const Cardmota = ({ onedonor }) => {
 
  const handleCallClick = () => {
    window.location.href = `tel:${onedonor.n_tel}`;
  };

  const handleSmsClick = () => {
    window.location.href = `sms:${onedonor.n_tel}`;
  };

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
        <div className='cardinfobottomtime'>
        <AccessTimeIcon/>
        <p>24 ساعة / 24</p>
        </div>
        <div className='cardinfobottomphone'>
        <PhoneEnabledIcon onClick={handleCallClick}/>
        <SmsIcon className='mx-3 cardinfobottomphonetext'  onClick={handleSmsClick}/>
        <p>{onedonor.n_tel}</p>
        </div>
      </div>
    </div></Fade>
  )
}

export default Cardmota
