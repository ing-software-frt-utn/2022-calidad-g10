import React from 'react';
import MenuAppBar from '../../../components/Navbar/MenuAppBar'
import { useNavigate } from 'react-router-dom';
import ManageColors from '../../../components/Colors/ManageColors';
import { Button } from '@mui/material';

const ManageColorsPage = () => {

    const navigate = useNavigate();

    const back = () => {
        navigate("/AdministratorMenu");
    }

    return (
        <div >
            <MenuAppBar />
            <ManageColors />
            <Button type="button" variant="contained" onClick={back}>Volver</Button>
        </div >
    );
}

export default ManageColorsPage;