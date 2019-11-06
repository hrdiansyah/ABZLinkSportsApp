<template>
        <div class="layout-view">
        <commit-chart :data="data"></commit-chart>
        </div>
</template>
<script>

import CommitChart from '../pages/CommitChart'
export default {
    components:{
    CommitChart
    },

    data(){
        return {
            data: {
                labels:['A','B','C'],
                datasets: [{
                label: ['one','two','three'],
                backgroundColor:['#027BE3','#26A69A','#9C27B0'],
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