<template>
  <div class="contact">
    <h1>Contact Me</h1>
    <form @submit.prevent="sendEmail">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div>
        <label for="subject">Subject:</label>
        <input type="text" id="subject" v-model="form.subject" required />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Send Email</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    sendEmail() {
      const { name, email, subject, message } = this.form;
      const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      window.location.href = mailtoLink;
    }
  }
};
</script>

<style scoped>
.contact {
  padding: 2rem;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px; /* Adjust the max-width to make the form container less wide */
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff; /* Background color of the form container */
  margin-top: 3rem;
}

h1 {
  font-family: 'Dosis', sans-serif;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px; /* Adjust the max-width to make the form less wide */
}

div {
  display: flex;
  flex-direction: column;
}

label {
  font-family: 'Dosis', sans-serif;
  font-weight: bold;
  color: #555;
  margin-bottom: 0.5rem;
}

input, textarea {
  font-family: 'Dosis', sans-serif;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

button {
  font-family: 'Dosis', sans-serif;
  font-weight: bold;
  color: #fff;
  background-color: #1e90ff;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

button:hover {
  background-color: #1c7ed6;
}
</style>