import { styled } from "styled-components"
import CoursesData from "../utils/CoursesData"
import CourseCard from "./CourseCard"

const Courses = () => {
    return (
        <Wrapper>
            <div className="container">
                <h2>UPSKILL WITH COURSES</h2>
                <div className="courses-cards">
                    {CoursesData.map(({ image, title, info }, index) => {
                        return <CourseCard image={image} title={title} info={info} key={index} />
                    })}
                </div>
                <button>Browse Courses</button>
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
        h2{
            margin-bottom: 1rem;
        }
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
    .courses-cards{
        display: grid;
        width: 100%;
        grid-template-columns:repeat(auto-fill,minmax(15rem,1fr)) ;
        row-gap: 2rem;
        column-gap: 2rem;
        justify-items: center;
    }
    button{
        margin-top: 1rem;
    }
`
export default Courses