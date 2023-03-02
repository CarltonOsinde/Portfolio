
import React from "react"
import { motion } from "framer-motion"
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

import ArticleHeader from "../../components/articles/ArticleHeader"
import ComingSoon from "../../components/articles/ComingSoon"

const VideoMp3 = () => {
  const highlightColor = "black"

  return (
    <>
      <SEO
        title="Carlton Osinde - Django Video - MP3 Web App"
        description="Leading the Design direction of Western University's largest business and technology club"
        type="article"
        url="/w/wfn"
      />
      <Navbar />
      <Container fluid style={{ zIndex: "0" }}>
        <ArticleHeader
          title={[
            {
              text: "Microservice Video - MP3 Converter",
              color: "white",
            },
          ]}
          subtitle={[
            {
              text:
                "Video to MP3 converter that is built on a Microservice arch and Docker image deployed on Kubernetes cluster",
              color: "rgb(240, 240, 240)",
            },
          ]}
          date={[
            {
              text: "PERSONAL PROJECT - Dec 2022",
              color: "rgb(250, 250, 250)",
            },
          ]}
          action={[
            {
              text: "View Project",
              url: "https://www.foundersnetwork.ca/",
              variant: "light",
            },
          ]}
          bg={highlightColor}
        >
          {" "}
          <Image
            fluid
            src="https://d1ap993fctyiv.cloudfront.net/VideoMP3Converter.png"
            rounded
            className="p-5"
          />
        </ArticleHeader>

        <Roles
          roles="Solo Engineer"
          team="Engineering"
          tools="Python, MongoDB, Docker, K8, 
          MySQL, Rabbit MQ"
          timeline="Toronto, CA"
          type="Personal Project"
        >
          <p>
            I learned how to created a Microservice Architecture that took a Video input and worked to convert
            the video into an MP3.

            It is held in <strong>Docker Image </strong>and deployed on a <strong>Kubernetes cluster</strong>
          </p>
        </Roles>

        <Row className="mt-5 pb-4">
          <Container>
            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col md={4}>
                  <h2 className="font-weight-bold solution-color">
                    How It Works
                  </h2>
                </Col>
                <Col md={8}>
                  <p>
                   The main programming langugage used for this project is Python. There are three seperate services, <strong>Authentication Service, Video to MP3 Service, & the Notification service.</strong> Implemented is a RabbitMQ queue to let each service communicated and execute with each other in a chronological order. All the data is stored and fetched from a <strong>MySQL and MongoDB </strong>database.
                  </p>
                  <Button as={Link} to="/" variant="dark">
                    View Project
                  </Button>
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
                    System Design
                  </h2>
                </Col>
                <Col md={8}>
                  {/* <h5>First Step:</h5>
                  <p>
                    Client → API Gateway → Storage DB(Mongo DB)<br />
                      * User uploads a video to be converted to MP3<br />
                      * The request hits the API Gateway<br />
                      * Gateway will upload the video to MongoDB 
                  </p>
                  <h5>Second Step:</h5>
                  <p>
                    API Gateway →Queue → Video Converter to MP3 Service (K8 Cluster) <br />
                      * After storing the video the gateway will put a queue into Rabbit MQ<br />
                      * The Video Converter Service reads from the Queue and finds the video ID from the Storage Database and performs the conversion
                  </p>
                  <h5>Third Step:</h5>
                  <p>
                    Video Converter Service  → Storage DB (MP3 file) →  New message on the Rabbit MQ<br />
                      * After the converter has performed the conversion it stores the MP3 file in the storage DB<br />
                      * Puts a new message in the queue for the notification service<br />
                  </p>

                  <h5>Fourth Step:</h5>
                  <p>
                    Notification Service → Client → Authentication Service<br />
                      *The notification service reads the messages and sends an email notification to the client<br />
                      * The client uses a unique ID acquired from the email notification plus their JWT to make a request to the API Gateway to pull the MP3<br />
                      * API Gateway retrieves the file from the Storage DB and returns the MP3 file to the user<br />

                  </p> */}
              <Fade bottom duration={666} distance="70px" delay={300}>
              <Image
                src="https://d1ap993fctyiv.cloudfront.net/videomp3_sysDesign.JPG"
                fluid
                alt="A view of the final design choices made by the team"
              />
            </Fade>
          </Col>
        </Row>


      </Fade>
    </Container>
  </Row>

          <Row className="conclusion-section pt-5 pb-4">
          <Container>
            <Fade bottom duration={666} distance="50px">
              <Row className="">
                <Col md={4}>
                  <h2 className="font-weight-bold">Conclusion</h2>
                </Col>
                <Col md={8}>

                  <p>
                    This really opened my eyes to the Microservices Architecture world and why companies today choose to use this type of Architecture when they are looking to scale their system! 
                    
                    I'm looking forward to expanding on softwares such as Rabbit MQ, Docker and K8!
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

export default VideoMp3
