<template>
   <div>
      {{ A }}====={{ B }} 
   </div>
</template>

<script>
export default {
   props:['n','m'],
   //=>父组件更新，子组件重新渲染的时候data函数不会再执行（只有第一次渲染子组件，在beforeCreate和created中间的时候执行一次）
   data() {
      return {
         A:this.n,
         B:this.m
      };
   },
   mounted(){
   // console.log(123)
   },
   updated(){
    //   console.log('123')
   }

};
</script>
