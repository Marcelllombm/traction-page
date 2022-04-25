import styled from 'styled-components';

export const Container = styled.footer`
        width: 100%;
        text-align: center;
        margin: 20px 0 0 0;
    nav{
        width: 100%;
        max-width: 1366px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr; 
        margin: 0 auto;
        padding: 20px;

        ul{
            list-style: none;
            text-align: left;
            padding: 10px;
    
            a{
              text-decoration: none;
              color: var(--black);

              &:hover{
                  color:var(--blue);
                  border-bottom: 1px solid var(--blue) ;
              }
            }
            li:nth-child(1){
                color: var(--blue);
                font-weight: bold;
                margin-bottom: 10px;
        }
    }
}

.midia{
    background-color: #30A2F2;
    color: white;
    height: 100%;
    padding: 10px;

    h1{
        padding: 20px 0 0 0;
        font-size: 1.5rem;
    }

    a{
        font-size: 1.5rem;
        color:white;
        margin: 0 10px 0 10px;
        padding: 10px;

        &:hover{
            color: var(--blue);
        }
    }
}

@media screen and (min-width:320px) and (max-width:740px){
    nav{
        
        grid-template-columns: 1fr 1fr ; 
        padding-left: 10%;
        
        
        ul{
            margin: 10px 0;
            width: 80%;
            padding: 0;
        }
    }
}
`;