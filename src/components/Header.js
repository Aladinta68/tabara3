import React,{useState} from 'react';
import chercher from '../components/images/chercher.png';
import Fade from 'react-reveal/Fade';
import { Form } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import {useNavigate} from 'react-router-dom';

const Header = ({ getdonors, wilayas, blods, getalldairaofwilaya, dairas }) => {

  const [showAlert, setShowAlert] = useState(false);

  const history = useNavigate();

  const filterby = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());
    const wilanum = formData.wilaya;
    const dairanum = formData.dairas;
    const blodnum = formData.blod;

    if ('wilaya' in formData && 'dairas' in formData && 'blod' in formData) {
      getdonors(blodnum, wilanum, dairanum);
      history('/searchmotabari3in');

    } else if ('wilaya' in formData && 'blod' in formData) {
      getdonors(blodnum, wilanum);
      history('/searchmotabari3in');
    }else
    {
      setShowAlert(true);
    }
      };

  const handlewilaya = (e) => {
    const getwilayaid = e.target.value;
    getalldairaofwilaya(getwilayaid);
  };
  return (
    <div className='headersearch'>
      <Fade right><div className='search'>
        <div className='searchtitle'>
          <h2>إبحث عن المتبرعين بالدم في منطقتك</h2>
        </div>
        <>
        {showAlert && (
          <Alert variant="danger">
            يجب تحديد الولاية و فصيلة الدم
          </Alert>
        )}
    </>
        <div className='searchinput'>
          <Form onSubmit={filterby}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Select onChange={(e) => handlewilaya(e)} name='wilaya' aria-label="Default select example" required>
                <option value='' selected disabled>الولاية</option>
                {
                    wilayas.map((wil) => {
                      return (
                        <option value={wil.number} key={wil.number}>{wil.name}</option>
                      )
                    })    
                }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Select name='dairas' aria-label="Default select example">
                <option selected disabled>الدائرة</option>
                {
                    dairas.map((dai) => {
                      return (
                        <option key={dai.number} value={dai.number}>{dai.name}</option>
                      )
                    })
                }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Select name='blod' aria-label="Default select example" required>
              <option value='' selected disabled>فصيلة الدم </option>
              {
                  blods.map((bld) => {
                    return (
                      <option key={bld.id} value={bld.id}>{bld.type}</option>
                    )
                  })
              }
            </Form.Select>
          </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <button className='searchmotaba' >بحث<img src={chercher} /></button>
            </Form.Group>
          </Form>
        </div>
      </div>
      </Fade>
    </div>

  )
}

export default Header
