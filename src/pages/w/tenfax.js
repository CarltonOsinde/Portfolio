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
        description="Re-inventing the way we network. A new way of tracking 
                    your connections."
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
                "Connecting Shopify sales data to a dashboard",
              color: "rgb(240, 240, 240)",
            },
          ]}
          date={[
            { text: "Project - 2020", color: "rgb(250, 250, 250)" },
          ]}
          action={[
            {
              text: "Visit the Website",
              url: "https://nettcard.com",
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
          tools="Figma
            React Native,Express.js, Node.js, MongoDB"
          timeline="May 2020 - December 2020"
          type="Project"
        >
          <div
            className="conclusion-section p-2"
            style={{ borderRadius: "8px" }}
          >
            <Row className="text-center pt-3">
              <Col>
                <h3 className="text-close">Results at a Glance</h3>
                <p style={{ color: "#bfbfbf" }} className="sm">
                  When compared to the previous year
                </p>
              </Col>
            </Row>
            <Row className="text-center pb-3">
              <Col>
                <p className="font-weight-bold rg text-close">2700+</p>
                <p className="text-close sm">
                  Applicants <Badge variant="success">+2%</Badge>
                </p>
              </Col>
              <Col>
                <p className="font-weight-bold rg text-close">500+</p>
                <p className="text-close sm">Participants</p>
              </Col>
              <Col>
                <p className="font-weight-bold rg text-close">$XXK</p>
                <p className="text-close sm">
                  In Funding <Badge variant="success">+9%</Badge>
                </p>
              </Col>
            </Row>
          </div>
          <p className="mt-4">
            I had one goal when creating Nettcard,
            how can I create a platform that allows for allows an individual to track any networks I create 
            at a location or event. Is there a
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
                </Col>
              </Row>
            </Fade>
          </Container>
        </Row>

        <Row className="text-center">
          <Col md={4} className="picture-highlight">
            <Fade bottom duration={666} distance="50px" delay={300}>
              <h4 className="solution-color">The Design System</h4>
              <Image
                src="https://doixzan7hf4ti.cloudfront.net/hw6/designsystem.png"
                fluid
                alt="A view of the final design choices made by the team"
              />
            </Fade>
          </Col>
          <Col md={4} className="picture-highlight ">
            <Fade bottom duration={666} distance="50px" delay={400}>
              <h4 className="solution-color mb-5">
                Hack Western 6 Opening Ceremonies
              </h4>
              <ResponsiveEmbed
                aspectRatio="16by9"
                className="shadow"
                style={{ borderRadius: "8px" }}
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/P5_DZDgfH1c"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  alt="hackwestern-video"
                  title="hack western video"
                ></iframe>
              </ResponsiveEmbed>
            </Fade>
          </Col>
          <Col md={4} className="picture-highlight">
            <Fade bottom duration={666} distance="50px" delay={500}>
              <h4 className="solution-color">
                A Collection of Posts and Graphics
              </h4>
              <Image
                src="https://doixzan7hf4ti.cloudfront.net/hw6/completedassets.png"
                fluid
                alt="A view of the final design choices made by the team"
              />
            </Fade>
          </Col>
        </Row>
        <Row className="conclusion-section pt-5 pb-5">
          <Container>
            <Fade bottom duration={666} distance="50px">
              <Row className="">
                <Col md={4}>
                  <h2 className="font-weight-bold">Conclusion</h2>
                </Col>
                <Col md={8}>
                  <p>
                    In all, I was proud of what our team was able to accomplish
                    together. As my first time organizing an event at this
                    scale, I learned a lot about working within a team and
                    designing for people in mind. I also had the pleasure of
                    working on logistics and planning to ensure that the even
                    ran smoothly for all the attendees.
                  </p>
                  <p className="font-weight-medium lg mt-5">What's Next?</p>
                  <p>
                    In my second year of being on the Hack Western team, I am
                    excited to continue my work and take on the role of Design
                    Lead! My team is already hard at work building the brand for
                    Hack Western 7. Check back for more updates soon!
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

export default Tenfax
