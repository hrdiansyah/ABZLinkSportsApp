<template>
    <quasar-layout>
        <div slot="header"
        class="toolbar">
        <quasar-toolbar-title>
            ChartJS In quasar
        </quasar-toolbar-title>
        </div>
        <div class="layout-view">
        <commit-chart :data="data"></commit-chart>
        </div>
    </quasar-layout>
</template>
<script>

import CommitChart from './CommitChart'
export default {
    components:{
    CommitChart
    },

    data(){
        return {
            data: {
                labels:['A','B','C'],
                datasets: [{
                labels: ['one','two','three'],
                backgorundColor:['#027BE3','#26A69A','#9C27B0'],
                data: [10,20,30]
                }],
                option: {
                    height: 200
                }
            }
        }
    }
    
}
</script>