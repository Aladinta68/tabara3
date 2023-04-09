import React from 'react'
import chercher from '../components/images/chercher.png'
import Fade from 'react-reveal/Fade';

const Header = ({personnesdata}) => {

  return (
    <div className='headersearch'>
    <Fade right><div className='search'>
          <div className='searchtitle'>
            <h2>إبحث عن المتبرعين بالدم في منطقتك</h2>
          </div>
          <div className='searchinput'>
            <select><option selected disabled>الولاية</option>{
              personnesdata.length >= 1 ?(
                personnesdata.map((per)=>{
                  return(
                    <option key={per.id}>{per.wilaya}</option>
                  )
                })
              ) :<option></option>
            }</select>
            <select><option selected disabled>الدائرة</option>{
              personnesdata.length >= 1 ?(
                personnesdata.map((per)=>{
                  return(
                    <option key={per.id}>{per.daira}</option>
                  )
                })
              ) :<option></option>
            }</select>
            <select><option selected disabled>فصيلة الدم </option>{
              personnesdata.length >= 1 ?(
                personnesdata.map((per)=>{
                  return(
                    <option key={per.id}>{per.blod}</option>
                  )
                })
              ) :<option></option>
            }</select>
            <button className='searchmotaba'>بحث<img src={chercher} /></button>
          </div>
        </div>
        </Fade>
    </div>

  )
}

export default Header
