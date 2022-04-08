<template>
    <div>
        <h4>로그인페이지</h4>

        <label for="id" >아이디</label>
        <input type="text" v-model="userId">
        <br>
        <label for="pw">패스워드</label>
        <input type="password"> <br><br>
        <button @click="loginUser">확인</button>

        <!--$router.go(-1)을 하게되면 뒤로가기 -> 똑같음-->
        <button @click="$router.push('/')">취소</button>
    </div>
</template>

<script>
export default {
    name : 'LoginView',
    data () {
        return {
            userId : '',
        }
    },
    methods : {
        loginUser () {
            this.$emit('login-user', this.userId);
            this.$router.push('/');
        }
    }
}
</script>