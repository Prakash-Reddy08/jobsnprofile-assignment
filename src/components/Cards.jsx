import styled from "styled-components"

// eslint-disable-next-line react/prop-types
const Cards = ({ image, title, info, location, rating }) => {
    return (
        <Wrapper>
            <div className="left">
                <img src={image} />
                <div>
                    <h3>{title}</h3>
                    <p>{info}</p>
                    <p>{location}</p>
                </div>
            </div>
            <div className="right">
                <div>new</div>
                <div className="rating">{rating}</div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
border-radius: 10px;
overflow: hidden;
min-width: 250px;
padding: 2rem 2rem;
.left{
    display: flex;
    div{
        margin-left: 10px;
        line-height: 2rem;
    }
    img{
        width: 100px;
        border-radius: 5px;
    }
}
.right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
`
export default Cards