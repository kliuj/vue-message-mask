# vue-message-mask
a message mask plugin for vue

## demo

<p align="center">
    <img src="https://github.com/kliuj/vue-message-mask/blob/master/demo/demo.gif">
</p>

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
 ## API
  ``` js
    var message = 'hello world'
    //关闭遮罩层
    this.closeVMask(callback) // callback 为可选参数

    //显示loading
    this.VMaskController.showVMaskLoading({loadingText:message})

    //显示单按钮文字信息
    this.VMaskController.showVMaskMsg(message)

    //自定义按钮文字
    this.VMaskController.showVMaskMultiMsg({
                        message:this.message,
                        showOkButton:true,
                        okText:'知道了',
                        okAction:()=>{
                            //okAction 为可选参数
                            console.log('点击了知道按钮')
                        }
                    })

    //confirm类型弹出框
    this.VMaskController.showVMaskMultiMsg({
                        message:this.message,
                        showOkButton:true,
                        showCancelButton:true,
                        okText:'知道了',
                        cancelText:'取消',
                        okAction:()=>{
                        //okAction 为可选参数
                            console.log('点击了确认按钮')
                        },
                        cancelAction:()=>{
                        //cancelAction 为可选参数
                            console.log('点击了取消按钮')
                        }
                    })

    //自定义vue组件弹出框
    //diy.vue
         <template>
             <div style="width:200px;background-color:#fff;text-align: center;padding: 5px;line-height: 20px">
                 自定义的弹框内容<br/>
                 测试自定义内容的正确显示<br/>
                 默认宽度不能超过屏幕宽度<br/>
                 默认上下左右居中<br/>
                 <button @click="closemask()" style="    border: 1px solid #3bab20;padding: 5px;background-color: #3bab20;color: #fff;margin-top: 10px">点击关闭自定义窗口</button>
             </div>
         </template>
         <script>
             export default{
                 methods:{
                     closemask(){
                         this.VMaskController.closeVMask()
                     }
                 }
             }
         </script>

     //调用层
         import Diy from 'diy.vue'
         ...
         this.VMaskController.showDiyVMask(Diy)

  ```
 ## OPTIONS
 **Option**|**Type's**|**Default**|**Description**
 -----|-----|-----|-----
 showMask|Boolean|false|显示或关闭主遮罩层
 loadingText|String|'loading...'|loading文字
 showLoading|Boolean|false|是否展示loading组件
 showLoadingCloseButton|Boolean|false|是否展示loading组件的关闭按钮
 showMessage|Boolean|false|是否展示信息图层
 message|String|''|信息图层文字
 showOkButton|Boolean|false|是否展示信息图层的确定按钮
 showCancelButton|Boolean|false|是否展示信息图层的取消按钮
 okAction|Function|null|信息图层确定按钮回调事件
 cancelAction|Function|null|信息图层取消按钮回调
 okText|String|'确认'|信息图层确定按钮文字
 cancelText|String|'取消'|信息图层取消按钮文字
 diyComponent|Object|null|自定义图层组件



