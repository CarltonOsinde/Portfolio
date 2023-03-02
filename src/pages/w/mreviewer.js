
import React from "react"
import { motion } from "framer-motion"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"

import "../../App.css"
import "../pages.css"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import SEO from "../../components/seo"
import Roles from "../../components/Roles"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed"

import ArticleHeader from "../../components/articles/ArticleHeader"
import ComingSoon from "../../components/articles/ComingSoon"

const MovieReviewer = () => {
  const highlightColor = "black"

  return (
    <>
      <SEO
        title="Carlton Osinde - Movie Reviewer Project"
        description="A web app similar to a IMDB that loads movie suggestions from a database. "
        type="article"
        url="/w/mreviewer"
      />
      <Navbar />
      <Container fluid style={{ zIndex: "0" }}>
        <ArticleHeader
          title={[
            {
              text: "Movie Reviewer",
              color: "white",
            },
          ]}
          subtitle={[
            {
              text:
                "A web app similar to a IMDB that loads movie suggestions from a database. ",
              color: "rgb(240, 240, 240)",
            },
          ]}
          date={[
            {
              text: "PERSONAL PROJECT - Dec 2022",
              color: "rgb(250, 250, 250)",
            },
          ]}
          action={[
            {
              text: "View Project",
              url: "https://github.com/CarltonOsinde/Movie-Reviewer",
              variant: "light",
            },
          ]}
          bg={highlightColor}
        >
          {" "}
          <Image
            fluid
            src="https://d1ap993fctyiv.cloudfront.net/MovieReviewer.png"
            rounded
            className="p-5"
          />
        </ArticleHeader>

        <Roles
          roles="Solo Engineer"
          team="Engineering"
          tools="Java (Spring Boot), Javascript(React.js), MongoDB, Git, VSCode"
          timeline="Toronto, CA"
          type="Personal Project"
        >
          <p>
            This is a React app that loads movie suggestions from a MongoDB database & uses Java Spring Boot backend to handle requests. 
          </p>
          
        </Roles>
        
        <Row className="mt-5 pb-4">
          <Container>
            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col md={4}>
                  <h2 className="font-weight-bold solution-color">
                    How It Works
                  </h2>
                </Col>
                <Col md={8}>
                  <p>
                     In this project, I was able to dive deeper into the Java's back-end framework <strong>Spring Boot</strong> and learn how to connect a Java backend to a <strong>React Front-end </strong>. Adding a <strong>NoSQL</strong> database such as <strong>MongoDB</strong> to the workflow really allowed me to imporve my <strong>database design, optimization and</strong> learn how all these systems can work together to create a fully syncronized system.
                  </p>

                </Col>
              </Row>
            </Fade>
          </Container>
        </Row>

        <Row className="conclusion-section pt-5 pb-4">
          <Container>
            <Fade bottom duration={666} distance="50px">
              <Row className="">
                <Col md={4}>
                  <h2 className="font-weight-bold">Conclusion</h2>
                </Col>
                <Col md={8}>

                  <p>
                    This really was really fun and really helped me piece together how to connect a backend that isn't Express to a React Front-End! 
                    
                    I'm looking forward to playing around with Springboot to build more projects that utilize Object Oriented principles!
                  </p>
                  <Button as={Link} to="/" variant="light">
                    Back Home
                  </Button>

                </Col>
              </Row>
            </Fade>
          </Container>
        </Row>
        

        <Footer />
      </Container>
    </>
  )
}

export default MovieReviewer
