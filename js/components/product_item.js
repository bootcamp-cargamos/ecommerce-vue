export default Vue.component("product-item", {
  props: ["product"],
  data: function () {
    return {};
  },
  computed: {
    hasDiscount() {
      return this.product.discount_price != 0;
    },
  },
  methods: {
    editProduct() {
      this.$router.push("/products/edit");
    },
  },
  created: function () {},
  template: `
  <a
  href="#"
  class="list-group-item list-group-item-action px-1"
  :class="hasDiscount ? 'promo':''"
  aria-current="true">

  <div class="row g-2" 
        :class="hasDiscount ? 'p-2':''">
    <div class="col-3">
      <img
        :src="product.image_url"
        class="w-100"
        alt=""
      />
    </div>
    <div class="col-6">
      <div class="d-flex flex-column justify-content-between">
        <div class="d-flex">
          <span v-if="hasDiscount"
            class="badge bg-warning text-dark" >
            <i class="bi bi-star-fill"></i>
            OFERTA</span
          >
          <span class="badge bg-info ms-2 rounded-pill">
            {{product.category.name}}
          </span>
        </div>
        <h5 class="mt-2">{{product.name}}</h5>
        <small v-if="hasDiscount"
              class="text-decoration-line-through">
          Antes : {{product.price}}
        </small>
        <p class="fw-bold mb-1"
           :class="hasDiscount?'text-danger':''">
          {{hasDiscount ? product.discount_price : product.price}}
        </p>
      </div>
    </div>
    <div class="col-3 d-flex justify-content-center align-items-center">
      <button @click.prevent="editProduct"   class="btn btn-outline-dark">Editar</button>
    </div>
  </div>
</a>
 
  `,
});
