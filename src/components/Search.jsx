import { styled } from "styled-components"

const Search = () => {
    return (
        <Wrapper>
            <Header>
                Best Place To Grow Your Career
            </Header>
            <Subhead>
                Find Jobs &amp; Career Opportunities
            </Subhead>
            <Input>
                <input type="text" placeholder="Job Title" />
                <input type="text" placeholder="Location" />
                <button>Find Jobs</button>
            </Input>
        </Wrapper>
    )
}

const Wrapper = styled.div`
background-color: #406882;
display: flex;
flex-direction: column;
padding: 1rem 10rem 4rem 10rem;
justify-content: center;
row-gap: 1.3rem;
color: #fff;
@media (max-width:765px) {
    padding-left: 4rem;
    padding-right: 4rem;
    
}
`
const Header = styled.h1`
@media (max-width:572px) {
    font-size: 1.6rem;
    
}
@media (max-width:484px) {
    font-size: 1.2rem;
    
}
@media (max-width:395px) {
    font-size: 0.99rem;
    
}
@media (max-width:348px) {
    font-size: 0.9rem;
    
}
`
const Subhead = styled.h3`
@media (max-width:572px) {
    font-size: 0.7rem;
    
}
@media (max-width:484px) {
    font-size: 0.6rem;
    
}
@media (max-width:395px) {
    font-size: 0.4rem;
    
}
`
const Input = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 1rem;
input{
    padding: 0.9rem;
    border: 0;
    border-radius: 3px;
    outline: none;
}
button{
    width: 12rem;
    min-height: 2rem;
    color: #fff;
    background-color: #e97d44;
    border: none;
    border-radius: 3px;
    @media (max-width:968px) {
        width: 100%;
        grid-column: 1/-1;
    }
}
`
export default Search