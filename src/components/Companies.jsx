import { styled } from 'styled-components'

const Companies = () => {
    return (
        <Wrapper>
            <div className="first">
                <div className="left">
                    <img src="/src/assets/Greattalethr.96f4b0c4e5c2c7d7873c.webp" alt="" />
                </div>
                <div className="right">
                    <h2>Great Talent Demands Great Employers</h2>
                    <hr />
                    <p>Recruitment efforts without the need for large teams Hire smartly using JNP AI Cloud Recruitment Software, With our fast and easy job posting services, you can reach out to millions of jobseekers and hire quickly.</p>
                    <h4>AI RESUME SCREENING</h4>
                    <p>It continuously learns from your recruitment and selection process to predict the most suitable candidates from the lot. This helps recruiters in identifying the best candidates for the job.</p>
                    <button>Post Jobs Free</button>
                </div>
            </div>
            <div className="second">
                <div className="left">
                    <img src="/src/assets/Greattalethr.96f4b0c4e5c2c7d7873c.webp" alt="" />
                </div>
                <div className="right">
                    <h2>Company Branding</h2>
                    <hr />
                    <p>Recruitment efforts without the need for large teams Hire smartly using JNP AI Cloud Recruitment Software, With our fast and easy job posting services, you can reach out to millions of jobseekers and hire quickly.</p>
                    <h4>AI RESUME SCREENING</h4>
                    <p>It continuously learns from your recruitment and selection process to predict the most suitable candidates from the lot. This helps recruiters in identifying the best candidates for the job.</p>
                    <button>Post Jobs Free</button>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.first,.second{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 8rem;
    h2{
        margin-bottom: 2rem;
    }
    p{
        margin: 2rem 0;
    }
    @media (max-width:1100px){
        .left{
            img{
                width: 400px;
            }
        }
    }
    @media (max-width:1100px){
        .left{
            img{
                width: 350px;
            }
        }
    }
    @media (max-width:872px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .left{
            img{
                width: auto;
            }
        }
    }
    @media (max-width:788px){
        margin: 2rem 5rem;
        .left{
            img{
                width: 400px;
            }
        }
    }
    @media (max-width:680px){
        margin: 2rem 2rem;
    }
    @media (max-width:580px){
        margin: 2rem 1rem;
        .left{
            img{
                width: 300px;
            }
        }
    }
}
.second{
    flex-direction: row-reverse;
    @media (max-width:872px){
        flex-direction: column-reverse;
        .left{
            img{
                width: inherit;
            }
        }
    }
    @media (max-width:788px){
        .left{
            img{
                width: 400px;
            }
        }
    }
    @media (max-width:580px){
        .left{
            img{
                width: 300px;
            }
        }
    }
}
`
export default Companies