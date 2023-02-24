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
        description="Making life simplier for Black Women"
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
                "We exist to support Black women. Black hair. Black Heritage.",
              color: "rgb(240, 240, 240)",
            },
          ]}
          date={[
            { text: "UofT NSBE", color: "rgb(250, 250, 250)" },
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
            src="https://doixzan7hf4ti.cloudfront.net/hw6/sponsorshippackage.jpg"
          />

          <motion.img
            style={{ y: hwy1 }}
            className="hw-alien-top"
            src="https://doixzan7hf4ti.cloudfront.net/hw6/hwalien.png"
          />
        </ArticleHeader>

        <Roles
          roles="Back-End Engineer"
          tools="HTML,Express.js, Node.js, GCP Object Image Classification"
          timeline="Feburary 2019"
          type="Hackathon"
        >
          <div
            className="conclusion-section p-2"
            style={{ borderRadius: "8px" }}
          >
            <Row className="text-center pt-3">
              <Col>
                <h3 className="text-close">Facts at a Glance</h3>
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



        <Row className="mt-5 ">
          <Container>
            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col md={4}>
                  <h2 className="font-weight-bold">Problem Statement</h2>
                </Col>
                <Col md={8}>
                  <p className="font-weight-medium lg">
                    How might we create a Hackathon brand that lives in a
                    digital and physical environment?
                  </p>
                  <p>
                    This was the question that our small team of 4 asked
                    ourselves during our very first meeting. Our end goal was to
                    create a cohesive narrative that the user would be able to
                    follow from the signup process right up until the event day.
                  </p>
                  <p>
                    I also wanted to bring my personal experience with motion
                    design and videography to build a new option for branding.
                  </p>
                </Col>
              </Row>
            </Fade>

            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5 text-center">
                <Col className="picture-highlight hw">
                  <p>Our planning board after our 2nd brainstorming session</p>
                  <Image
                    src="https://doixzan7hf4ti.cloudfront.net/hw6/hwplanningboard.jpg"
                    fluid
                    alt="Whiteboard with planning notes"
                    className="shadow"
                  />
                </Col>
              </Row>
            </Fade>

            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5 ">
                <Col md={4}>
                  <h2 className="font-weight-bold">Planning</h2>
                </Col>
                <Col md={8}>
                  <p>
                    With the creation of moodboards, our team was able to start
                    painting the picture of what we envisioned the brand to look
                    like.
                  </p>
                  <p>
                    Our group consensus was that the hackathon would be geared
                    towards hackers of all skill levels while also trying to
                    bring some representation to three different streams that we
                    wanted to implement: Business, Technology, and Design
                  </p>
                </Col>
              </Row>
            </Fade>

            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5 text-center">
                <Col className="picture-highlight hw">
                  <p>A moodboard that was presented</p>
                  <Image
                    src="https://doixzan7hf4ti.cloudfront.net/hw6/Moodboards.png"
                    fluid
                    alt="Whiteboard with planning notes"
                    className="shadow"
                  />
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
                  <p className="font-weight-medium lg">Build Your Moonshot</p>
                  <p>
                    Using outer-space as the medium, we decided on pursuing a
                    story-centred approach centred around the idea of being able
                    to create your dreams, or Moonshots.
                  </p>
                  <p>
                    For the look, we opted to incorporate the purple colors
                    found in Western University's branding and infuse it with
                    orange hues to create a calm, yet mysterious feeling.
                  </p>
                  <p>
                    Within the venue, we hand-crafted several cutouts of our
                    illustrations to hang from the roof. We also purchased glow
                    in the dark space paraphernalia to leave around the
                    building. The item I was most proud of, however, was the
                    usage of RGB strips strategically placed underneath
                    staircases and archways to cast various colors throughout
                    the space to set the mood.
                  </p>
                  <p>
                    On the video branding side, I designed a video system that
                    incorporates depth through the strategic usage of layer
                    blurring depending on the "height" of the virtual object.
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

export default FourTips
