<template>
  <div>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="Menu Item 1"/>
        <mu-list-item title="Menu Item 2"/>
        <mu-list-item title="Menu Item 3"/>
        <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
      </mu-list>
    </mu-drawer>
    <mu-appbar title="Title">
      <mu-icon-button icon="menu" slot="left" @click="toggle()"/>
      <mu-flat-button label="expand_more" slot="right"/>
      <mu-icon-button icon="expand_more" slot="right"/>
    </mu-appbar>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        open: false,
        docked: true
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
