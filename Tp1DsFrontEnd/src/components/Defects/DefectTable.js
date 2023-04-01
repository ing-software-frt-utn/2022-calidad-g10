import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const DefectTable = ({ defects, onEdit, onDelete }) => {
    const tipos = {
        0: 'Reproceso',
        1: 'Observado',
    }
    return (
        <TableContainer component={Paper} >
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ p: 1, textAlign: "center" }}>Descripcion</TableCell>
                        <TableCell sx={{ p: 1, textAlign: "center" }}>Tipo</TableCell>

                        <TableCell sx={{ p: 1, textAlign: "center" }}>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {defects.map((defect) => (
                        <TableRow key={defect.id}>
                            <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>{defect.descripcion}</TableCell>
                            <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>{tipos[defect.tipo] || "Sin Tipo"}</TableCell>
                            <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>
                                <Button onClick={() => onEdit(defect)}><EditIcon /></Button>
                                <Button onClick={() => onDelete(defect)}><DeleteIcon /></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DefectTable;