import React from "react";
import attack from "../img/attack.png"
import defend from "../img/defend.png"

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefence = this.handleDefence.bind(this);
        this.state = {
            count: 0,
            lastPlay: "",
            gameStatus: "",
        }
    }

    checkGameStatus = (previousState, count) => {
        if(count >= 10) {
            return "You Won";
        }
        else if(count <= -10) {
            return "You Losed";
        }

        return previousState.gameStatus;
    }

    handleAttack = () => {
        // New setState() Syntax
        this.setState((previousState) => {
            let newCount = previousState.count + Math.round(Math.random() * 10);
            
            return {
                count: newCount,
                lastPlay: "Attack",
                gameStatus: this.checkGameStatus(previousState,newCount),
            };
        });

        // Old setState() Syntax
        // this.setState({count: this.state.count + 1});
    }

    handleDefence = () => {
        // New setState() Syntax
        this.setState((previousState) => {
            let newCount = previousState.count - Math.round(Math.random() * 10);

            return {
                count: newCount,
                lastPlay: "Defend",
                gameStatus: this.checkGameStatus(previousState, newCount),
            };
        });

        // Old setState() Syntax
        // this.setState({count: this.state.count - 1});
    }

    handleRandomPlay = () => {
        let playMode = Math.round(Math.random());

        if(playMode === 0) {
            this.handleAttack();
        }
        else {
            this.handleDefence();
        }
    }

    handleReset = () => {
        this.setState(() => {
            return {
                count: 0,
                lastPlay: "",
                gameStatus: "",
            };
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row text-white text-center">
                    <h1>Game Score: {this.state.count}</h1>
                    <p>You win at +10 points and lose at -10 points</p>
                    <p>Last Play: {this.state.lastPlay}</p>
                    <h3>Game Status: {this.state.gameStatus}</h3>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-6 col-md-3">
                        <img src={attack} alt="Two swords clashing" onClick={this.handleAttack} style={{width: "100%", cursor: "pointer", border: "1px solid green"}} className="p-4 rounded" />
                    </div>
                    <div className="col-6 col-md-3">
                        <img src={defend} alt="Field" onClick={this.handleDefence} style={{width: "100%", cursor: "pointer", border: "1px solid red"}} className="p-4 rounded" />
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-4">
                        <button onClick={this.handleRandomPlay} className="btn btn-secondary w-100 mt-2">Random Play</button>
                        <button onClick={this.handleReset} className="btn btn-warning w-100 mt-2">Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter;