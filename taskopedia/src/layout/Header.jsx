import logo from '../img/react.png'

const headerStyle = {
    backgroundColor: "purple",
    color: "yellow",
    padding: "10px",
    textAlign: "center",
}

const MainHeader = () => {
    return(
        <div className='pt-2 pl-2' style={{backgroundColor: "black"}}>
            <img src={logo} alt='React Logo' style={{height: "35px", verticalAlign: "top"}}></img>
            <span className='h2 pt-4 ps-3 text-white-50'>React Course - TaskOPedia</span>
        </div>
    )
}

const SubHeader = () => {
    return(<p style={headerStyle}>This will be an exciting course</p>)
}

const Header = () => {
    return(
        <div>
            <MainHeader/>
            <SubHeader/>
        </div>
    )
}

export default Header;
