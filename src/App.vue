	<template>
	<div>
  <app-header></app-header>
	<h1>hello {{ message }}</h1>
	<button @click="handleClick">点我</button>
  <ul>
  <li v-for="hero in heros">
    {{ hero.name }}
  </li>
  </ul>
	</div>
	</template>
  <script>
  import AppHeader from './components/app-header.vue'
  import axios from 'axios'
    export default {
      data () {
        return {
          message: 'app',
          heros: []
        }
      },
      methods: {
        handleClick () {
          window.alert('点我炸了')
        }
      },
      created () {
        axios.get('http://localhost:3000/heros').then(res => {
          this.heros = res.data
          })
      },
      components: {
         AppHeader
      }
    }

  </script>