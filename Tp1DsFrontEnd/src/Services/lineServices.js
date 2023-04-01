import axios from "axios";

export const getLines = (setLineas) => {
    axios.get("https://localhost:7117/api/ControladorLineas/Lines")
        .then((res) => {
            setLineas(res.data);
        });
}

export const getLineById = (id, setLine) => {
    axios.get(`https://localhost:7117/api/ControladorLineas/ById?number=${id}`)
        .then((res) => {
            setLine(res.data);
        });
}

export const putLines = (editedLine, setEditingLine, lines, setLines) => {
    axios
        .put(`https://localhost:7117/api/ControladorLineas/${editedLine.id}`, editedLine)
        .then((response) => {
            setLines(lines.map((line) => (line.id === editedLine.id ? editedLine : line)));
            setEditingLine(null);
        })
        .catch((error) => {
            console.error(error);
        });
}

export const addLine = async (line) => {
    const url = 'https://localhost:7117/api/ControladorLineas/Create';
    await axios.post(url, line).then(async () => {
    }).catch((error) => {
        alert(error.response.data.errors[0]);
    })
}

export const deleteLine = async (line) => {
    axios.delete(`https://localhost:7117/api/ControladorLineas/Delete?id=${line.id}`)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}