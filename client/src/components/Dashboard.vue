<template>
    <div style="margin: 2% 5%">
      <section>
        <div>
          <nav class='navbar'>
            <div style="width: 100%">
              <router-link to='/' class='navbar-item'>Home</router-link>
              <router-link to='/dogspage' class="navbar-item">Dogs Page</router-link>
            </div>
          </nav>
          <router-view></router-view>
        </div>
      </section>
    </div>
</template>

<script>
</script>
