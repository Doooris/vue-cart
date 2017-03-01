/**
 * Created by Doris on 17/3/1.
 */
 var vue = new Vue({
  el: "#cart",
  data: {
    title: "hello vue"

  },
  filters: {

  },
  mounted: function () {
    this.$nextTick(function(){
      this.cartView();
    })
  },
  methods: {
    cartView: function (){

    }

  }
})
