import { defineStore } from "pinia";
import axios from "axios";

export const useMessagesStore = defineStore("messages", {
    state: () => {
        return {
            page: 1,
            messages: [],
        };
    },
    actions: {
        fetchMessages(roomSlug, page = 1) {
            axios
                .get(`/rooms/${roomSlug}/messages?page=${page}`)
                .then((response) => {
                    (this.messages = [...this.messages, ...response.data.data]),
                        (this.page = response.data.meta.current_page);
                });
        },
    },
    getters: {
        allMessages(state) {
            return state.messages.flat();
        },
    },
});
