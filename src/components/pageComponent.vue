<template>
    <div>
        <!--처음부터 변수를 두지 말고 페이지 연결부터하기 -->
        <h3>{{$route.params.page}}페이지입니다</h3>

        <!--page의 값이 1일때 0, 페이지가 2일때 1-->
        <p>{{showMemo}}</p>
    </div>
</template>

<script>
import data from '../assets/data.json'

export default {
    name : 'pageComponent',
    data : () =>({ 
        data : data 
    }),
    computed : {
        //computed에 넣어서 값이 바뀔때마다 템플릿안에서 호출할 수있다.
        showMemo () {
            return this.data.board[this.$route.params.page-1].memo
        }
    }
}
</script>