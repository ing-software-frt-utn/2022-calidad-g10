import axios from 'axios';
import React, { Fragment, useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function SignUp() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [rol, setRol] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleNameChange = (value) => {
        setName(value);
    }
    const handleLastNameChange = (value) => {
        setLastName(value);
    }
    const handleRolChange = (event) => {
        setRol(event.target.value);
    }
    const handleEmailChange = (value) => {
        setEmail(value);
    }
    const handlePasswordChange = (value) => {
        setPassword(value);
    }
    const handleSave = () => {

        const data = {
            name: name,
            lastName: lastName,
            rol: rol,
            email: email,
            password: password
        };

        const url = 'https://localhost:7117/api/ControladorAutenticacion/Register';
        axios.post(url, data).then((result) => {
            alert(result.data + "Se Registro Correctamente");
            window.location.reload();
        }).catch((error) => {
            alert(error.message);
        })
    }

    return (
        <Fragment>
            <div>
                <Link onClick={handleOpen} >Sign Up</Link>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Sign in
                        </Typography>
                        <Box>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="Name"
                                label="Nombre"
                                name="name"
                                autoFocus
                                onChange={(e) => handleNameChange(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="LastName"
                                label="Apellido"
                                name="lastName"
                                autoComplete="email"
                                autoFocus
                                onChange={(e) => handleLastNameChange(e.target.value)}
                            />
                            <Select
                                margin="normal"
                                required
                                fullWidth
                                id="Rol"
                                value={rol}
                                label="Rol"
                                onChange={handleRolChange}
                            >
                                <MenuItem value={1}>Supervisor de Linea</MenuItem>
                                <MenuItem value={2}>Supervisor de Calidad</MenuItem>
                                <MenuItem value={3}>Administrador</MenuItem>
                            </Select>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="Email"
                                label="Email"
                                name="email"
                                autoFocus
                                onChange={(e) => handleEmailChange(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="Password"
                                label="Contraseña"
                                name="password"
                                type="password"
                                autoFocus
                                onChange={(e) => handlePasswordChange(e.target.value)}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => handleSave()}
                            >
                                Registrarse
                            </Button>
                        </Box>
                    </Box>
                </Modal>
            </div>
        </Fragment>
    )
}

export default SignUp;