import React from "react";
import "./Project.css";
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
  const Projects = [
    {
      img: "https://mybuyers.in/static/media/beforTabView.62ee6a2fba894a70a1d8.jpg",
      title: "My_Buyers",
      link: "https://mybuyers.in",
    },
    {
      img: "https://shriknitwear.com/images/iStock-1196392582.jpg",
      title: "Shriknitwear",
      link: "https://shriknitwear.com",
    },
    {
      img: "https://mamasa.in/assets/images/gallery_slides/highlights/img6.jpg",
      title: "Mamasa",
      link: "https://mamasa.in",
    },
    {
      img: "https://media.licdn.com/dms/image/C5612AQGC9qOjEDvwUQ/article-cover_image-shrink_423_752/0/1520079125207?e=1700092800&v=beta&t=BhOiIZOvlcoWYVV7S_NDFZU6b7_6w21MC3uZ1WXVotk",
      title: "Amazony",
      link: "https://amazony.netlify.app/",
    },
  ];
  return (
    <div className="project pt-3">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "0px",
        }}
      >
        Projects
      </h1>
      <div className="row pt-3">
        {Projects.map((project, index) => (
          <div key={index} className="col-lg-3">
            <ProjectCard
              img={project.img}
              title={project.title}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>)
};
