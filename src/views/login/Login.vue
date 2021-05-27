<template>
  <div class="login">
    <v-container class="box">
      <div class="login-item">
        <v-row justify='center'>
        <h1>DEMO</h1>
      </v-row>
      <v-row justify='center'>
        <v-col cols="4" class="pb-0">
          <v-text-field
            label="Account"
            :rules="rules"
            hide-details="auto"
          ></v-text-field>
          <v-text-field label="Password"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify='center'>
        <v-col cols="4">
          <v-btn
            block
            color="primary"
            @click="handleLogin"
          >
            Login
          </v-btn>
        </v-col>
        
        
      </v-row>
      </div>
      
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
    ],
    loginForm: {
      userName: '',
      passWord: '',
      token: ''
    }
  }),
  methods: {
    handleLogin() {
      const token = 'asdfghjkl;'
      let userName = this.loginForm.userName;
      let passWord = this.loginForm.passWord;
      if (userName !== '' && passWord !== '') {
        this.loginForm.token = token;
      } else {
        alert('帳號密碼不能為空')
      }
      Cookies.set('login', JSON.stringify(this.loginForm), { expires: 1 })
      console.log(this.loginForm)

      // cookie當中有token被設置才能改變路由
      if (Cookies.get('login') && this.loginForm.token) {
        this.$router.push({name: 'Dashboard'})
      }
    }
  }
}
</script>

<style scoped>
.container{
  position: relative;
}
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

</style>