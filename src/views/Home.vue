<template>
  <div class="home">
    <img :src="require('@/assets/images/00.jpg')" alt="ภาพสินค้า" class="home-image" />
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  text-align: center;
  display: flex; /* ใช้ Flexbox เพื่อจัดตำแหน่ง */
  flex-direction: column; /* จัดเรียงแนวตั้ง */
  align-items: center; /* จัดกลางในแนวนอน */
  justify-content: center; /* จัดกลางในแนวตั้ง */
  height: 100vh; /* ทำให้ div นี้มีความสูงเต็มหน้าจอ */
}

.home-image {
  width: 100%; /* ทำให้รูปภาพเต็มความกว้าง */
  height: 100%; /* ทำให้รูปภาพเต็มความสูง */
  max-height: none; /* ลบความสูงสูงสุด */
  object-fit: cover; /* ปรับให้รูปภาพเต็มกรอบ */
  margin: 0; /* กำหนดระยะห่างเป็น 0 */
}
</style>

