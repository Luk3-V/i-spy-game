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
    button:last-child {
        background-color: green;
    }
    button:last-child:hover {
        background-color: #00a000;
    }
`;

const Modal = ({ isGameOver, timer, startGame, submitScore }) => {
    const gameStart = (<ModalDiv>
        <h1>I Spy...</h1>
        <p>A Dog, a Cat, and a Rat. </p>
        <div className="btn-container">
            <button onClick={startGame}>START GAME</button>
        </div>
    </ModalDiv>);

    const gameOver = (<ModalDiv>
        <h1>You finished in {formatTime(timer)} seconds!</h1>
        <form>
            <label htmlFor="name">Enter your name:</label>
            <input type='text' id="name" name="name"></input>
            <div className="btn-container">
                <button onClick={() => {}}>RESTART</button>
                <button onClick={submitScore}>SUBMIT SCORE</button>
            </div>
        </form>
    </ModalDiv>);

    return (
        <ModalWrapper> 
            { isGameOver ? gameOver : gameStart }
        </ModalWrapper>
    );
}
export default Modal;