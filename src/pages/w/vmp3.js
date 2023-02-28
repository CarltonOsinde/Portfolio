
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

const VideoMp3 = () => {
  const highlightColor = "black"

  return (
    <>
      <SEO
        title="Carlton Osinde - Django Video - MP3 Web App"
        description="Leading the Design direction of Western University's largest business and technology club"
        type="article"
        url="/w/wfn"
      />
      <Navbar />
      <Container fluid style={{ zIndex: "0" }}>
        <ArticleHeader
          title={[
            {
              text: "Microservice Video - MP3 Converter",
              color: "white",
            },
          ]}
          subtitle={[
            {
              text:
                "[Add a description]",
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
              url: "https://www.foundersnetwork.ca/",
              variant: "light",
            },
          ]}
          bg={highlightColor}
        >
          {" "}
          <Image
            fluid
            src="https://d1ap993fctyiv.cloudfront.net/VideoMP3Converter.png"
            rounded
            className="p-5"
          />
        </ArticleHeader>

        <Roles
          roles="Solo Engineer"
          team="Engineering"
          tools="Adobe Creative Suite, Slack, Figma"
          timeline="Toronto, CA"
          type="Personal Project"
        >
          <p>
            I had a lot of fun with this project...
          </p>
        </Roles>
        
        <Row className="mt-5 pb-4">
          <Container>
            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col md={4}>
                  <h2 className="font-weight-bold solution-color">
                    The Solution
                  </h2>
                </Col>
                <Col md={8}>
                  <p>
                    I was able to successfully develope a data pipeline to extract up to<strong> 40,000 records
                    of currency rate data and transform it into 30 columns </strong>with accurate formula application
                     using Python-Pandas. In addition I was able to create a  script that saw a time savings 
                     on documenting workflow automation. I leveraged on <strong>Object-Oriented programming principles</strong>
                    to ensure the script applied to different team templates. 
                  </p>
                    <Button as={Link} to="/" variant="dark">
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

export default VideoMp3
