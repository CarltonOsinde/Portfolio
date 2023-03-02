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

const FourTips = () => {
  const highlightColor = "#999db6"

  // Parallax Variables
  const { scrollY } = useViewportScroll()
  const hwy1 = useTransform(scrollY, [0, 1000], [0, 150])

  return (
    <>
      <SEO
        title="Carlton Osinde - Four-Tips, Back-End Engineer"
        description="Making life simplier for Type 4 indivdiuals"
        type="article"
      />
      <Navbar />
      <Container fluid style={{ zIndex: "0" }}>
        <ArticleHeader
          title={[
            {
              text: "Four-Tips: Making life simpler for Type-4 individuals",
              color: "white",
            },
          ]}
          subtitle={[
            {
              text:
                "We exist to support Black Heritage. Black hair. Black culure.",
              color: "rgb(240, 240, 240)",
            },
          ]}
          date={[
            { text: "University Of Toronto NSBE Hackathon", color: "rgb(250, 250, 250)" },
          ]}
          action={[
            {
              text: "Visit the Website",
              url: "https://carltonosinde.github.io/fourtips.github.io/team.html",
              variant: "light",
            },
          ]}
          bg={highlightColor}
        >
          <Image
            fluid
            src="https://d1ap993fctyiv.cloudfront.net/four-tips_header_photo.jpg"
            className="p-5"
          />
        </ArticleHeader>

        <Roles
          roles="Back-End Engineer"
          tools="HTML,Express.js, Node.js, GCP Object Image Classification"
          timeline="Feburary 2019"
          type="Hackathon"
        >

          <p className="mt-4">
            I had the pleasure of gaining an invitation to NSBE 2'nd annual Hackathon. 
            With this opportunity  I was able to showcase my teams skills in planning,
            designing, and developing a product to the jusdges. After a tough sleepless
            48hrs we places 1st as Best Black Hack. I also enjoyed connecting with 
            Senior Software Engineers from Google, Shopify, Bloomberg and IBM.
          </p>
        </Roles>



        <Row className="mt-5 ">
          <Container>
            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col md={4}>
                  <h2 className="font-weight-bold">Problem Statement</h2>
                </Col>
                <Col md={8}>
                  <p className="font-weight-medium lg">
                    How might we create a platform that helps Type-Four Individuals?
                  </p>
                  <p>
                    This was the question that our small team of 3 asked
                    ourselves during our very first meeting. Our end goal was to
                    create a cohesive narrative that the user would be able to
                    follow from the first point of contact with our platform.
                  </p>
  
                </Col>
              </Row>
            </Fade>

            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5 ">
                <Col md={4}>
                  <h2 className="font-weight-bold">Planning Session</h2>
                </Col>
                <Col md={8}>
                  <p>
                    With a plan set, we were able to delegate roles. <strong>I was assigned the
                    Presenter, Product Manager, & Back-End Engineer.</strong> My teammate 
                    <strong> Maureen</strong> was assigned the Front-End Developer and 
                    <strong> Lea,</strong> our product researcher and designer. Time to put that work in!
                  </p>
                </Col>
              </Row>
            </Fade>
          </Container>
        </Row>

        <Row className="pt-5 pb-5 mt-5">
          <Container>
            <Row className="">
              <Col md={4}>
                <h2 className="font-weight-bold solution-color">
                  The Solution
                </h2>
              </Col>
              <Col md={8}>
                <Fade bottom duration={666} distance="50px">
                  <p className="font-weight-medium lg">AI to the rescue</p>
                  <p>
                    The finished result was a web-application that leveraged 
                    Google Object Classification and had a user upload a photo.
                    From there we designed an API that would take that picture 
                    and analyze to the training data. After that was done it would
                    generate a response and communicate it with our API.
                  </p>
                  <p>
                    The result would be displayed to the user with options on 
                    product recommendations and healthy habitis to follow.

                    Future state would have us intergrate a map with the closest
                    salons and barbers for haircuts or buying products.
                  </p>
                </Fade>
              </Col>
            </Row>
          </Container>
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
                    together. As my first time leading a non-technical team at this
                    scale, I learned a lot about working within a team and
                    designing for the end-user in mind. Also, how important communication
                    is to succeed! 
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

export default FourTips
