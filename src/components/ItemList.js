import styled from "styled-components";

const ListDiv = styled.div`
    display: flex;
    span {
        margin-left: 30px;
        display: flex;
        align-items: center;
    }
    span img {
        margin-right: 5px;
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
                {item.name}
            </span>)}
        </ListDiv>
    );
}

export default ItemList;