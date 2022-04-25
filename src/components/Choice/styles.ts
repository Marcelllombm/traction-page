import styled from 'styled-components';

export const Container = styled.section`

    background: #30A2F2;
    position: relative;
    height: 100%;
    padding-bottom: 50px;
    margin-top: 30px;
  
   &::before{
        content: '';
        position: absolute;
        top: -0.5px;
        left: 0;
        width: 100%;
        height: 200px;
        background:#fff;
        clip-path: polygon(50% 0%, 100% 0%, 50% 40%, 0 0%);
    }

    .content{
        position: relative;
        margin: 0 auto;
        max-width: 1366px;
        text-align: center;
        z-index: 5;
        text-align:center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1{ 
            margin-top: 250px;
            margin-bottom: 100px;
            font-size: 1.5rem;
            text-align: center;
            padding: 20px;
            border-top: 10px solid white;
            border-left: 10px solid white;
            color:white;
            max-width: 600px;
            font-family: 'Inder', sans-serif;
        }

        .contentFlex{
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            
            div{
                width: 48%;
                text-align: justify;
                margin-top: 40px;

                p{
                    border-bottom: 6px solid var(--blue);
                    margin: 20px 0;
                    padding: 10px 0 ;
                    color:white;
                    font-size: 1.25rem;

                    strong{
                        color: black;
                    }
                }

                p:nth-child(4){
                    border-bottom: none;
                }
            }
        }

    }
    
    @media screen and (min-width:320px) and (max-width:955px){

        img{
            display: none;
        }

        div{
            width: 100%;  
        }
    }


`;