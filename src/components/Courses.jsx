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
    }
    .courses-cards{
        display: grid;
        width: 100%;
        grid-template-columns:repeat(auto-fill,minmax(15rem,1fr)) ;
        row-gap: 2rem;
        column-gap: 2rem;
    }
`
export default Courses