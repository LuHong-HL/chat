import Vue from 'vue'
import {
    Button,
    Menu,
    Aside,
    Header,
    Submenu,
    MenuItemGroup,
    MenuItem,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Main,
    Table,
    Container,
    TableColumn,
    Form,
    FormItem,
    Input,
    Message,
    MessageBox,
    Card
} from 'element-ui'

Vue.use(Card)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Button)
Vue.use(Menu)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Main)
Vue.use(Table)
Vue.use(Container)
Vue.use(TableColumn)

// Element 为 Vue.prototype 添加了全局方法 $message
Vue.prototype.$message = Message
// Element 为 Vue.prototype 添加了全局方法 $confirm
Vue.prototype.$confirm = MessageBox.confirm


