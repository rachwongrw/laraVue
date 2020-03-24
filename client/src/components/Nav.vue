<template>
    <div style="margin: 2% 5%">
      <section>
        <div>
           <nav class='navbar'>
            <div style="width: 100%">
              <router-link to='/'>
                <h1 style="font-size: 3em; text-align: center; color: #4a4a4a; letter-spacing: 0.3em;">FOREVER HOMES</h1>
              </router-link>
              <router-link to='/dogspage' class="navbar-item">Adoption List</router-link>
            </div>
          </nav>
          <router-view></router-view>
        </div>
      </section>
    </div>
</template>

<script>
</script>
