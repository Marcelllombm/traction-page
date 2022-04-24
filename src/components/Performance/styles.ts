import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;

    .content{
        max-width: 1366px;
        margin: 25px auto;
        text-align: center;

        h1{
            margin: 45px auto;
            font-size: 1.5rem;
            text-align: center;
            padding: 20px;
            border-top: 10px solid #005EFA;
            border-left: 10px solid #005EFA;
            max-width: 600px;
            font-family: 'Inder', sans-serif;
        }

        .contentPerformace{
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            div{
                width: 33%;
                max-width: 350px;
                border: 3px dashed var(--blue);
                border-radius: 25px;
                padding: 30px 10px;
                text-align: center;
                margin:10px 10px 50px 10px;
                
                h2{
                    font-family: 'Inder', sans-serif;
                }

                img{
                    margin-top: 20px;
                    margin-bottom: 20px;
                    max-width: 300px;
                    height: 300px;
                    width: 100%;
                }
                
                span{
                    
                    font-size: 1.2rem;
                    font-weight: bold;  
                             
                }

                p{
                    text-align: justify;
                    font-size: 1.2rem;
                    
                }
            }
        }

        a{
            background: var(--green);
            text-decoration: none;
            padding: 20px;
            border-radius: 10px;
            color: var(--black);
            font-weight:bold;
            transition: 0.2s ease-in-out;
            font-size: 1.25rem;

            &:hover{
                filter: brightness(0.8) ;
            }
        }
    }

    @media screen and (min-width:320px) and (max-width:920px){
        .contentPerformace{
            flex-direction: column !important;
            width: 100%;
            align-items: center;
            

            div{
                width: 100% !important;
                max-width: 400px;
                
               
            }
        }
    }
`;