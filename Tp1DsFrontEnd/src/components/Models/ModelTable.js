import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ModelTable = ({ models, onEdit, onDelete }) => {


    return (
        <TableContainer component={Paper} >
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ p: 1, textAlign: "center" }}>SKU</TableCell>
                        <TableCell sx={{ p: 1, textAlign: "center" }}>Descripción</TableCell>
                        <TableCell sx={{ p: 1, textAlign: "center" }}>Límite Inferior Reproceso</TableCell>
                        <TableCell sx={{ p: 1, textAlign: "center" }}>Límite Superior Reproceso</TableCell>
                        <TableCell sx={{ p: 1, textAlign: "center" }}>Límite Inferior Observado</TableCell>
                        <TableCell sx={{ p: 1, textAlign: "center" }}>Límite Superior Observado</TableCell>
                        <TableCell sx={{ p: 1, textAlign: "center" }}>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {models.map((modelo) => (
                        <TableRow key={modelo.id}>
                            <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>{modelo.sku}</TableCell>
                            <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>{modelo.descripcion}</TableCell>
                            <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>{modelo.limiteInferiorReproceso}</TableCell>
                            <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>{modelo.limiteSuperiorReproceso}</TableCell>
                            <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>{modelo.limiteInferiorObservado}</TableCell>
                            <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>{modelo.limiteSuperiorObservado}</TableCell>
                            <TableCell sx={{ p: 0, m: 0, textAlign: "center", display: "flex" }}>
                                <Button onClick={() => onEdit(modelo)}><EditIcon /></Button>
                                <Button onClick={() => onDelete(modelo)}><DeleteIcon /></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ModelTable;