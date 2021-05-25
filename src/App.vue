<template>
  <div id="app">
    <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          color="primary"
        > 
          <v-list-item v-for="item in vList" :key="item.index" @click="itemClick" :to="item.title">
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Demo</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <keep-alive>
        <router-view/>
      </keep-alive>
      
    </v-main>
  </v-app>
  </div>
  
</template>

<script>
import Home from 'views/Home'
export default {
  name: 'App',
  components: {
    Home
  },
  data: () => ({
    //
    drawer: false,
    group: null,
    vList: [
      {title: 'home', icon: 'mdi-home'},
      {title: 'about', icon: 'mdi-home'},
      {title: 'todolist', icon: 'mdi-home'},
      {title: 'socket', icon: 'mdi-home'}
    ]
  }),
  methods: {
    itemClick() {
      console.log(this.$route);
    }
  }
};
</script>
