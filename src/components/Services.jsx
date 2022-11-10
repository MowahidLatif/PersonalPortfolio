import React from "react";
import "../css/services.css";
import {GrCheckmark} from "react-icons/gr"

const Services = () => {
  return (
    <section id="services">
      <h5>What i have to Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Engineering Experince</h3>
          </div>
          <ul className="service_list">
            <li><GrCheckmark className="service_list-icon"/>
              <p>Developed a Stack Bot using the Slack API w/ Python to help staff and fellow engineers with daily tasks (automating repetitive behaviour, monitoring notifications and alerts and responding to clients with auto-generated replies to minimize miscellaneous tasks).</p>
            </li>
            <li><GrCheckmark className="service_list-icon"/>
              <p>Strengthened and accelerated bio-metric data processing and displayed said data collection with Fire-base as the acting database.</p>
            </li>
            <li><GrCheckmark className="service_list-icon"/>
              <p>Modified and developed specified Enterprise resource planning (ERP) software to manage and guide production and manufacturing activities.</p>
            </li>
            <li><GrCheckmark className="service_list-icon"/>
              <p>Coordinated the development and maintenance of in-house internal tools, databases and software to manage and track all testing-related activities and data.</p>
            </li>
          </ul>
        </article>
        <article className="service">
        <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li><GrCheckmark className="service_list-icon"/>
              <p>Develop software that expands to a variety of browsers and devices.</p>
            </li>
            <li><GrCheckmark className="service_list-icon"/>
              <p>The ability to maintain multiple websites/projects for more than extender period of time.</p>
            </li>
            <li><GrCheckmark className="service_list-icon"/>
              <p>Worked with other teams to develop dashboards and analytical platforms for data management and used said platforms to plot data graphically for potential clients.</p>
            </li>
            <li><GrCheckmark className="service_list-icon"/>
              <p>Ability to design, develop, test, implement, document and maintain low-latency, high-availability, and performant software development solutions for companies and clients with careful considerations in regards to security and ability to scale.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Technical Skills</h3>
          </div>
          <ul className="service_list">
            <li><GrCheckmark className="service_list-icon"/>
              <p>Identifying bottlenecks, bugs, and devising solutions to address issues with strong communication skills and rapidly test solutions.</p>
            </li>
            <li><GrCheckmark className="service_list-icon"/>
              <p>High quality mathematical, analytical, and problem-solving skills and the ability pick up new technologies and concepts quickly with great detail and accuracy.</p>
            </li>
            <li><GrCheckmark className="service_list-icon"/>
              <p>Considered to be a reliable and positive team-player who is adaptable, open minded, enthusiastic, and takes initiative with an Entrepreneurial mindset and has a relentless desire to continuously improve and learn.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
    
  )
}

export default Services;