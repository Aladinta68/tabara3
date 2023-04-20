import React, { useState } from 'react'
import Header from '../components/Header'
import addmota from '../components/images/addmota.png'
import { Button, Form, Modal } from 'react-bootstrap'
import bloddonation2 from '../components/images/bloddonation2.png'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const Home = ({ adddonors, getdonors, wilayas, blods, getalldairaofwilaya, dairas }) => {
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
      <div className='Homemain'>
        <div className='homemainn'>
          <Fade right><div className='homemainbackground'></div></Fade>
          <div className='homemaintext'>
            <Fade right><h1>تبرعك بالدم قد ينقذ حياة شخص ما!</h1></Fade>
            <Fade right><p>التبرع بالدم يساعد في إنقاذ مليون شخص كل عام، لأن هذا التبرع يشمل أيضًا الصفائح الدموية والبلازما وحتى دم المشيمة.</p></Fade>
            <Fade right><div className='homebutton'>
              <Button className='addnewmotabari3' onClick={handleShow}>التسجيل كمتبرع<img src={addmota} /></Button>
              <Link className='linkk' to={'/listeofmotabari3in'}><Button className='searchblod'> بحاجة الى الدم</Button></Link>
            </div>
            </Fade>
          </div>
        </div>
        <Header getdonors={getdonors} wilayas={wilayas} blods={blods} dairas={dairas} getalldairaofwilaya={getalldairaofwilaya} />
        <div className='homedescrib'>
          <div className='homedescribtop'>
            <Fade right><h1>الفوائد الصحية عند التبرع بالدم</h1></Fade>
            <Fade right><p>لا يؤدي التبرع بالدم إلى تحسين حياة المتلقي فحسب، بل يساعد المتبرع أيضًا على البقاء بصحة جيدة.</p></Fade>
          </div>
          <div className='homedescribbottm'>
            <div className='homedeback'><Fade right><img src={bloddonation2}></img></Fade></div>
            <div className='homedescribleft'>
              <ul>
                <Fade right><li>تقليل مخازن الحديد الضارة</li></Fade>
                <Fade right><li>الحفاظ على صحة القلب والأوعية الدموية</li></Fade>
                <Fade right><li>تقليل مخاطر الاصابة بالنوبات القلبية</li></Fade>
              </ul>
              <ul>
                <Fade right><li>تقليل مخاطر الإصابة بالسرطان</li></Fade>
                <Fade right><li>يساعد الكبد على البقاء بصحة جيدة</li></Fade>
                <Fade right><li>نمو خلايا دم جديدة</li></Fade>
              </ul>
            </div>
          </div>
        </div>
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

export default Home
