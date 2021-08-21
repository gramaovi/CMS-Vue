<template>
  <div class="main_box">
     <form action="" class="box_input" onsubmit="event.preventDefault() ">
        <h1>
            Employee
        </h1>
        <input type="text"  name=""  placeholder="Nume"    id="nume" v-model="nume" required>
        <input type="text"  name=""  placeholder="Prenume" id="prenume" v-model="prenume" required>
        <input type="email" name=""  placeholder="Email"   id="email" v-model="email" required>
        <!--
        <input type="date"  name=""  value=""    id="date" required>
        <button  id="selectImg">Select image</button>
        <img id="imgPreview" ><label id="upProgress"></label><br>
        <img id="output" src="nullSource" hidden />
        
        <select class="sex" value=null name="sex" id="sex" required >
            <option hidden disbaled value="">
                Sex
            </option>
            <option value="des">
                Des
            </option>
            <option value="rar">
                Rar
             </option>
            <option value="foarterar">
                Foarte rar
            </option>
            <option value="virgin">
                Virgin
            </option>
        </select>
-->
        <input type="submit" id="addData" name="" value="Add" v-on:click="addUser()" >
    
    </form>

    <!--
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>-->
  </div>
</template>

<script>
/*
export default {
  name: "Input",
  props: {
    msg: String,
  },
};
*/
export default{
  name:"Input",
  data()
  {
    return{
      nume:null,
      prenume:null,
      email:null
    }
  },
  methods:{
    addUser(){
      console.warn("values:" ,this.nume, this.prenume, this.email);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./styles/Input.css";
</style>
