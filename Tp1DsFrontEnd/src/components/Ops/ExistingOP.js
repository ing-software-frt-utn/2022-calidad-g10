import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import TabList from "./DefectsView/TabList";
import FormOp from "./FormOp";

export default function ExistingOP(props) {
    const user = useContext(UserContext).user;
    const op = props.order;
    const [fechaInicioFormato, setFechaInicioFormato] = useState("");

    const estadoOp = {
        0: "Activo",
        1: "Pausado",
        2: "Finalizado"
    }

    useEffect(() => {
        if (op.fechaInicio) {
            const fechaInicio = new Date(op.fechaInicio);
            const dia = fechaInicio.getDate().toString().padStart(2, "0");
            const mes = (fechaInicio.getMonth() + 1).toString().padStart(2, "0");
            const anio = fechaInicio.getFullYear();
            const fechaEnFormatoDeseado = `${dia}-${mes}-${anio}`;
            setFechaInicioFormato(fechaEnFormatoDeseado);
        }
    }, [op]);

    const handleReanudar = () => {
        props.changeState(op.supervisorDeLinea.email);
    }

    const handlePausar = () => {
        props.changeState(op.supervisorDeLinea.email);
    }

    const handleFinalizar = () => {
        if (window.confirm("¿Está seguro de que finzalizar esta Op?")) {
            props.finishOp(op.supervisorDeLinea.email);
        }
    }

    return (
        <div>
            <FormOp order={op} />

            {Object.keys(op).length !== 0 && (op.supervisorDeLinea.email == user.email ? (

                <Grid container
                    spacing={3} sx={{ p: 2, pt: 2 }}>

                    {

                        op.estado === 2 ? (
                            <Grid item xs={2}>
                                <TextField label="Estado" value="Finalizado"
                                    InputProps={{ readOnly: true, }}
                                    InputLabelProps={{ shrink: true, }}
                                />
                            </Grid>
                        ) : (

                            <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <Grid item >
                                    <TextField label="Estado" value={estadoOp[op.estado] || "Linea Ocupada"}
                                        InputProps={{ readOnly: true, }}
                                        InputLabelProps={{ shrink: true, }}
                                    />
                                </Grid>
                                <div>
                                    {op.estado === 1 ? (
                                        <Button sx={{ m: 2 }} variant="contained" onClick={handleReanudar}>
                                            Reanudar
                                        </Button>
                                    ) : (
                                        <Button sx={{ m: 2 }} variant="contained" onClick={handlePausar}>
                                            Pausar
                                        </Button>
                                    )}
                                    <Button sx={{ m: 2 }} variant="contained" onClick={handleFinalizar}>
                                        Finalizar
                                    </Button>
                                </div>
                            </Grid>
                        )}
                </Grid>)
                :
                <Typography>Usted no pertenece a esta Op</Typography>)
            }




        </div>
    );
};
