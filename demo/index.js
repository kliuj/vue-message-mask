import Vue from 'vue'
import VueMessageMask from '../dist/VueMessageMask.js'
// import VueMessageMask from '../lib/index.js'  dev使用
Vue.use(VueMessageMask)

import  Diy from './diy.vue'

new Vue({
	el:'#app',
	data:{
		message:'hello world'
	},
	methods:{
            showloading:function(){
                this.VMaskController.showVMaskLoading({loadingText:this.message})
                setTimeout(()=>{
                    this.VMaskController.closeVMask()
                },3000)
            },
            showloadingWithClose(){
                this.VMaskController.showVMaskLoading({loadingText:this.message,showLoadingCloseButton:true})

            },
            showCommonMsg(){
              this.VMaskController.showVMaskMsg(this.message)
            },
            showMultiMsg(){
                this.VMaskController.showVMaskMultiMsg({
                    message:this.message,
                    showOkButton:true,
                    okText:'知道了',
                    okAction:()=>{
                        console.log('点击了知道按钮')
                    }
                })
            },
            showconfirm(){
                this.VMaskController.showVMaskMultiMsg({
                    message:this.message,
                    showOkButton:true,
                    showCancelButton:true,
                    okText:'知道了',
                    cancelText:'取消',
                    okAction:()=>{
                        console.log('点击了确认按钮')
                    },
                    cancelAction:()=>{
                        console.log('点击了取消按钮')
                    }
                })
            },
            showdiy(){
                this.VMaskController.showDiyVMask(Diy)
            }
        }
})