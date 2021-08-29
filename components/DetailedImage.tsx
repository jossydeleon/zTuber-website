import styled from 'styled-components';
import Image from 'next/image';
import React from 'react';

const Container = styled.div`
    text-align: center;
    color: ${props => props.theme.colors.paragraph};
`;

const IconTitle = styled.h6`
    color: ${props => props.theme.colors.primary};
    padding-top: 15px;
`;

const IconMessage = styled.p`
    font-size: ${props => props.theme.fontSizes.small};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.8em;
`;

const ImageContainer = styled.div`
    padding: 0px 60px 20px;
`

export interface DetailedImageProps {
    Icon: JSX.Element
    title?: string
    message?: string
    image?: StaticImageData
}

const DetailedImage: React.FC<DetailedImageProps> = ({ Icon, title, message, image }) => {

    return (
        <Container>
            {Icon}
            {title && <IconTitle>{title}</IconTitle>}
            {message && <IconMessage>{message}</IconMessage>}
            {image &&
                <ImageContainer>
                    <Image src={image} layout="responsive" alt={title} />
                </ImageContainer>
            }
        </Container>
    );
}

export default DetailedImage;