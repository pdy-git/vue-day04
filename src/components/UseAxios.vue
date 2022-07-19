<template>
  <div>
    <p>1. 获取所有图书信息</p>
    <button @click="getBook" :disabled="disabled">点击-查看控制台</button>
    <p>2. 查询某本书籍信息</p>
    <input type="text" placeholder="请输入要查询 的书名" v-model="bookname" />
    <button @click="getName">查询</button>
    <p>3. 新增图书信息</p>
    <div>
      <input type="text" placeholder="书名" v-model="bookObj.bookname" />
    </div>
    <div>
      <input type="text" placeholder="作者" v-model="bookObj.author" />
    </div>
    <div>
      <input type="text" placeholder="出版社" v-model="bookObj.publisher" />
    </div>
    <button @click="sendfn">发布</button>
  </div>
</template>

<script>
// 目标1: 获取所有图书信息
// 1. 下载axios
// yarn add axios/ npm i axios/ cnpm i axios
// 2. 引入axios 做接口请求
// 3. 发起axios请求
// 4. 全局配置
import axios from "axios";
axios.defaults.baseURL = "http://123.57.109.30:3006";
export default {
  data () {
    return {
      disabled: true,
      bookObj: {
        // 参数名提前和后台的参数名对上-发送请求就不用再次对接了
        bookname: "",
        author: "",
        publisher: "",
      },
      bookname: "",
    };
  },

  // 自己写的代码++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // methods: {
  //   getBook () {
  //     axios({
  //       url: "/api/getbooks",
  //       method: "GET",
  //       //什么都不传接受所有
  //     }).then((res) => {
  //       console.log(res);
  //     });
  //   },
  //   getName () {
  //     axios({
  //       url: "/api/getbooks",
  //       method: "GET",
  //       params: { bookname: this.bookname },
  //     }).then((res) => {
  //       console.log(res);
  //     });
  //   },

  //   sendfn () {
  //     axios({
  //       url: "/api/addbook",
  //       method: "post",
  //       data: {
  //         bookname: this.bookObj.bookname,
  //         author: this.bookObj.author,
  //         publisher: this.bookObj.publisher,
  //         appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a", // appkey 接口验证字段
  //       },
  //     });
  //   },
  // },

  // 课上代码————————————————————————————————————————————————————————————————————————————————————
  methods: {
    getBook () {
      this.disabled = true;
      axios({
        url: "http://123.57.109.30:3006/api/getbooks",
      })
        .then((res) => {
          console.log(res);
        })
        .finally(() => {
          // 不论成功失败都会进入
          this.disabled = false;
        });
    },
    //
    getName () {
      axios({
        url: "http://123.57.109.30:3006/api/getbooks",
        params: {
          bookname: this.bookname,
        },
      }).then((res) => {
        console.log(res.data.data);
      });
    },

    //
    sendfn () {
      axios({
        url: "http://123.57.109.30:3006/api/addbook",
        method: "POST",
        data: {
          appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
          ...this.bookObj,
        },
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style></style>
