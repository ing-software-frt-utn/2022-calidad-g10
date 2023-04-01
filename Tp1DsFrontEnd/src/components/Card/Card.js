import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import lineImage from '../../Resources/Images/lineImage.jpg';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box >
);

const estados = {
    0: 'Libre',
    1: 'Ocupada',
}

const OutlinedCard = (x) => {
    return (
        <div >
            <Box sx={{ boxShadow: 5, p: 0 }}>
                <Card variant="outlined" >
                    <React.Fragment>
                        <CardContent sx={{
                            backgroundImage: `url(${lineImage})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}>
                            <CardContent >
                                <Typography variant="h3" component="div">
                                    Linea {bull} {x.numero}
                                </Typography>
                                <Typography variant="h5">
                                    Estado: {estados[x.estado]}
                                </Typography>
                            </CardContent>
                        </CardContent>
                    </React.Fragment>
                </Card>
            </Box>
        </div>
    );
}

export default OutlinedCard;