<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GNL__toolbar">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        />

        <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
          <img src="statics/abzlogo.png" style="height: 70px; width: 90px">
          <span class="q-ml-sm">LinkSports</span>
        </q-toolbar-title>

        <q-space />

        <q-input class="GNL__toolbar-input" outlined dense v-model="search" color="bg-grey-7 shadow-1" placeholder="Search by product name">
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
          </template>
          <template v-slot:append>
          </template>
        </q-input>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn v-if="$q.screen.gt.sm" round dense flat color="text-grey-7" icon="apps">
            <q-tooltip>Google Apps</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-white"
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
            <q-item 
                class="GNL__drawer-item" 
                v-ripple v-for="link in links1" 
                :key="link.text" 
                clickable tag="a" :to= "link.route"
            >
            <q-item-section avatar>
              <q-icon :name="link.icon" />
                </q-item-section>
                  <q-item-section>
                    <q-item-label>{{ link.text }}</q-item-label>
                  </q-item-section>
            </q-item>

            <q-separator inset class="q-my-sm" />

            <q-item 
                class="GNL__drawer-item" 
                v-ripple v-for="link in links2" 
                :key="link.text" 
                clickable :to= "link.route"
            >
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
            </q-item>

            <q-separator inset class="q-my-sm" />
            <div class="q-mt-md">
              <div class="flex flex-center q-gutter-xs">
                <a class="GNL__drawer-footer-link" href="javascript:void(0)" aria-label="Privacy">Privacy</a>
                <span> · </span>
                <a class="GNL__drawer-footer-link" href="javascript:void(0)" aria-label="Terms">Terms</a>
                <span> · </span>
                <a class="GNL__drawer-footer-link" href="javascript:void(0)" aria-label="About">About AbzLinkSports</a>
              </div>
            </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'GoogleNewsLayout',
  data () {
    return {
      leftDrawerOpen: false,
      search: '',
      showAdvanced: false,
      showDateOptions: false,
      exactPhrase: '',
      hasWords: '',
      excludeWords: '',
      byWebsite: '',
      byDate: 'Any time',
      links1: [
        { icon: 'web', text: 'Dashboard ', route: "/admin"  },
        { icon: 'poll', text: 'Inventory', route: "/admin/barang"  },
        { icon: 'assignment', text: 'Sales', route: "/admin/penjualan" },
        { icon: 'confirmation_number', text: 'Confirmation', route: "/admin/konfirmasi" }
      ],
      links2: [
        { icon: 'add_shopping_cart', text: 'Upload Product', route: "/upload" },
        { icon: 'attach_money', text: 'Discount', route: "/admin/discount" },
        { icon: 'directions_car', text: 'Courier' },
        { icon: 'person_add', text: 'Add admin' },
      ]
    }
  },
  methods: {
    onClear () {
      this.exactPhrase = ''
      this.hasWords = ''
      this.excludeWords = ''
      this.byWebsite = ''
      this.byDate = 'Any time'
    },
    changeDate (option) {
      this.byDate = option
      this.showDateOptions = false
    }
  }
}
</script>

<style lang="sass">
.GNL
  &__toolbar
    height: 64px
  &__toolbar-input
    width: 55%
  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px
    .q-item__section--avatar
      .q-icon
        color: #5f6368
    .q-item__label
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
</style>