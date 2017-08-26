/**
 * Created by kerwinliu on 2017/8/25.
 */
import Vue from 'vue'
import Mask from './mask.vue'

//初始化数据
const default_data = {
    showMask:false, //主容器
    loadingText:'', //loading文案
    showLoading:false, //loading显示控制
    showMessage:false, //message和confirm弹框
    message:'',//弹框文案
    showOkButton:false,
    showCancelButton:false,
    okAction:()=>{},
    cancelAction:()=>{},
    okText:'确认',//确认文案
    cancelText:'取消',//取消按钮文案
    diyComponent:''
}

let vmaskInstance , currentMsg = null


let MaskContainerConstructor = Vue.extend(Mask)


let merge = function(target) {
    for (let i = 1, j = arguments.length; i < j; i++) {
        let source = arguments[i];
        for (let prop in source) {
            if (source.hasOwnProperty(prop)) {
                let value = source[prop];
                if (value !== undefined) {
                    target[prop] = value;
                }
            }
        }
    }
    return target;
};


let defaultCallback = ()=>{

}


let initInstance = ()=> {
    vmaskInstance = new MaskContainerConstructor({
        el: document.createElement('div')
    });
    //组件添加到body
    document.body.appendChild(vmaskInstance.$el)
    vmaskInstance.callback = defaultCallback;
};

let showMaskContainer = ()=> {
    if (!vmaskInstance) {
        initInstance();
    }
    if (!vmaskInstance.showMask || vmaskInstance.closeTimer) {
        var options = currentMsg;
        for (var prop in options) {
            if (options.hasOwnProperty(prop)) {
                vmaskInstance[prop] = options[prop];
            }
        }
        if (options.callback === undefined) {
            vmaskInstance.callback = defaultCallback;
        }

        Vue.nextTick(() => {
            vmaskInstance['showMask'] = true
        });
    }
};



export default  {
    install: function (Vue, options) {
        Vue.prototype.VMaskController = {
            showVMaskLoading (options) {
                currentMsg = merge({
                    showLoading:true
                },options)
                showMaskContainer()
            },
            closeVMask () {
                currentMsg = null
            },
            //普通信息提示
            showVMaskMsg(text){
                currentMsg = merge({
                    showMessage:true,
                    message:text,
                    showOkButton:true,
                })
                showMaskContainer()
            },
            //自定义按钮信息类型提示
            showVMaskMultiMsg(options){
                currentMsg = merge({
                    showMessage:true
                },options)
                showMaskContainer()
            },
            showVMaskConfirm(options){
                currentMsg = merge({
                    showMessage:true
                },options)
                showMaskContainer()
            },
            //diy弹框
            showDiyVMask(source){
                currentMsg = merge({
                    diyComponent:source
                })
                showMaskContainer()
            }
        }
    }
}