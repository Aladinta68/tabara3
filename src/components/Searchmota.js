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
      ) :<h2>لا يوجد متبرع</h2>
    }
        </div>
      )
}

export default Searchmota
