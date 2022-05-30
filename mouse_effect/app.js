const app = Vue.createApp({
    data(){
        return {
            url:'http://www.amazon.com',
            showBooks:true,
            books: [
                {title:'JavaScript for beginners', author:'Andrew Mead', img:'assets/1.jpg', isFav:true},
                {title:'Django For Beginners', author: 'Williams Mills', img: 'assets/2.jpg', isFav:false},
                {title:'Java for Beginners', author: 'MIV Professionals', img:'assets/3.jpg', isFav:true},
                {title:'Python crush course', author: 'Andrei Mead', img:'assets/1.jpg', isFav:false},
                

                
            ]
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks= !this.showBooks
        },
        handleEvent(e, data){
            if(data){
                console.log('bring me home')
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY

        },
        justTouch(book){
            book.isFav = !book.isFav

        }
     
    }
})
app.mount('#app')