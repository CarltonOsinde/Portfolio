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
        description="Leveraging leading edge software and data to create custom software solutions for organizations"
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
          date={[{ text: "September 2021 - Present", color: "rgb(250, 250, 250)" }]}
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
          roles=" Senior Technical Consultant"
          timeline ="Toronto, CA"
          tools="Asana, MS Project, UML, AWS, Model-Driven Architecture"
          type="Full-time Work"
        >
          <p>
            I've had the pleasure of working at The Focus Company for close to 2 years now.
            During these 2 years, I've working on a number of exciting projects that sharpened 
            my technical and project management skills. Below are a few of accomplishments to date.
          </p>

          <h6>Current Role: Technical Project Manager</h6>
            <p>
             Executed a comprehensive project plan for a $3 Million federal government project called "Women First," which resulted in on-schedule completion of all five phases and meeting strategic targets.
            </p>

            <p>
             Designed, developed, and implemented custom algorithms and forms, successfully converting various data types into binary format, ensuring full compliance with government database schemas and enhancing system compatibility.
            </p>

            <p> 
             Co-implemented stringent financial controls and review mechanisms by streamlining expense data allowing for a thorough review of curtailed project expenses. This resulted in less variance disruption and reduced overall costs by 15%
            </p>

            <p>
             Devised and enforced a risk management protocol, mitigating significant disruptions and ensuring the project remained on schedule and within budget while adopting project management methodologies specifically for the project's challenges, increasing adaptability and stakeholder satisfaction.
            </p>

          <h6>Previous Role: Associate Project Manager</h6>
            <p>
              Created team dashboards that visualized ongoing projects, tasks, task assignees, workload and timelines. This resulted in visibility on backlogged tasks, and streamlined project processes and has resulted in more data-driven decisions by team leads.
            </p>
            <p>
              Optimizing the payment gateway of a Node.js back-end serving 1K daily visitors. Leveraged the Shopify API to seamlessly integrate with the existing LMS via REST, effectively logging transactional data. Estimated annual overhead cost savings of $162K, enhancing operational efficiency and profitability.
            </p>


        </Roles>
        <Footer />
      </Container>
    </>
  )
}

export default TheFocusCompany
