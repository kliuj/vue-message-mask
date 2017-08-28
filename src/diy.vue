<template>
    <div style="height:100px;width:200px;background-color:#fff;font-size:20px">
        自定义的文本内容
        <button @click="closemask()">点击关闭自定义窗口</button>
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