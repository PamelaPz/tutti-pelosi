import '../../assets/scss/App.scss'
import { Link } from "react-router-dom";

function BtnOrange({link, classList, text, classText}) {
    return(
        <>
            <div className={classList}>
                <Link to={link}>
                    <p className={classText}>{text}</p>
                </Link>
            </div>
        </>
    );
}
export default BtnOrange;