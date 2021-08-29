/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Footer: React.FC = () => {
    return (
        <FooterContainer className="p-4">
            <Container>
                <Row>
                    <Col xs="10" sm="10" lg="11">
                        <p>{`zTuber Music App`}</p>
                        <Link href="https://josymardeleon.com" passHref>
                            <a className="jdl_link jdl_no_link" target="_blank" rel="noreferrer">Made with ❤️ by Josymar</a>
                        </Link>
                    </Col>
                    <Col xs="1" sm="1" lg="1">
                        <Link href="/" passHref>
                            <a target="_blank" rel="noreferrer">
                                <img src="/logo.png" width={50} height={50} alt="zTuber" />
                            </a>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    background-color: ${({ theme }) => theme.footer.background};
`;

export default Footer
