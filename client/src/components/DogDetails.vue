<template>
  <div class="row">
    <v-col :key="dog.id" sm="3" cols="12">
      <v-card class="mx-auto">
        <v-img class="white--text align-end" height="200px" :src="dog.img">
        </v-img>
        <v-card-title>{{dog.name}}</v-card-title>
        <v-card-text class="text-left">
          <v-list-item-title>{{dog.age}} <v-icon color="indigo">cake_variant</v-icon></v-list-item-title>
          {{dog.characteristics}}
        </v-card-text>

        <v-card-actions>
          <v-btn text>
            <router-link to='/dogdetails'>Learn more</router-link>
          </v-btn>
          <v-btn text>
            <router-link to='/adopt'>Adopt</router-link>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </div>
</template>

<script>

export default {
  functional: true,
  props: {
    dog: {
      required: true
    }
  },
  data() {

  }
}
</script>