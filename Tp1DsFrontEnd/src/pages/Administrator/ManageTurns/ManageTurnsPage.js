import React from 'react';
import MenuAppBar from '../../../components/Navbar/MenuAppBar'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ManageTurns from '../../../components/Turns/ManageTurns';

const ManageTurnsPage = () => {

    const navigate = useNavigate();

    const back = () => {
        navigate("/AdministratorMenu");
    }

    return (
        <div >
            <MenuAppBar />
            <ManageTurns />
            <Button type="button" variant="contained" onClick={back}>Volver</Button>
        </div >
    );
}

export default ManageTurnsPage;