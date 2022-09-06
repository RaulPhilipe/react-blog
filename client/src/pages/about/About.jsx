import "./about.css"
import AboutPost from "../../components/aboutPost/AboutPost";
import Sidebar from "../../components/sidebar/Sidebar";

export default function About() {

    return(
        <div className="about">
            <AboutPost />
            <Sidebar />
        </div>
    )

}