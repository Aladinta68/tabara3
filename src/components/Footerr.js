import React from 'react'
import logo from '../components/images/logo.png'
import Fade from 'react-reveal/Fade';

const Footerr = () => {
  return (
    <div className='footterr'>
      <Fade right><div className='footerlogo'>tabara3<img src={logo} />
      </div></Fade>
      <div className='footerdescription'>
        <Fade right><p>هذا الموقع الجزائري يساعد المحتاجين إلى الدم في العثور على المتبرعين بكل سهولة وفي منطقتهم، هذا الموقع صدقة جارية، يرجى الدعاء لصاحبه ولكل من ساعد في تحقيقه بالرحمة والمغفرة.</p></Fade>
      </div>
      <div className='footercopyright'>
        <Fade right><p>Copyright ©2023 Tabara3 created by TAHAR ABBES ALA EDDINE </p></Fade>
      </div>
    </div>
  )
}

export default Footerr