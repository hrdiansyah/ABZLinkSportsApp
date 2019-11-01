<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
        
        <q-toolbar-title>
          ABZLinkSport
        </q-toolbar-title>

          <div class="q-pa-md">
        <div class="q-gutter-y-md column" style="width: 250px; max-width: 80%">
          <div class="col bg-white q-my-md q-mr-xs" style="max-width:1px"/>
      <!-- GAMBAR -->
      
          <q-toolbar class="bg-blue-2 text-white rounded-borders">
            <div class="row bg-red-10 text-white rounded" style="height:70px">
        <div class="col bg-blue" >
            <div class="col bg-red flex flex-center" style="max-width:80px">
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
            </div>
        </div>
        <div class="col bg-green">
          <q-input dense standout v-model="text" input-class="text-left" class="q-ml-md">
              <template v-slot:append>
                <q-icon v-if="text === ''" name="search" />
                <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
              </template>
            </q-input>
        </div>
        <div class="col bg-black">
          
        </div>
      </div>
            <q-space />
            
            
          </q-toolbar>
        </div>
      </div>
      
 
      </q-toolbar>
    </q-header>
   

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-blue-2"
    >
      <q-list>
        <q-item-label header><b> Menu </b></q-item-label>
        <q-separator/>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.quasar.dev">
          <q-item-section avatar>
            <q-icon name="local_hospital" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Health</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="phonelink_ring" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Customer service</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="add_box" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Add Item</q-item-label>
          </q-item-section>
        </q-item>
        <q-item-label header><b> Social Media </b></q-item-label>
        <q-separator/>
        <q-item clickable tag="a" target="_blank" href="https://twitter.quasar.dev">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@AbzLinkSports</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
            <q-item-label caption>AbzLinkSports</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      text: ''
    }
  }
}
</script>
