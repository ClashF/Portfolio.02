function ExperienceCard(props) {
  return (
    <div className="experience-card">
      <h2>{props.Heading}</h2>
      <p>{props.Description}</p>
      <p> {props.Date}</p>
      <i className="ri-arrow-right-up-line"></i>
    </div>
  );
}

export default ExperienceCard;
