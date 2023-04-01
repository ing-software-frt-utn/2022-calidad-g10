import React, { useEffect, useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const TurnForm = ({ onAdd, onEdit, initialTurn, onCancel }) => {
    const [turn, setTurn] = useState(initialTurn || {});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTurn((prevTurn) => ({ ...prevTurn, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!turn.id) {
            onAdd(turn);
        } else {
            onEdit(turn);
        }
        setTurn(initialTurn);
    };

    useEffect(() => {
        setTurn(initialTurn);
    }, [initialTurn]);

    return (

        <form onSubmit={handleSubmit}>
            <TextField
                label="Hora de Inicio"
                name="horaInicio"
                value={turn?.horaInicio || ''}
                onChange={handleChange}
                InputLabelProps={{ shrink: true, }}
                type="time"
                required
                fullWidth
                sx={{ p: 1, m: 0 }}
            />
            <TextField
                label="Hora Fin"
                name="horaFin"
                value={turn?.horaFin || ''}
                onChange={handleChange}
                InputLabelProps={{ shrink: true, }}
                type="time"
                required
                fullWidth
                sx={{ p: 1, m: 0 }}
            />
            <TextField
                label="Descripcion"
                name="descripcion"
                value={turn?.descripcion || ''}
                onChange={handleChange}
                required
                fullWidth
                sx={{ p: 1, m: 0 }}
            />
            <Box sx={{ display: 'flex', gap: 2, mt: 2, justifyContent: 'center' }}>
                {turn && (
                    <Button type="submit" variant="contained" color="primary">
                        {turn.id ? 'Editar' : 'Agregar'}
                    </Button>
                )}
                <Button type="button" variant="contained" onClick={() => {
                    onCancel()
                }}>
                    Cancelar
                </Button>
            </Box>
        </form>
    );
};

export default TurnForm;