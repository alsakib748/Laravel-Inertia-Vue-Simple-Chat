<script setup>
import Footer from '@/Components/Chat/Footer.vue';
import Header from '@/Components/Chat/Header.vue';
import Messages from '@/Components/Chat/Messages.vue';
import Nav from '@/Components/Chat/Nav.vue';
import { useMessagesStore } from '@/Store/useMessagesStore';
import { Head } from '@inertiajs/vue3';

const props = defineProps({
    room: {
        type: Object,
        required: true,
    }
});

const messagesStore = useMessagesStore();

messagesStore.fetchMessages(props.room.slug);

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
            <Messages :room="room" />
            <!-- END Page Content -->

            <!-- Page Footer -->
            <Footer v-on:valid="console.log($event)" />
            <!-- END Page Footer -->

        </div>
        <!-- END Page Container -->
    </div>
</template>
