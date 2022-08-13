import styled from "styled-components";

const MenuDiv = styled.div`
    position: absolute;
    border-radius: 5px;
    border: 2px solid white;
    width: 50px;
    height: 50px;
    transform: translate( -50%, -50% );
    ul {
        min-width: 100px;
        background-color: #222;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        list-style-type: none;
        transform: translateX( 50% );
        li {
            cursor: pointer;
            padding: 10px;
            display: flex;
            align-items: center;
        }
        li:not(.found):hover {
            background-color: #333;
        }
        li:first-child {
            border-radius: 5px 5px 0 0;
        }
        li:last-child {
            border-radius: 0 0 5px 5px;
        }
        li img {
            margin-right: 5px;
        }
        li.found {
            filter: brightness(50%);
            text-decoration: line-through;
        }
    } 
`;

const ContextMenu = ({ items, x, y, checkItemPos }) => {
    return (
        <MenuDiv style={{ left: x+'px', top: (y + 80)+'px' }}>
            <ul>
                {items.map((item, i) => <li key={i} onClick={() => checkItemPos(item.name, x, y)} className={item.isFound ? 'found' : ''}>
                    <img src={require(`../assets/${item.name}-24.png`)} alt="" />
                    {item.name}
                </li>)}
            </ul>
        </MenuDiv>
        
    );
}
export default ContextMenu;