import React, { useState } from 'react'
import { Button, Form, Container, Nav, Navbar, Modal } from 'react-bootstrap'
import logo from '../components/images/logo.png'
import addmota from '../components/images/addmota.png'
import { Link } from 'react-router-dom'


const Navb = ({adddonors, wilayas, dairas, blods, getalldairaofwilaya }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());
    console.log(formData)
    adddonors(formData);
    setShow(false);
  };

  const handlewilaya = (e) => {
    const getwilayaid = e.target.value;
    getalldairaofwilaya(getwilayaid)
  }
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
        <Form onSubmit={handleSubmit}>

          <Modal.Header closeButton>
            <Modal.Title className='modalheader'>التسجيل كمتبرع</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>فصيلة الدم </Form.Label>
              <Form.Select name='blood' aria-label="Default select example" required>
                <option value='' selected disabled>فصيلة الدم </option>
                {
                  blods.length >= 1 ? (
                    blods.map((bld) => {
                      return (
                        <option key={bld.id} value={bld.id}>{bld.type}</option>
                      )
                    })
                  ) : <option></option>
                }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>الولاية</Form.Label>
              <Form.Select onChange={(e) => handlewilaya(e)} name='wilaya' aria-label="Default select example" required>
                <option value='' selected disabled>الولاية</option>
                {
                  wilayas.length >= 1 ? (
                    wilayas.map((wil) => {
                      return (
                        <option value={wil.number} key={wil.number}>{wil.name}</option>
                      )
                    })
                  ) : <option></option>
                }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label> الدائرة</Form.Label>
              <Form.Select name='daiira' aria-label="Default select example">
                <option selected disabled>الدائرة</option>
                {
                  dairas.length >= 1 ? (
                    dairas.map((dai) => {
                      return (
                        <option key={dai.number} value={dai.number}>{dai.name}</option>
                      )
                    })
                  ) : <option></option>
                }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>امايل</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                placeholder=""
                autoFocus
                required
                autocomplete="current-email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>كلمة السر</Form.Label>
              <Form.Control
                required
                id="password"
                name="password"
                type="password"
                placeholder=""
                autoFocus
                autocomplete="current-password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>رقم الهاتف</Form.Label>
              <Form.Control
                required
                id="n_tel"
                name="n_tel"
                type="number"
                placeholder=""
                autoFocus
                autocomplete="current-phonenumber"
              />
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              غلق
            </Button>
            <Button variant="primary" type="submit">
              التسجيل
            </Button>
          </Modal.Footer>
        </Form>
      </Modal >
    </>
  )
}
export default Navb
