import React, {useState} from 'react';
import './counterStyles.css';

export const App = () => {

    let [player1Counter, setPlayer1Counter] = useState(0)
    let [player2Counter, setPlayer2Counter] = useState(0)
    const setPlayersCounter = () => {
        setPlayer1Counter((actual) => actual - 1)
        setPlayer2Counter((actual) => actual - 1)
    }
    const setPlayersCounterPlus = () => {
        setPlayer1Counter((actual) => actual + 1)
        setPlayer2Counter((actual) => actual + 1)
    }
    return (
        <div className='wrapper'>
            <div className='mainCard'>
                <div className='playerACard'>
                    <div>
                        Player A
                    </div>
                    <div>{player1Counter}</div>
                    <button onClick={() => {
                        setPlayer1Counter((actual) => actual + 1)
                    }}>+
                    </button>
                    <button onClick={() => {
                        setPlayer1Counter((actual) => actual - 1)
                    }}>-
                    </button>
                    <hr/>
                </div>

                <div className='playerBCard'>
                    <div>
                        Player B
                    </div>
                    <div>{player2Counter}</div>
                    <button onClick={() => {
                        setPlayer2Counter((actual) => actual + 1)
                    }}>+
                    </button>
                    <button onClick={() => {
                        setPlayer2Counter((actual) => actual - 1)
                    }}>-
                    </button>
                    <hr/>
                </div>

                <div className='playersScoreManagement'>
                    <div>
                        A & B
                    </div>
                    <div>
                        <button onClick={() => {
                            setPlayersCounter()
                        }}>-
                        </button>
                        <button onClick={() => {
                            setPlayersCounterPlus()
                        }}>+
                        </button>
                    </div>
                    <button onClick={() => {
                        setPlayer1Counter(0)
                        setPlayer2Counter(0)
                    }}>RESET
                    </button>
                </div>
            </div>
        </div>
    )
}

