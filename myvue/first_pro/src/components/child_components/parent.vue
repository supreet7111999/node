
<template>
    <div>
        <h1>Parent Vue</h1>
        <child1/>
        <child2/>
    </div>
</template>


<script>
  import child1 from './child1.vue'
  import child2 from './child2.vue'
  export default{
    name:'parent',
    components:{
        child1,
        child2
    }
  }
</script>

<style>
  div{
    background-color: aliceblue;
  }
</style>