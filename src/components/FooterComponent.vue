<template>
  <footer>
    <div class="footer-content">
      <p>&copy; 2024 Adil Shad. All rights reserved.</p>
      <p>Image by <a href="https://www.freepik.com/free-vector/white-abstract-background_11852424.htm#query=website%20background&position=38&from_view=keyword&track=ais_user&uuid=aaefe42b-93ad-4eab-aa34-20fd617c96dc" target="_blank">Freepik</a></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
footer {
  background-color: #000000;
  color: #fff;
  text-align: center;
  padding: 0.5rem; /* Reduced padding */
  position: fixed;
  width: 100%;
  bottom: 0;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem; /* Space between the text elements */
}

.footer-content p {
  margin: 0;
}

.footer-content a {
  color: #fff;
  text-decoration: none;
}

.footer-content a:hover {
  color: #ccc;
}
</style>