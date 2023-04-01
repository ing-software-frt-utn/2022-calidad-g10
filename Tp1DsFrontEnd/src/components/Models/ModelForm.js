import React, { useEffect, useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const ModelForm = ({ onAdd, onEdit, initialModel, onCancel }) => {
    const [model, setModel] = useState(initialModel || {});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setModel((prevModel) => ({ ...prevModel, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!model.id) {
            onAdd(model);
        } else {
            onEdit(model);
        }
        setModel(initialModel);
    };

    useEffect(() => {
        setModel(initialModel);
    }, [initialModel]);

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Sku"
                name="sku"
                value={model?.sku || ''}
                onChange={handleChange}
                required
                fullWidth
            />
            <TextField
                label="Descripción"
                name="descripcion"
                value={model?.descripcion || ''}
                onChange={handleChange}
                required
                fullWidth
            />
            <Box sx={{ display: 'flex', gap: 2, mt: 2, justifyContent: 'center' }}>
                <TextField
                    label="Limite Inferior Reproceso"
                    name="limiteInferiorReproceso"
                    type="number"
                    value={model?.limiteInferiorReproceso || ''}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Limite Superior Reproceso"
                    name="limiteSuperiorReproceso"
                    type="number"
                    value={model?.limiteSuperiorReproceso || ''}
                    onChange={handleChange}
                    required
                />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mt: 2, justifyContent: 'center' }}>
                <TextField
                    label="Limite Inferior Observado"
                    name="limiteInferiorObservado"
                    type="number"
                    value={model?.limiteInferiorObservado || ''}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Limite Superior Observado"
                    name="limiteSuperiorObservado"
                    type="number"
                    value={model?.limiteSuperiorObservado || ''}
                    onChange={handleChange}
                    required
                />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mt: 2, justifyContent: 'center' }}>
                {model && (
                    <Button type="submit" variant="contained" color="primary">
                        {model.id ? 'Editar' : 'Agregar'}
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

export default ModelForm;