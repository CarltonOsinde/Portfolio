import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { work } from "../components/articles/ListOfWork"

import {
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoYoutube,
  IoMail,
  IoLogoReact,
  IoCodeSlash,
  IoBrushSharp,
} from "react-icons/io5"

import { GrGatsbyjs } from "react-icons/gr"
import { SiBootstrap, SiAmazonaws, SiCloudflare, SiFigma } from "react-icons/si"
import { IconContext } from "react-icons"

export const SocialsList = () => {
  return (
    <>
      <p className="footer-links">
        <a
          href="https://www.linkedin.com/in/carltonosinde/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider value={{ className: "react-icons-fix" }}>
            <IoLogoLinkedin />
          </IconContext.Provider>{" "}
          LinkedIn
        </a>
      </p>
      <p className="footer-links">
        <a
          href="https://twitter.com/OsindeCarlton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider value={{ className: "react-icons-fix" }}>
            <IoLogoTwitter />
          </IconContext.Provider>{" "}
          Twitter
        </a>
      </p>
      <p className="footer-links">
        <a
          href="https://github.com/CarltonOsinde"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider value={{ className: "react-icons-fix" }}>
            <IoLogoGithub />
          </IconContext.Provider>{" "}
          GitHub
        </a>
      </p>
      <p className="footer-links">
        <a
          href="mailto:carltonosinde@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider value={{ className: "react-icons-fix" }}>
            <IoMail />
          </IconContext.Provider>{" "}
          Email
        </a>
      </p>
    </>
  )
}

export const TechnologyList = () => {
  return (
    <>
      <p className="footer-links">
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider value={{ className: "react-icons-fix" }}>
            <IoLogoReact />
          </IconContext.Provider>{" "}
          React
        </a>
      </p>
      <p className="footer-links">
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider value={{ className: "react-icons-fix" }}>
            <GrGatsbyjs />
          </IconContext.Provider>{" "}
          Gatsby
        </a>
      </p>
      <p className="footer-links">
        <a
          href="https://react-bootstrap.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider value={{ className: "react-icons-fix" }}>
            <SiBootstrap />
          </IconContext.Provider>{" "}
          Bootstrap 4
        </a>
      </p>
      <p className="footer-links">
        <a
          href="https://aws.amazon.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider value={{ className: "react-icons-fix" }}>
            <SiAmazonaws />
          </IconContext.Provider>{" "}
          AWS (S3, Cloudfront)
        </a>
      </p>
      <p className="footer-links">
        <a
          href="https://www.cloudflare.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider value={{ className: "react-icons-fix" }}>
            <SiCloudflare />
          </IconContext.Provider>{" "}
          Cloudflare
        </a>
      </p>
    </>
  )
}

const Footer = () => {
  return (
    <Row className="pt-3 mt-5 pb-3">
      <Container className="footer-custom">
        <Row>
          <Col className="pb-3" md={3} sm={12}>
          <h3 className="rg font-weight-bold footer-links">
              Let's Connect
            </h3>
            {/* <p className="footer-links" style={{ color: "grey" }}>
              Thanks for stopping by!
            </p> */}
            <SocialsList />
          </Col>
          <Col className="pb-3" md={5} sm={12}>
            <h3 className="rg font-weight-bold footer-links">My Work</h3>
            {work.map(element => (
              <p key={element.name} className="footer-links">
                <Link to={element.url}>{element.name}</Link>
              </p>
            ))}
          </Col>
          <Col className="pb-3" md={3} sm={12}>
            <h3 className="rg font-weight-bold footer-links">
              How I Made This Site
            </h3>
            <TechnologyList />
          </Col>
        </Row>
        <Row>
          <Col>
            <motion.div
              className="footer-object"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                loop: Infinity,
                ease: "easeInOut",
              }}
            />
          </Col>
        </Row>
      </Container>
    </Row>
  )
}

export default Footer
