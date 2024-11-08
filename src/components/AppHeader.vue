<template>
  <header class="header">
    <h1 class="logo">NANNY SHOP</h1>
    <nav class="navigation">
      <ul class="nav-left">
        <li><router-link to="/">หน้าแรก</router-link></li>
        <li><router-link to="/products">สินค้า</router-link></li>
        <li><router-link to="/contact">ติดต่อเรา</router-link></li>
      </ul>
      <ul class="nav-right">
        <li><router-link to="/login">เข้าสู่ระบบ</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.header {
  background-color: #ffccff;
  padding: 20px;
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
}

.logo {
  margin: 0;
  color: black; 
  padding-right: 30px; 
}

.navigation {
  display: flex;
  align-items: center;
  flex: 1; /* ทำให้ nav ขยายเต็มพื้นที่ */
}

.nav-left {
  display: flex;
  justify-content: center; 
}

.nav-right {
  margin-left: auto; 
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0; 
  display: flex; 
}

nav ul li {
  display: inline;
  margin: 0 30px; 
}

nav ul li a {
  text-decoration: none;
  color: black;
}
</style>
