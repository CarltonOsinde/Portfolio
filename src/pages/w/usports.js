import React from "react"
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

import FadeUp from "../../components/animation/FadeUp"

import ArticleHeader from "../../components/articles/ArticleHeader"
import ComingSoon from "../../components/articles/ComingSoon"

const USPORTS = () => {
  var highlightColor = "#d1343e"

  return (
    <>
      <SEO
        title="Carlton Osinde - U SPORTS"
        description="Leading one of Canada’s largest hackathons and the journey to their first virtual event"
        type="article"
      />
      <Navbar />
      <Container fluid style={{ zIndex: "0" }}>
        <ArticleHeader
          title={[
            {
              text: "Data Engineer Intern",
              color: "white",
            },
          ]}
          subtitle={[
            {
              text:
                "Owned the end-to-end development of an error-tracking feature.",
              color: "rgb(240, 240, 240)",
            },
          ]}
          date={[
            { text: "Jan 2018 - May 2018", color: "rgb(250, 250, 250)" },
          ]}
          action={[
            {
              text: "Visit the Website",
              url: "https://usports.ca",
              variant: "light",
            },
          ]}
          bg={highlightColor}
        >
          <Image
            fluid
            src="https://d1ap993fctyiv.cloudfront.net/usports_coverphoto.jpg"
            className="p-5"
          />
        </ArticleHeader>

        <Roles
          roles="Data Engineer Intern"
          team="Web, Data and Analytics"
          tools="Python, FTP, XML, VS Code, Git Hub"
          timeline="Richmond, CA"
          type="Intern"
        >
          <p>
          Over 4 months I worked with the team on the <strong>end to end 
          development of an error-tracking feature</strong> for the Score Board. 
          I had the pleasure of spliting my time with the Governance team to assist 
          in <strong>partnership talks with Adidas</strong> and learned what goes into market research
          on successful NCAA National Championship trends that could be implemented into the 
          <strong> 2019 National Championship season.</strong> In addition I <strong>collaborated with senior engineers </strong> 
          to understand best practices for writing production code and test cases.
          </p>

                <Row className = "mt-5">
          <Col>
          <div
            className="conclusion-section p-2"
            style={{ borderRadius: "8px" }}
          >
            <Row className="text-center pt-3">
              <Col>
                <h3 className="text-close">My Impact At A Glance</h3>
                <p style={{ color: "#bfbfbf" }} className="sm">
                  Error tracking feature
                </p>
              </Col>
            </Row>
            <Row className="text-center pb-3">
              <Col>
                <p className="font-weight-bold rg text-close">Runtime Errors</p>
                <p className="text-close sm">
                 Reduction <Badge variant="info">-35%</Badge>   
                </p>
              </Col>
              <Col>
                <p className="font-weight-bold rg text-close">Active Users</p>
                <p className="text-close sm">5000+</p>
              </Col>
              <Col>
                <p className="font-weight-bold rg text-close">Accuracy</p>
                <p className="text-close sm">
                  Increased by <Badge variant="success">+40%</Badge>
                </p>
              </Col>
            </Row>
          </div>
          </Col>
        </Row>
        </Roles>
        

        <Footer />
      </Container>
    </>
  )
}

export default USPORTS
