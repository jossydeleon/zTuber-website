import * as React from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import data from '../data/data.json';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

const HyperLink = styled.a`
  font-weight: bold;
`;

const Navigation: React.FC = () => {
  //Hook router
  const { pathname } = useRouter();

  //Data from static file
  const { navigation } = data;

  return (
    <Navbar bg={"dark-nav"} variant="dark" expand="lg" sticky="top">
      <Container fluid>
        <Link href={navigation[0].link} passHref>
          <Navbar.Brand href={`#${navigation[0].id}`}>
            <Image src={"/logo.png"} width={50} height={50} alt="zTuber" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="" style={{ width: "100%" }} activeKey={pathname}>
            {
              navigation.map((nav, index) => {
                if (nav.type === "external") {
                  return (
                    <HyperLink key={index} target="_blank" href={nav.link} rel="noopener noreferrer" className="jdl_link nav-link">
                      Download
                    </HyperLink>
                  )
                }
                else
                  return (
                    <Link key={index} href={nav.link} passHref>
                      <Nav.Link className="jdl_link" href={`#${nav.id}`}>{nav.name}</Nav.Link>
                    </Link>
                  )
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;