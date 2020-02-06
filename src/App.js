import React from "react";
import "./styles.css";
import ResumeItem from "./ResumeItem";
import TimeRangeBlock from "./TimeRangeBlock";

const education = [
  {
    startDate: new Date("2000-05-10"),
    endDate: new Date("2006-01-25"),
    title: "PhD",
    children: (
      <>
        <p>Pedagogical Sciences- Computer and Instructional Technology</p>
      </>
    )
  },
  {
    startDate: new Date("1993-01-01"),
    endDate: new Date("1998-06-25"),
    title: "BA-MA",
    children: (
      <>
        <p>Teacher of Mathematics & Informatics</p>
      </>
    )
  }
];

const experience = [
  {
    startDate: new Date("2016-09-01"),
    endDate: new Date("2017-06-30"),
    title: "International Ala-Too University",
    children: (
      <>
        <p>-Lecturer</p>
      </>
    )
  },
  {
    startDate: new Date("2010-08-01"),
    endDate: new Date("2016-07-23"),
    title: "Fatih University",
    children: (
      <>
        <p>-Lecturer</p>
        <p>-Head of Department</p>
      </>
    )
  },
  {
    startDate: new Date("2006-09-01"),
    endDate: new Date("2010-07-31"),
    title: "Kyrgyzstan International Educational Institution",
    children: (
      <>
        <p>-School Principal</p>
        <p>-Math & Informatics Teacher</p>
      </>
    )
  },
  {
    startDate: new Date("1998-09-01"),
    endDate: new Date("2006-08-31"),
    title: "Kyrgyzstan International Educational Institution",
    children: (
      <>
        <p>-Math & Informatics Teacher</p>
        <p>-Assistant of Principal</p>
      </>
    )
  }
];

export default function App() {
  return (
    <div className="App">
      <section className="container">
        <section className="resume-left">
          <article className="image">
            <img src="https://i.postimg.cc/1XZ89k3T/Photo-Omerrr.jpg" />
          </article>

          <h1>Ömer F. Sözcü</h1>
          <article>
            <dl className="addres-container">
              <dt className="addres-container_1">D.O.B:</dt>

              <dd className="addres-container_2">17th March</dd>

              <dt className="addres-container_1">Adress:</dt>
              <dd className="addres-container_2">Malmö/Sweden</dd>
            </dl>
          </article>

          <article className="phone">
            <h4>Phone:</h4>
            <h5>+46738787158</h5>
          </article>
          <article className="email">
            <h4>Email:</h4>
            <h5>omerfsozcu@gmail.com</h5>
          </article>

          <article className="website">
            <h4>Website:</h4>
            <h5>
              <a href="https://omersozcu.netlify.com/">omersozcu.netlify.com</a>
            </h5>
          </article>

          <article className="social-media">
            <article className="linkedin">
              <i className="fab fa-linkedin-in" />
              <br />
              linkedin.com/in/omerfsozcu
            </article>
            <article className="twitter">
              <i className="fab fa-twitter-square" />
              <br />
              @OmerFSozcu
            </article>
          </article>
        </section>

        <section className="resume-right">
          <ResumeItem title="About Me">
            <p>
              My work experience in the field of education begins in 1998. I
              worked as a math and IT teacher at the international elementary
              school, gymnasium and lecturer in different universities in
              Kyrgyzstan and in Turkey for 19 years. I organized many
              educational activities, projects, many group works, competitions,
              researches, social organizations, excursions and studies in
              schools and universities. As a person, I am driven, positive,
              respectful, helpful, open-minded, attentive and curious, as well
              as having the ability to work independently but at the same time
              it is used to working in a team where cooperation with colleagues
              leads to a successful working method.
            </p>
          </ResumeItem>
          <ResumeItem title="Education">
            {education.map(item => (
              <TimeRangeBlock {...item} />
            ))}
          </ResumeItem>
          <ResumeItem title="Experience">
            {experience.map(item => (
              <TimeRangeBlock {...item} />
            ))}
          </ResumeItem>

          <ResumeItem title="skills">
            <article>
              <dl className="skills_chart">
                <dt>HTML</dt>
                <dd>
                  <i className="fas fa-circle" />
                  <i className="fas fa-circle" />
                  <i className="fas fa-circle" />
                  <i className="far fa-circle" />
                  <i className="far fa-circle" />
                </dd>
              </dl>

              <dl className="skills_chart">
                <dt>CSS</dt>
                <dd>
                  <i className="fas fa-circle" />
                  <i className="fas fa-circle" />
                  <i className="fas fa-circle" />
                  <i className="far fa-circle" />
                  <i className="far fa-circle" />
                </dd>
              </dl>

              <dl className="skills_chart">
                <dt>JAVASCRIPT</dt>
                <dd>
                  <i className="fas fa-circle" />
                  <i className="fas fa-circle" />
                  <i className="far fa-circle" />
                  <i className="far fa-circle" />
                  <i className="far fa-circle" />
                </dd>
              </dl>

              <dl className="skills_chart">
                <dt>REACT</dt>
                <dd>
                  <i className="fas fa-circle" />
                  <i className="fas fa-circle" />
                  <i className="far fa-circle" />
                  <i className="far fa-circle" />
                  <i className="far fa-circle" />
                </dd>
              </dl>
            </article>

            <article className="skills_chart_left">
              <dl className="skills_chart">
                <dt>PYTHON</dt>
                <dd>
                  <i className="fas fa-circle" />
                  <i className="fas fa-circle" />
                  <i className="fas fa-circle" />
                  <i className="fas fa-circle" />
                  <i className="far fa-circle" />
                </dd>
              </dl>

              <dl className="skills_chart">
                <dt>C++</dt>
                <dd>
                  <i className="fas fa-circle" />
                  <i className="fas fa-circle" />
                  <i className="fas fa-circle" />
                  <i className="fas fa-circle" />
                  <i className="far fa-circle" />
                </dd>
              </dl>

              <dl className="skills_chart">
                <dt>OFFICE</dt>
                <dd>
                  <i className="fas fa-circle" />
                  <i className="fas fa-circle" />
                  <i className="fas fa-circle" />
                  <i className="fas fa-circle" />
                  <i className="fas fa-circle" />
                </dd>
              </dl>

              <dl className="skills_chart">
                <dt>JAVA</dt>
                <dd>
                  <i className="fas fa-circle" />
                  <i className="fas fa-circle" />
                  <i className="far fa-circle" />
                  <i className="far fa-circle" />
                  <i className="far fa-circle" />
                </dd>
              </dl>
            </article>
          </ResumeItem>

          <ResumeItem title="Achievements">
            <article className="block">
              <ul>
                <h3 className="h3">Certificates</h3>
                <li>Certificate 1</li>
                <li>Certificate 2</li>
                <li>Certificate 3</li>
                <li>Certificate 4</li>
              </ul>
            </article>

            <article className="block">
              <ul>
                <h3 className="h3">Conferences</h3>
                <li>Conference 1</li>
                <li>Conference 2</li>
                <li>Conference 3</li>
                <li>Conference 4</li>
              </ul>
            </article>

            <article className="block">
              <ul>
                <h3 className="h3">Seminars</h3>
                <li>Seminar 1</li>
                <li>Seminar 2</li>
                <li>Seminar 3</li>
                <li>Seminar 4</li>
              </ul>
            </article>
          </ResumeItem>
        </section>
      </section>
    </div>
  );
}
