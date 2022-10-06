import { 
    Container,
    Content,
    ImageLogo,
 } from './styles';

export function Header() {
    return(
        <Container>
            <Content>
                <ImageLogo />
                <button>
                    <img src='https://github.com/fbaiex.png' />
                </button>
            </Content>
        </Container>
    )
}