import axios from "axios";

export const getTurns = (setTurns) => {
    axios.get("https://localhost:7117/api/ControladorTurnos/Turns")
        .then((res) => {
            setTurns(res.data);
        });
}

export const getTurnById = (id, setTurn) => {
    axios.get(`https://localhost:7117/api/ControladorTurnos/ById?id=` + id)
        .then((res) => {
            setTurn(res.data);
        });
}

export const getTurnoActual = (setTurn) => {
    axios.get(`https://localhost:7117/api/ControladorTurnos/CurrentTurn`)
        .then((res) => {
            setTurn(res.data);
        });
}
export const getHoursOfCurrentTurn = (description, setTurn) => {
    axios.get(`https://localhost:7117/api/ControladorTurnos/TotalHorasByDescripcion?desc=` + description)
        .then((res) => {
            setTurn(res.data);
        });
}

export const getTurnByDescription = (description, setTurn) => {
    axios.get(`https://localhost:7117/api/ControladorTurnos/ByDescripcion?desc=` + description)
        .then((res) => {
            setTurn(res.data);
        });
}

export const putTurn = (editedTurn, setEditingTurn, turns, setTurns) => {
    axios
        .put(`https://localhost:7117/api/ControladorTurnos/${editedTurn.id}`, editedTurn)
        .then((response) => {
            setTurns(turns.map((turn) => (turn.id === editedTurn.id ? editedTurn : turn)));
            setEditingTurn(null);
        })
        .catch((error) => {
            console.error(error);
        });
}

export const addTurn = async (turn) => {
    const url = 'https://localhost:7117/api/ControladorTurnos/Create';
    await axios.post(url, turn).then(async () => {
    }).catch((error) => {
        alert(error.response.data.errors[0]);
    })
}

export const deleteTurn = async (turn) => {
    axios.delete(`https://localhost:7117/api/ControladorTurnos/Delete?id=` + turn.id)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}