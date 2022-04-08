<template>
  <div id="app">
      <!--
        user의 값이 ""일때 false로 사용
        user의 값이 존재할 때 true로 사용
      -->

      <div v-if="userId">
        <button @click="$router.push('/')">글목록</button>

        <!--빽틱을 사용해서 App data의 user값을 전달-->
        <button @click="$router.push(`/user/${userId}`)">{{userId}}님의 정보</button>
        <button @click="logOut">로그아웃</button>
      </div>

      <button v-else @click="$router.push('/login')">로그인</button>
      <!--컴포넌트를 다 만들면 index.js에다가 연결하면 된다.-->

      <!--가장 처음화면 : path : '/', page component path : '/board/:page'
      글목록(1. 처음화면, 2. 중첩-동적 라우팅을 이용한 페이지 컴포넌트)-->

      <!--로그인화면 : path : 'login'-->

      <!--유저정보페이지 : path : 'user/:user'-->

    <!--사용자이벤트는 이벤트를 생성하는 컴포넌트가 있는곳에 입력해주어야함. 다른곳에 적으면 안됨-->
    <router-view @login-user="loginUser"/>
  </div>
</template>

<script>
export default {
  data : ()=> ({
    userId : '',
  }),
  methods : {
    //사용자 지정이벤트를 만들어서 가져온 userID인자값을 data안의 변수에 넣어준다.
    loginUser (userId) {
      this.userId = userId;
    },
    logOut () {
      //user값 빈값, push이용해서 홈화면으로
      this.userId = '';
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
