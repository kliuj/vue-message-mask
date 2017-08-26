<template>
    <div v-show="showMask" class="vmask-box" >
        <div v-if="showLoading" class="vmask-loading-inner" @click="close()">
            <i class="vmask-loading-icon"></i>
            <p>{{loadingText}}</p>
        </div>
        <div v-if="showMessage" class="vmask-msg-inner">
            <div class="cui-error-tips">{{message}}</div>
            <div class="cui-roller-btns">
                <div class="cui-flexbd cui-btns-cancel" v-if="showCancelButton" @click="handleAction('cancelAction')">{{cancelText}}</div>
                <div class="cui-flexbd cui-btns-ok" v-if="showOkButton" @click="handleAction('okAction')">{{okText}}</div>
            </div>
        </div>
        <div v-html="diyComponent" @click="close()" class="vmask-diy"></div>
    </div>
</template>
<script>
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
    export default{
        data(){
            return{
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
                diyComponent:'',//自定义弹框的内容
            }
        },
        methods:{
            close(cb){
                for (var prop in default_data) {
                    if (default_data.hasOwnProperty(prop)) {
                        this[prop] = default_data[prop];
                    }
                }
                cb && cb()
            },
            handleAction(actionName){
                let cb = this[actionName]
                this.close(cb)
            }
        }
    }
</script>
<style scoped>
.vmask-box{
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    height:100%;
    width: 100%;
    z-index: 9999;
    background-color: rgba(0,0,0,.5);
}
.vmask-loading-inner {
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: #ffffff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) ;
    width: 50%;
    border-radius: 6px;
    font-size: 14px;
    padding: 58px 0 10px 0;
}
.vmask-loading-inner p{
    word-wrap: break-word;
    padding:0 10px 0 10px;
    margin:0
}
.vmask-loading-icon {
    position: absolute;
    top: 15px;
    left: 50%;
    margin-left: -16px;
    width: 24px;
    height: 24px;
    border: 2px solid #fff;
    border-radius: 24px;
    -webkit-animation: gif 1s infinite linear;
    animation: gif 1s infinite linear;
    clip: rect(0 auto 12px 0);

}
@keyframes gif {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@-webkit-keyframes gif {
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}
.vmask-msg-inner{
    text-align: center;
    background-color: #fff;
    color: #ffffff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) ;
    -webkit-transform:translate(-50%,-50%);
    width: 66%;
    font-size: 14px;
}
.cui-error-tips {
    color: #000;
    padding: 20px;
    text-align: left;
}
.cui-roller-btns {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    width: 100%;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background: #fff;
    border-top: 1px solid #bcbcbc;
    line-height: 18px;
    text-align: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.cui-roller-btns .cui-flexbd {
    padding: 12px 0;
    color: #000;
}
.cui-flexbd {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.cui-roller-btns .cui-flexbd:nth-of-type(2) {
    border-left: 1px solid rgba(0, 0, 0, 0.3);
}
.vmask-diy{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) ;
    -webkit-transform:translate(-50%,-50%);
}
</style>