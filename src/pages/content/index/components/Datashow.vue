<template>
  <div class="shuju-box">
    <div
      v-for="item in buidata"
      :class='item.rightborder?"shuju sjborder":"shuju"'
      :key="item.id"
    >
      <img :src="item.imgpath"/>
      <span class="building">{{item.building}}</span>
      <span class="nu">{{item.nu}}</span>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Datashow",
        data () {
          return{
            buidata: [{
              "id": "id1",
              "rightborder": true,
              "imgpath": "static/img/index/1.png",
              "building": "楼宇总量（栋）",
              "nu": 46767
            },{
              "id": "id2",
              "rightborder": true,
              "imgpath": "static/img/index/2.png",
              "building": "光缆已接入(栋)",
              "nu": 45816
            },{
              "id": "id3",
              "rightborder": false,
              "imgpath": "static/img/index/3.png",
              "building": "客户业务量(条)",
              "nu": 48515
            },{
              "id": "id4",
              "rightborder": true,
              "imgpath": "static/img/index/4.png",
              "building": "客户总量（个）",
              "nu": 48611
            },{
              "id": "id5",
              "rightborder": true,
              "imgpath": "static/img/index/5.png",
              "building": "本王客户（个）",
              "nu": 48945
            },{
              "id": "id6",
              "rightborder": false,
              "imgpath": "static/img/index/6.png",
              "building": "2019年年收入（万）",
              "nu": 54821
            }]
          }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .shuju-box
    min-width 1150px
    .shuju
      width 33.2%
      min-width 380px
      line-height  97px
      display inline-block
      background-color $white
      margin-bottom 15px
    .sjborder
      border-right 1px solid #dddddd
    .shuju img
      margin-left 28px
    .building
      display inline
      margin-left 1.4%
      color #333333
      font-size 14px
      padding-bottom 5px
      padding-right 10px
      border-bottom 3px solid #FF7676
    .nu
      color #333333
      font-size 28px
      float right
      margin-right 32px
</style>
