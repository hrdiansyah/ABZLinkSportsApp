<template>
    <div class="text-black">
        <q-list bordered class="rounded-borders " >
        <q-item-label header>
            <b class="text-black"> Daftar Barang </b> 
            <q-btn class="gt-xs bg-red" size="12px" flat dense round icon="add"/> 
        </q-item-label>
        
        <q-separator spaced class="q-mb-none"/>
        <q-separator spaced  class="q-mt-none"/>
        <q-item>
            <q-item-section avatar top>
            <q-icon name="fab fa-github" color="black" size="34px" />
            </q-item-section>

            <q-item-section top class="col gt-sm " style="max-width:35px">
            <q-item-label class="q-mt-sm text-weight-medium">No</q-item-label>
            </q-item-section>

            <q-item-section top class="col-2 gt-sm text-weight-medium">
            <q-item-label class="q-mt-sm">Barang</q-item-label>
            </q-item-section>

            <q-item-section top class="col-2 gt-sm gt-sm text-weight-medium">
            <q-item-label class="q-mt-sm">Harga</q-item-label>
            </q-item-section>

            <q-item-section top class="col gt-sm text-weight-medium">
            <q-item-label class="q-mt-sm">kuantity</q-item-label>
            </q-item-section>

            <q-item-section top class="col-2 gt-sm text-weight-medium ">
            <q-item-label class="q-mt-sm q-ml-md">Kategory</q-item-label>
            </q-item-section>

            <q-item-section top class="col-2 gt-sm text-weight-medium">
            <q-item-label class="q-mt-sm">Descripsi</q-item-label>
            </q-item-section>

            <q-item-section top class="col-2 gt-sm text-center text-weight-medium">
            <q-item-label class="q-mt-sm">Aksi</q-item-label>
            </q-item-section>

        </q-item>

        <q-separator spaced />
        <!-- Awal Data Barang -->
            <q-item>
                <q-item-section avatar top>
                <q-icon name="fab fa-github" color="black" size="34px" />
                </q-item-section>

                <q-item-section top class="col gt-sm " style="max-width:35px">
                <q-item-label class="q-mt-sm">1</q-item-label>
                </q-item-section>

                <q-item-section top class="col-2 gt-sm">
                <q-item-label class="q-mt-sm">Jersey ManUtd</q-item-label>
                </q-item-section>

                <q-item-section top class="col-2 gt-sm gt-sm ">
                <q-item-label class="q-mt-sm">Rp. 120000</q-item-label>
                </q-item-section>

                <q-item-section top class="col gt-sm">
                <q-item-label class="q-mt-sm">45</q-item-label>
                </q-item-section>

                <q-item-section top class="col-2 gt-sm">
                <q-item-label class="q-mt-sm q-ml-md">Jersey</q-item-label>
                </q-item-section>

                <q-item-section top class="col-2 gt-sm">
                    <q-item-label class="q-mt-sm">
                        Bahan Katun, Kualtas baik, produk Eropa
                        Bahan Katun, Kualtas baik, produk Eropa
                    </q-item-label>
                </q-item-section>

                <q-item-section top class="col-2 gt-sm">
                    <div class="text-grey-8 q-gutter-xs text-center">
                        <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
                        <q-btn class="gt-xs" size="12px" flat dense round icon="done" />
                    </div>
                </q-item-section>

            </q-item>

            <q-item>
                <q-item-section avatar top>
                <q-icon name="fab fa-github" color="black" size="34px" />
                </q-item-section>

                <q-item-section top class="col gt-sm " style="max-width:35px">
                <q-item-label class="q-mt-sm">2</q-item-label>
                </q-item-section>

                <q-item-section top class="col-2 gt-sm">
                <q-item-label class="q-mt-sm">Jersey Chalsea</q-item-label>
                </q-item-section>

                <q-item-section top class="col-2 gt-sm gt-sm ">
                <q-item-label class="q-mt-sm">Rp. 150000</q-item-label>
                </q-item-section>

                <q-item-section top class="col gt-sm">
                <q-item-label class="q-mt-sm">20</q-item-label>
                </q-item-section>

                <q-item-section top class="col-2 gt-sm">
                <q-item-label class="q-mt-sm q-ml-md">Jersey</q-item-label>
                </q-item-section>

                <q-item-section top class="col-2 gt-sm">
                    <q-item-label class="q-mt-sm">
                        Bahan Katun, Kualtas baik, produk Belanda
                    </q-item-label>
                </q-item-section>

                <q-item-section top class="col-2 gt-sm">
                    <div class="text-grey-8 q-gutter-xs text-center">
                        <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
                        <q-btn class="gt-xs" size="12px" flat dense round icon="done" />
                    </div>
                </q-item-section>

            </q-item>
        <!-- Awal Data Barang -->

            <!-- <div class="text-grey-8 q-gutter-xs">
                <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
                <q-btn class="gt-xs" size="12px" flat dense round icon="done" />
            </div> -->
        
        </q-list>
    </div>
</template>


