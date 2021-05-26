<template>
  <div> 
    <v-container>
      <v-row justify='center'>
        <v-col>
          <div class="overflow-y-auto item-list">
            <v-list-item v-for="(item,index) in allMsg" :key="index">
              <template>
                <v-list-item-content  :class="{'text-right': item.user === nickName}">
                  <v-list-item-title>{{item.msgg}}</v-list-item-title>
                  <v-list-item-subtitle >
                    {{item.time}} | {{item.user}}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
          </div>
        </v-col>
      </v-row>
      <v-row justify='center'>
        <v-col>
          <v-text-field
            label="NickName"
            color="primary"
            v-model="nickName"
          >
            <template v-slot:append>
              <v-btn
                depressed 
                tile
                color="primary"
                class="ma-0"
                @click="sendNickName"
              >
              EDIT        
              </v-btn>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row justify='center'>
        <v-col>
          <v-text-field
            ref="msgTextBar"
            v-model="text"
            label="Send message"
            required
            @keyup.enter="send"
            :disabled="isDisabled"
          ></v-text-field>
        </v-col>
      </v-row>
        
        
        
      
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      text: '',
      nickName: '',
      isDisabled: true,
      allMsg: [],
      benched: 0,
      tests: [1,2,3,4,5,6,7,8,9],
    }
  },
  mounted() {
    // this.$socket.emit('connect',1)
  },
  methods: {
    send(){
        this.$socket.emit('send',{
          msg: this.text,
          user: this.nickName
      });
      this.text = "";
    },
    sendNickName() {
      console.log('sendnickname');
      this.$socket.emit('sendNickName', {
        name: this.nickName
      })
    }
  },
  computed: {
    items () {
      return Array.from({ length: this.length }, (k, v) => v + 1)
    },
    length () {
      return 7000
    },
  },
  sockets:{
    connect(){
      console.log("connected")
    },
    other(data){
      console.log("other",data)
      this.allMsg.push(data)
    },
    self(data){
      console.log("self",data)
      this.allMsg.push(data)
    },
    allMessage(data) {
      this.allMsg.push(...data)
      console.log(this.allMsg);
    },
    haveSameName() { //同名警告
      alert('有相同名稱');
      this.isDisabled = false
    },
    userCanSendMsg() {
      this.isDisabled = false
    }
  }
}
</script>

<style scoped>
 .item-list {
   height: 30vh;
 }
</style>