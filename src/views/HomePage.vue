<template>
  <div class="home">
    <div class="sliding-text">
      <div class="text-container-left">
        <p>Java</p>
        <p>JavaScript</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>PostgreSQL</p>
        <p>Visual Studio Code</p>
        <p>IntelliJ</p>
        <p>pgAdmin</p>
        <p>Postman</p>
      </div>
    </div>

    <div class="welcome-section">
      <h1>ADIL SHAD</h1>
      <p>Full Stack Software Engineer</p>
    </div>

    <div class="sliding-text">
      <div class="text-container-right">
        <a href="https://www.linkedin.com/in/adilshad">LinkedIn</a>
        <a href="https://calendly.com/adilshad">Calendly</a>
        <a href="https://github.com/adilshads">GitHub</a>
        <a href="https://www.linkedin.com/in/adilshad">LinkedIn</a>
        <a href="https://calendly.com/adilshad">Calendly</a>
        <a href="https://github.com/adilshads">GitHub</a>
        <a href="https://www.linkedin.com/in/adilshad">LinkedIn</a>
        <a href="https://calendly.com/adilshad">Calendly</a>
        <a href="https://github.com/adilshads">GitHub</a>
        <a href="https://www.linkedin.com/in/adilshad">LinkedIn</a>
        <a href="https://calendly.com/adilshad">Calendly</a>
        <a href="https://github.com/adilshads">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
@keyframes slide-left {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes slide-right {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.home {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 50px); /* Adjust height considering header height */
  background: url('@/assets/background.jpg') no-repeat center center; /* Background image */
  background-size: cover;
  color: #000000; /* Bright white text */
}

.welcome-section {
  text-align: center;
}

.welcome-section h1 {
  font-family: 'Dosis', Georgia, 'Times New Roman', Times, serif; /* Use Dosis font */
  font-weight: bold;
  font-size: 6rem;
  margin-bottom: 20px;
}

.welcome-section p {
  font-family: 'Dosis', sans-serif;
  font-weight: normal;
  font-size: 24px;
  margin-bottom: 20px;
}

.sliding-text {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 20px;
}

.text-container-left {
  display: inline-block;
  white-space: nowrap;
  animation: slide-left 30s linear infinite;
}

.text-container-right {
  display: inline-block;
  white-space: nowrap;
  animation: slide-right 30s linear infinite;
}

.sliding-text a,
.sliding-text p {
  display: inline-block;
  font-family: 'Dosis', sans-serif;
  font-weight: bold;
  font-size: 2rem;
  text-decoration: none;
  color: black;
  padding: 0 10px; /* Adjust padding for spacing */
}

.sliding-text a:hover {
  color: rgb(5, 5, 100);
  font-size: 3rem;
}
</style>