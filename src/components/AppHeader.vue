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
  display: flex; /* ใช้ Flexbox */
  justify-content: space-between; /* จัดตำแหน่งให้ข้อความและเมนูอยู่ห่างกัน */
  align-items: center; /* จัดกลางในแนวตั้ง */
}

.logo {
  margin: 0; /* ลบ margin ของ h1 */
  color: black; /* เปลี่ยนสีตัวหนังสือให้เป็นสีดำ */
  padding-right: 30px; /* เพิ่มระยะห่างด้านขวา */
}

.navigation {
  display: flex;
  align-items: center;
  flex: 1; /* ทำให้ nav ขยายเต็มพื้นที่ */
}

.nav-left {
  display: flex;
  justify-content: center; /* จัดกลางให้เมนูอยู่ตรงกลาง */
}

.nav-right {
  margin-left: auto; /* ดัน nav-right ไปทางขวา */
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0; /* ลบ margin ของ ul */
  display: flex; /* ทำให้ ul เป็น flexbox */
}

nav ul li {
  display: inline;
  margin: 0 30px; /* เพิ่มระยะห่างระหว่างเมนู */
}

nav ul li a {
  text-decoration: none;
  color: black; /* เปลี่ยนสีลิงก์ให้เป็นสีดำ */
}
</style>
