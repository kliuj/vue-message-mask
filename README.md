# vue-message-mask
a message mask plugin for vue

## Install
 ``` js
  npm install vue-message-mask --save
 ``` 
 #### Using the `vue-message-mask` in component
 
 ``` js
  import VueMessageMask from 'vue-message-mask'
  Vue.use(VueMessageMask)
  ...
  <template>
    <div @click="showloading">hello world</div>
  </template>
  <script>
    export default{
      methods:{
        showloading(){
          this.VueMessageMask.showVMaskLoading("hello world")
        }
      }
    }
  </script>
 ```

