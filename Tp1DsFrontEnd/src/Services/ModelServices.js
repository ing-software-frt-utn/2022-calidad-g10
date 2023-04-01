import axios from "axios";

export const getModels = (setModels) => {
    axios.get("https://localhost:7117/ControladorModelos/Models")
        .then((res) => {
            setModels(res.data);
        });
}

export const putModels = (editedModel, setEditingModel, models, setModels) => {
    axios
        .put(`https://localhost:7117/ControladorModelos/${editedModel.id}`, editedModel)
        .then((response) => {
            // Actualizar el estado de React para que la tabla se vuelva a renderizar
            setModels(models.map((model) => (model.id === editedModel.id ? editedModel : model)));
            setEditingModel(null);
        })
        .catch((error) => {
            console.error(error);
        });
}

export const addModel = async (model) => {
    const url = 'https://localhost:7117/ControladorModelos/Create';
    await axios.post(url, model).then(async () => {
    }).catch((error) => {
        alert(error.response.data);
    })
}

export const deleteModel = async (model) => {
    axios.delete(`https://localhost:7117/ControladorModelos/Delete?id=${model.id}`)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}