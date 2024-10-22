<template>
  <div class="app">
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'; // แก้ไขชื่อให้ตรงกัน
import AppFooter from './components/AppFooter.vue'; // แก้ไขชื่อให้ตรงกัน


export default {
  components: {
    AppHeader, // ใช้ชื่อที่ถูกต้อง
    AppFooter  // ใช้ชื่อที่ถูกต้อง
  }
}
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
  padding: 20px;
}
</style>

