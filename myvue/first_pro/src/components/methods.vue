
<template>
    <div>
        <button v-on:click="hello">  
 <!-- to call a method , we use v-on:event_name -->
            Click me
        </button>
        <button v-on:mouseover="hello2('supreet is here')">Click me Hello2</button>
    </div>
</template>

<script>
  export default{
    name:'method', //name of the template
    props:{
        data:String
    },
    methods:{  //here , we will write all the methods
        hello()
        {
            alert("Hey this is");
        },
        hello2(data)
        {
            alert(data);
        }
    }
  }
</script>