



<template>
    <div>
      <h1> test2</h1>
      <h2>{{ data }}</h2>
      <h6>{{ ms }}</h6>
    </div>
</template>

<script>
  export default {
    name: "test",
    props:{
        data:String,
        ms:String
    }
  };
</script>
  
