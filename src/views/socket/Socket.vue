<template>
  <div> 
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <div class="overflow-y-auto item-list">
            <v-list-item v-for="(item,index) in allMsg" :key="index">
              <template>
                <v-list-item-content  :class="{'text-right': item.user}">
                  <v-list-item-title>{{item.msgg}}</v-list-item-title>
                  <v-list-item-subtitle><span>{{item.time}}</span>
</v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
          </div>
          <v-text-field
            v-model="text"
            label="Send message"
            required
            @keyup.enter="send"
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
      });
      this.text = "";
    },
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
    }
  }
}
</script>

<style scoped>
 .item-list {
   height: 30vh;
 }
</style>