<template>
  <div class="about">
    <div class="about-section">
      <div class="text-and-image">
        <div class="text-content">
          <h1>About Me</h1>

          <h2>Contact Information:</h2>

          <p>Email: contactadilshad@gmail.com</p>
          <p>LinkedIn: https://www.linkedin.com/in/adilshad</p>
          <p>Calendly: https://calendly.com/adilshad</p>

          <p>Hello! I'm Adil Shad, a results-oriented professional with a solid background in software development and project management. I am proficient in Java, JavaScript, HTML/CSS, and skilled at handling diverse projects while delivering high-quality results within deadlines.</p>

          <h2>Professional Experience</h2>
          <p><strong>Pharmacy Technician at Rite Aid:</strong> With several years of experience as a pharmacy technician, I have developed a deep understanding of the healthcare and pharmaceutical industry. My role involved assisting pharmacists in dispensing medications, managing inventory, and ensuring accurate patient records. This experience has honed my attention to detail, problem-solving skills, and ability to work efficiently under pressure.</p>


          <h2>Key Skills</h2>
          <ul>
            <li>Java, JavaScript, HTML5, CSS</li>
            <li>PostgreSQL, RESTful APIs, DOM Manipulation</li>
            <li>Jest, Chrome DevTools</li>
            <li>Git, GitHub, GitLab</li>
            <li>Visual Studio Code, IntelliJ, pgAdmin</li>
            <li>Spring JDBC, Postman</li>
            <li>Scrum, Agile, SDLC</li>
            <li>Command Line, Trello</li>
            <li>Microsoft Office Studios, GSuite</li>
          </ul>

          <h2>Education</h2>
          <p><strong>Full Stack Java Bootcamp at Tech Elevator:</strong> I completed a comprehensive Java Bootcamp that offers hands-on projects and personalized instruction. It covered core programming concepts and object-oriented design, providing me with a strong foundation in software development.</p>

          <h2>Certifications</h2>
          <ul>
            <li>Professional Scrum Master II - Scrum.org</li>
          </ul>

          <h2>Personal Interests</h2>
          <p>Outside of my professional life, I am an avid sports enthusiast, especially when it comes to football and basketball. I enjoy listening to podcasts on various topics, and I love spending time outdoors simply enjoying nature.</p>

          <h2>Contact Me</h2>
          <p>Feel free to <router-link to="/contact">reach out to me</router-link> or connect with me on <a href="https://www.linkedin.com/in/adilshad">LinkedIn</a>.</p>
        </div>
        <div class="image-content">
          <img src="../assets/portfolioPicuture.png" alt="Adil Shad" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: url('@/assets/background.jpg') no-repeat center center; /* Background image */
  background-color: #ffffff;
  color: #000000;
}

.about-section {
  max-width: 1200px;
  text-align: left;
}

.text-and-image {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
}

.text-content {
  flex: 1;
  margin-right: 2rem;
}

.image-content {
  max-width: 300px;
}

.image-content img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

h1, h2 {
  font-family: 'Dosis', sans-serif;
  font-weight: bold;
  color: #333333;
}

a {
  color: #1e90ff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>