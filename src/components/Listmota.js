import React from 'react'
import Cardmota from './Cardmota'
const Listmota = ({listdonors}) => {

  return (
    <div className='containerr'>
{
  listdonors.length >= 1 ?(
    listdonors.map((onedonor)=>{
      return(
        <Cardmota key={onedonor.id}  onedonor={onedonor} />
      )
    })
  ) :<h2>لا يوجد متبرع</h2>
}
    </div>
  )
}

export default Listmota
