const app = Vue.createApp({
    data(){
        return{
            title:"Contador App - VUE",
            count:0,
        };
    },
    methods:{
        modCount(inst="add", limit=1) {
            if (inst ==='dis') {
                this.count-=limit;
            } else {
                this.count+=limit;
            }
        },
        // addCount() {
        //     this.count+=1;
        // },
    }
})