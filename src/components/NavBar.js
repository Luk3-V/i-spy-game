import styled from "styled-components";
import ItemList from "./ItemList";
import Timer from "./Timer";

const NavDiv = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    z-index: 2;
    position: fixed;
    background-color: #111;
    font-size: 2rem;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
`;

const Logo = styled.span`
    position: absolute;
    left: 50%;
`;

function NavBar({ items }) {
    return (
        <NavDiv>
            <Timer isGameOver={false}/>
            <Logo>I Spy</Logo>
            <ItemList items={items}/>
        </NavDiv>
    );
}

export default NavBar;