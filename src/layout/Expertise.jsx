import { FiServer, FiDatabase, FiCloud } from "react-icons/fi";

function Expertise() {
  return (
    <section className="expertise-section" id="expertise">

        <h2 className="section-title">My Expertise</h2>

          <div className="expertise-cards">

              <div className="expertise-card">
                <div className="expertise-header">
                  <FiServer className="expertise-icon" />
                  <h3 className="expertise-title">
                    <span className="underline pink">&nbsp;Software&nbsp;</span> Development
                  </h3>
                </div>

                <div className="expertise-code">
                  <span className="code-tag">&lt;h3&gt;</span>
                  <p>
                    Experienced in backend development using Java, building REST APIs,
                    working with SQL databases, and maintaining scalable server-side
                    applications.
                  </p>
                  <span className="code-tag">&lt;/h3&gt;</span>
                </div>
              </div>

              <div className="expertise-card">
                <div className="expertise-header">
                  <FiServer className="expertise-icon" />
                  <h3 className="expertise-title">
                    <span className="underline blue">&nbsp;Databases & SQL&nbsp;</span> Development
                  </h3>
                </div>

                <div className="expertise-code">
                  <span className="code-tag">&lt;h3&gt;</span>
                  <p>
                    Designing schemas, writing optimized SQL queries, and working
                    with relational databases like MySQL for reliable data handling.
                  </p>
                  <span className="code-tag">&lt;/h3&gt;</span>
                </div>
              </div>

              <div className="expertise-card">
                <div className="expertise-header">
                  <FiServer className="expertise-icon" />
                  <h3 className="expertise-title">
                    <span className="underline orange">&nbsp;Cloud &&nbsp;</span> Support
                  </h3>
                </div>

                <div className="expertise-code">
                  <span className="code-tag">&lt;h3&gt;</span>
                  <p>
                    Deploying and supporting applications on cloud platforms,
                    handling production issues, and ensuring system stability.
                  </p>
                  <span className="code-tag">&lt;/h3&gt;</span>
                </div>
              </div>
          </div>
    </section>
  );
}

export default Expertise;
