import React from 'react'
import Cardmota from './Cardmota'
const Listmota = ({personnesdata}) => {

  return (
    <div className='containerr'>
{
  personnesdata.length >= 1 ?(
    personnesdata.map((per)=>{
      return(
        <Cardmota key={per.id} per={per} />
      )
    })
  ) :<h2>لا يوجد متبرع</h2>
}
    </div>
  )
}

export default Listmota
