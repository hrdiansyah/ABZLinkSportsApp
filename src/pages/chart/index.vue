<template>
 <div>
     
     
     
     {{dataJersey.length}}

     <q-card id="size">
        <q-card-section>
        <pie-chart :data="getData"></pie-chart>
        </q-card-section>

    </q-card>


 </div>
</template>

<style scoped>
#size{
    width: 300px;
    
}
</style>

<script>
import CommitChart from '../../api/chart/CommitChart';
import DonutChart from '../../api/chart/DonutChart';
import PieChart from '../../api/chart/PieChart';
import containeer from '../../api/get/index';
import {downloadImage} from '../../api/upload/index';
import product from '../../api/Produk/index';
import ApexCharts from 'apexcharts';
import VueApexCharts from 'vue-apexcharts';
export default {
  components:{
    CommitChart,
    DonutChart,
    PieChart,
  },

  
   
  data(){
    return{
        images:[],
        dataJersey: [],
        dataSepatu: [],
        dataAccesories: [],
        data1: {
        }

        
    }
  },

  computed: {


      getData() {
          let self = this
    product.getproduct(window).then(function (result) {

            let temp = []
            let temp2 = []
            let tempLabels = []
            let tempDataLabels = []
            
            for(let i = 0; i < result.length; i++) {
                if (result[i].product_kategory ===  'jersey') {
                    temp.push(result[i])

                    if (!tempLabels.includes('jersey')) {
                        tempLabels.push(result[i].product_kategory)
                    }

                    if (!tempDataLabels.includes('jersey')) {
                    tempDataLabels.push(result[i].product_kategory)
                    }

                } else if (result[i].product_kategory ===  'Sepatu') {
                    temp2.push(result[i])

                     if (tempLabels.includes('Sepatu')) {
                        tempLabels.push(result[i].product_kategory)
                    }

                    if (!tempDataLabels.includes('Sepatu')) {
                        tempDataLabels.push(result[i].product_kategory)
                    }
                
                }
            }

            self.data1 = {
                labels:  tempLabels,
                datasets: [{
                    barPercentage: 0.5,
                    label: tempDataLabels,
                    backgroundColor: ['#f87979', '#3d65bd'],
                    data: [10, 20]
                    }],
                    option: {
                        height: 200
                    }
            }
        })
        .catch(function (err) {
            console.log(err);
        })
     }

  },

  beforeCreate() {


    // let self = this
    // product.getproduct(window).then(function (result) {

    //         let temp = []
    //         let temp2 = []
            
    //         for(let i = 0; i < result.length; i++) {
    //             if (result[i].product_kategory ===  'jersey') {
    //                 temp.push(result[i])

    //                 if (!self.data1.labels.includes('jersey')) {
    //                     self.data1.labels.push(result[i].product_kategory)
    //                 }

    //                 if (!self.data1.datasets[0].label.includes('jersey')) {
    //                 self.data1.datasets[0].label.push(result[i].product_kategory)
    //                 }

    //             } else if (result[i].product_kategory ===  'Sepatu') {
    //                 temp2.push(result[i])

    //                  if (!self.data1.labels.includes('Sepatu')) {
    //                     self.data1.labels.push(result[i].product_kategory)
    //                 }

    //                 if (!self.data1.datasets[0].label.includes('Sepatu')) {
    //                 self.data1.datasets[0].label.push(result[i].product_kategory)
    //                 }
                
    //             }
    //         }
    //         self.data1.datasets[0].data.push(temp.length)
    //         self.data1.datasets[0].data.push(temp2.length)
    //         console.log(self.data1.datasets[0].data)
    //     })
    //     .catch(function (err) {
    //         console.log(err);
    //     })
     }
}
</script>