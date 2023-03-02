import React from "react"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"

import "../../App.css"
import "../pages.css"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import SEO from "../../components/seo"
import Roles from "../../components/Roles"

import ParagraphComponent from "../../components/articles/ParagraphComponent"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"

import ArticleHeader from "../../components/articles/ArticleHeader"
import ComingSoon from "../../components/articles/ComingSoon"

const TheFocusCompany = () => {
  const highlightColor = "#febc5e"

  return (
    <>
      <SEO
        title="Carlton Osinde - The Focus Company"
        description="Ideating a new way to connect users on the Airbnb platform
                    during a 48 hour Adobe College Creative Jam"
        type="article"
      />
      <Navbar />
      <Container fluid style={{ zIndex: "0" }}>
        <ArticleHeader
          title={[{ text: "The Focus Company", color: "white" }]}
          subtitle={[
            {
              text:
                "In a world of crazy-busy, we help you see the work that matters.",
              color: "rgb(250, 250, 250)",
            },
          ]}
          date={[{ text: "September - Present", color: "rgb(250, 250, 250)" }]}
          action={[
            {
              text: "Visit The Website",
              url:
                "https://www.focuscompany.ca/",
              variant: "light",
            },
          ]}
          bg={highlightColor}
        >
          <Image
            fluid
            src="https://d1ap993fctyiv.cloudfront.net/tfc_coverphoto.png"
            className="p-5"
          />
        </ArticleHeader>

        <Roles
          roles="Solutions Engineer"
          timeline ="Toronto, CA"
          tools="Asana, MS Project, UML, AWS, Model-Driven Architecture"
          type="Full-time Work"
        >
          <p>
            I've had the pleasure of working at The Focus Company for 1 year and 7 months.
            Over the course of my time here, I've been able to work on some exciting projects
            and accomplish some great deliverables. Below are my accomplishments to date.
          </p>

          <h6>Current Role: Solutions Engineer</h6>
            <p>
              Developed a new Software Architecture map to cut down technical debt by reducing SAAS resources, optimizing the customer journey process, and leveraging on more streamlined data. $162,000 savings per year was noted in SAAS resources.
            </p>

          <h6>Previous Role: Associate Project Manager</h6>
            <p>
              Created team dashboards that visualized ongoing projects, tasks, task assignees, workload and timelines. This resulted in visibility on backlogged tasks, and streamlined project processes and has resulted in more data-driven decisions by team leads.
            </p>


        </Roles>
        <Footer />
      </Container>
    </>
  )
}

export default TheFocusCompany
