import pfp from "./assets/pfpremove.png";

function Card() {
  return (
    <div className="card">
      <img src={pfp} />
      <h1 className="name">Fiza Usman</h1>
      <p>A Frontend Developer who has crafted countless user experiences.</p>

      <div className="links">
        <a href="https://github.com/ClashF/portfolio.2">
          <i className="ri-github-line"></i>
        </a>
        <a href="https://www.linkedin.com/in/fiza-u-18ab82292/">
          <i className="ri-linkedin-fill"></i>
        </a>
        <a href="mailto:us4245715@gmail.com">
          <i className="ri-mail-line"></i>
        </a>
      </div>
    </div>
  );
}

export default Card;
