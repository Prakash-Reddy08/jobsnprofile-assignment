import { styled } from "styled-components"

const DownloadApp = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="image">
                    <img src="/src/assets/app1.46955b804267bb69f708.webp" alt="" />
                </div>
                <div className="info">
                    <h2>Download Our App</h2>
                    <hr />
                    <ul>
                        <li>Easy Way To Find Jobs In Your App</li>
                        <li>Easy Way To Find Jobs In Your App</li>
                        <li>Easy Way To Find Jobs In Your App</li>
                        <li>Easy Way To Find Jobs In Your App</li>
                    </ul>
                </div>
                <div className="store-images">
                    <div>google play</div>
                    <div>App Store</div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100%;
    background-color: #406882;
    .container{
        padding: 2rem 8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
    }
    .image{
        flex:0.45
    }
    .info{
        flex:0.45;
        min-width: 250px;
    }
    .store-images{
        flex: 0.2;
        div{
            background-color: black;
            color:white;
            width: 150px;
            height: 50px;
            margin-bottom: 1rem;
            text-align: center;

        }
    }

`
export default DownloadApp