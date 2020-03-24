<template>
  <div>
    <v-form v-model="valid" @submit="onSubmit">
      <h1 class="display-4" style="font-size: 3em">Adopt me</h1>
      <v-row>
        <v-col cols="12" md="4">
          <v-img src="https://placedog.net/300/195?id=51" height="195" width="300"></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="address"
            label="Address"
            :rules="requiredRules"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
            v-model="province"
            label="Province/State"
            :rules="requiredRules"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
            v-model="postal"
            label="Postal Code"
            :rules="requiredRules"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn style="color: #4a4a4a" type="submit">Submit</v-btn>
      <!-- <v-row>
        <v-col cols="12" md="4">
          <v-select
            v-model="gender"
            :items="genders"
            :rules="requiredRules"
            label="Gender"
            required
          ></v-select>
        </v-col>
      </v-row> -->
    </v-form>
  </div>
</template>

<script>

  export default {
    props: ['img'],
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 30 || 'Name must be less than 30 characters',
      ],
      address: '',
      postal:'',
      province: '',
      phone: '',
      gender: null,
      genders: ['Female', 'Male', 'Prefer Not to Say'],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      requiredRules: [
        v => !!v || 'Required field'
      ]
    }),
    methods: {
      onSubmit() {
        let adoptForm = {
          firstname: this.firstname,
          lastname: this.lastname,
          address: this.address,
          postal: this.postal,
          province: this.province,
          phone: this.phone,
          email: this.email,
        }
        this.$emit('adopt-form-submitted', adoptForm)
        this.firstname = null,
        this.lastname = null,
        this.address = null,
        this.postal = null,
        this.province = null,
        this.phone = null,
        this.email = null
      }
    }
  }
</script>