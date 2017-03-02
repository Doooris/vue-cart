/**
 * Created by Doris on 17/3/1.
 */
 var vm = new Vue({
  el: "#cart",
  data: {
    totalMoney: 0,
    proList: [],
    checked_all: false,
    kinds: 0,

  },
  filters: {
    formatMoney: function(value){
      return "¥"+value.toFixed(2);
    }

  },
  mounted: function () {
    this.$nextTick(function(){
      this.cartView();
    })
  },
  methods: {
    cartView: function (){
      this.$http.get("data/cartData.json").then( res=> {
        this.proList = res.body.result.list;
    })

  },
    changeQuantity: function(product,way){
      if(way == 1){
        product.proQuantity++;
      }else{
        product.proQuantity--;
        if(product.proQuantity < 1){
           product.proQuantity = 1;
        }

      }
      this.calTotalMoney();
    },
    toggleChecked: function(obj){
      if(typeof obj.checked == 'undefined'){
        Vue.set(obj,"checked",true);
      }else{
        obj.checked = !obj.checked;
      };
      if(obj.checked == false){
        this.checked_all = false;
      }
      this.calTotalMoney();
      this.calKinds();
    },
    toggleChecked_all: function(){
      this.checked_all = !this.checked_all;
        this.proList.forEach(element =>{
          if( typeof element.checked == 'undefined'){
            Vue.set(element,"checked",this.checked_all)
          }else{
            element.checked = this.checked_all;
          }
        })
      this.calTotalMoney();
      this.calKinds();
      },
    calTotalMoney: function(){
      this.totalMoney = 0;
      this.proList.forEach(element =>{
        if(element.checked == true){
          this.totalMoney += element.proQuantity*element.proPrice;
        }

      })

    },
    calKinds: function(){
      this.kinds = 0;
      this.proList.forEach(element =>{
        if(element.checked == true){
          this.kinds ++;
        }
    })
    }
}});
Vue.filter("formatMoney",function(value,type){
  return "¥" + value.toFixed(2) + type;

})
