import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import { useContext, useState } from "react"
import { Context } from "../../context/Context"
import axios from "axios";


export default function Settings() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [sucess, setSucess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"UPDATE_START"});
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePicture = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            const res = await axios.put("/users/" + user._id, updatedUser);
            setSucess(true);
            dispatch({type:"UPDATE_SUCESS", payload: res.data});
        } catch (err) { 
            dispatch({type:"UPDATE_FAILURE"})
        }
    }

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Atualize a sua conta</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Imagem do perfil</label>
                    <div className="settingsPP">
                        <img src={file ? URL.createObjectURL(file) : PF + user.profilePicture} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <label>Nome:</label>
                    <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} />
                    <label>Email:</label>
                    <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Senha:</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="settingsSubmit" type="submit">Atualizar</button>
                    {sucess && <span style={{color: "green", textAlign: "center", marginTop: "20px"}}>Seu perfil foi atualizado!</span>}
                </form>
            </div>
            <Sidebar />
        </div>
    )
}