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
          I worked with the Development team on the <strong>end to end 
          development of an error-tracking feature</strong> for the Score Board. 
          I had the pleasure of spliting my time with the Governance team to assist 
          in <strong>partnership talks with Adidas</strong> and learned what goes into market research
          on successful NCAA National Championship trends that could be implemented into the 
          <strong> 2019 National Championship season.</strong> In addition I <strong>collaborated with senior engineers </strong> 
          to understand best practices for <strong>writing production code and test cases</strong>.
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
                <p className="font-weight-bold rg text-close">Increase of Users</p>
                <p className="text-close sm">5000+ Users Nation wide</p>
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

                <Row>
          <Container>
            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col md={4}>
                  <h2 className="font-weight-bold solution-color">Capstone Deliverable</h2>
                </Col>
                <Col md={8}>
                  <p className="font-weight-medium lg">
                    Develop a data pipeline for the Capital Market's team to use when conducting 
                    Securities analysis. 
                  </p>
                  <p>
                    I had four-months to deliver a fully function data pipeline that would be
                    realised to production for the Capital Market's team to leverage on for 
                    analysis of securities.
                  </p>
                  <p>
                    Over the course 4-months I would have the opportuity to solidfy my understanding
                    of software languages such as Python, Big Data transformation platforms such as 
                    Alteryx and Python scripting. My goal was to {" "}
                    <strong>
                    Develop a data pipeline that extracts data from mulitple databases and applies
                    custom formulas to select columns and generates a file for the trade team.
                    </strong>
                  </p>
                </Col>
              </Row>
            </Fade>



            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col md={4}>
                  <h2 className="font-weight-bold solution-color">The Problem</h2>
                </Col>
                <Col md={8}>
                  <p>
                    During this time I had to implement various solutions using the three technologys
                    listed below. I had soc much fun gaining a deeper practical understanding of each the
                    technology's mentioned below 
                  </p>
                </Col>
              </Row>
            </Fade>
          </Container>
        </Row>

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
                </Col>
              </Row>
            </Fade>
          </Container>
        </Row>
        
        <Row className="conclusion-section pt-5 pb-5 mt-5">
          <Container>
            <Fade bottom duration={666} distance="50px">
              <Row className="">
                <Col md={4}>
                  <h2 className="font-weight-bold">Key Learnings</h2>
                </Col>
                <Col md={8}>
  
                  <p>
                    Overall this was a great learning experience I learned how to 
                    develop a pipeline, how to contribute during design and analysis 
                    meetings. development and how to deliver technical presentations 
                    to my team. Also, it was great to be part of such a large coorporation
                    and see how my teams work contributed to the grander vision.
                  </p>
                  <p className="font-weight-medium lg mt-5">Looking Forward</p>
                  <p>
                    With this experience, I'm looking forward to applying what I
                    learned in future jobs and personal projects!
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

export default USPORTS
