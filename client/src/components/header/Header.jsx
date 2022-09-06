import "./header.css"



export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Um blog sobre tecnologia.</span>
                <span className="headerTitleLg">TechSync</span>
            </div>
            <img className="headerImg" src={"/background.jpg"} alt=""/>
        </div>
    )
}