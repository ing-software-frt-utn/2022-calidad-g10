import React from 'react';
import MenuAppBar from '../../../components/Navbar/MenuAppBar'
import { useNavigate } from 'react-router-dom';
import ManageDefects from '../../../components/Defects/ManageDefects';
import { Button } from '@mui/material';

const ManageDefectsPage = () => {

    const navigate = useNavigate();

    const back = () => {
        navigate("/AdministratorMenu");
    }

    return (
        <div >
            <MenuAppBar />
            <ManageDefects />
            <Button type="button" variant="contained" onClick={back}>Volver</Button>
        </div >
    );
}

export default ManageDefectsPage;