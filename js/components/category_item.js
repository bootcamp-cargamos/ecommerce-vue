export default Vue.component("category-item", {
  props: ["category", "active", "onClick"],
  template: `
  <a href="#" @click.prevent="onClick(category)">
      <span class="badge rounded-pill text-dark"
        :class="active?'bg-primary':'bg-light '">
      {{category.name}}</span>
  </a>
  `,
});
