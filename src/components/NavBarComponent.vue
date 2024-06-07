<template>
  <header class="header">
    <nav>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
      </ul>
      <ul class="nav-links-right">
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><a href="https://adilshadblog.wordpress.com">Blog</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBarComponent'
}
</script>

<style scoped>
.header {
  height: 50px; /* Make the header skinnier */
  background-color: black; /* Make background transparent */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.nav-links,
.nav-links-right {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-links li,
.nav-links-right li {
  margin: 0 15px;
}

.nav-links a,
.nav-links-right a {
  color: #ffffff; /* Bright white links */
  text-decoration: none; /* Remove underline */
  font-family: 'Dosis', sans-serif; /* Use Dosis font */
  font-weight: bold;
  font-size: 18px;
  transition: color 0.3s ease;
}

.nav-links a:hover,
.nav-links-right a:hover {
  color: #cccccc; /* Slightly lighter color on hover */
}
</style>