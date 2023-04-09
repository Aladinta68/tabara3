import React, { useState } from 'react'
import Header from '../components/Header'
import addmota from '../components/images/addmota.png'
import { Button, Form, Modal } from 'react-bootstrap'
import bloddonation2 from '../components/images/bloddonation2.png'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const Home = ({ personnesdata }) => {
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
                <Header personnesdata={personnesdata} />
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

export default Home
