import styled from "styled-components";
import ItemList from "./ItemList";
import Timer from "./Timer";

const NavWrapper = styled.div`
    width: 100%;
    background-color: #111;
    position: fixed;
    z-index: 2;
`;

const NavDiv = styled.div`
    max-width: 1200px;
    height: 4rem;
    display: flex;
    font-size: 1.7rem;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    margin: auto;
    @media (max-width: 768px) {
        height: 3rem;
        padding: 0 10px;
        font-size: 1.4rem;
    }
`;

const Logo = styled.img`
    position: absolute;
    left: 50%;
    width: 5rem;
    transform: translateX(-50%);
    @media (max-width: 768px) {
        width: 4rem;
    }
`;

function NavBar({ items, isGamePlaying, timer, setTimer }) {
    return (
        <NavWrapper>
            <NavDiv>
                <Timer isGamePlaying={isGamePlaying} timer={timer} setTimer={setTimer}/>
                <Logo src={require('../assets/logo.png')}></Logo>
                <ItemList items={items}/>
            </NavDiv>
        </NavWrapper>
    );
}

export default NavBar;