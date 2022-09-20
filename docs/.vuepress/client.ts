import { defineClientConfig } from '@vuepress/client'
//@ts-ignore
// import { VueGoodTablePlugin } from 'vue-good-table-next'
// import 'vue-good-table-next/dist/vue-good-table-next.css'
// import VueGoodTable from 'vue-good-table'
// import 'vue-good-table/dist/vue-good-table.css'
// import PrimeVue from 'primevue/config'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/column'
// import ColumnGroup from 'primevue/columngroup'
// import Row from 'primevue/row'
// import Button from 'primevue/button'
// import InputText from 'primevue/inputtext'
// import 'primeicons/primeicons.css'
// import 'primevue/resources/primevue.min.css'
// import 'primevue/resources/themes/saga-blue/theme.css'
import Blog from './layouts/Blog.vue'
import Category from './layouts/Category.vue'
import Tag from './layouts/Tag.vue'
import Timeline from './layouts/Timeline.vue'
// import ExpensesTable from './components/ExpensesTable.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // app.use(VueGoodTablePlugin)
    // app.component(VueGoodTable)
    // app.use(VueGoodTable)
    // app.use(PrimeVue)
    // app.component('DataTable', DataTable)
    // app.component('Column', Column)
    // app.component('ColumnGroup', ColumnGroup)
    // app.component('Row', Row)
    // app.component('Button', Button)
    // app.component('InputText', InputText)
    // app.component('ExpensesTable', ExpensesTable)
  },
  setup() {},
  rootComponents: [],
  layouts: {
    Blog,
    Category,
    Tag,
    Timeline,
  },
})
