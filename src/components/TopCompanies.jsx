import { styled } from "styled-components"
import CardData from "../utils/CardData"
import Cards from "./Cards"

const TopCompanies = () => {

  return (
    <Wrapper>
      <h2>
        TopCompanies
      </h2>
      <div className="cards">
        {CardData.map(({ image, title, info, location, rating }, index) => {
          return <Cards key={index} image={image} title={title} info={info} location={location} rating={rating} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    margin-bottom: 2rem;
  }
  .cards{
    display: grid;
    width: 80vw;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr)) ;
    row-gap: 2rem;
    column-gap: 1rem;
  }
`
export default TopCompanies