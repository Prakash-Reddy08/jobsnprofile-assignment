import styled from "styled-components"

// eslint-disable-next-line react/prop-types
const CourseCard = ({ image, title, info }) => {
    return (
        <Wrapper>
            <img src={image} />
            <h3>{title}</h3>
            <p>{info}</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1.37039px solid rgba(147, 162, 211, 0.38);
    width: 15rem;
    img{
        width: inherit;
        max-height: 8rem;
        overflow: hidden;
    }
    h3{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 21px;
        line-height: 27px;
        color: #0E2368;
        padding:1rem;
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        letter-spacing: -0.02em;
        padding:1rem;
    }
    /* @media (max-width:400px){
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        padding:5px;
        img{
            width: 204px;
            height: 166px;
        }
        h3{
            display:flex ;
            justify-content:center ;
            height: 35px;
            font-weight: 700;
            font-size: 16px;
            line-height: 35px;
        }
        p{
            font-weight: 400;
            font-size: 12px;
            line-height: 22px;
        }
    } */
`
export default CourseCard