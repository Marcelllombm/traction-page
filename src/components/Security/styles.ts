import styled from 'styled-components';

export const Container = styled.section `

    background: #30A2F2;
    position: relative;
    height: 100%;
    padding-bottom: 50px;
  
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
        z-index: 4;
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
            max-width: 400px;
            font-family: 'Inder', sans-serif;
        }

        div:nth-child(even){
            width: 100%;
            background: #fff;
            color: black;
            padding: 20px;
            font-size: 1.87rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            
            span{
                font-size: 4rem;
                margin:0 20px;
            }
        }
        div:nth-child(odd){
            width: 100%;
            background: transparent;
            color: black;
            padding: 20px;
            font-size: 1.87rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            
            span{
                font-size: 4rem;
                margin:0 20px;
            }
        }
    }
`;
