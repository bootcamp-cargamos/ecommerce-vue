import CategoryItem from "./category_item.js";

export default Vue.component("category-list", {
  props: ["categories", "loading", "current", "setCategory"],
  components: { CategoryItem },
  data: function () {
    return {};
  },
  methods: {
    editCategories() {
      this.$router.push("/categories");
    },
  },
  mounted: function () {},
  template: `
  <div class="container d-flex py-2">
    <button
      class="btn btn-dark rounded-circle"
      style="height: 42px; width: 42px"
      @click.prevent="editCategories"
    >
      <i class="bi bi-pencil"></i>
    </button>
    <div class="vl mx-2"></div>
    <div class="scrollmenu px-2 py-2">
      <category-item :key="item.id" v-for="item in categories"
                     :category="item" 
                     :active="current==item.name" 
                     :onClick="setCategory"/>
    </div>
  </div>
  `,
});
