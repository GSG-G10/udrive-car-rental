import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

  const handleSave = () => {};

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
          saveButton={<Button loading={false} text="Save" handelClick={handleSave} />}
          handleClose={() => setOpenDialog(false)}
        >
          <div className="add-car-container">
            <Input label="Name" error="" widthInput={2.5} />
          </div>
        </DashboardDialog>
      </Container>
    </div>
  );
}

export default Cars;
