import axios from "axios";

export const getDefects = (setDefects) => {
    axios.get("https://localhost:7117/ControladorDefectos/Defects")
        .then((res) => {
            setDefects(res.data);
        });
}

export const putDefects = (editedDefect, setEditingDefect, defects, setDefects) => {
    axios
        .put(`https://localhost:7117/ControladorDefectos/${editedDefect.id}`, editedDefect)
        .then((response) => {
            setDefects(defects.map((defect) => (defect.id === editedDefect.id ? editedDefect : defect)));
            setEditingDefect(null);
        })
        .catch((error) => {
            console.error(error);
        });
}

export const addDefect = async (defect) => {
    const url = 'https://localhost:7117/ControladorDefectos/Create';
    console.log(defect)
    await axios.post(url, defect).then(async () => {
    }).catch((error) => {
        alert(error.response.data.errors[0]);
    })
}

export const deleteDefect = async (defect) => {
    axios.delete(`https://localhost:7117/ControladorDefectos/Delete?id=${defect.id}`)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}