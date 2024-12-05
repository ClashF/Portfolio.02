function ProjectCard(props) {
  return (
    <a href={props.Link}>
      <div className="project-card">
        <img src={props.Image} />
        <div className="projInfo">
          <h2>{props.Heading}</h2>
          <p>{props.Description}</p>
        </div>
        <i className="ri-arrow-right-up-line"></i>
      </div>
    </a>
  );
}

export default ProjectCard;
