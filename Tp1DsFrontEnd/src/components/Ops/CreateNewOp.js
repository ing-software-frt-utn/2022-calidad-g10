import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { getColors } from "../../Services/ColorServices";
import { getModels } from "../../Services/ModelServices";
import { addOrder } from "../../Services/OrdenServices";

export default function CreateNewOP(props) {
    const line = props.line;
    const op = props.order;
    const [nroOP, setNroOP] = useState('');
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [models, setModels] = useState([{ id: 0, descripcion: "Seleccione una opción" }]);
    const [colors, setColors] = useState([{ id: 0, descripcion: "Seleccione una opción" }]);
    const user = useContext(UserContext).user;
    const [email, setEmail] = useState('');

    useEffect(() => {
        getModels(setModels);
        getColors(setColors);
        setEmail(user.email);
    }, []);


    const handleNroOPChange = event => setNroOP(event.target.value);
    const handleModeloChange = event => setModel(event.target.value);
    const handleColorChange = event => setColor(event.target.value);

    const handleCancelar = () => {
        setNroOP('');
        setModel('');
        setColor('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { id: 0, nroOP, modeloId: parseInt(model), colorId: parseInt(color), lineaId: line.id, email };
        addOrder(data, props.setData);
    };

    return (
        <form onSubmit={handleSubmit}>

            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ m: 2 }}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="NroOP"
                        value={nroOP}
                        required
                        onChange={handleNroOPChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        select
                        label="Modelo"
                        value={model}
                        required
                        onChange={handleModeloChange}
                        SelectProps={{ native: true }}
                        InputLabelProps={{ shrink: true }}
                    >
                        <option value="">Seleccionar modelo</option>
                        {models.map(m => (
                            <option key={m.id} value={m.id}>
                                {m.descripcion}
                            </option>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        select
                        label="Color"
                        value={color}
                        required
                        onChange={handleColorChange}
                        SelectProps={{ native: true }}
                        InputLabelProps={{ shrink: true }}
                    >
                        <option value="">Seleccionar color</option>
                        {colors.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.descripcion}
                            </option>
                        ))}
                    </TextField>
                </Grid>
                {op.estado === undefined ?
                    (<Grid container justifyContent="center" alignItems="center">
                        <Grid item sx={{ display: 'flex', gap: 2, m: 2, justifyContent: 'center' }}>
                            <Button variant="outlined" onClick={handleCancelar}>
                                Cancelar
                            </Button>
                        </Grid>
                        <Grid item sx={{ display: 'flex', gap: 2, m: 2, justifyContent: 'center' }}>
                            <Button type="submit" variant="contained" color="primary">
                                Confirmar
                            </Button>
                        </Grid>
                    </Grid>)
                    :
                    (<Grid container justifyContent="center" alignItems="center">
                        <Grid item sx={{ display: 'flex', gap: 2, m: 2, justifyContent: 'center' }}>
                            <Typography>
                                Usted ya posee una Orden, debera finalizarla antes de crear una nueva
                            </Typography>
                        </Grid>
                    </Grid>)
                }

            </Grid>
        </form>
    );
};
