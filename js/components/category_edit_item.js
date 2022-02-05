export default Vue.component("category-edit-item", {
    props: ["onSave","onDelete","setCategoryName", "index","item"],
    methods:{
      onKeyup(event){
        this.setCategoryName(this.index,event.target.value)
      }
    },
    template: `
      <div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between align-items-center">
          <input type="text" 
                class="w-100"
                :value="item.name"
                @keyup="onKeyup" />
          <button class="mx-3 btn btn-outline-dark"
                  @click.prevent="onSave(index)">
                    Guardar
          </button>
          <a href="" 
            class="text-danger fs-4"
            @click.prevent="onDelete(index)">
            <i class="bi bi-trash"></i>
          </a>
        </div>
      </div>
    `,
  });
  