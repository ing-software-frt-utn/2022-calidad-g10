import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ColorTable = ({ colors, onEdit, onDelete }) => {
    return (
        <TableContainer component={Paper} >
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ p: 1, textAlign: "center" }}>Codigo</TableCell>
                        <TableCell sx={{ p: 1, textAlign: "center" }}>Descripción</TableCell>

                        <TableCell sx={{ p: 1, textAlign: "center" }}>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {colors.map((color) => (
                        <TableRow key={color.id}>
                            <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>{color.codigo}</TableCell>
                            <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>{color.descripcion}</TableCell>
                            <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>
                                <Button onClick={() => onEdit(color)}><EditIcon /></Button>
                                <Button onClick={() => onDelete(color)}><DeleteIcon /></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ColorTable;