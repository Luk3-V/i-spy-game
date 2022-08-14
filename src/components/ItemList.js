import styled from "styled-components";

const ListDiv = styled.div`
    display: flex;
    span {
        display: flex;
        align-items: center;
        margin-left: 20px;
        @media (max-width: 768px) {
            margin-left: 10px;
        }
    }
    span img {
        margin-right: 5px;
        width: 2rem;
        @media (max-width: 768px) {
            width: 1.5rem;
        }
    }
    span.found {
        filter: brightness(50%);
        text-decoration: line-through;
    }
`;

function ItemList({ items }) {
    return (
        <ListDiv>
            {items.map((item, i) => <span key={i} className={item.isFound ? 'found' : ''}>
                <img src={require(`../assets/${item.name}-48.png`)} alt="" />
            </span>)}
        </ListDiv>
    );
}

export default ItemList;