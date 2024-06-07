<template>
  <div class="projects">
    <h1>My Projects</h1>
    <div class="project-list">
      <div class="project-item" v-for="project in projects" :key="project.id">
        <div class="project-details">
          <div class="project-info">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            <p><strong>Technologies:</strong> {{ project.technologies }}</p>
            <a :href="project.link" target="_blank">View Project</a>
          </div>
          <div class="project-image">
            <img :src="project.imageUrl" :alt="project.title" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { projects } from '@/data/projects';

export default {
  name: 'ProjectsPage',
  data() {
    return {
      projects: projects
    }
  }
}
</script>

<style scoped>
.projects {
  padding: 2rem;
  background-color: #f9f9f9;
}

h1 {
  font-family: 'Dosis', sans-serif;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-item {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.project-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-info {
  flex: 1;
  margin-right: 1rem;
}

.project-info h2 {
  font-family: 'Dosis', sans-serif;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

.project-info p {
  font-family: 'Dosis', sans-serif;
  color: #555;
  margin-bottom: 0.5rem;
}

.project-info a {
  color: #1e90ff;
  text-decoration: none;
  font-weight: bold;
}

.project-info a:hover {
  text-decoration: underline;
}

.project-image {
  width: 150px;
  height: auto;
}

.project-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>