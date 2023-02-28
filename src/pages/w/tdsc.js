import React from "react"
import { motion } from "framer-motion"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"

import "../../App.css"
import "../pages.css"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import StickyNote from "../../components/StickyNote"
import SEO from "../../components/seo"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed"

import Roles from "../../components/Roles"
import ArticleHeader from "../../components/articles/ArticleHeader"

const TDSC = () => {
  var highlightColor = "#00b524"

  return (
    <>
      <SEO
        title="Carlton Osinde - TD Securities"
        description="Developed ETL data pipelines for the Capital Market team."
        type="article"
      />
      <Navbar />
      <Container fluid style={{ zIndex: "0" }}>
        <ArticleHeader
          title={[
            { text: "Engineer Intern - TD Securities", color: "white" },
          ]}
          subtitle={[
            {
              text:
                "Developed ETL data pipelines for the Capital Market team. The pipeline was shared across Canada and USA trade floors ",
              color: "rgb(250, 250, 250)",
            },
          ]}
          date={[{ text: "May 2021 - Aug 2021 ", color: "rgb(250, 250, 250)" }]}
          action={[
            {
              text: "Visit Website",
              url: "https://www.tdsecurities.com/ca/en",
              variant: "light",
            },
          ]}
          bg={highlightColor}
        >
          <Image
            fluid
            src="https://d1ap993fctyiv.cloudfront.net/tdsc_cover_photo.png"
            className="p-3"
          />
        </ArticleHeader>

        <Roles
          roles="Engineer Intern"
          team="Data Insights and Innovation"
          tools="Python (Pandas), Alteryx "
          timeline="Toronto, CA"
          type="Full-Time"
        >
          <p>
            Over the course of 4 months, I worked with the Data and Insights team to
            <strong> build data pipelines and scripts </strong> to streamline data access 
            for Capital Market teams across London, Singapore, New York, and Toronto offices. 
            In addition, Leveraged <strong>ETL and Object-Oriented principles </strong>
            to ensure good coding standards were adhered to when building a documention automation
          </p>
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
                  <h2 className="font-weight-bold solution-color">Technology</h2>
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

            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col md={4}>
                  <StickyNote
                    heading = "Python"
                    text="Industry standard programming languge in perfomring data analytics, ETL and data visualizations"
                    source={null}
                  />
                </Col>
                <Col md={4}>
                  <StickyNote
                    heading = "Alteryx"
                    text="Data Transformation software that leverages a low-code platform to aid in ETL of data from different databases"
                    source={null}
                  />
                </Col>
                <Col md={4}>
                  <StickyNote
                    heading = "UiPath"
                    text="Publishing custome RPA's for the wider Data and Insights to use and leverage in their workflow documentation process"
                  />
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

export default TDSC
