export default function Header() {
  return (
    <div className="flex justify-center items-center nav m-9">
      <ul className="header">
        <li>
          <a href="/#home">
            <p>Home</p>
            <i className="ri-home-5-line"></i>
          </a>
        </li>
        <li>
          <a href="/#experience">
            <p>Experience</p>
            <i className="ri-briefcase-4-line"></i>
          </a>
        </li>
        <li>
          <a href="/#projects">
            <p>Projects</p>
            <i className="ri-folder-2-line"></i>
          </a>
        </li>
        <li>
          <a href="/#tools">
            <p>Tools</p>
            <i className="ri-tools-fill"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
