import React, { useState } from 'react'
import { Button, Form, Container, Nav, Navbar, Modal, ModalBody } from 'react-bootstrap'
import newlogo from '../components/images/newlogo.png'
import sortir from '../components/images/sortir.png'
import addmota from '../components/images/addmota.png'
import { Link } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import Themeswitch from './Themeswitch';
import '../index.css'

const Navb = ({ adddonors, wilayas, dairas, blods, getalldairaofwilaya,handleSwitchChange,isChecked }) => {
  

  //fonction for form 2  
  const handleSubmitt = (event) => {
    event.preventDefault();
    setShow2(false);
  };
  //fonction for form 2
  const handleSubmit = (e) => {
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());
    console.log(formData)
    adddonors(formData);
    setShow(false);
  };
  //fonction get wilaya to get daira
  const handlewilaya = (e) => {
    const getwilayaid = e.target.value;
    getalldairaofwilaya(getwilayaid)
  }
  //use state for modal 1
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //use state for modal 2
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const navvbarr = isChecked ? 'navvbarr-black' : 'navvbarr-white';
  const navlink2 = isChecked ? 'navlink2-black' : 'navlink2-white';
  const navlink = isChecked ? 'navlink-black' : 'navlink-white';
  return (
    <>
      <div>
        <Navbar className={navvbarr} expand="lg">
          <Container>
            <Link to={'/'} className='navlink3'><div className='navlogo'>tabara3<img src={newlogo} /></div></Link>
            <Themeswitch handleSwitchChange={handleSwitchChange} isChecked={isChecked} />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to={'/'} className={navlink2}>الرئيسية</Link>
                <Link to={'/listeofmotabari3in'} className={navlink} >قائمة المتبرعين</Link>
                <Button className='addnewmotabari3' onClick={handleShow}>التسجيل كمتبرع<img src={addmota} /></Button>
                <Button className='login' onClick={handleShow2}>  الدخول للحساب<img src={sortir} /></Button>
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
            <Alert variant='danger'>
              لقد تم التسجيل من قبل بواسطة احد البيانات المدخلة.
            </Alert>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>فصيلة الدم </Form.Label>
              <Form.Select name='blood' aria-label="Default select example" required>
                <option value='' selected disabled>فصيلة الدم </option>
                {
                  (
                    blods.map((bld) => {
                      return (
                        <option key={bld.id} value={bld.id}>{bld.type}</option>
                      )
                    })
                  )
                }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>الولاية</Form.Label>
              <Form.Select onChange={(e) => handlewilaya(e)} name='wilaya' aria-label="Default select example" required>
                <option value='' selected disabled>الولاية</option>
                {
                  (
                    wilayas.map((wil) => {
                      return (
                        <option value={wil.number} key={wil.number}>{wil.name}</option>
                      )
                    })
                  )
                }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label> الدائرة</Form.Label>
              <Form.Select name='daiira' aria-label="Default select example" >
                <option selected disabled>الدائرة</option>
                {
                  (
                    dairas.map((dai) => {
                      return (
                        <option key={dai.number} value={dai.number}>{dai.name}</option>
                      )
                    })
                  )
                }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>امايل</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
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
                placeholder=" minimum 8 characters  at-least 1 Alphabet and 1 Number"
                autoFocus
                autocomplete="current-password"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>رقم الهاتف</Form.Label>
              <Form.Control
                required
                id="n_tel"
                name="n_tel"
                type="number"
                placeholder="...ex:05"
                autoFocus
                autocomplete="current-phonenumber"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className='buttonaddmotabari3form'>
            <Button type="submit" className='addmotabari3buttonadd'>التسجيل</Button>
          </Modal.Footer>
          <div className='divyoudonthavecompte'> لديك حساب ؟ <Link className='signupifyoudonthave'> تسجيل الدخول </Link></div>
        </Form>
      </Modal >

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title className='modalheader'>تسجيل الدخول</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <Alert variant='danger'>
            البيانات المدخلة لا تتطابق مع سجلاتنا.
          </Alert>
          <Form onSubmit={handleSubmitt}>
            <Form.Group md="4" controlId="exampleForm.ControlInput1">
              <Form.Label>الإيميل</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="الإيميل"
                autocomplete="current-email"
              />
            </Form.Group>
            <Form.Group md="6" controlId="exampleForm.ControlInput2">
              <Form.Label>كلمة المرور</Form.Label>
              <Form.Control type="password" autocomplete="current-password" placeholder="كلمة المرور" required />
            </Form.Group>
            <div className='forgetpassworddiv'><Link className='forgetpassword'>نسيت كلمة المرور ؟</Link></div>
            <Modal.Footer className='buttonaddmotabari3form'>
              <Button type="submit" className='addmotabari3buttonadd'>تسجيل الدخول
              </Button>
            </Modal.Footer>
            <div className='divyoudonthavecompte'>ليس لديك حساب ؟ <Link className='signupifyoudonthave'>تسجيل حساب جديد</Link></div>
          </Form>
        </ModalBody>
      </Modal >
    </>
  )
}
export default Navb
