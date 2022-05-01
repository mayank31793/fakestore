import axios from 'axios';

export default{
    data(){
        return{
            baseURL:'https://fakestoreapi.com/products',
        }
    },
    methods:{
        callAllProducts:async function(){
            let response = await axios.get(this.baseURL).catch(err => {
                alert('Something Wrong, Please refresh Page')
            });
            this.$store.dispatch('callAllProducts',response.data);
            return response.data;
        },
        callAllProductsOfCategory:async function(category){
            let response = await axios.get(this.baseURL+"/category/"+category).catch(err => {
                alert('Something Wrong, Please refresh Page')
            });
            this.$store.dispatch('callAllProductsOfCategory',response.data);
            return response.data;
        }
    }
}