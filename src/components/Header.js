function Header (props){
    return (
        <div className="header">
        <div className="title">Jimmy Neutron Memory Game</div>
        <div>
        <div className="score">Score: {props.score}</div>
        <div className="best">Best: {props.best}</div>
        </div>
        </div>
    )
}

export default Header