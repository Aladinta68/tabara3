import React, { useState } from 'react'
import { Button, Form, Container, Nav, Navbar, Modal } from 'react-bootstrap'
import logo from '../components/images/logo.png'
import addmota from '../components/images/addmota.png'
import { Link } from 'react-router-dom'

const Navb = ({personnesdata}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <Navbar bg="light" className='navvbarr' expand="lg">
          <Container>
            <Link to={'/'} className='navlink3'><div className='navlogo'>tabara3<img src={logo} /></div></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to={'/'} className='navlink2'>الرئيسية</Link>
                <Link to={'/listeofmotabari3in'} className='navlink' >قائمة المتبرعين</Link>
                <Button className='addnewmotabari3' onClick={handleShow}>التسجيل كمتبرع<img src={addmota} /></Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='modalheader'>التسجيل كمتبرع</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>فصيلة الدم </Form.Label>
              <Form.Select aria-label="Default select example">
              <option selected disabled>فصيلة الدم </option>
              {
                personnesdata.length >= 1 ?(
                  personnesdata.map((per)=>{
                    return(
                      <option key={per.id}>{per.blod}</option>
                    )
                  })
                ) :<option></option>
              }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>الولاية</Form.Label>
              <Form.Select aria-label="Default select example">
              <option selected disabled>الولاية</option>
              {
                personnesdata.length >= 1 ?(
                  personnesdata.map((per)=>{
                    return(
                      <option key={per.id}>{per.wilaya}</option>
                    )
                  })
                ) :<option></option>
              }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label> الدائرة</Form.Label>
              <Form.Select aria-label="Default select example">
              <option selected disabled>الدائرة</option>
              {
                personnesdata.length >= 1 ?(
                  personnesdata.map((per)=>{
                    return(
                      <option key={per.id}>{per.daira}</option>
                    )
                  })
                ) :<option></option>
              }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>رقم الهاتف</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            غلق
          </Button>
          <Button variant="primary" onClick={handleClose}>
            التسجيل
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default Navb
