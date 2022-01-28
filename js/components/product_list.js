import ProductItem from "../components/product_item.js";
export default Vue.component("product-list", {
  props: ["products"],
  components: { ProductItem },
  data: function () {
    return {};
  },
  created: function () {
    console.log(this.products);
  },
  template: `
  <div class="row">
  <div class="list-group px-0">

    <product-item :key="item.id" 
                  v-for="item in products" 
                  :product="item"/>
    <small v-if="this.products.length == 0" class="text-center my-2">
      No encontramos productos disponibles :(
    </small>
  </div>
</div>
  `,
});
