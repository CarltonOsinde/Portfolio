import React from "react"
import { useViewportScroll, motion, useTransform } from "framer-motion"
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
import Badge from "react-bootstrap/Badge"

import ArticleHeader from "../../components/articles/ArticleHeader"
import ComingSoon from "../../components/articles/ComingSoon"

const Tenfax = () => {
  const highlightColor = "#000000"

  // Parallax Variables
  const { scrollY } = useViewportScroll()
  const hwy1 = useTransform(scrollY, [0, 1000], [0, 150])

  return (
    <>
      <SEO
        title="Carlton Osinde - Tenfax Dashboard, Solo Engineer"
        description="Connecting sales data to a dashboard."
        type="article"
      />
      <Navbar />
      <Container fluid style={{ zIndex: "0" }}>
        <ArticleHeader
          title={[
            {
              text: "Tenfax Dashboard",
              color: "white",
            },
          ]}
          subtitle={[
            {
              text:
                "Connecting sales data to a dashboard",
              color: "rgb(240, 240, 240)",
            },
          ]}
          date={[
            { text: "Project - 2020", color: "rgb(250, 250, 250)" },
          ]}
          action={[
            {
              text: "View Project",
              url: "https://github.com/CarltonOsinde/Tenfax-Dashboard",
              variant: "light",
            },
          ]}
          bg={highlightColor}
        >
          <Image
            fluid
            src="https://d1ap993fctyiv.cloudfront.net/Tenfax.png"
          />
        </ArticleHeader>

        <Roles
          roles="Founder, Solo Developer"
          tools="
            React, Express.js, Node.js, MongoDB"
          timeline="May 2020 - December 2020"
          type="Project"
        >
    
          <p className="mt-4">
                  A <strong>React</strong> built dashboard that connects to a <strong>MongoDB database</strong> to process data and insights.
                  Other features included a Geo locator, that shows the where all the sales are made.
          </p>
          
        </Roles>

        {/* <Row className="mt-5 pb-4">
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
                    [ADD DETAILS OF HOW IT WORKS LATER] 
                  </p>
                </Col>
              </Row>
            </Fade>
          </Container>
        </Row> */}

        <ComingSoon />
        <Footer />
      </Container>
    </>
  )
}

export default Tenfax
