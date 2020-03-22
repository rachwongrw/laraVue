
<template>
  <v-app id="inspire" >
    <v-card max-width="375" class="mx-auto" v-for="dog in dogs" v-bind:key="dog.id">
      <v-img :src="dog.img" dark >
        <v-row class="fill-height">
          <v-card-title class="white--text pl-12 pt-12">
            <div class="display-1 pl-12 pt-12">{{ dog.name}}</div>
          </v-card-title>
        </v-row>
      </v-img>
  
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">phone</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>(650) 555-1234</v-list-item-title>
            <v-list-item-subtitle>Mobile</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>
  
        <v-list-item >
          <v-list-item-icon>
            <v-icon color="indigo">email</v-icon>
          </v-list-item-icon>
            <v-list-item-content>
            Age: {{dog.age}}<br>
            {{dog.characteristics}}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-app>
</template>

<script>
  // import Vue from 'vue'
  // // import axios from 'axios'
  // // import { API_BASE_URL } from '../config'
  // var data = new Vue({
  //   el: "#dogs",
  //   product: 'Boots'
  //   // dog: {
  //   //   id: '1', name: "Clifford", characteristics: "Red, and big. Has a full heart. Loved by kids" 
  //   //   }
  // }) 

  export default {
    data() {
      return {
          isLoading: true,
          dogs: [
            { id: '0', name: "Clifford", age: 5, characteristics: "Red, and big. Has a full heart. Loved by kids", img: 'https://placedog.net/375/200?id=49' },
            { id: '1', name: "Peach", age: 7, characteristics: "Beautifule golden retriever. Only knows happiness", img: 'https://placedog.net/375/200?id=51' }
          ],
      }
    },

    created() {
      this.isLoading = false
    }
   
    // async created () {
    //   try {
    //     const response = await axios.get(API_BASE_URL +'/dogs')
    //     console.log('response - dogs', response)
    //     this.dogs = response
    //     this.isLoading = false
    //   } catch (e) {
    //     console.log('error',e)
    //   }
    // }
  }

</script>
