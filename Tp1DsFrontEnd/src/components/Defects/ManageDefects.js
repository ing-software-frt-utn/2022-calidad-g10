import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { addDefect, deleteDefect, getDefects, putDefects } from "../../Services/DefectServices";
import DefectForm from "./DefectForm";
import DefectTable from "./DefectTable";

export default function ManageDefects() {
    const [editingDefect, setEditingDefect] = useState(null);
    const [defects, setDefects] = useState([]);

    useEffect(() => {
        getDefects(setDefects);
    }, [defects]);

    const handleEdit = (defect) => {
        setEditingDefect(defect);
    };

    const handleDelete = (defect) => {
        if (window.confirm("¿Está seguro de que deseas eliminar este defecto?")) {
            deleteDefect(defect);
        }
    };

    const handleEditSubmit = (editedDefect) => {
        putDefects(editedDefect, setEditingDefect, defects, setDefects);
    };

    const handleAddSubmit = (defect) => {
        addDefect(defect);
        setEditingDefect({ tipo: 0, descripcion: '', id: 0 });
    };

    return (
        <div>
            <Grid container spacing={3} sx={{ p: 2, pt: 2 }}>
                <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <DefectForm
                        onAdd={handleAddSubmit}
                        onEdit={handleEditSubmit}
                        initialDefect={editingDefect}
                        onCancel={() => setEditingDefect(null)}
                    />
                </Grid>
                <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <DefectTable
                        defects={defects}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                </Grid>
            </Grid>
        </div>

    );
};
