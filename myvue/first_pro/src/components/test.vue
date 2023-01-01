



<template>
  <div>
  <h1> test1</h1>
  <h2>
    {{ data }}
  </h2>
  <h6>{{ msg }}</h6>
  </div>
</template>


<script>
  export default {
    name: 'Test1',
    props:{
      data:String,
      msg=String
    }
  };
</script>