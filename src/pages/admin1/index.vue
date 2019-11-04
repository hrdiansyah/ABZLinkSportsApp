<template>
  <div class="q-pa-md">
    <q-table
      :data="admins"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      columns: [
        {
          name: 'Nama',
          required: true,
          label: 'Nama',
          align: 'left',
          field: row => row.Nama,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'JenisKelamin',
          required: true,
          label: 'Jenis Kelamin',
          align: 'left',
          field: row => row.JenisKelamin,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'TanggalLahir',
          required: true,
          label: 'Tanggal Lahir',
          align: 'left',
          field: row => row.TanggalLahir,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'NoTelepon',
          required: true,
          label: 'No Telepon',
          align: 'left',
          field: row => row.NoTelepon,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'Email',
          required: true,
          label: 'Email',
          align: 'left',
          field: row => row.Email,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        }
         ],
      admins: [
        {
          nama : '',
          email : ''
        }
      ]
    }
  },
  async mounted(){
    const response = await axios.get('http://localhost:3000/api/Admins')
    this.admins=response.data
  }
}
</script>