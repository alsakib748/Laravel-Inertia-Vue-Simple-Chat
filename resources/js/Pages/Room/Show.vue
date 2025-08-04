<script setup>
import Footer from '@/Components/Chat/Footer.vue';
import Header from '@/Components/Chat/Header.vue';
import Messages from '@/Components/Chat/Messages.vue';
import Nav from '@/Components/Chat/Nav.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>


    <Head title="Messages" />
    <div>
        <!-- Page Container -->
        <div id="page-container" class="relative mx-auto h-screen min-w-[320px] bg-white lg:ms-80">
            <!-- Page Sidebar -->
            <Nav />
            <!-- Page Sidebar -->

            <!-- Page Header -->
            <Header />
            <!-- END Page Header -->

            <!-- Page Content -->
            <Messages />
            <!-- END Page Content -->

            <!-- Page Footer -->
            <Footer v-on:valid="console.log($event)" />
            <!-- END Page Footer -->

        </div>
        <!-- END Page Container -->
    </div>
</template>
