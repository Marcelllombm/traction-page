import styled from 'styled-components';

export const Container = styled.section`

.content {
    margin: 0 auto;
    max-width: 1366px;
    
    h1{ 
            margin: 0 auto;
                margin-top: 200px;
                margin-bottom: 100px;
                font-size: 1.5rem;
                text-align: center;
                padding: 20px;
                border-top: 10px solid var(--blue);
                border-left: 10px solid var(--blue);
                color:var(--black);
                max-width: 400px;
                font-family: 'Inder', sans-serif;
        }
        div{
            
            text-align: center;
            
            
            img{
                margin: 0 auto;
                border-radius: 50%;
                width: 200px;
                height: 200px;
            }

            h3{
                font-size: 1.5rem;
                margin: 10px;
            }

            h6{
                font-size: 0.8rem;
                margin: 5px;
            }

            p{
                font-size: 1.2rem;
                width: 65%;
                margin: 0 auto;
            }
        }
    }
    .slick-dots li button:before{
        font-size: 15px;
    }

    .slick-next {
    right: 0;
    }
`;

