<template>
  <div class="pagination">
      <ul class="pager">
          <li class="btn-prev" :class="{'disabled': currentNum === 1}" @click="goNum(currentNum-1)"><</li>
          <li v-if="showMorePrev" class="quickprev" @click="goNum(currentNum-5)">...</li>
          <li class="number" v-for="pager in pagers" :class="{'active': pager == currentNum }" @click="goNum(pager)" :key="pager">
                {{pager}}
          </li>
          <li v-if="showMoreNext" class="quicknext"  @click="goNum(currentNum+5)">...</li>
          <li class="btn-prev" :class="{'disabled': currentNum === page}"  @click="goNum(currentNum+1)">></li>
      </ul>
  </div>
</template>
<script>
export default {
  props:{
    currentPage: {
          type: Number,
          default: 1
      },
      perPages: {
          type:Number,
          default: 5
      },
      pageSize: {
          type:Number,
          default:10
      },
      total:Number,
      
  },
  data(){
      return {
          currentNum: this.currentPage,
          showMorePrev:false,
          showMoreNext:false,
      }
  },
  computed:{
      page(){
          return Math.ceil(this.total/ this.pageSize );
      },
      pagers(){
          const arr=[];
          const perPages = this.perPages,page=this.page, center = (perPages-1)/2;
          let currentPage=this.currentNum, start=currentPage-center,end=currentPage+center;
          
          if( start < 1 ){
              end  = end + (1-start);
              start = 1;
          }

          if( end > page ){
              end = page;
              start =start - (end -page);
          }

          if( start < 1) start =1;

          for(let i =start ;i<=end;i++){
            arr.push(i);
          }
        
        this.showMorePrev = (start > 1);
        this.showMoreNext = (end < page);

        return arr;

     }
  },
  methods:{
      goNum:function(num){
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        const pageNum = this.currentNum;
        this.currentNum = num;
        if(this.currentNum<1) this.currentNum=1;
        if(this.currentNum>this.page) this.currentNum = this.page;
        if(this.currentNum ==pageNum) return;
         this.$emit('updata', this.currentNum);
      }
  },
  watch:{
      currentPage: function (val, oldVal) {
            this.currentNum=val;
      }
  }
}
</script>
<style lang="less" scoped>
    .pagination {
        font-size: 0;
        white-space: nowrap;
        color: #48576a;
        .btn-prev,.btn-next{
            border: 1px solid #d1dbe5;
        }
        .btn-prev{
            border-radius: 2px 0 0 2px;
        }
        .btn-next{
            border-radius: 0 2px 2px 0;
        }
        .disabled{
            color: #e4e4e4;
            background-color: #fff;
            cursor: not-allowed;
        }
    }
    .pager{
        display: inline-block;
        vertical-align: top;
        li{
            display: inline-block;
            padding: 0 4px;
            border: 1px solid #d1dbe5;
            border-right: 0;
            background: #fff;
            font-size: 13px;
            min-width: 28px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            &.active{
                border-color: #20a0ff;
                background-color: #20a0ff;
                color: #fff;
                cursor: default;
            }
        }
    }
</style>
