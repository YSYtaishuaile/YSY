<template>
  <div id="app">
    <router-view/>
         <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/movie">movie</router-link>|
      
    </div>
  </div>
</template>
<script>
    import CommonHeader from'./components/CommonHeader';
    import CommonFooter from'./components/CommonFooter';

    export default {
        components:{
          CommonHeader,
          CommonFooter
        }  
    }
</script>>
<style lang="scss">

</style>
