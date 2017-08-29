<template>
  <div id="app">
    <div id="right" :class="open?'open_drawer':'hide_drawer'">
      <div class="header">
        <mu-appbar title="Application">
          <mu-icon-button icon="menu" slot="left" @click="toggle()"/>
          <mu-flat-button label="expand_more" slot="right"/>
          <mu-icon-button icon="expand_more" slot="right"/>
        </mu-appbar>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
      <!--<div class="footer">-->
        <!--Muse-UI ©2017 Created by Muse-UI-->
      <!--</div>-->
    </div>
    <div id="left">
      <mu-drawer :open="open" :docked="docked" @close="toggle()">
        <mu-appbar title="Func List"/>
        <mu-list @itemClick="docked ? '' : toggle()">
          <div v-for="item in menuItems">
            <router-link :to="{ name: item.router_name }">
              <mu-list-item :title="item.title">
              </mu-list-item>
            </router-link>
          </div>
          <!--<mu-list-item v-if="docked" @click.native="open = false" title="Close"/>-->
        </mu-list>
      </mu-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      open: true,
      docked: true,
      menuItems: [
        {
          title: 'Home',
          router_name: 'Hello'
        },
        {
          title: 'Student List',
          router_name: 'Students'
        },
        {
          title: 'Teacher List',
          router_name: 'Teachers'
        },
        {
          title: 'Fee Statistics',
          router_name: 'Statistics'
        },
        {
          title: 'Dashboard',
          router_name: 'Dashboard'
        }
      ]
    }
  },
  methods: {
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    }
  }
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/

  .open_drawer {
    margin-left: 256px;
  }
  .hide_drawer {
    margin-left: 0px;
  }
  .content {
    margin: 20px
  }
</style>
