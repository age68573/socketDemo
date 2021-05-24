<template>
  <div>
    <v-card
    flat
    width="500px"
    class="mx-auto"
  >
    <v-list
      subheader
      two-line
      flat
    >
      <v-subheader>To Do List</v-subheader>
   
      <v-list-item-group
        multiple
      >
      <v-list-item @click="checkAllBtn()">
        <template>
        <v-list-item-action>
          <v-checkbox
            :input-value="checkAll"
            color="primary"
          ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>全選</v-list-item-title>
          <v-list-item-subtitle>Select All</v-list-item-subtitle>
        </v-list-item-content>
        <v-btn @click.stop="deleteAll()"
          elevation="2"
          color="error"
        >DELETE All</v-btn>
      </template>
        
      </v-list-item>
      
    <v-list-item v-for="(item,index) in list" :key="index" @click="itemCheck(index)">
      <template>
        <v-list-item-action>
          <v-checkbox
            :input-value="item.checked"
            color="primary"
          ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{item.title}}</v-list-item-title>
          <v-list-item-subtitle>{{date}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-btn @click.stop="deleteTodo(index)"
          elevation="2"
          color="error"
        >DELETE</v-btn>
      </template>
    </v-list-item>
    </v-list-item-group>
    </v-list>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="todo"
            label="To Do"
            required
            @keyup.enter="pushTodo"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    </v-card>

  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: null,
      checkAll: false,
      date: this.$getNowFormatDate(),
      list: [
        {
          title: '123',
          checked: true
        },
        {
          title: '456',
          checked: false
        },
        {
          title: '789',
          checked: true
        }
      ],
    }
  },
  computed: {
    isChecked() {
      return this.list.every(item => {return item.checked == true})
    }
  },
  methods: {
    itemCheck(index) {
      this.list[index].checked = !this.list[index].checked
      if (this.isChecked) {
        this.checkAll = true
      } else {
        this.checkAll = false
      }
    },
    pushTodo() {
      if (this.isChecked) {
        this.checkAll = false
      }
      this.list.push({
        title: this.todo,
        checked: false
      })
      this.todo = ''
    },
    deleteTodo(index) {
      this.list.splice(index, 1);
    },
    checkAllBtn() {
      
      if (this.list.length == 0) {
        alert('請新增項目')
      } else {
        this.checkAll = !this.checkAll
        if (this.isChecked) {
          this.list.filter(item => item.checked = false)
        } else {
          this.list.filter(item => item.checked = true)
        }
      }
      
    },
    deleteAll() {
      this.list = []
      this.checkAll = false
    }
  }
}
</script>

<style scoped>

</style>