function Heading(props) {
  return (
    <h1 className="mainHeading" data-aos="fade-up" data-aos-duration="1000">
      {props.head1} <br />
      <span className="grey-color" data-aos="fade-up" data-aos-duration="1000">
        {props.head2}
      </span>
      <p className="p" data-aos="fade-up" data-aos-duration="1000">
        {props.p1}
      </p>
    </h1>
  );
}

export default Heading;
