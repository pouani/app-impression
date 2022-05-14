<template lang="">
        <!-- content -->
    <div class="p-8">
        <HomeDashboard />
    </div>
</template>
<script>
    import HomeDashboard from "../components/HomeDashboard.vue";
   
    import { ref } from "vue";
export default {
    components:{
        HomeDashboard,
    },
    setup(){
        const showSideBar = ref(false);
        return{
            showSideBar,
        };
    }
}
</script>
<style scoped>
    @media screen and (min-width: 768px) {
        .d-btn{
            display: none;
        }
    }
    input{
        width:100%;
    }
</style>