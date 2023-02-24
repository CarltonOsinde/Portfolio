import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

import "../../App.css"
import "../pages.css"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import SEO from "../../components/seo"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed"

import Roles from "../../components/Roles"
import ArticleHeader from "../../components/articles/ArticleHeader"

import ComingSoon from "../../components/articles/ComingSoon"

const Chaqu = () => {
  var highlightColor = "#ffffff"

  return (
    <>
      <SEO
        title="Carlton Osinde - Chaqu.io"
        description="Founder of a platform that digitizes restaurant menus."
        type="article"
        keywords={["Digitizing restaurant menus", "Chaqu", "Founder"]}
        url="/w/chaqu"
      />
      <Navbar />
      <Container fluid style={{ zIndex: "0" }}>
        <ArticleHeader
          title={[{ text: "Chaqu.io", color: "black" }]}
          subtitle={[
            {
              text:
                "An SaaS enabled platform that handles the digitization of restaurant menus. We give customers confidence in their orders.",
              color: "rgb(0, 0, 0)",
            },
          ]}
          date={[
            { text: "October 2022 - Present", color: "rgb(0, 0, 0)" },
          ]}
          action={[
            {
              text: "Visit the Website",
              url: "https://chaqu.io",
              variant: "dark",
            },
          ]}
          bg={highlightColor}
        >
          <Image
            fluid
            src="https://d1ap993fctyiv.cloudfront.net/header_chaqu.png"
            className="p-5"
          />
        </ArticleHeader>

        <Roles
          team="Leadership & Engineering"
          roles="Founder & Full-stack Engineer"
          tools="MongoDB, Express, React, Node, AWS (Gateway, S3, Cloudfront)"
          type="Entrepreneurship"
          timeline="Toronto, CA"
        >
          <p>
            As a foodie I had a hard time ordering foods at restaurants I was 
            unfamilar with. Even with platforms such as Instagram, Google 
            Reviews, Open Table the logistics of having that guarantee that I
            would get what I ordered was slim. Fast Forward to today, we've 
            been able to create a platform that gives you the knowledge IRL to
            aid with your ordering.
          </p>
        </Roles>

        <Row className="pt-5">
          <Container className="">
            <Row>
              <Col>
                <h3 className="font-weight-medium mb-5">
                  A brand new platform created to make the experience of
                  casual dining and ordering food easier.
                </h3>
              </Col>
            </Row>
          </Container>
        </Row>

        <ComingSoon />

        <Footer />
      </Container>
    </>
  )
}

export default Chaqu
