function Numbers(props) {
  return (
    <div className="numbering">
      <h1 data-aos="fade-up" data-aos-duration="1000">
        {props.experience}
      </h1>
      <p data-aos="fade-up" data-aos-duration="1000">
        {props.expDesc}
      </p>
    </div>
  );
}

export default Numbers;
