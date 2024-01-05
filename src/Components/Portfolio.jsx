/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "../images/design-desk.jpg";

// const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Detecting Hateful and Offensive Language using NLP",
    description:
      "I have started this project because I want to avoid the impacts of hate speech and fake news in our homes that would negatively affect our friends and families especially: children as they are the least expert with technology. ",
    url: "https://github.com/OmdenaAI/aswan-egypt-detecting-hate-nlp",
  },
  {
    title: "Detecting and Mitigating Traffic Accidents using Machine Learning and Traffic Data in Jordan",
    description:
      "In this project, the project team aimed to find an AI solution to help reduce/mitigate the number of traffic accidents within the country of Jordan. The team used a dataset of traffic accidents in Jordan from 2016 to 2019, and used machine learning to predict the number of accidents in the future. The team also used the dataset to find the most common causes of accidents in Jordan, and used this information to suggest solutions to mitigate the number of accidents in the future.",
    url: "https://drive.google.com/file/d/1qLg3pbgb6sSch_zl-fWIBGfSQ9K7OTPV/view",
  },
  {
    title: "How to predict the future? Blog post",
    description:
      "Machine learning is a form of AI that enables a system to learn from data rather than through explicit programming, This blog explain it in a simple way.",
    url: "https://farahabdou.hashnode.dev/how-to-predict-the-future",
  },
  {
    title: "Mastering the Move: Migrating Your On-Premises MySQL Database to Azure Database for MySQL",
    description:
      "In the ever-evolving landscape of data management, the decision to migrate from an on-premises MySQL database to Azure Database for MySQL represents a strategic leap toward scalability, security, and efficiency. Today, let's embark on a comprehensive journey, meticulously navigating each step of the migration process with the Azure Database Migration Service (DMS)",
    url: "https://farahabdou.hashnode.dev/mastering-the-move-migrating-your-on-premises-mysql-database-to-azure-database-for-mysql",
  },
  {
    title: "Getting Started with Power BI",
    description:
      "Power BI Desktop is a free Business Intelligence application from Microsoft that lets you load, transform, and visualize data. You can use it to create reports and dashboards to share with others in your organization. Power BI Desktop is available for Windows only, but you can view the reports created with it on the Power BI mobile apps for iOS, Android, and Windows devices.",
    url: "https://farahabdou.hashnode.dev/getting-started-with-power-bi",
  },
  {
    title: "The Amazon Ecosystem: A Multifaceted Powerhouse in the Digital Era",
    description:
      "Amazon is a multinational technology company based in Seattle, Washington, that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is considered one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Microsoft, and Facebook. The company has been referred to as one of the most influential economic and cultural forces in the world, as well as the world's most valuable brand.",
    url: "https://farahabdou.hashnode.dev/the-amazon-ecosystem-a-multifaceted-powerhouse-in-the-digital-era",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
        
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
