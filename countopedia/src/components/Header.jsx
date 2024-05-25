import logo from '../img/react.png'

const Header = () => {
    return (
        <div className="py-2 pl-2 mb-4" style={{ borderBottom: "1px solid #777" }}>
            <img src={logo} alt='React Logo' style={{height: '35px', verticalAlign: 'top'}}></img>
            <span className='h2 pt-4 m-2 text-white-50'>
                CountOPedia
            </span>
        </div>
    );
}

export default Header