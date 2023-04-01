import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { addTurn, deleteTurn, getTurns, putTurn } from "../../Services/TurnServices";
import TurnForm from "./TurnForm";
import TurnTable from "./TurnTable";

export default function ManageTurns() {
    const [editingTurn, setEditingTurn] = useState(null);
    const [turns, setTurns] = useState([]);

    useEffect(() => {
        getTurns(setTurns);
    }, [turns]);

    const handleEdit = (turn) => {
        setEditingTurn(turn);
    };

    const handleDelete = (turn) => {
        if (window.confirm("¿Está seguro de que deseas eliminar este turno?")) {
            deleteTurn(turn);
        }
    };

    const handleEditSubmit = (editedTurn) => {
        putTurn(editedTurn, setEditingTurn, turns, setTurns);
    };

    const handleAddSubmit = (turn) => {
        addTurn(turn);
        setEditingTurn({ horaInicio: 0, horaFin: 0, descripcion: '', id: null });
    };

    return (
        <div>
            <Grid container spacing={3} sx={{ p: 2, pt: 2 }}>
                <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <TurnForm
                        onAdd={handleAddSubmit}
                        onEdit={handleEditSubmit}
                        initialTurn={editingTurn}
                        onCancel={() => setEditingTurn(null)}
                    />
                </Grid>
                <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <TurnTable
                        turns={turns}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                </Grid>
            </Grid>
        </div>

    );
};
