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
    ]
  })
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