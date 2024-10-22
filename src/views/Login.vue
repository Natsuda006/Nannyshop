<template>
    <div class="login">
      <h2>เข้าสู่ระบบ</h2>
      <form @submit.prevent="login">
        <label for="email">อีเมล:</label>
        <input type="email" id="email" v-model="email" required />
  
        <label for="password">รหัสผ่าน:</label>
        <input type="password" id="password" v-model="password" required />
  
        <button type="submit">เข้าสู่ระบบ</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        console.log('Login:', this.email, this.password)
      }
    }
  }
  </script>
  
  <style scoped>
  .login {
    max-width: 400px;
    margin: 0 auto;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-top: 10px;
  }
  
  input {
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
  


