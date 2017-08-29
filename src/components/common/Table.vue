<template>
  <div id="commonTable">
     <mu-table :fixedFooter="fixedFooter" :fixedHeader="fixedHeader" :height="defaultHeight"
               @rowClick="handleRowClick" @rowSelection="handleRowSelection">
       <!--headers-->
       <mu-thead slot="header">
         <mu-tr>
           <mu-th v-for="head, index in defaultHeaders" tooltip="head" :key="index">{{ head }}</mu-th>
         </mu-tr>
       </mu-thead>
       <!--// table body-->
       <mu-tbody>
         <mu-tr v-for="item, index in pageTableData" :key="index" :selected="item.selected">
           <mu-td v-for="head in defaultHeaders" :key="head+'_'+item">
             {{ item[head] }}
           </mu-td>
         </mu-tr>
       </mu-tbody>
     </mu-table>
    <div style="padding-left: 40%">
    <mu-pagination :total="total" :showSizeChanger="showSizeChanger" :current="current"
                   :pageSizeOption="defaultPageSizeOption" @pageSizeChange="handlePageSizeChange" @pageChange="handlePageChange">
    </mu-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'commonTable',
    props: ['tableData', 'headers', 'height', 'pageSizeOption'],
    data () {
      return {
        total: this.tableData ? this.tableData.length : 0,
        current: 1,
        newIndex: 10,
        showSizeChanger: true,
        defaultPageSizeOption:
          this.pageSizeOption ? this.pageSizeOption : [10, 20, 30, 40],
        defaultHeaders: this.headers ? this.headers : this.tableData === [] ? [] : Object.keys(this.tableData[0]),
        fixedHeader: false,
        fixedFooter: true,
        selectable: true,
        multiSelectable: true,
        enableSelectAll: false,
        showCheckbox: true,
        defaultHeight: this.height ? this.height : 'auto'
      }
    },
    methods: {
      handleRowClick: function (index, tr) {
        console.log(index, tr)
      },
      handleRowSelection: function (selectedRowsIndex) {
        console.log(selectedRowsIndex)
      },
      handlePageSizeChange: function (newIndex) {
        console.log('page size change event', newIndex)
        this.newIndex = newIndex
      },
      handlePageChange: function (current) {
        console.log(current)
        this.current = current
      }
    },
    computed: {
      pageTableData: {
        // getter
        get: function () {
          if (this.tableData || this.tableData.length > 0) {
            let page = this.total / this.newIndex
            console.log(page)
            if (page === 0) {
              return this.tableData
            } else {
              return this.tableData.slice((this.current - 1) * this.newIndex, this.current * this.newIndex)
            }
          }
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
