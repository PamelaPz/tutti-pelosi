import '../assets/scss/App.scss'
// import { Button } from "react-bootstrap";

function BtnOrangeSm({link, classList, text, classText}) {
    return(
        <>
            <div className={classList}>
                <a href={link}>
                    <p className={classText}>{text}</p>
                </a>
            </div>
        </>
    );
}
export default BtnOrangeSm;