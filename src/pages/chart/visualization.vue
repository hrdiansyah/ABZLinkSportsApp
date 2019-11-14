 <template>
              <chart :chart-data="datacollection"></chart>
    </template>
    <script>
    // import Chart from "./../Chart.js";
    import product from '../../api/Produk/index';
    import Chart from '../../api/chart/chart.js';
    export default {
      components: {
        Chart
      },
      data() {
        return {
          datacollection: null,
          images:[],
          dataJersey: [],
          dataSepatu: [],
          dataAccesories: [],
          data1: {}
        };
      },
      mounted() {
        this.fillData();
      },
      methods: {
        fillData() {

            let self = this
            product.getproduct(window).then(function (result) {

                let temp = []
                let temp2 = []
                let temp3=[]
                let temp4=[]
                let temp5=[]
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

                    } else if (result[i].product_kategory ===  'sepatubola') {
                        temp2.push(result[i])

                        if (!tempLabels.includes('sepatubola')) {
                            tempLabels.push(result[i].product_kategory)
                        }

                        if (!tempDataLabels.includes('sepatubola')) {
                            tempDataLabels.push(result[i].product_kategory)
                        }
                    
                    } else if (result[i].product_kategory ===  'bola') {
                        temp3.push(result[i])

                        if (!tempLabels.includes('bola')) {
                            tempLabels.push(result[i].product_kategory)
                        }

                        if (!tempDataLabels.includes('bola')) {
                            tempDataLabels.push(result[i].product_kategory)
                        }
                    } else if (result[i].product_kategory ===  'sepatubasket') {
                        temp4.push(result[i])

                        if (!tempLabels.includes('sepatubasket')) {
                            tempLabels.push(result[i].product_kategory)
                        }

                        if (!tempDataLabels.includes('sepatubasket')) {
                            tempDataLabels.push(result[i].product_kategory)
                        }
                    } else if (result[i].product_kategory ===  'raket') {
                        temp5.push(result[i])

                        if (!tempLabels.includes('raket')) {
                            tempLabels.push(result[i].product_kategory)
                        }

                        if (!tempDataLabels.includes('raket')) {
                            tempDataLabels.push(result[i].product_kategory)
                        }
                    }
                    
                }

                console.log(tempLabels)
                console.log(tempDataLabels)

                self.datacollection = {
                    labels:  tempLabels,
                    datasets: [{
                        barPercentage: 0.5,
                        label: tempDataLabels,
                        backgroundColor: ['#f87979', '#3d65bd','#ffa500','#ff00ff','#008000'],
                        data: [temp.length, temp2.length, temp3.length,temp4.length, temp5.length]
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
    }
}
</script>

<style>
</style>