import '../../assets/scss/App.scss'

function BtnOrange({link, classList, text, classText}) {
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
export default BtnOrange;