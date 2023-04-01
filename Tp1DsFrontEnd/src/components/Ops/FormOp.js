import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getTurnoActual } from "../../Services/TurnServices";

export default function FormOp(props) {
    const op = props.order;
    const [fechaInicioFormato, setFechaInicioFormato] = useState("");
    const [turno, setTurno] = useState("");

    const estadoOp = {
        0: "Activo",
        1: "Pausado",
        2: "Finalizado"
    }

    useEffect(() => {
        getTurnoActual(setTurno);
    }, [])


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

    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 1 }}
                sx={{ mt: 2, mb: 3, justifyContent: "center", width: "100%" }}
            >
                <Grid item>
                    <TextField
                        label="OP Actual"
                        value={op ? op.numero : ""}
                        variant="standard"
                        InputProps={{ readOnly: true, }}
                        InputLabelProps={{ shrink: true, }}
                    />
                </Grid>
                <Grid item>
                    <TextField label="Usuario Asignado"
                        value={op.supervisorDeLinea ? op.supervisorDeLinea.lastName : ""}
                        variant="standard"
                        InputProps={{ readOnly: true, }}
                        InputLabelProps={{ shrink: true, }}
                    />
                </Grid>

                <Grid item>
                    <TextField label="Fecha de Creación"
                        value={fechaInicioFormato}
                        variant="standard"
                        InputProps={{ readOnly: true, }}
                        InputLabelProps={{ shrink: true, }}
                    />
                </Grid>
                <Grid item>
                    <TextField label="Turno"
                        value={turno.descripcion}
                        variant="standard"
                        InputProps={{ readOnly: true, }}
                        InputLabelProps={{ shrink: true, }}
                    />
                </Grid>
                <Grid item>

                    <TextField label="Modelo"
                        value={op.modelo ? op.modelo.descripcion : ""}
                        variant="standard"
                        InputProps={{ readOnly: true, }}
                        InputLabelProps={{ shrink: true, }}
                    />
                </Grid>
                <Grid item>
                    <TextField label="Color"
                        value={op.color ? op.color.descripcion : ""}
                        variant="standard"
                        InputProps={{ readOnly: true, }}
                        InputLabelProps={{ shrink: true, }}
                    />
                </Grid>
            </Grid>
        </div>
    );
};
