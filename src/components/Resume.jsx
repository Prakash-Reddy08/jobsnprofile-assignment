import { useRef } from "react"
import { styled } from "styled-components"

const Resume = () => {
    const inputRef = useRef(null);
    return (
        <Wrapper>
            <FileUpload>
                <img className="upload-file" onClick={() => inputRef.current.click()} src="/src/assets/Drag-n-Drop.cf8e3930aceb2733f59f.webp" alt="" />
                <input ref={inputRef} type="file" />
            </FileUpload>
            <Text>
                <h2>No resume? No problem</h2>
                <p>Create Professional Resume In Minutes with our step-by-step Professional Resume builder!</p>
                <button>Create Resume</button>
            </Text>
            <ResumeImage>
                <img className="resume-image" src="/src/assets/resumebuilder.f3a395aaa74ce15d71bd.webp" alt="" />
            </ResumeImage>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
        @media (max-width:927px){
        flex-direction: column;
        justify-content: center;
    }
`
const FileUpload = styled.div`
    .upload-file{
        width: 320px;
    }
    input{
        display: none;
    }
    @media (max-width:1318px){
        .upload-file{
            width: 300px;
        }
    }
    @media (max-width:994px){
        .upload-file{
            width: 250px;
        }
    }
    @media (max-width:927px){
        .upload-file{
            width: 400px;
        }
    }
    @media (max-width:500px){
        .upload-file{
            width: 300px;
        }
    }
`

const Text = styled.div`
    padding: 3rem;
    width: 25rem;
    h2{
        color:rgb(64, 104, 130);
        font-size:3rem;
        margin-bottom: 1rem;
    }
    p{
        margin-bottom: 1rem;
    }
    @media (max-width:1232px){
        padding: 2rem;
    }
    @media (max-width:1183px){
        padding: 1rem;
    }
    @media (max-width:1168px){
        width: 20rem;
        h2{
            font-size: 2rem;
        }
    }
    @media (max-width:1168px){
        width: 15rem;
    }
    @media (max-width:994px){
        width: 13rem;
    }
    @media (max-width:927px){
        padding: 3rem;
        width: 25rem;
        h2{
            color:rgb(64, 104, 130);
            font-size:3rem;
            margin-bottom: 1rem;
        }
    }
    @media (max-width:500px){
        width: 16rem;
        padding: 1rem;
    }
`
const ResumeImage = styled.div`
    .resume-image{
        width: 200px;
    }
    @media (max-width:927px){
        .resume-image{
            width: 400px;
        }
    }
    @media (max-width:500px){
        .resume-image{
            width: 300px;
        }
    }
`
export default Resume