<template>
    <div id="app">
      {{ message }}
    </div>
  </template>
   
  <script>
  export default {
    data() {
      return {
        message: 'Hello, Vue!'
      }
    }
  }
  </script>
   
  <style>
  #app {
    color: #333;
  }
  </style>