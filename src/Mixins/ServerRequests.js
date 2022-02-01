import axios from 'axios';

export default{
    data(){
        return{
            baseURL:'https://fakestoreapi.com/products',
        }
    },
    methods:{
        callAllProducts:async function(){
            let response = await axios.get(this.baseURL).catch(err => err);
            this.$store.dispatch('callAllProducts',response.data);
            return response.data;
        },
        callAllProductsOfCategory:async function(category){
            let response = await axios.get(this.baseURL+"/category/"+category).catch(err => err);
            this.$store.dispatch('callAllProductsOfCategory',response.data);
            return response.data;
        }
    }
}