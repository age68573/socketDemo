<template>
  <div>
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
  </div>
  
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      date: this.$getNowFormatDate(),
    }
  },
  methods: {
    itemCheck(index) {
      this.$emit('itemCheck', index)
    },
    deleteTodo(index) {
      this.$emit('deleteTodo', index)
    }
  }
}
</script>

<style scoped>

</style>