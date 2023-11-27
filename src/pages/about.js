import React from "react"
import { motion } from "framer-motion"

import "../App.css"
import "./pages.css"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Emoji from "../components/Emoji"
import SEO from "../components/seo"

import { AiOutlineCode, AiOutlineTool, AiOutlineCamera } from "react-icons/ai"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"

import SkillCard from "../components/SkillCard"

const HIRE_SITE_URL = "https://carltonosinde.com"

const skillList = [
  {
    title: "Technical Languages",
    icon: <AiOutlineCode />,
    skills: [
      <span>
        <span className="font-weight-medium">Javascript</span> (Node.js, Express.js,
        React)
      </span>,
      "Java",
      "Python",
    ],
  },
  {
    title: "Frameworks",
    icon: <AiOutlineTool />,
    skills: [
      <span>
        <span className="font-weight-medium">REST API</span>
      </span>,
      "Spring Boot",
      "Django",
      "MongoDB",
      "MySQL",
      "Flask",
      "Express.js",
    ],
  },
  {
    title: "Tools",
    icon: <AiOutlineTool />,
    skills: [
      <span>
        <span className="font-weight-medium">AWS</span> (S3, CloudFront,
        API Gateway)
      </span>,
      "Git",
      "Visual Studio Code",
      "Docker",
      "Kubernetes",
    ],
  },
]

const About = () => {
  return (
    <>
      <SEO
        title="Carlton Osinde - About"
        description="A glance at my experiences, and where I came from. Let's get connected!"
        type="website"
      />
      <Navbar />
      <Container fluid>
        <motion.div
          key="about"
          initial={{ opacity: 0, translateY: 0 }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          exit={{ opacity: 0, translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Row className="mb-5 featured-section">
            <Container>
              <Row className="pt-5 pb-5">
                <Col>
                  <motion.div
                    initial={{ opacity: 0, translateY: 50 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                      delay: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <h1 className="font-weight-bold">At a glance</h1>
                    <p>
                      I am currently the Founder of{" "}
                      <a
                        style={{
                          color: "#005DAA",
                          textDecoration: "underline",
                        }}
                        className="font-weight-medium"
                        href="https://chaqu.io"
                        rel="noopener"
                        target="_blank"
                      >
                        Chaqu.io
                      </a>
                      , and working full-time as a Technical Consultant at{" "}
                      <a
                        style={{
                          color: "#005DAA",
                          textDecoration: "underline",
                        }}
                        className="font-weight-medium"
                        href="https://focuscompany.ca"
                        rel="noopener"
                        target="_blank"
                      >
                        The Focus Company
                      </a>
                      . Prior to my full-time role, I interned as a Data Engineer Intern at{" "}
                      <a
                        style={{
                          color: "#005DAA",
                          textDecoration: "underline",
                        }}
                        className="font-weight-medium"
                        href="https://www.tdsecurities.com/ca/en"
                        rel="noopener"
                        target="_blank"
                      >
                        TD Securities
                      </a>{" "}
                      and Data Engineer Intern at{" "}
                      <a
                        style={{
                          color: "#005DAA",
                          textDecoration: "underline",
                        }}
                        className="font-weight-medium"
                        href="https://usports.ca/en"
                        rel="noopener"
                        target="_blank"
                      >
                        U SPORTS
                      </a>
                      !
                    </p>
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </Row>
          <Row>
            <Container>
              <Row>
                <Col>
                  <h2 className="font-weight-bold">About Me</h2>
                </Col>
              </Row>
              <Row>
                <Col sm={4} className="mb-3">
                  <motion.div
                    initial={{ opacity: 0, translateY: 50 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                      delay: 0.2,
                      ease: "easeOut",
                    }}
                  >
                    <Image
                      src="https://d1ap993fctyiv.cloudfront.net/dp.jpg"
                      fluid
                      rounded
                      alt="Carlton Osinde headshot"
                    />
                    <motion.div
                      className="about-circle-bottom"
                      initial={{ translateY: 50, opacity: 0 }}
                      animate={{ translateY: 0, opacity: 1 }}
                      transition={{
                        delay: 0.5,
                        ease: "easeOut",
                        duration: 0.666,
                      }}
                    ></motion.div>
                  </motion.div>
                </Col>
                <Col sm={8} className="mb-5">
                  <Row>
                    <Col>
                      {" "}
                      <div
                        itemScope
                        itemType="http://data-vocabulary.org/Person"
                      >
                        <span className="lg">
                          <Emoji symbol="🎓" />
                        </span>
                        <p>
                          My name is <span itemProp="name">Carlton Osinde</span>{" "}
                          , I have a Bachelors Degree with a focus in Computer Science from
                          {" "}
                          <span
                            style={{ color: "#b60809" }}
                            className="font-weight-medium"
                            itemProp="affiliation"
                          >
                          York University.
                          </span>
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <span className="lg">
                    <Emoji symbol="💭" />
                  </span>
                  <p>
                    I am passionate about technology, business and most importantly builiding a better tomorrow. I'm a challenge seeker and enjoy working in different
                    enviroments to expand my skill set as a {" "}
                    <span className="font-weight-bold">
                      Software Engineer!
                    </span>{" "}
                    My contact details are below, please free to reach out and let's get connected!
                  </p>
                </Col>
              </Row>

              <Row className="mt-5 mb-3">
                <Col>
                  <h2 className="font-weight-bold">My Tool Box</h2>
                </Col>
              </Row>

              <Row>
                {skillList.map((element, index) => (
                  <Col md={4} sm={12}>
                    <SkillCard
                      title={element.title}
                      icon={element.icon}
                      skills={element.skills}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </Row>
          <Footer />
        </motion.div>
      </Container>
    </>
  )
}

export default About
