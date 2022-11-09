import footerimg from "./img/Footerimg.png"

function FooterLogo() {
    return (
        <footer>
            <div className="footer">
                <img className="footer-logo" src={footerimg} alt="" />
            </div>
        </footer>
    )
}

export default FooterLogo;