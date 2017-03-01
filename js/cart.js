/**
 * Created by Doris on 17/3/1.
 */
 var vm = new Vue({
  el: "#cart",
  data: {
    totalMoney: 580,
    proList: []

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
      var _this = this;
      this.$http.get("data/cartData.json").then(function(res){
        _this.proList = res.body.result.list

      }

      )



    }

  }
})
