import React from 'react'
import Cardmota from './Cardmota'

const Searchmota = ({donors}) => {
    return (
        <div className='containerr'>
    {
      donors.length >= 1 ?(
        donors.map((onedonor)=>{
          return(
            <Cardmota key={onedonor.id}  onedonor={onedonor} />
          )
        })
        ) :<div  className='thereisnomotabari3'><h2>لا يوجد متبرع</h2></div>
      }
        </div>
      )
}

export default Searchmota
