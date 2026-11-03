import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science (AI & ML)</h4>
                <h5>SRM Institute of Science and Technology (SRMIST)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Bachelor of Computer Science and Engineering, specializing in Artificial Intelligence and Machine Learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate / High School</h4>
                <h5>Mahavir Ramnath Kisan Bapu Inter College, Para, Ghazipur</h5>
              </div>
              <h3>Completed</h3>
            </div>
            <p>
              Successfully completed foundational academic schooling before pursuing higher education.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certification</h4>
                <h5>Getting Started with Artificial Intelligence</h5>
              </div>
              <h3>Certified</h3>
            </div>
            <p>
              Achieved certification demonstrating an understanding of core Artificial Intelligence concepts and their applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
