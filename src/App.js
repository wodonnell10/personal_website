import './App.css';
import headshot from './images/headshot.jpg';
import resume from './images/william_odonnell_resume.pdf';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#academic">Academic Achievements</a>
        <a href="#work">Work Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Me</a>
      </nav>

      <section id="home" className="section home">
        <h1>William O'Donnell</h1>
        <img src={headshot} alt="William O'Donnell Headshot" width="200"/>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>I’m a Computer Science student with a minor in Data Science who recently graduated from Montclair State University in May, 2025. Through my course work and work experience
          I have developed skills in programming, data analysis, and machine learning. I pride myself in my ability to work well in a professional environment as well as communicating efficiently with my team.
          I am always looking to help out and learn a new skill! My experience in machine learning research and AI programming displays my desire to always be on the forefront of new technology.
          In my freetime I train Brazilian Jui Jitsu, frequently play golf, and I love to hang out with my friends and meet new people.</p>
      </section>

      <section id="academic" className="section">
        <h2>Academic Achievements</h2>
        <ul>
          <li>3.656 / 4.000 GPA</li>
          <li>Dean's List</li>
            <ul>
              <li>Fall 2021</li>
              <li>Spring 2022</li>
              <li>Fall 2023</li>
              <li>Fall 2024</li>
              <li>Spring 2025</li>
            </ul>
          <li>Presidential Scholar</li>
        </ul>
      </section>

      <section id="work" className="section">
        <h2>Work Experience (In Progress)</h2>
        <a href={resume}>Check Out My Resume!</a>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </section>

      <section id="projects" className="section">
        <h2>Projects (In Progress)</h2>
        <ul>
          <li>Online Cookbook – React-based recipe app with favorites system</li>
          <li>Dehazing Model – Deep learning with residual encoder-decoder architecture</li>
          <li>Personal Website – You’re looking at it 👀</li>
        </ul>
      </section>

      <section id="contact" className="section">
        <h2>Feel free to reach out!</h2>
        <p>Email me: <a href="odonnellwilliam10@gmail.com">odonnellwilliam10@gmail.com</a></p>
        <p>Connect with me: <a href="https://www.linkedin.com/in/odonnell-william/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/odonnell-william/</a></p>
      </section>
    </div>
  );
}

export default App;