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