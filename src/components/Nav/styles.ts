import styled from 'styled-components';

type Props = {
    navbarState: boolean
}

export const Container = styled.nav`
    max-width:1366px;
    margin: 10px auto;

    .toggle, .secondaryNav {
        display: none;
    }
    
    ul{
        display: flex;
        list-style: none;
        justify-content: space-evenly;
        margin: 0 auto;
            a {
                text-decoration: none;
                transition: 0.2s ease-in-out ;
                color: var(--black);
                li{ 
                    padding: 10px ;
                    border-radius: 5px;
                    transition: 0.2s ease-in-out ;
                    font-weight: bold;
                        &:hover{
                                background: var(--blue);
                                padding: 10px ;
                                border-radius: 5px;
                                color:white;
                                font-weight: bold;
                            }  
                    }
            }
        }

        @media screen and (min-width:320px) and (max-width:800px){
        .toggle{
            display: block ;
            position: absolute;
            top: 1rem;
            right: 2rem;
            cursor: pointer;
            color: var(--blue);
            z-index: 3;
            background-color: white;
            padding: 5px;
            border-radius: 5px;
        }    

       .mainNav{
           display: none;
       }
       .secondaryNav{
           display: block;
       }
    }
`;

export const ResponsiveNav = styled.div<Props>`
 
        ul{
            flex-direction: column;
            background-color: rgba(48,162,242, 0.95);
            width: 50%;
            height: 100%;
            position: absolute;
            z-index: 2;
            top:0;
            right: ${(props) => props.navbarState ? '0px': '-100%'};
            padding-top: 6rem;
            justify-content: right;            

            li{
                margin-top: 40px;
                padding: 10px ;
                transition: 0.2s ease-in-out ;

                &:hover{
                    background: var(--blue);
                    padding: 10px ;
                }
            }
        }
` ;