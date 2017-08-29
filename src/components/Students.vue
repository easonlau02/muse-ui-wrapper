<template>
  <div class=''>
    <commonTable :tableData="tableData" :pageSizeOption="pageSizeOption"></commonTable>
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
        pageSizeOption: ['5', '10', '20', '50'],
        headers: ['name', 'age', 'address'],
        tableData: [
          {
            name: 'YaQi Zheng',
            age: '5',
            address: 'XiangZhou',
            catogory: 'Piano Room'
          },
          {
            name: 'ZhiYin Zheng',
            age: '6',
            address: 'Tangjiawan',
            catogory: 'Piano Room'
          },
          {
            name: 'JingYi Zhou',
            age: '5',
            address: 'Nan Ping',
            catogory: 'In Home'
          },
          {
            name: 'HaoCheng Zhan',
            age: '8',
            address: 'XiangZhou',
            catogory: 'In Home'
          },
          {
            name: 'Eason Lau',
            age: '13',
            address: 'Tangjiawan',
            catogory: 'In Home'
          },
          {
            name: 'Eason Lau',
            age: '11',
            address: 'XiangZhou',
            catogory: 'In Home'
          },
          {
            name: 'Eason Lau',
            age: '12',
            address: 'XiangZhou',
            catogory: 'XingHai'
          },
          {
            name: 'Eason Lau',
            age: '2',
            address: 'Tangjiawan',
            catogory: 'In Home'
          },
          {
            name: 'Eason Lau',
            age: '8',
            address: 'Tangjiawan',
            catogory: 'Piano Room'
          }
        ]
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
