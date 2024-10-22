<template>
  <div class="products">
    <h2>สินค้าของเรา</h2>
    <div class="product-list">
      <div class="product-item" v-for="product in products" :key="product.id">
        <img :src="require(`@/assets/images/${product.image}`)" :alt="product.name" class="product-image" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }} บาท</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: 'กิ๊บ crybaby สุดน่ารัก', price:  20, image: '1.jpg' },
        { id: 2, name: 'กิ๊บจําลอง ไม้เสียบทอด กิ๊บติดผม ', price:  30, image: '2.jpg' },
        { id: 3, name: 'เซต แฟชั่น อะคริลิค ช้อน ส้อม ', price:  25, image: '3.jpg' },
        { id: 4, name: 'กิ๊บกระดูกหมู กิ๊บลูกชิ้น กิ๊บกวนโอ้ยเก๋ๆ ', price:  25, image: '4.jpg' },
        { id: 4, name: 'กิ๊บกระดูกหมู กิ๊บลูกชิ้น กิ๊บกวนโอ้ยเก๋ๆ ', price:  25, image: '4.jpg' },
        // เพิ่มข้อมูลสินค้าเพิ่มเติมที่นี่
      ]
    };
  }
}
</script>

<style scoped>
.products {
  text-align: center;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-item {
  margin: 20px;
  border: 1px solid #ddd;
  padding: 15px;
  width: 200px; /* ขนาดของกรอบ */
}

.product-image {
  width: 100%; /* ปรับให้กว้างเต็มกรอบ */
  height: 150px; /* กำหนดความสูงของรูปภาพ */
  object-fit: cover; /* ให้ภาพเต็มกรอบโดยไม่บิดเบือน */
}
</style>
