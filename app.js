const app = Vue.createApp({
    data(){
        return {
            showBooks:true,
            title: 'the last kingdom',
            author:'Kojo Anna',
            age:56,
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks= !this.showBooks
        }
    }
})
app.mount('#app')