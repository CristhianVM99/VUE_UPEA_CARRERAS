<script setup>
import { useInstitucionStore } from '../store/store'
const store  = useInstitucionStore()
</script>
<template>
    <div>
        <h1>{{store.nombre}}</h1>
    </div>
</template>
<script>
export default {
    name: 'prueba',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>