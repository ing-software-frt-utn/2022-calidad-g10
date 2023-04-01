import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TurnTable = ({ turns, onEdit, onDelete }) => {
    return (
        <TableContainer component={Paper} >
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ p: 1, textAlign: "center" }}>Hora de Inicio</TableCell>
                        <TableCell sx={{ p: 1, textAlign: "center" }}>Hora de Fin</TableCell>
                        <TableCell sx={{ p: 1, textAlign: "center" }}>Descripción</TableCell>

                        <TableCell sx={{ p: 1, textAlign: "center" }}>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {turns.map((turn) => (
                        <TableRow key={turn.id}>
                            <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>{(new Date(turn.horaInicio)).toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric' })}</TableCell>
                            <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>{(new Date(turn.horaFin)).toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric' })}</TableCell>
                            <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>{turn.descripcion}</TableCell>
                            <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>
                                <Button onClick={() => onEdit(turn)}><EditIcon /></Button>
                                <Button onClick={() => onDelete(turn)}><DeleteIcon /></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TurnTable;