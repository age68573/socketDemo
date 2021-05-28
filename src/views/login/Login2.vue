<template>
  <div>
    <v-container class="box">
      <v-card
        class="mx-auto my-16 pa-6"
        max-width="374"
      >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        
        <v-fab-transition >
          <v-btn
            color="primary"
            fab
            dark
            x-large
            absolute
            top
            right

          >
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </v-fab-transition>
        <v-card-title>
          <h3>User Log in</h3>
        </v-card-title>

        <v-card-text class="justify-center">

          <v-text-field
          label="Account"
          :rules="rules"
          hide-details="auto"
          v-model="userName"
        ></v-text-field>
        
        <v-text-field label="Password" v-model="passWord"></v-text-field>
        <div class="caption">
            Forget
            <a
              href="#"
              class="text-decoration-none"
            >Password?</a>
          </div>
        </v-card-text>
        <v-card-actions class="pa-4">

          <v-btn
            color="primary"
            block
            @click="tryy"
          >
            LOGIN
          </v-btn>

        </v-card-actions>
        
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import {loginApi} from 'network/login'
export default {
  name: 'login',
  data: () => ({
    rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
    ],
    loginForm: {
      userName: '',
      passWord: '',
      token: ''
    },
    userName: '',
    passWord: '',
  }),
  methods: {
    tryy () {
      console.log('in');
      this.$store.state.loginForm.account = this.userName;
      this.$store.state.loginForm.password = this.passWord;
      if (this.$store.state.loginForm.account !== '' && this.$store.state.loginForm.password !== '') {
        loginApi(this.$store.state.loginForm.account, this.$store.state.loginForm.password).then(res => {
        console.log(res);
        this.$store.commit('getToken', res.token)
        console.log(this.$store.state);
        if (Cookies.get('login') && this.$store.state.token) {
          this.$router.push({path: '/home'})
        }
      })
      } else {
        alert('帳號密碼不能為空')
      }
      
    },
  }
}
</script>

<style scoped>
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>