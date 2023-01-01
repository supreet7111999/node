
<template>
    <div>
        <!-- for if and else , we use v-if="condition " and v-else directives-->
        <!-- directives are used to change or manipulate elements of html -->
        <h1 v-if="!show">Conditional Rendering if false</h1>
        <h1 v-else>if true</h1>
        <button v-on:click="chng">Toggle Conditional Rendering</button>
    </div>
</template>


<script>
 export default{
    name:'cond',
    props:{
        
    },
    data()//this is data method , which returns the data_properties
    {
           return {
               show:true
           }
    },
    methods:{
        chng()
        {
            if(this.show==true)
            //    alert(this.show);
               this.show=false;
            else
               this.show=true;   
        }
    }
 };
</script>