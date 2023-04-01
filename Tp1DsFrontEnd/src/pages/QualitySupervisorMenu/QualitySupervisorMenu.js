import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MenuAppBar from '../../components/Navbar/MenuAppBar'
import TabList from '../../components/Ops/DefectsView/TabList';
import FormOp from '../../components/Ops/FormOp';
import { UserContext } from '../../context/UserContext';
import { attachSupCalidad, getOrderByLinea, userLinkOrder } from '../../Services/OrdenServices';

const QualitySupervisorMenu = () => {
    const { lineId } = useParams();
    const [op, setOp] = useState({});
    const navigate = useNavigate();
    const user = useContext(UserContext).user;
    const [vinculado, setVinculado] = useState(false);
    const estadoOp = {
        0: "Activo",
        1: "Pausado",
        2: "Finalizado"
    }

    const toggleVinculado = () => {
        setVinculado(!vinculado);
    };

    useEffect(() => {
        getOrderByLinea(lineId, setOp);
    }, [])
    useEffect(() => {
        getOrderByLinea(lineId, setOp);
    }, [op])

    const handdleAttach = () => {
        attachSupCalidad(user.email, op.numero, setOp, toggleVinculado);
    };

    const back = () => {
        navigate("/menu");
    };

    return (
        <div>
            <MenuAppBar />
            <FormOp order={op} />

            {Object.keys(op).length !== 0 && (

                op.supervisorDeCalidad == null ? (
                    <Grid>
                        {
                            userLinkOrder(user.email) ?
                                <Typography>Usted ya se encuentra asociado a otra OP</Typography>
                                :
                                <Button onClick={handdleAttach} sx={{ mb: 2 }} variant="contained">Vincularse</Button>
                        }
                    </Grid>
                )
                    :
                    (
                        <Grid container spacing={2} alignItems="center"
                            sx={{ mt: 1, mb: 1, justifyContent: "center", width: "100%" }}>
                            <Grid container spacing={2} alignItems="center"
                                sx={{ mt: 1, mb: 1, justifyContent: "center", width: "100%" }}>
                                <Grid item>
                                    <TextField label="Supervisor de Calidad" value={op.supervisorDeCalidad.lastName} disabled />
                                </Grid>
                                {op.supervisorDeCalidad.email != user.email ? "" : (
                                    <Grid item>
                                        <Button onClick={handdleAttach} variant="contained">Desvincularse</Button>
                                    </Grid>
                                )}
                            </Grid>

                            <Grid item >
                                <Grid container >
                                    <Grid item>
                                        <TabList order={op} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    )
            )}
            <Grid container sx={{ mt: 1, mb: 1, justifyContent: "center" }}>
                <Button onClick={back} variant="contained">Volver</Button>
            </Grid>
        </div >
    );
}

export default QualitySupervisorMenu;