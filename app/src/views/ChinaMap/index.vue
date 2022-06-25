<template>
    <div>
        <div id="main" style="width:500px;height:600px"></div>
        <div id="main1" style="widht:500px;height:600px"></div>
    </div>
</template>

<script>
    export default {
        name:'ChinaMap',
        mounted(){
            this.$myEcharts.line('main')
            this.$myEcharts.line('main1')
        }
    }
</script>

<style lang="less" scoped>

</style>