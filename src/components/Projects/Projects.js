import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import travel from "../../Assets/Projects/travel.png";
import headphone from "../../Assets/Projects/headphone.png";
import Country from "../../Assets/Projects/Country.png";
import animation from "../../Assets/Projects/animation.png";
import shop from "../../Assets/Projects/shop.png";
import landingpage from "../../Assets/Projects/landingpage.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={animation}
              isBlog={false}
              title="ReactAnimation website"
              description="This animation website is a captivating webpage designed to showcase scroll animationusing the powerful combination of GSAP,Locomotive Scroll,and React JS.With smooth and visually stunning animations, Ochi aims to demonstrate the seamless integration of these libraries to create an immersive user experience."
              ghLink="https://github.com/UsamaWaqas/react-animation_website"
              demoLink="https://reactjsanimations.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Country}
              isBlog={false}
              title="RestCountry website"
              description="The Rest Country project is built using React.js and TypeScript, with the Rest Country API. Finding countries by region is a tricky part of the website. The project also includes a feature to toggle the color scheme between light and dark mode."
              ghLink="https://github.com/UsamaWaqas/rest_countries_website"
              demoLink="https://grand-nasturtium-3c29ce.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landingpage}
              isBlog={false}
              title="Uxpert"
              description="UXpert is a modern UI/UX design subscription service that offers scalable, adaptable, and fast turnaround design solutions tailored for startups. This landing page provides an engaging overview of our services, pricing plans, and customer testimonials to attract potential clients and showcase our value proposition. ."
              githubLink="https://github.com/UsamaWaqas/UxPert"
              demoLink="https://celebrated-pegasus-358b90.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel log"
              description="i am  working on a front-end travel project using NextJS and TypeScript. The project includes a card slider for the top destination section and involves styling with CSS layout properties, Flexbox, and CSS Grid. You used semantic HTML5 markup, CSS custom properties, and swiper.js for the slider component. Although making the section responsive was challenging and time-consuming, you’re pleased with the final result."
              ghLink="https://github.com/UsamaWaqas/landing_page-withNextjs"
              demoLink="https://nextjswebapp.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="shopping Store"
              description="The website offers a range of functionalities designed to enhance the shopping experience. Users can easily manage their cart by adding or removing products, adjusting quantities, and viewing a summary of items via a cart overlay. Detailed product attributes, including size and other relevant details, are displayed to ensure informed purchasing decisions. The checkout process is secure and user-friendly, featuring a multi-step guide and form validations to ensure accurate order information. Additionally, development goals include practicing React components and hooks, building cart logic, implementing form validations, and using Firebase for data storage.."
              ghLink="https://github.com/UsamaWaqas/E-commerce-store"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={headphone}
              isBlog={false}
              title="Full Stack ecommerce Application"
              description=
"This project was bootstrapped with React.js, and through it, I learned about React 18 and its latest features. I gained experience with React functional components and their reusability, React hooks, and state management. I also learned how to use the Context API and its advanced concepts. The project involved rapid UI building with SCSS, focusing on the most important concepts of SCSS, and employing a mobile-first responsive approach. Additionally, I learned how to use Strapi Headless CMS for CRUD operations, applied functional programming through utility methods, utilized Axios in a React app, and integrated the Stripe payment gateway."
              ghLink="https://github.com/UsamaWaqas/Full-Stack-E-Commerce-Website"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
