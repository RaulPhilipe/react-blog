import "./post.css";
import { Link } from "react-router-dom";


export default function Post({ post }) {
    const PF = "http://localhost:5000/images/";
    const dateInfo = {
        year: 'numeric',
        month: 'short',
        weekday: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };


    return (
        <div className="post">
            <Link to={`/post/${post._id}`} className="link">
            {post.photo && (
                <img className="postImg" src={PF + post.photo} alt="" />
            )}
            <div className="postInfo">
                
                    <span className="postTitle">{post.title}</span>
            
                <hr />
                <span className="postDate">{new Date(post.createdAt).toLocaleDateString('pt-br', dateInfo)}</span>
            </div>
            </Link>
            <p className="postDesc">{post.desc}</p>
        </div>
    )

}