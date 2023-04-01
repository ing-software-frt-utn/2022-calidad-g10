import React from 'react';
import MenuAppBar from '../../../components/Navbar/MenuAppBar'
import { useNavigate } from 'react-router-dom';
import ManageLines from '../../../components/Lines/ManageLines.js';
import { Button } from '@mui/material';

const ManageLinesPage = () => {

    const navigate = useNavigate();

    const back = () => {
        navigate("/AdministratorMenu");
    }

    return (
        <div >
            <MenuAppBar />
            <ManageLines />
            <Button type="button" variant="contained" onClick={back}>Volver</Button>
        </div >
    );
}

export default ManageLinesPage;