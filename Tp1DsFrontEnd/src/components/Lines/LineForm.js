import React, { useEffect, useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const LineForm = ({ onAdd, onEdit, initialLine, onCancel }) => {
    const [line, setLine] = useState(initialLine || {});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLine((prevDefect) => ({ ...prevDefect, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!line.id) {
            onAdd(line);
        } else {
            onEdit(line);
        }
        setLine(initialLine);
    };

    useEffect(() => {
        setLine(initialLine);
    }, [initialLine]);

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Numero de Linea"
                name="numero"
                value={line?.numero || ''}
                onChange={handleChange}
                required
                fullWidth
                sx={{ p: 1, m: 0 }}
            />
            <Box sx={{ display: 'flex', gap: 2, mt: 2, justifyContent: 'center' }}>
                {line && (
                    <Button type="submit" variant="contained" color="primary">
                        {line.id ? 'Editar' : 'Agregar'}
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

export default LineForm;