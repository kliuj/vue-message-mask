/**
 * Created by kerwinliu on 2017/8/28.
 */

//初始化数据
const DEFAULT_DATA = {
    showMask:false, //主容器
    loadingText:'', //loading文案
    showLoading:false, //loading显示控制
    showLoadingCloseButton:false,//默认不展示关闭按钮
    showMessage:false, //message和confirm弹框
    message:'',//弹框文案
    showOkButton:false,
    showCancelButton:false,
    okAction:()=>{},
    cancelAction:()=>{},
    okText:'确认',//确认文案
    cancelText:'取消',//取消按钮文案
    showDiy:false,
    diyComponent:null
}

export  default DEFAULT_DATA