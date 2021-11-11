import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextareaAutosize from '@mui/core/TextareaAutosize';
import SideNav from '../../../Components/Dashboard/SideNav';
import Container from '../../../Components/Dashboard/Container';
import DashboardTable from '../../../Components/Dashboard/DashboardTable';
import DashboardDialog from '../../../Components/Dashboard/DashboardDialog';
import Button from '../../../Components/Common/Button';
import Input from '../../../Components/Common/Input';
import './style.css';

function Cars() {
  const [cars, setCars] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [car, setCar] = useState({});

  const handleSave = async () => {
    try {
      await axios.post('/api/v1/admin/cars', {
        ...car,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getCars = async () => {
    try {
      const res = await axios.get('/api/v1/admin/cars');
      setCars(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div>
      <SideNav />
      <Container>
        <DashboardTable
          title="Cars"
          addButton={<Button text="New Car" loading={false} handelClick={() => setOpenDialog(true)} />}
          headers={['id', 'Name', 'brand', 'Type', 'Gearbox', 'Seates', 'doors', 'Price']}
          rows={cars}
        />
        <DashboardDialog
          open={openDialog}
          title="Add New Car"
          cancelButton={<Button loading={false} text="Cancel" handelClick={() => setOpenDialog(false)} />}
          saveButton={<Button loading={false} text="Save" handelClick={() => handleSave()} />}
          handleClose={() => setOpenDialog(false)}
        >
          <div className="add-car-container">
            <div className="add-car-form-input">
              <Input type="text" onChange={(e) => setCar({ ...car, name: e.target.value })} label="Name" error={false} widthInput="2.5" />
            </div>
            <div className="add-car-form-input">
              <Input type="number" onChange={(e) => setCar({ ...car, door: e.target.value })} label="Doors" error={false} widthInput="2.5" />
            </div>
            <div className="add-car-form-input">
              <Input type="number" onChange={(e) => setCar({ ...car, seats: e.target.value })} label="Seats" error={false} widthInput="2.5" />
            </div>
            <div className="add-car-form-input">
              <Input type="number" onChange={(e) => setCar({ ...car, releaseYear: e.target.value })} label="Release Year" error={false} widthInput="2.5" />
            </div>
            <div className="add-car-form-input">
              <Input type="text" onChange={(e) => setCar({ ...car, gearbox: e.target.value })} label="Gearbox" error={false} widthInput="2.5" />
            </div>
            <div className="add-car-form-input">
              <Input type="number" onChange={(e) => setCar({ ...car, price: e.target.value })} label="Price" error={false} widthInput="2.5" />
            </div>
            <div className="add-car-form-input">
              <Input type="text" onChange={(e) => setCar({ ...car, color: e.target.value })} label="Color" error={false} widthInput="2.5" />
            </div>
            <div className="add-car-form-input">
              <Input type="text" onChange={(e) => setCar({ ...car, imgCar: e.target.value })} label="Image" error={false} widthInput="2.5" />
            </div>
            <div className="add-car-form-input">
              <TextareaAutosize
                maxRows={7}
                minRows={5}
                aria-label="maximum height"
                placeholder="Description"
                style={{ width: 500 }}
                onChange={(e) => setCar({ ...car, description: e.target.value })}
              />
            </div>
          </div>
        </DashboardDialog>
      </Container>
    </div>
  );
}

export default Cars;
