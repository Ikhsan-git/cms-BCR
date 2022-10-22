import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Cms-addCar.css'
import Up from '../../Assets/fi_upload.png';

const CmseditCar = () =>{
    return(
        <div className="f-addcar">
            <h6>Add New Car</h6>
            <Form className='f-add'>
            <div className='f-all'>
            <div className='f-body'>
                <div className='b-form'>
                <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                    <Form.Label className='f-label me-5'>Nama/Tipe Mobil<span>*</span></Form.Label>
                    <Form.Control className='kotak' type="text" placeholder="Input Nama/Tipe Mobil" />
                </Form.Group>

                <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
                    <Form.Label className='f-label me-5'>Harga<span>*</span></Form.Label>
                    <Form.Control className='kotak' type="text" placeholder="Input Harga Sewa Mobil" />
                </Form.Group>
                
                <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                    <Form.Label className='f-label me-5'>Foto<span>*</span></Form.Label>
                    <Form.Control className='kotak-i' type="text" placeholder="Upload Foto Mobil" />
                    <div className='kotak-img'>
                    <img className='kotak-img-img' src={Up} alt="up" />
                    </div>
                </Form.Group>

                <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
                    <Form.Label className='f-label me-5'>Kategori<span>*</span></Form.Label>
                    <Form.Control className='kotak' type="text" placeholder="Pilih Kategori Mobil" />
                </Form.Group>

                <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
                    <Form.Label className='f-label me-5'>Created at</Form.Label>
                    <div className='none'>-</div>
                </Form.Group>

                <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
                    <Form.Label className='f-label me-5'>Updated at</Form.Label>
                    <div className='none'>-</div>
                </Form.Group>
                </div>
                </div>
                <div className='button'>
                <Button className=' b-cancel me-3' variant="none" type="submit">
                    Cancel
                </Button>
                <Button className='b-save' variant="none" type="submit">
                    Save
                </Button>
                </div>
                </div>
            </Form>
        </div>
    )
}
export default CmsAddcar