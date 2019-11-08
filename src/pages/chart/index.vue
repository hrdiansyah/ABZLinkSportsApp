<template>
  <div class="q-pa-md q-gutter-md">

    <q-list bordered class="rounded-borders">
      <q-item-label header>ADMIN Transaksi</q-item-label>

      <q-item class="bg-black text-white">

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">No</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Nama</q-item-label>
        </q-item-section>

         <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Destinasi</q-item-label>
        </q-item-section>

         <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Jumlah</q-item-label>
        </q-item-section>

         <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Status</q-item-label>
        </q-item-section>

         <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Aksi</q-item-label>
        </q-item-section>

      </q-item>
      
      <q-separator spaced />
      
      <q-item>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">1</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Muhammad</q-item-label>
        </q-item-section>

         <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Borobudur</q-item-label>
        </q-item-section>

         <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">1</q-item-label>
        </q-item-section>

         <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">request</q-item-label>
        </q-item-section>

         <q-item-section top class="col-2 gt-sm">
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="done" />
            <q-btn size="12px" flat dense round icon="more_vert" />
          </div>
        </q-item-section>

      </q-item>
      
    </q-list>

    <div class="row">
  <div class="coloumn" style="padding-top: 30px; padding-left: 30px">
    <q-card id="size">
    <commit-chart :data="data1" ></commit-chart>
    </q-card>
    </div>
  <div class="coloumn" style="padding-top: 30px; padding-left: 30px;">
    <q-card id="size">
      <donut-chart :data="data2"></donut-chart>
      </q-card>
      </div> 

      <div class="coloumn" style="padding-top: 30px; padding-left: 30px">
    <q-card id="size">
      <pie-chart :data="data1"></pie-chart>
    </q-card>
</div>
</div>

  </div>
</template>

<style scoped>
#size{
    width: 300px;
    
}
</style>

<script>
import CommitChart from '../../../components/app/CommitChart'
import DonutChart from '../../../components/app/DonutChart'
import PieChart from '../../../components/app/PieChart'
export default {
  components:{
    CommitChart,
    DonutChart,
    PieChart

  },
  data(){
    return{
      data1: {
        labels: ['Rice Cooker', 'Kulkas', 'Pisau', 'KPP', 'Blender'],
        datasets: [{
          barPercentage: 0.5,
          label: ['Rice Cooker', 'Kulkas', 'Pisau', 'KPP', 'Blender'],
          backgroundColor: ['#f87979', '#3d65bd', '#3d7354', '#000000','#C10015'],
          data: [10,20,30,40,50]
        }],
        option: {
          height: 200
      }
    },
     data2: {
        labels: ['Pengunjung', 'Pembeli',],
        datasets: [{
          label: ['Pengunjung', 'Pembeli'],
          backgroundColor: ['#f87979', '#3d65bd'],
          data: [50,30]
        }],
        option: {
          height: 200
      }
    }
  }
}
}
</script>