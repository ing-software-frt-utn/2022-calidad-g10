import React from 'react';
import MenuAppBar from '../../../components/Navbar/MenuAppBar'
import { useNavigate } from 'react-router-dom';
import ManageModels from '../../../components/Models/ManageModels';
import { Button } from '@mui/material';

const ManageModelsPage = () => {

    const navigate = useNavigate();

    const back = () => {
        navigate("/AdministratorMenu");
    }

    return (
        <div >
            <MenuAppBar />
            <ManageModels />
            <Button type="button" variant="contained" onClick={back}>Volver</Button>
        </div >
    );
}

export default ManageModelsPage;