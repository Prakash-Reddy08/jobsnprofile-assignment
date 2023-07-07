import { styled } from "styled-components"

const Map = () => {
    return (
        <Wrapper>
            <div className="info">
                <h2>Search Jobs By Maps</h2>
                <p>you can search for jobs, using Maps</p>
                <hr />
                <p>you can easily find jobs in your area using our map-based job search. Select the radius around which you are looking for jobs, We will show how many jobs there are in that area.</p>
                <p>With the Help of AI, Our system will identify the jobs that best suits your profile and display them on the map.</p>
                <button>Search Jobs By Maps.</button>
            </div>
            <div className="map-image">
                <img src="/src/assets/searbymapsU1.d76241343b445a084957.webp" alt="" />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 80vw;
    justify-content: center;
    align-items: center;
    .info{
        padding-top: 4rem;
        width: 50%;
        h2{
            font-size: 2rem;
            margin-bottom: 0.5rem;
            color: rgb(64, 104, 130);
        }
        p,hr{
            margin-bottom: 2rem;
        }
    }
    .map-image{
        width: auto;
    }
    @media (max-width:1000px) {
        .map-image{
            img{
                width: 400px;
            }
        }
    }
    @media (max-width:820px) {
        flex-direction: column;
        width: 100%;
        row-gap: 2rem;
    }
    @media (max-width:700px) {
        .map-image{
            img{
                width: 350px;
            }
        }
    }
    @media (max-width:500px) {
        .map-image{
            img{
                width: 250px;
            }
        }
    }
    @media (max-width:400px) {
        .map-image{
            img{
                width: 200px;
            }
        }
    }
`
export default Map