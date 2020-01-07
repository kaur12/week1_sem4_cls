import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

const myVM = (() => {
    let vue_vm = new Vue({
        data: {
            message: "HEllo From Vue!",

            collection: [
                { name: "Trevor", role: "Prof" },
                { name: "Joe", role: "Awesome Prof" },
                { name: "Justin", role: "Meanie Coordinator" }
            ]
        },

        methods: {
            logClicked() {
                console.log('clicked on an element!');
            }
        }
    }).$mount("#app");
})();