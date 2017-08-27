import Vue from 'vue'
import VueMessageMask from '../dist/VueMessageMask.js'

Vue.use(VueMessageMask)

new Vue({
	el:'#app',
	data:{
		message:'hello world'
	},
	methods:{
            showloading:function(vm){
            	console.log(vm)
            	this.message = '123'
            console.log(window.test = this)
                this.VMaskController.showVMaskLoading({loadingText:this.message})
            },
            showmsg(){
                this.VMaskController.showVMaskMultiMsg({
                    message:this.message,
                    showOkButton:true,
                    okText:'知道了',
                    okAction:()=>{
                        console.log('点击了确认按钮')
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
                const _html_ = '<div style="height:100px;width:200px;background-color:#fff;font-size:20px">测试自定义</div>'
                this.VMaskController.showDiyVMask(_html_)
            }
        }
})