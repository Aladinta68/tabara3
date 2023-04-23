import React from 'react'
import Cardmota from './Cardmota'
import '../index.css'


const Listmota = ({ listdonors,isChecked}) => {

  const thereisnomotabari3 = isChecked ? 'thereisnomotabari3-black' : 'thereisnomotabari3';

  return (
    <div className='containerr'>
      {
        listdonors.length >= 1 ? (
          listdonors.map((onedonor) => {
            return (
              <Cardmota key={onedonor.id} onedonor={onedonor} />
            )
          })
          
        ) : <div className={thereisnomotabari3}><h2>لا يوجد متبرع</h2></div>
      }
    </div>
    
  )
}

export default Listmota
