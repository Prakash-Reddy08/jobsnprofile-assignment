import { styled } from "styled-components"

const Newsletter = () => {
    return (
        <Wrapper>
            <h2>Join Our Newsletter</h2>
            <p>Signup today for free and be the first to get notified on new jobs updates.</p>
            <div className="">
                <input type="text" />
                <button>Subscribe</button>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin:2rem 0;
    h2{
        margin-bottom:2rem;
    }
    p{
        text-align: center;
    }
`
export default Newsletter