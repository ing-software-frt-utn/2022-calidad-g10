import axios from "axios";

export const getColors = (setColors) => {
    axios.get("https://localhost:7117/api/ControladorColores/Colors")
        .then((res) => {
            setColors(res.data);
        });
}

export const putColors = (editedColor, setEditingColor, colors, setColors) => {
    axios
        .put(`https://localhost:7117/api/ControladorColores/${editedColor.id}`, editedColor)
        .then((response) => {
            setColors(colors.map((color) => (color.id === editedColor.id ? editedColor : color)));
            setEditingColor(null);
        })
        .catch((error) => {
            console.error(error);
        });
}

export const addColor = async (color) => {
    const url = 'https://localhost:7117/api/ControladorColores/Create';
    console.log(color)
    await axios.post(url, color).then(async () => {
    }).catch((error) => {
        alert(error.response.data.errors[0]);
    })

}

export const deleteColor = async (color) => {
    axios.delete(`https://localhost:7117/api/ControladorColores/Delete?id=${color.id}`)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}