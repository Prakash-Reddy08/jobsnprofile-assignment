import { styled } from "styled-components"

const LinksAndServices = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="links">
                    <div className="company">
                        <img src="/src/assets/jobsnProfiles.f33d93c90b2431689a89.webp" alt="" />
                        <p>392 E Winchester St, Suite 201,
                            Salt Lake City, Utah 84107
                            USA</p>
                    </div>
                    <div className="">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>About us</li>
                            <li>About us</li>
                            <li>About us</li>
                            <li>About us</li>
                            <li>About us</li>
                            <li>About us</li>
                            <li>About us</li>
                        </ul>
                    </div>
                </div>
                <div className="services-socials">
                    <div className="services">
                        <h4>Services</h4>
                        <ul>
                            <li>Search By Maps</li>
                            <li>Search By Maps</li>
                            <li>Search By Maps</li>
                            <li>Search By Maps</li>
                            <li>Search By Maps</li>
                        </ul>
                    </div>
                    <div className="socials">
                        <h4>Connect with us on Social media</h4>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
width: 100%;
.container{
    display: flex;
    padding: 2rem 4rem;
    justify-content: space-evenly;
    flex-wrap: wrap;
    row-gap: 3rem;
    .links{
        display:flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 4rem;
        /* flex: 0.5; */
        .company,img{
            max-width: 200px;
        }
        img{
            flex:0.1;
        }
        div{
            flex:0.5;
            min-width: 200px;
        }
    }
    .services-socials{
        display: flex;
        justify-content: center;

        flex-wrap: wrap;
        /* flex: 0.5; */
        gap: 4rem;
        .services{
            flex: 0.1;
            min-width: 200px;
        }
        .socials{
            flex:0.5;
            min-width: 200px;
        }
    }
}
`
export default LinksAndServices