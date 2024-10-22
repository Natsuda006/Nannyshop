<template>
    <div class="contact">
      <h2>ติดต่อเรา</h2>
      <form @submit.prevent="submitForm">
        <label for="name">ชื่อ:</label>
        <input type="text" id="name" v-model="name" required />
  
        <label for="email">อีเมล:</label>
        <input type="email" id="email" v-model="email" required />
  
        <label for="message">ข้อความ:</label>
        <textarea id="message" v-model="message" required></textarea>
  
        <button type="submit">ส่งข้อความ</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      submitForm() {
        console.log('Form submitted:', this.name, this.email, this.message)
      }
    }
  }
  </script>
  
  <style scoped>
  .contact {
    max-width: 600px;
    margin: 0 auto;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-top: 10px;
  }
  
  input, textarea {
    padding: 10px;
    margin-top: 5px;
  }
  
  button {
    margin-top: 20px;
    padding: 10px;
    background-color: #ff99cc;
    border: none;
    color: white;
    cursor: pointer;
  }
  </style>
  