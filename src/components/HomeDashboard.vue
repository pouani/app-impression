<template lang="">
    <div>
        <h2 class="text-2xl">Vos data recentes</h2>
        <div class="flex justify-between items-center my-4">
            <div class="d-content p-2 rounded-md">
                <div class="h-24 px-4 bg-white rounded-md flex items-center justify-center">20 documents ajouter</div>
            </div>
            <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                Nouveau document
            </button>
        </div>
        <div class="d-content my-16 p-5 rounded-md">
            <table class="bg-white rounded-md">
                <thead>
                    <tr>
                        <th class="border-collapse">Intitule</th>
                        <th class="">Type document</th>
                        <th>Taille document</th>
                        <th>Nombre de photocopie</th>
                        <th>Date ajout</th>
                        <th>Etat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="id in 5" :key="id">
                        <td>Math</td>
                        <td class="">Control continue</td>
                        <td>220ko</td>
                        <td>60</td>
                        <td>29/04/2022</td>
                        <td class="text-green-300">Imprimee</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
    table{
        width: 100%;
    }
    th, td{
        padding: 12px 6px;
        text-align: left;
    }
    /* .d-card{
        background: #FFFFFF;
        box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
    } */
    .d-content{
        background: rgba(242, 243, 244, 0.7);
        backdrop-filter: blur(40px);
    }
</style>