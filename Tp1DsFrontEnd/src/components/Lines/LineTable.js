import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ColorTable = ({ lines, onEdit, onDelete }) => {
    const estados = {
        0: 'Libre',
        1: 'Ocupada',
    }
    return (
        <TableContainer component={Paper} >
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ p: 1, textAlign: "center" }}>Numero de Linea</TableCell>
                        <TableCell sx={{ p: 1, textAlign: "center" }}>Estado</TableCell>

                        <TableCell sx={{ p: 1, textAlign: "center" }}>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {lines.map((line) => (
                        <TableRow key={line.id}>
                            <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>{line.numero}</TableCell>
                            <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>{estados[line.estado] || "Sin Tipo"}</TableCell>
                            <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>
                                <Button onClick={() => onEdit(line)}><EditIcon /></Button>
                                <Button onClick={() => onDelete(line)}><DeleteIcon /></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ColorTable;