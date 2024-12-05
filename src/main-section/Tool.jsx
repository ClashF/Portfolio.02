function Tool(props) {
  return (
    <div className="tool-card" data-aos="slide-up" data-aos-duration="1000">
      <div className="bgImg" data-aos="slide-up" data-aos-duration="1000">
        <img src={props.Image} />
      </div>
      <div className="toolInfo">
        <h2 data-aos="slide-up" data-aos-duration="1000">
          {props.Heading}
        </h2>
        <p>{props.Description}</p>
      </div>
    </div>
  );
}

export default Tool;
