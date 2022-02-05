import STORAGE from "../utils/storage.js";

export default Vue.component("product-item", {
  props: ["product"],
  data: function () {
    return {};
  },
  computed: {
    /* Genera una variable autocalculable 
    que determina si el producto tiene descuento*/
    hasDiscount() {
      return this.product.discount_price != 0;
    },
  },
  methods: {
    /* Redirige al usuario a la pagina de edición de producto */
    editProduct(item) {
      STORAGE.remove("product");
      STORAGE.setArray("product",item)
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
<!-- Si el producto tiene descuento se añaden algunas clases-->
  <div class="row g-2" 
        :class="hasDiscount ? 'p-2':''"> 
    <!-- Si el producto tiene descuento se añade un padding ->2 -->
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
          <!-- Si el producto tiene descuento se añade el badge de oferta -->
          <span v-if="hasDiscount"
            class="badge bg-warning text-dark" >
            <i class="bi bi-star-fill"></i>
            OFERTA</span
          >
          <span class="badge bg-info ms-2 rounded-pill">
            {{product.category.name}}
          </span>
        </div>
        <h6 class="mt-2">{{product.name}}</h6>
        <!-- Si el producto tiene descuento se
         añade el precio sin descuento (tachado) -->
        <small v-if="hasDiscount"
              class="text-decoration-line-through">
          Antes :  {{'$'+product.price}}
        </small>
        <!-- Si el producto tiene descuento se
         cambia el color de texto a rojo -->
        <p class="fw-bold mb-1"
           :class="hasDiscount?'text-danger':''">
         $ {{hasDiscount ? product.discount_price : product.price}}
        </p>
      </div>
    </div>
   
        <!-- Botón que redirige al usuario 
        a la página de edición de producto-->
    <div class="col-3 d-flex justify-content-center align-items-center">
      <button @click.prevent="editProduct(product)"   class="btn btn-outline-dark">Editar</button>
    </div>
  </div>
</a>
 
  `,
});
