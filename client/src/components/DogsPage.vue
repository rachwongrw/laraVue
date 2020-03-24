
<template>
  <div>
    <v-row>
      <v-col v-for="dog in dogs" :key="dog.id" sm="3" cols="12">
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
              <router-link :to="{ path: '/dogdetails', params: { id: dog.id }}">Learn more</router-link>
            </v-btn>
            <v-btn text>
              <router-link to='/adopt'>Adopt</router-link>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
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
            { id: 0, name: "Clifford", age: 5, characteristics: "A great explorer companion with big heart. Loved by kids", img: 'https://placedog.net/300/195?id=49' },
            { id: 1, name: "Peach", age: 7, characteristics: "Beautiful golden retriever. Only knows happiness", img: 'https://placedog.net/300/195?id=51' },
            { id: 2, name: "Chester", age: 0.8, characteristics: "Young and fiery, still learning to potty train. Going through teething period", img: 'https://placedog.net/300/195?id=15' },
            { id: 3, name: "Luna", age: 3, characteristics: "Loves chasing sheep. She's a natural herder and great on hikes", img: 'https://placedog.net/300/195?id=37' },
            { id: 4, name: "Snow", age: 3, characteristics: "She's gentle around kids and loves to sing (howl) along with them", img: 'https://placedog.net/300/195?id=95' },
            { id: 5, name: "Baxter", age: 4, characteristics: "Loves exploring in nature. Shy at first but opens up", img: 'https://placedog.net/300/195?id=100' },
            { id: 6, name: "Patti", age: 5, characteristics: "Enjoys a good snuggle. Short walks are ideal for her", img: 'https://placedog.net/300/195?id=124' },
            { id: 7, name: "Rex", age: 7, characteristics: "Ex-ski patrol dog. Still enjoys adventures in the wild", img: 'https://placedog.net/300/195?id=130' }
          ],
      }
    },
    created() {
      this.isLoading = false
    },
   
    methods: {
      
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
