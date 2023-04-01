import React, { useEffect, useState } from "react";
import { TextField, Button, Box, Select, InputLabel, MenuItem } from "@mui/material";

const DefectForm = ({ onAdd, onEdit, initialDefect, onCancel }) => {
    const [defect, setDefect] = useState(initialDefect || {});
    const tipos = {
        0: 'Reproceso',
        1: 'Observado',
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDefect((prevDefect) => ({ ...prevDefect, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!defect.id) {
            onAdd(defect);
        } else {
            onEdit(defect);
        }
        setDefect(initialDefect);
    };

    useEffect(() => {
        setDefect(initialDefect);
    }, [initialDefect]);

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Descripción"
                name="descripcion"
                value={defect?.descripcion || ''}
                onChange={handleChange}
                required
                fullWidth
                sx={{ p: 1, m: 0 }}
            />
            <InputLabel id="tipos">Tipo</InputLabel>
            <Select
                labelId="tipos"
                name="tipo"
                value={defect?.tipo || ''}
                onChange={handleChange}
                required
                sx={{ p: 0, m: 0 }}
            >
                {Object.keys(tipos).map((key) => (
                    <MenuItem key={key} value={key}>{tipos[key]}</MenuItem>
                ))}
            </Select>
            <Box sx={{ display: 'flex', gap: 2, mt: 2, justifyContent: 'center' }}>
                {defect && (
                    <Button type="submit" variant="contained" color="primary">
                        {defect.id ? 'Editar' : 'Agregar'}
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

export default DefectForm;