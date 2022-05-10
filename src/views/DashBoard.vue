<template lang="">
    <div>
        <div class="relative flex min-h-screen">

            <!-- sidebar -->
            <div class="w-64 bg-white border-r dark:bg-gray-800 dark:border-gray-600 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out md:relative md:-translate-x-0" :class="{ 'relative -translate-x-0':showSideBar }">
                <a href="#" class="flex items-center px-3 gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                      <span class="text-2xl font-extrabold ">AIE</span>
                </a>
                <nav>
                    <a href="" class="flex items-center py-3 px-4 mx-y hover:bg-blue-500 rounded group transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                          </svg>
                          <span class="px-2 ">Dashboard</span>
                    </a>
                    <a href="" class="flex items-center py-3 px-4 mx-y hover:bg-blue-500 rounded group transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                          </svg>
                          <span class=" px-2 ">Document</span>
                    </a>
                    <a href="" class="flex items-center py-3 px-4 mx-y hover:bg-blue-500 rounded group transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                          <span class="px-2">Notification</span>
                    </a>
                    <a href="" class="flex items-center py-3 px-4 mx-y hover:bg-blue-500 rounded group transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span class="px-2 ">Profile</span>
                    </a>
                   <a href="" class="flex items-center py-3 px-4 mx-y hover:bg-blue-500 rounded group transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                      <span class="px-2 ">Rapports</span>
                   </a>
                   <a href="" class="flex bg-gray-700 mt-72 items-center py-3 px-4 mx-y hover:bg-blue-500 rounded group transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      <span class="text-white px-2 group-hover:text-gray-200">Se deconnecter</span>
                   </a>
                </nav>
            </div>
            <div class="flex-1">
                <!-- header -->
                <div class="bg-white shadow px-2 py-4">
                    <nav class="flex justify-between">
                        <button class="text-blue-200 d-btn" @click="showSideBar = !showSideBar">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                        <div class="flex items-center border-2 rounded-md px-2 w-72">
                            <input type="text" id="search" class=" outline-none h-11" placeholder="search...."/>
                            <button class="">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            </button>
                        </div>
                        <div class="flex gap-6">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            <span class="absolute top-6 right-20 h-3 w-3 text-sm text-gray-200 bg-green-400 rounded-full flex items-center justify-center"></span>
                            </button>
                            <div class="h-12 w-12 bg-gray-400 rounded-full"></div>
                        </div>
                    </nav>
                </div>
                <!-- content -->
                <div class="p-8">
                    <HomeDashboard />
                    <FileList />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import HomeDashboard from '../components/HomeDashboard.vue';
    import FileList from '../components/FileList.vue';
    import { ref } from "vue";
export default {
    components:{
        HomeDashboard,
        FileList,
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