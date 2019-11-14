<template>
<div class="q-pa-md">
    <div class="row">
        <div class="col" style="align : center">
            <!-- Qlist awal -->
            <q-list bordered class="rounded-borders q-mx-auto bg-secondary" style="max-width: 1200px">
                <q-item-label header class="bg-secondary">
                    <div class="float-right">
                        <q-btn class="float-left" color="red" icon="search" size="sm">
                        <q-tooltip content-class="bg-red" anchor="center right" content-style="font-size: 16px" :offset="[10, 10]">
                           SEARCH
                        </q-tooltip>
                    </q-btn>
                    <q-input class=" src bg-white"
                    filled
                    lazy-rules
                    />
                    </div>
                </q-item-label>
                
                <q-item class="bg-teal">
                    <q-item-section avatar top class="col-0 gt-xm flex flex-center" style="align :left">
                        <q-item-label class="q-mt-sm">No</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center" style="align : center">
                        <q-item-label class="q-mt-sm">Nama Barang</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-1 gt-sm flex flex-center" style="align : center">
                        <q-item-label class="q-mt-sm">Nama Pelanggan</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center" style="align : center">
                        <q-item-label class="q-mt-sm">Alamat</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center" style="align : center">
                        <q-item-label class="q-mt-sm">Total</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                    <q-item-label class="q-mt-sm flex flex-center">Status</q-item-label>
                    </q-item-section>

                     <q-item-section top class="col-2 gt-xm flex flex-center">
                    <q-item-label class="q-mt-sm flex flex-center">Status</q-item-label>
                    </q-item-section>

                     <q-item-section top class="col-2 gt-xm flex flex-center">
                    <q-item-label class="q-mt-sm flex flex-center">Status</q-item-label>
                    </q-item-section>
                    
                </q-item>
                <q-item  v-for="(pemesanan, index ) in product" :key="pemesanan.id" class="bg-grey-3" line="1">
                    <q-item-section avatar top class="col-0 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">{{pemesanan.Id_customer}}</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">{{pemesanan.Id_product}}</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-1 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">{{pemesanan.Jumlah}}</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">{{pemesanan.Alamat}}</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                        <q-img style="width:20px;"
                          :src="pemesanan.imgurl"
                          />
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">{{pemesanan.Total}}</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-1 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">{{pemesanan.status}}</q-item-label>
                    </q-item-section>

                    <q-item-section  top class="col-2 gt-xm flex flex-center">
                        <q-btn class="gt-xs" size="12px" flat label="Action" @click="edit(pemesanan)"/>
                    </q-item-section>
                </q-item>
            </q-list>
                  <q-dialog v-model="dialog" persistent>
        <q-card>
            <q-card-section>
              <div id="form" class="q-mx-auto" style="width: 600px">
                <q-form class="q-gutter-md">
                    <q-input filled v-model="form.nama_barang" label="Nama Barang *" hint="Nama Barang" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="form.tanggal" label="tanggal pesan *" hint="Tanggal pesan" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="form.nama_pemesan" label="Nama Pemesan *" hint="Nama Pemesan" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="form.alamat_pemesan" label="alamat *" hint="alamat tujuan" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="form.telp_pemesan" label="No.Telepon *" hint="Nomor telepon" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="form.pengiriman" label="Kurir Pengiriman *" hint="Dikirim melalui" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="form.catatan" label="Catatan *" hint="Catatan" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    <!-- <q-input filled v-model="form.status" label="Status *" hint="Status pesanan" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" /> -->
                    <q-input filled v-model="form.createAt" label="tanggal dibuat *" hint="Name and surname" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    
                    <!-- Button awal -->
                    <div>
                        <q-btn label="Approve" type="button" color="blue" v-close-popup @click="update(form)" />
                        <q-btn flat label="Reject" color="black" v-close-popup @click="reject()" />
                        <q-btn flat label="Cancel" color="black" v-close-popup @click="cancel()" />

                    </div>
                    <!-- Button akhir -->
                </q-form>
                  
              </div>
          </q-card-section>
        </q-card>
      </q-dialog>  
        </div>
    </div>
</div>

</template>
<style scoped>
    .src{
        width: 200px;
        height: 26px;
          }
</style>

<script>
import cart from '../../api/cart/index.js'
import payments from '../../api/transaksi/index.js'
import products from '../../api/Produk/index.js'
export default {
    data() {
        return {
            cart: [{}],
            pemesanan_fnl:[{}],
            pay: [
                {

                }
            ],
            product: [{

            }],
            dialog: false,
            form:{
                nama_barang:'',
                tanggal:'',
                nama_pemesan:'',
                alamat_pemesan:'',
                telp_pemesan:'',
                pengiriman:'',
                catatan:'',
                status:'',
                id:''            
            },
            columns: [
                {
                name: 'nama_barang',
                required: true,
                label: 'Nama Barang',
                align: 'left',
                field:row => row.nama_barang,
                format: val => `${val}`,
                sortable: true,
                classes:'bg-grey-2allipsis',
                style:'max-width:100px'
                },
                {
                name: 'tanggal',
                required: true,
                label: 'Tanggal',
                align: 'left',
                field:row => row.tanggal,
                format: val => `${val}`,
                sortable: true,
                classes:'bg-grey-2allipsis',
                style:'max-width:100px'
                },
                {
                name: 'nama_pemesan',
                required: true,
                label: 'Nama Pemesan',
                align: 'left',
                field:row => row.nama_pemesan,
                format: val => `${val}`,
                sortable: true,
                classes:'bg-grey-2allipsis',
                style:'max-width:100px'
                },
                {
                name: 'alamat_pemesan',
                required: true,
                label: 'Alamat',
                align: 'left',
                field:row => row.alamat_pemesan,
                format: val => `${val}`,
                sortable: true,
                classes:'bg-grey-2allipsis',
                style:'max-width:100px'
                },
                {
                name: 'telp_pemesan',
                required: true,
                label: 'Telepon',
                align: 'left',
                field:row => row.telp_pemesan,
                format: val => `${val}`,
                sortable: true,
                classes:'bg-grey-2allipsis',
                style:'max-width:100px'
                },
                {
                name: 'pengiriman',
                required: true,
                label: 'Pengiriman',
                align: 'left',
                field:row => row.pengiriman,
                format: val => `${val}`,
                sortable: true,
                classes:'bg-grey-2allipsis',
                style:'max-width:100px'
                },
                {
                name: 'catatan',
                required: true,
                label: 'Catatan',
                align: 'left',
                field:row => row.catatan,
                format: val => `${val}`,
                sortable: true,
                classes:'bg-grey-2allipsis',
                style:'max-width:100px'
                },
                {
                name: 'status',
                required: true,
                label: 'Status',
                align: 'left',
                field:row => row.status,
                format: val => `${val}`,
                sortable: true,
                classes:'bg-grey-2allipsis',
                style:'max-width:100px'
                },
                {
                name: 'crateAt',
                required: true,
                label: 'Creat At',
                align: 'left',
                field:row => row.creatAt,
                format: val => `${val}`,
                sortable: true,
                classes:'bg-grey-2allipsis',
                style:'max-width:100px'
                }
            ],
        }
    },
    
    // Get data dari Api

    beforeCreate() {
        let self=this;
        payments.getpayments(window )
                .then(function (result) 
                 {
                   self.product=result
                   console.log(self.product)
                })
            },
                                
    methods : {
        update() {
            const self = this
            approval.approvalFinal(window, self.form.nama_barang, self.form.tanggal,
                self.form.nama_pemesan, self.form.alamat_pemesan, self.form.telp_pemesan, self.form.pengiriman,
                self.form.catatan, true, self.form.createAt, self.form.id)
            .then(function (result) {
                self.$router.go('/dashboard/pemesanan')
                console.log(result)
            })
            .catch(function (err) {
                console.log(err);
            });
            pemesanaan
            .putPemesanan(window, self.form.nama_barang, self.form.tanggal,
            self.form.nama_pemesan, self.form.alamat_pemesan, self.form.telp_pemesan, self.form.pengiriman,
            self.form.catatan, 'approve', self.form.createAt, self.form.id)
            .then(function (result) {
                self.$router.go('/dashboard/pemesanan')
                console.log(result)
            })
            .catch(function (err) {
                console.log(err);
            });
        },
        reject() {
            const self = this
            approval.approvalFinal(window, self.form.nama_barang, self.form.tanggal,
            self.form.nama_pemesan, self.form.alamat_pemesan, self.form.telp_pemesan, self.form.pengiriman,
            self.form.catatan, false, self.form.createAt, self.form.id)
            .then(function (result) {
                self.$router.go('/dashboard/pemesanan')
                console.log(result)
            })
            .catch(function (err) {
                console.log(err);
            });
            pemesanaan.putPemesanan(window, self.form.nama_barang, self.form.tanggal,
            self.form.nama_pemesan, self.form.alamat_pemesan, self.form.telp_pemesan, self.form.pengiriman,
            self.form.catatan, 'reject', self.form.createAt, self.form.id)
            .then(function (result) {
                self.$router.go('/dashboard/pemesanan')
                console.log(result)
            })
            .catch(function (err) {
                console.log(err);
            });
        },
    edit(pemesanan) {
      try {
        this.dialog = true
        this.updateSubmit = true
        this.form.id = pemesanan.id
        this.form.nama_barang = pemesanan.nama_barang
        this.form.tanggal = pemesanan.tanggal
        this.form.nama_pemesan = pemesanan.nama_pemesan
        this.form.alamat_pemesan = pemesanan.alamat_pemesan
        this.form.telp_pemesan = pemesanan.telp_pemesan
        this.form.pengiriman = pemesanan.pengiriman
        this.form.catatan = pemesanan.catatan
        this.form.status = pemesanan.status
        this.form.createAt = pemesanan.createAt
      }
      catch (error) 
        {
          console.log(error.message)
        }
            
    },
    cancel() {
      {
        this.dialog = false
      }
    },
    }
}
</script>