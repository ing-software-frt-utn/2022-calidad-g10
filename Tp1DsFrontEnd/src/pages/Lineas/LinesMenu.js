import React, { useState, useContext } from 'react';
import MenuAppBar from '../../components/Navbar/MenuAppBar';
import OutlinedCard from '../../components/Card/Card';
import { Grid, Typography } from '@mui/material';
import { getLines } from '../../Services/lineServices';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const LinesMenu = () => {
    const [lines, setLineas] = useState([]);
    const navigate = useNavigate();
    var { user, setUser } = useContext(UserContext);

    const userRol = {
        1: "/LineSupervisorMenu",
        2: "/QualitySupervisorMenu",
    }

    useEffect(() => {
        getLines(setLineas);
    }, []);

    function accessLine(lineId) {
        navigate(userRol[user.rol] + "/LineId/" + lineId || "/");
    }

    return (
        <div>
            <MenuAppBar />
            <div>
                <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 5 }} sx={{ p: 6, justifyContent: "center", width: "100%" }}>
                    {lines.length === 0 ? (
                        <Typography variant="body1">No hay líneas creadas</Typography>
                    ) : (
                        [...lines].map(x => (
                            < Grid item >
                                <div onClick={() => { accessLine(x.id) }} >{OutlinedCard(x)}</div>
                            </Grid>))

                    )
                    }
                </Grid>
            </div>
        </div >
    );
}

export default LinesMenu;