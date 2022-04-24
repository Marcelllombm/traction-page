import styled from 'styled-components';
import slideBg from '../../assets/slide.jpg';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    max-height: 680px;
    background:  url(${slideBg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;

    .content{
        max-width: 1366px;
        margin: 0 auto;
        padding: 20px 0;

    }

    h1 {
        font-size: 2.5rem;
        color:white;
        font-family: 'Inder', sans-serif;
    }
    img{
        width: 100%;
        height: 100%;
        max-width: 516px;
        max-height:320px;
    }


    .sensor{
        width: 50%;
        margin-top: 30px;
        margin-bottom: 30px;
        padding-right: 20px;
        right: 0;
        position: relative;
        float: right;

    }

    .demonstration{
        
        background-color: #30A2F2;
        bottom: 0;
        padding: 20px;
        position: absolute;
        width: 100%;

        .demonsContent{
        max-width: 1366px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        }

         p{
            font-size: 1.75rem;
            width: 80%;
            }

        a {
            background-color: #3CEB77;
            border-radius: 5px;
            border: none;
            padding: 12px;
            font-weight: bold;
            font-size: 1.75rem;
            text-decoration: none;
            color: var(--black);
            &:hover{
                filter:  brightness(0.8);
            }
        }
    }

    @media screen and (min-width:320px) and (max-width:1132px){

        h1 {
        font-size: 2rem;
        color:white;
        font-family: 'Inder', sans-serif;
    }
    img{
        width: 90%;
        height: 90%;
        max-width: 516px;
        max-height:320px;
    }
    .sensor{
        width: 60%;
    }
        .demonstration{

            .demonsContent{
                flex-direction: column;
            }

            p{
                margin: 0 auto;
            }

            a{
                width: 200px;

                margin: 5px auto;
            }
        }
    }
`;