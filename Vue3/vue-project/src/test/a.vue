<template>
    <div id="add-new">
    <h1>{{ message }}</h1>

<div>
    <button @click="saveData">保存数据</button>
    <button @click="readData()">读取数据</button>
    <button v-on:click="deleteData()">删除数据</button>
    <button v-on:click="deleteAllData()">清空数据</button>
</div>

       <div> <el-input v-model="input" placeholder="Please input" clearable /></div>

    </div>
</template>
<script>
export default {
    name: 'AddNew',

    data() {
        return {
            message: '首页',
            newItem: '',
            input: '',

        }
    },


    methods: {
        // 存
        saveData() {
            // console.log(21321)
            let p = { name: '张三', age: 18 }

            window.sessionStorage.setItem("msg", "hello!!")
            sessionStorage.setItem("msg2", 666)
            window.sessionStorage.setItem("person", JSON.stringify(p))
        },
        // 获取数据
        readData() {
            console.log(21321)
            console.log(sessionStorage.getItem('msg'))

            const result = sessionStorage.getItem("person")
            this.input = result
            console.log(JSON.parse(result))
        },
        // 删除
        deleteData() {
            let aa = sessionStorage.removeItem("msg")
            this.input = aa

        },
        // 清空
        deleteAllData() {
            let bb = sessionStorage.clear()
            this.input = bb

        },

    }
}
</script>
