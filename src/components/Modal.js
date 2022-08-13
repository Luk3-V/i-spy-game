import styled from "styled-components";
import { formatTime } from "../util";

const ModalWrapper = styled.div`
    position: fixed;
    z-index: 5;
    background-color: rgba(0, 0, 0, .6);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;  
`;

const ModalDiv = styled.div`
    min-width: 300px;
    border-radius: 10px;
    background-color: #111;
    padding: 25px;
    h1 {
        margin-bottom: 20px;
    }
    p, label {
        font-size: 1.2rem; 
        margin-top: 10px;
    }
    form {
        input {
            width: 100%;
            background-color: #222;
            border-radius: 5px;
            border: 1px solid white;
            padding: .7rem 1.2rem;
            color: white;
            margin-top: 10px;
        }
        input:-webkit-autofill, input:-webkit-autofill:focus { /* Prevent autofill styling */
            transition: background-color 600000s 0s, color 600000s 0s;
        }
    }
    .table-container {
        min-width: 300px;
        max-height: 400px;
        overflow-y: auto;
        table {
            border-collapse: collapse;
            width: 100%;
        }
        thead tr {
            position: sticky;
            top: 0;
        }
        td, th {
            text-align: left;
            padding: 8px;
        }
        tr:nth-child(odd) {
            background-color: #222;
        }
        thead tr {
            background-color: #111!important;;
        }
    }
    .btn-container {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
    }
    button {
        margin-left: 5px;
        padding: .7rem 1.5rem;
        background-color: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover {
        background-color: #444;
    }
    button.green-btn {
        background-color: green;
    }
    button.green-btn:hover {
        background-color: #00a000;
    }
`;

const Modal = ({ showGameOver, showScoreboard, timer, scores, startGame, submitScore }) => {

    const gameStart = (<ModalDiv>
        <h1>I Spy...</h1>
        <p>A Dog, a Cat, and a Rat.</p>
        <p>How fast can you find them?</p>
        <div className="btn-container">
            <button onClick={startGame} className='green-btn'>START GAME</button>
        </div>
    </ModalDiv>);

    const gameOver = (<ModalDiv>
        <h1>You finished in {formatTime(timer)} seconds!</h1>
        <form>
            <label htmlFor="name">Enter your name:</label>
            <input type='text' id="name" name="name"></input>
            <div className="btn-container">
                <button onClick={() => {window.location.reload()}}>RESTART</button>
                <button onClick={submitScore} className='green-btn'>SUBMIT SCORE</button>
            </div>
        </form>
    </ModalDiv>);

    const scoreboard = (<ModalDiv>
        <h1>Scoreboard</h1>
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Place</th>
                        <th>Name</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((score, i) => <tr key={i}>
                        <td>{i+1}</td>
                        <td>{score.name}</td>
                        <td>{formatTime(score.time)}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
        <div className="btn-container">
            <button onClick={() => {window.location.reload()}}>RESTART</button>
        </div>
    </ModalDiv>);

    return (
        <ModalWrapper> 
            { showGameOver ? gameOver : (showScoreboard ? scoreboard : gameStart) }
        </ModalWrapper>
    );
}
export default Modal;