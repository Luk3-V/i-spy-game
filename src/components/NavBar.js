import styled from "styled-components";
import ItemList from "./ItemList";
import Timer from "./Timer";

const NavDiv = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    z-index: 2;
    position: fixed;
    background-color: #111;
    font-size: 1.7rem;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
`;

const Logo = styled.img`
    position: absolute;
    left: 50%;
    height: 3rem;
    transform: translateX(-50%);
`;

function NavBar({ items, isGamePlaying, timer, setTimer }) {
    return (
        <NavDiv>
            <Timer isGamePlaying={isGamePlaying} timer={timer} setTimer={setTimer}/>
            <Logo src={require('../assets/logo.png')}></Logo>
            <ItemList items={items}/>
        </NavDiv>
    );
}

export default NavBar;