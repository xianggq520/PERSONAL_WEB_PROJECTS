<template>
    <div id="mock_list">
        <h2>模拟的数据</h2>
        <div>
          
            <ul>
                <li v-for="item in newlist">
                    <div>姓名：<span>{{item.author_name}}</span></div>
                    <div>图片：<img :src="item.thumbnail_pic_s" ></span></div>
                   <div>发布时间<span>{{item.date}}</span></div> 
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
    import { shuju } from '@/services/apis/home.api.js' ;
    export default {
        name:'mock_list',
        data(){
            return{
                newlist:[]
            }
        },
        created(){
            this.getapi();
        },
        methods:{
            getapi() {
                shuju()
                    .then(res=>{
                        this.newlist = res.data.articles;
                        console.log('获取数据成功')
                    })
               
              }
            }
        };
  
</script>

<style  scoped>

</style>