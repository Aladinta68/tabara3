import React from 'react'
import { Form, FormCheck } from 'react-bootstrap'
const Themeswitch = ({isChecked,handleSwitchChange}) => {
  

  return (
    <Form>
            <Form.Check
                type="switch"
                id="custom-switch"
                onChange={handleSwitchChange}
                checked={isChecked}
                className='buttonStyles'
      ></Form.Check>
        </Form>
  )
}

export default Themeswitch
