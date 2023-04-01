import axios from "axios";


export const getUser = async (email) => {
    try {
        let res = await axios
            .get("https://localhost:7117/api/ControladorAutenticacion/GetUser?email=" + email);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

export const loginUser = async (data, setUser) => {
    const url = 'https://localhost:7117/api/ControladorAutenticacion/Login';
    await axios.post(url, data).then(async () => {
        //inicio Sesion
        setUser(await getUser(data.Email));
    }).catch((error) => {
        //error al iniciar Sesion
        alert(error.response.data.errors[0]);
    })
}