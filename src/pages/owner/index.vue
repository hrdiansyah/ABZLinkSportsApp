<template>
    <div>
        <table>
            <tr v-for="tmbs in tmb" :key="tmbs.id">
                <td>{{tmbs.label}}</td>
            </tr>
        </table>
    </div>
</template>
