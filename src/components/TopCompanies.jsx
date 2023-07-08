import { styled } from "styled-components"
import CardData from "../utils/CardData"
import Cards from "./Cards"

const TopCompanies = () => {

  return (
    <Wrapper>
      <div className="container">
        <h2>
          TopCompanies
        </h2>
        <div className="cards">
          {CardData.map(({ image, title, info, location, rating }, index) => {
            return <Cards key={index} image={image} title={title} info={info} location={location} rating={rating} />
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 8rem;
    @media (max-width:559px){
            margin: 2rem 4rem;
    }
    @media (max-width:425px){
        margin: 2rem 2rem;
    }
    @media (max-width:361px){
        margin: 2rem 1rem;
        h2{
            font-size: large;
        }
    }
  }
  h2{
    margin-bottom: 2rem;
  }
  .cards{
    display: grid;
    width: 100%;
    grid-template-columns:repeat(auto-fill,minmax(300px,1fr)) ;
    row-gap: 2rem;
    column-gap: 1rem;
    justify-items: center;
  }
`
export default TopCompanies