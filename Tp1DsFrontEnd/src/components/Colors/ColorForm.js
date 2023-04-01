import React, { useEffect, useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const ColorForm = ({ onAdd, onEdit, initialColor, onCancel }) => {
    const [color, setColor] = useState(initialColor || {});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setColor((prevColor) => ({ ...prevColor, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!color.id) {
            onAdd(color);
        } else {
            onEdit(color);
        }
        setColor(initialColor);
    };

    useEffect(() => {
        setColor(initialColor);
    }, [initialColor]);

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Codigo"
                name="codigo"
                value={color?.codigo || ''}
                onChange={handleChange}
                required
                fullWidth
                sx={{ p: 1, m: 0 }}
            />
            <TextField
                label="Descripción"
                name="descripcion"
                value={color?.descripcion || ''}
                onChange={handleChange}
                required
                fullWidth
                sx={{ p: 1, m: 0 }}
            />
            <Box sx={{ display: 'flex', gap: 2, mt: 2, justifyContent: 'center' }}>
                {color && (
                    <Button type="submit" variant="contained" color="primary">
                        {color.id ? 'Editar' : 'Agregar'}
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

export default ColorForm;