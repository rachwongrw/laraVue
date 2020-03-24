<template functional>
<div>
  <nav class='navbar'>
    <div style="width: 100%">
      <router-link to='/'>
        <h1 style="font-size: 3em; text-align: center; color: #4a4a4a; letter-spacing: 0.3em;">FOREVER HOMES</h1>
      </router-link>
      <router-link to='/dogspage' class="navbar-item">Adoption List</router-link>
    </div>
  </nav>
  <!-- <v-parallax src="https://placedog.net/1000/?id=97"></v-parallax> -->
  <!-- <v-img src="https://placedog.net/650/300?id=97"></v-img> -->
</div>
</template>

<script>

export default {

}
// import Vue from 'vue'

// Vue.component('nav-bar', {
//   functional: true,
//   template:  `<nav class='navbar'>
//     <div style="width: 100%">
//       <router-link to='/' class='navbar-item'>Home</router-link>
//       <router-link to='/dogspage' class="navbar-item">Dogs Page</router-link>
//     </div>
//   </nav>`
// })

</script>
