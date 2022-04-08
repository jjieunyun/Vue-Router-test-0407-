<template>
    <div class="board">
        <h1>게시글 목록입니다</h1>
        <!--페이지 이동을 위한 링크
        <router-link to="/board/1">1</router-link>
        <router-link to="/board/2">2</router-link>
        <router-link to="/board/3">3</router-link>
        -->
    
        <!--v-for형태로 사용하면 페이지 수가 늘어나도 원하는 만큼 늘려줄 수가있다.-->
        <a v-for="n in 3" :key="n">
            <router-link :to="`/board/${n}`">{{n}}</router-link>   |  
        </a>
        

        <!--페이지 동적라우팅-->
        <router-view></router-view>


    </div>
</template>

<script>
export default {
    //컴포넌트의 이름을 넣으면된다. 뷰파일이름과 동일하게 하면됨
    name : 'BoardView'
}
</script>

<style scoped>
/* scoped를 사용하면 현재의 뷰에서만 CSS가 적용된다*/


</style>