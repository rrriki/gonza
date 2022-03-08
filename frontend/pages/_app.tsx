import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { Container } from "react-bootstrap";
import { Navbar } from "../components/Navbar/Navbar";


export default function HomePage({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}
