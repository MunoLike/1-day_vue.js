const app = new Vue({
    el:'#app',
    data:{
        count:0
    },
    methods:{
        increment(){
            this.count++;
        }
    }
});