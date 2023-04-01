import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { addColor, deleteColor, getColors, putColors } from "../../Services/ColorServices";
import ColorForm from "./ColorForm";
import ColorTable from "./ColorTable";

export default function ManageColors() {
    const [editingColor, setEditingColor] = useState(null);
    const [colors, setColors] = useState([]);

    useEffect(() => {
        getColors(setColors);
    }, [colors]);

    const handleEdit = (color) => {
        setEditingColor(color);
    };

    const handleDelete = (color) => {
        if (window.confirm("¿Está seguro de que deseas eliminar este color?")) {
            deleteColor(color);
        }
    };

    const handleEditSubmit = (editedColor) => {
        putColors(editedColor, setEditingColor, colors, setColors);
    };

    const handleAddSubmit = (color) => {
        addColor(color);
        setEditingColor({ codigo: 0, descripcion: '', id: 0 });
    };

    return (
        <div>
            <Grid container spacing={3} sx={{ p: 2, pt: 2 }}>
                <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <ColorForm
                        onAdd={handleAddSubmit}
                        onEdit={handleEditSubmit}
                        initialColor={editingColor}
                        onCancel={() => setEditingColor(null)}
                    />
                </Grid>
                <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <ColorTable
                        colors={colors}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                </Grid>
            </Grid>
        </div>

    );
};
