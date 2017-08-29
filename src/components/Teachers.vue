<template>
  <div class=''>
    <commonTable :tableData="tableData"></commonTable>
  </div>
</template>
<script>
  import commonTable from './common/Table.vue'
  export default {
    name: '',
    components: {
      commonTable
    },
    data () {
      return {
//        headers: [],
        tableData: [
          {
            name: 'Eason Lau',
            level: 'Junior',
            graduated: 'ZHBIT',
            courseFee: '$0',
            courseList: ['test', 'test']
          },
          {
            name: 'YuYang Wu',
            level: 'Senior',
            graduated: 'Ukrain',
            courseFee: '$200',
            courseList: ['test', 'test']
          }
        ]
//        pageSizeOption: []
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
