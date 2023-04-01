import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { addLine, deleteLine, getLines, putLines } from "../../Services/lineServices";
import LineForm from "./LineForm";
import LineTable from "./LineTable";

export default function ManageColors() {
    const [editingLine, setEditingLine] = useState(null);
    const [lines, setLines] = useState([]);

    useEffect(() => {
        getLines(setLines);
    }, [lines]);

    const handleEdit = (line) => {
        setEditingLine(line);
    };

    const handleDelete = (line) => {
        if (window.confirm("¿Está seguro de que deseas eliminar esta linea?")) {
            deleteLine(line);
        }
    };

    const handleEditSubmit = (editedLine) => {
        putLines(editedLine, setEditingLine, lines, setLines);
    };

    const handleAddSubmit = (color) => {
        addLine(color);
        setEditingLine({ numero: 0, estado: 0, id: 0 });
    };

    return (
        <div>
            <Grid container spacing={3} sx={{ p: 2, pt: 2 }}>
                <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <LineForm
                        onAdd={handleAddSubmit}
                        onEdit={handleEditSubmit}
                        initialLine={editingLine}
                        onCancel={() => setEditingLine(null)}
                    />
                </Grid>
                <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <LineTable
                        lines={lines}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                </Grid>
            </Grid>
        </div>

    );
};
