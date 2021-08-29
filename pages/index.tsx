import React from 'react';
import Image from 'next/image';
import LayoutContainer from '../components/Layout';
import DetailedImage from '../components/DetailedImage';
import Heading from '../components/Heading';
import data from '../data/data.json';
import styled, { useTheme } from 'styled-components';
import { FaHeadphones } from 'react-icons/fa'
import { SiConvertio } from 'react-icons/si'
import image1 from '../assets/images/01_.png';
import image2 from '../assets/images/02_.png';
import image3 from '../assets/images/03_.png';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useWindowSize from '../hooks/useWindowSize';

const SubHeading = styled.h5`
  color: ${props => props.theme.colors.primary};
`;

const ContainerImage = styled.div`
  padding: 35px;
`;

export default function Home() {

  //Data from static file
  const { home } = data;
  //Hook Theme
  const theme = useTheme();
  //Hook window size
  const { isMobile } = useWindowSize()

  return (
    <div>
      <LayoutContainer>
        <Row className="justify-content-md-center">
          <Col>
            <Heading
              title={home.heading}
              message={home.subtitle} />
          </Col>
        </Row>
        {
          //Mobile screen
          isMobile && <Row>
            <Col xs={12} sm={12}>
              <ContainerImage>
                <Image src={image1} alt="zTuber" />
              </ContainerImage>
            </Col>

            <Col xs={12} sm={6}>
              <DetailedImage
                Icon={<FaHeadphones size={50} color={theme.colors.primary} />}
                title={home.icon_message_title_1}
                message={home.icon_message_message_1}
                image={image2}
              />
            </Col>

            <Col xs={12} sm={6} className={"p-4"}>
              <DetailedImage
                Icon={<SiConvertio size={50} color={theme.colors.primary} />}
                title={home.icon_message_title_2}
                message={home.icon_message_message_2}
                image={image3}
              />
            </Col>
          </Row>}

        {
          //Large screen
          !isMobile && <><Row>
            <Col>
              <DetailedImage
                Icon={<FaHeadphones size={50} color={theme.colors.primary} />}
                title={home.icon_message_title_1}
                message={home.icon_message_message_1}
                image={image2}
              />
            </Col>
            <Col>
              <ContainerImage>
                <Image src={image1} alt="ztuber" />
              </ContainerImage>
            </Col>
            <Col>
              <DetailedImage
                Icon={<SiConvertio size={50} color={theme.colors.primary} />}
                title={home.icon_message_title_2}
                message={home.icon_message_message_2}
                image={image3}
              />
            </Col>
          </Row>
          </>}

        <Row className="pt-4">
          <Col>
            <SubHeading>{home.paragrah_1.title}</SubHeading>
            <p>{home.paragrah_1.description}</p>
          </Col>
        </Row>

        <Row className="pt-4 mb-5">
          <Col>
            <SubHeading>{home.paragrah_2.title}</SubHeading>
            <p>{home.paragrah_2.description}</p>
          </Col>
        </Row>
      </LayoutContainer>
    </div>
  )
}
