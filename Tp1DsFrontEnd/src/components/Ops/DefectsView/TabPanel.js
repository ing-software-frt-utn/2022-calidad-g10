import { Add, Remove } from '@mui/icons-material';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getDefects } from '../../../Services/DefectServices';


const TabPanel = ({ hour, value, index }) => {
    const [reworkDefects, setReworkDefects] = useState([]);
    const [observedDefects, setObservedDefects] = useState([]);

    useEffect(() => {
        getDefects(setReworkDefects);
        getDefects(setObservedDefects);
    }, [])

    const handleRightIncrement = (value) => {

    }
    const handleRightDecrement = (value) => {

    }
    const handleLeftIncrement = (value) => {

    }
    const handleLeftDecrement = (value) => {

    }

    return (
        <div role="tabpanel" hidden={value !== index}>

            {value === index && (
                <Grid container justifyContent="center">
                    <Grid container justifyContent="center">
                        <Grid item sx={{ m: 0, mb: 2 }}>
                            <Grid item>
                                Pares de Primera
                            </Grid>
                            <Button onClick={() => handleLeftIncrement(index)}><Add /></Button>
                            Nº
                            <Button onClick={() => handleLeftDecrement(index)}><Remove /></Button>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="center">
                        <Grid item>
                            <TableContainer component={Paper} >
                                Reproceso
                                <Table >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ p: 1, textAlign: "center" }}>Izquierda</TableCell>
                                            <TableCell sx={{ p: 1, textAlign: "center" }}>Defecto</TableCell>
                                            <TableCell sx={{ p: 1, textAlign: "center" }}>Derecha</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {reworkDefects.map((defect, index) => (
                                            < TableRow key={index} >
                                                <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>
                                                    <Button onClick={() => handleLeftIncrement(index)}><Add /></Button>
                                                    Nº
                                                    <Button onClick={() => handleLeftDecrement(index)}><Remove /></Button>
                                                </TableCell>
                                                <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>{defect.descripcion}</TableCell>
                                                <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>
                                                    <Button onClick={() => handleRightIncrement(index)}><Add /></Button>
                                                    Nº
                                                    <Button onClick={() => handleRightDecrement(index)}><Remove /></Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item sx={{ m: 3 }}>

                        </Grid>
                        <Grid item>
                            <TableContainer component={Paper} >
                                Observado
                                <Table >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ p: 1, textAlign: "center" }}>Izquierda</TableCell>
                                            <TableCell sx={{ p: 1, textAlign: "center" }}>Defecto</TableCell>
                                            <TableCell sx={{ p: 1, textAlign: "center" }}>Derecha</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {reworkDefects.map((defect, index) => (
                                            < TableRow key={index} >
                                                <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>
                                                    <Button onClick={() => handleLeftIncrement(index)}><Add /></Button>
                                                    Nº
                                                    <Button onClick={() => handleLeftDecrement(index)}><Remove /></Button>
                                                </TableCell>
                                                <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>{defect.descripcion}</TableCell>
                                                <TableCell sx={{ p: 0, m: 0, textAlign: "center" }}>
                                                    <Button onClick={() => handleRightIncrement(index)}><Add /></Button>
                                                    Nº
                                                    <Button onClick={() => handleRightDecrement(index)}><Remove /></Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>


                </Grid>

            )
            }
        </div >
    );
};

export default TabPanel;