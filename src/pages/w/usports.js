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
                 Reduction <Badge variant="info">35%</Badge>   
                </p>
              </Col>
              <Col>
                <p className="font-weight-bold rg text-close">Increase of Users</p>
                <p className="text-close sm">5000+ Users Nation wide</p>
              </Col>
              <Col>
                <p className="font-weight-bold rg text-close">Accuracy</p>
                <p className="text-close sm">
                  Noted at <Badge variant="success">60%</Badge>
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
                    Develop a feature that would allow the Data & Insights team to track error's on live score boards in real time. 
                  </p>

                  <p>
                    Over the course of 4-months I would have the opportuity to collaborate, design, develop and test a feature that 
                    tracked XML file uploads that held Score Board data from universities. The goal was to {" "}
                    <strong>
                    Find a way to not only detect corrupted files but also log the error for us to perform analysis and pattern recognition.
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
                   Everytime a corrupted file was uploaded it would crash the current scoreboard page and cached data wasn't visible to the end-user 
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
                    I was able to work alongside senior engineers to develop a feature that run through 5+ years worth of National Championship data 
                    and extracted and stored into a <strong>SQL databases each university's primary key identifier within the XML files.</strong> We segregarted each 
                    university storing their identifier and their variations.
                    
                    Thereafter we implemented a data pipeline that intergrated the identified variations database to the stream of data being uploaded
                    where<strong> I created a script to read the incoming data and trigger a warning whenever a corrupted file was uploaded </strong>. It would then check the 
                    variation database for a match and replace it with the correct primary key identifier.
     
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
