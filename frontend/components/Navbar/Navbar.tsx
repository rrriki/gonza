import React from "react";
import {
  Navbar as BootstrapNavbar,
  Container,
  Nav,
} from "react-bootstrap";
import styled from "styled-components";


const Wrapper = styled(BootstrapNavbar)`
margin-bottom: 16px;
`

export const Navbar: React.FC = () => {

  return (
    <Wrapper bg="dark" variant="dark" expand="lg">
      <Container>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="challenge">Challenge</Nav.Link>
            <Nav.Link href="#tic-tac-toe" disabled>Tic Tac Toe</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </Wrapper>
  );
};
