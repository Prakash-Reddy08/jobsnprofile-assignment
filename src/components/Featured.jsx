import { styled } from "styled-components"

const Featured = () => {
    return (
        <Wrapper>
            <div className="info">
                <h2>Featured Jobs</h2>
                <div className="company">
                    <div className="company-logo">
                        <img src="/src/assets/Apex-Systems-Inc.SOURCE.crunchbase.png" alt="" />
                    </div>
                    <div className="job-details">
                        <h3>Packaging Designer</h3>
                        <div>
                            <h4>Key Skills :</h4>
                            <span>
                                Make, Hardware, Documentation, Project Management, Design, Photoshop, Implementation, Rapid, Illustrator, Database Management
                            </span>
                        </div>
                        <div>
                            <h4>Location:</h4>
                            <span> Menlo Park, CALIFORNIA</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </Wrapper>
    )
}


const Wrapper = styled.div`
.info{
    padding: 3rem 3rem 0 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        font-size: 2rem;
        line-height: 5rem;
    }
    .company{
        display: flex;
        padding: 0 3rem;
        justify-content: space-evenly;
        align-items: center;
        .company-logo{
            width: 40%;
            img{
                width: 100px;
            }
        }
        .job-details{
            h3,div{
                margin-bottom: 1rem;
            }
            h4{
                display: inline-block;
            }
        }
        @media (max-width:820px){
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .company-logo{
                width: auto;
            }
        }
    }
}
`
export default Featured