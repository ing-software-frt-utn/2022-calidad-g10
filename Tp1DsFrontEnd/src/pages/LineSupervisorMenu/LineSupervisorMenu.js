import { Button, Grid } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MenuAppBar from '../../components/Navbar/MenuAppBar'
import CreateNewOP from '../../components/Ops/CreateNewOp';
import ExistingOP from '../../components/Ops/ExistingOP';
import { UserContext } from '../../context/UserContext';
import { getLineById } from '../../Services/lineServices';
import { changeStateByEmail, finishOpByEmail, getOrderByEmail, getOrderByLinea } from '../../Services/OrdenServices';

const LineSupervisorMenu = () => {
    const { lineId } = useParams();
    const navigate = useNavigate();
    const [line, setLine] = useState({});
    const user = useContext(UserContext).user;
    const [op, setOp] = useState({});

    useEffect(() => {
        getLineById(lineId, setLine);
    }, [line]);

    useEffect(() => {
        getOrderByEmail(user.email, setOp)
    }, [])

    useEffect(() => {
        getOrderByLinea(lineId, setOp)
    }, [op])

    const changeOpState = (email) => {
        changeStateByEmail(email, setOp);
    }

    const finishOp = (email) => {
        finishOpByEmail(email);
        setLine({})
    }

    const back = () => {
        navigate("/menu");
    };

    return (
        <div>
            <MenuAppBar />
            {(line.estado === 0) ? <CreateNewOP line={line} order={op} setData={setOp} /> : <ExistingOP line={line} order={op} changeState={changeOpState} finishOp={finishOp} />}
            <Grid container sx={{ mt: 1, mb: 1, justifyContent: "center" }}>
                <Button onClick={back} variant="contained">Volver</Button>
            </Grid>
        </div >
    );
}

export default LineSupervisorMenu;