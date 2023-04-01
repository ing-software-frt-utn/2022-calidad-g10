import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tabs, Tab, Grid, Typography } from '@mui/material';
import TabPanel from './TabPanel';
import { getHoursOfCurrentTurn, getTurnoActual } from '../../../Services/TurnServices';

const TabList = (props) => {
    const [hours, setHours] = useState([]);
    const [turn, setTurn] = useState({});
    const [value, setValue] = useState(0);

    useEffect(() => {
        // Llamada a la API para obtener la lista de horas
        // axios.get('url_del_backend').then(response => {
        //     setHours(response.data);
        // });
        getTurnoActual(setTurn)
    }, []);
    useEffect(() => {
        getHoursOfCurrentTurn(turn.descripcion, setHours);
    }, [turn])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                {hours.map((hour, index) => (
                    < Tab key={index} label={hour.toString().padStart(2, '0') + ":00"} />
                ))}
            </Tabs>

            {hours.map((hour, index) => (
                <TabPanel value={value} index={index} />
            ))}
        </div>
    );
};

export default TabList;