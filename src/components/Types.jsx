import { styled } from "styled-components"

const Types = () => {
    return (
        <Wrapper>
            <div className="container">
                <div>
                    <h2>Create an alert</h2>
                    <p>Connect with jobs that match your profile to get job recommendations, and email alerts for new postings.</p>
                    <button>Set up alert</button>
                </div>
                <div>
                    <h2>Create an alert</h2>
                    <p>Connect with jobs that match your profile to get job recommendations, and email alerts for new postings.</p>
                    <button>Set up alert</button>
                </div>
                <div>
                    <h2>Create an alert</h2>
                    <p>Connect with jobs that match your profile to get job recommendations, and email alerts for new postings.</p>
                    <button>Set up alert</button>
                </div>
                <div>
                    <h2>Create an alert</h2>
                    <p>Connect with jobs that match your profile to get job recommendations, and email alerts for new postings.</p>
                    <button>Set up alert</button>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
background-color: #406882;
display: flex;
justify-content: center;
width: 100%;
.container{
    display: grid;
    margin: 2rem 6rem;
    grid-template-columns:repeat(auto-fit,minmax(200px,1fr)) ;
    row-gap: 2rem;
    column-gap: 2rem;
    width: 100%;
    div {
      h2{
        margin-bottom: 1rem;
      }
      p{
        margin-bottom: 1rem;
      }
    }
}
`
export default Types