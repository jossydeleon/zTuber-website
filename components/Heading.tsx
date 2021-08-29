import styled from "styled-components";

const Container = styled.div`
    padding-bottom: 50px;
`;

const Text = styled.h3`
    text-align: center;
    color: ${props => props.theme.colors.primary};
`;

const Message = styled.h6`
    color: ${({ theme }) => theme.colors.paragraph};
    font-size: ${props => props.theme.fontSizes.medium};
    text-align: center;
    font-weight: lighter;
    line-height: 1.8em;
`;

export interface HeadingProps {
    title: string
    message?: string
}

const Heading: React.FC<HeadingProps> = ({ title, message }) => {
    return (
        <Container>
            <Text>{title}</Text>
            {message && <Message>{message}</Message>}
        </Container>
    );
}

export default Heading;