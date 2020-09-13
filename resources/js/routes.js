
let login=require('./components/auth/login.vue').default;
let register=require('./components/auth/register.vue').default;
let forget=require('./components/auth/forget.vue').default;
let logout=require('./components/auth/logout.vue').default;
let home =require('./components/auth/home.vue').default;
let adminlogin =require('./components/admin/login.vue').default;
//employee
let storeemployee =require('./components/employee/create.vue').default;
let employee =require('./components/employee/index.vue').default;
let editemployee =require('./components/employee/edit.vue').default;
//supplier
let storesupplier =require('./components/supplier/create.vue').default;
let supplier =require('./components/supplier/index.vue').default;
let editsupplier =require('./components/supplier/edit.vue').default;
//category
let storecategory =require('./components/category/create.vue').default;
let category =require('./components/category/index.vue').default;
let editcategory =require('./components/category/edit.vue').default;
//product
let storeproduct =require('./components/product/create.vue').default;
let product =require('./components/product/index.vue').default;
let editproduct =require('./components/product/edit.vue').default;
//expense
let storesexpense=require('./components/expense/create.vue').default;
let expense=require('./components/expense/expense.vue').default;
let Editexpense=require('./components/expense/edit.vue').default;
//salary
let salary=require('./components/salary/all_employee.vue').default;
let paysalary=require('./components/salary/create.vue').default;
let allsalary=require('./components/salary/index.vue').default;
let viewsalary=require('./components/salary/view.vue').default;
let editsalary=require('./components/salary/edit.vue').default;
//customer
let storecustomer =require('./components/customer/create.vue').default;
let customer =require('./components/customer/index.vue').default;
let editcustomer =require('./components/customer/edit.vue').default;
//pount of sale
let pos =require('./components/pos/pointofsale.vue').default;



export const routes = [
    { path: '/', component: login,name:'/' },
    { path: '/register', component: register,name:'/register' },
    { path: '/forget', component: forget,name:'forget' },
    { path: '/logout', component: logout,name:'logout' },
    { path: '/home', component: home,name:'home' },
    { path: '/adminlogin', component: adminlogin,name:'adminlogin' },
    //employee
    { path: '/store-employee', component: storeemployee,name:'store-employee' },
    { path: '/employee', component: employee,name:'employee' },
    { path: '/edit-employee/:id', component: editemployee,name:'edit-employee' },
    //supplier
    { path: '/store-supplier', component: storesupplier,name:'store-supplier' },
    { path: '/supplier', component: supplier,name:'supplier' },
    { path: '/edit-supplier/:id', component: editsupplier,name:'edit-supplier' },
     //category
     { path: '/store-category', component: storecategory,name:'store-category' },
     { path: '/category', component: category,name:'category' },
     { path: '/edit-category/:id', component: editcategory,name:'edit-category' },
     //product
     { path: '/store-product', component: storeproduct,name:'store-product' },
     { path: '/product', component: product,name:'product' },
     { path: '/edit-product/:id', component: editproduct,name:'edit-product' },
      //expense
    { path: '/store-expense', component: storesexpense, name:'store-expense' },
    { path: '/expense', component: expense, name:'expense' },
    { path: '/edit-expense/:id', component: Editexpense, name:'edit-expense' },
    //salary
    { path: '/given-salary', component: salary, name:'given-salary' },
    { path: '/pay-salary/:id', component: paysalary, name:'pay-salary' },
    { path: '/salary', component: allsalary, name:'salary' },
    { path: '/view-salary/:id', component: viewsalary, name:'view-salary' },
    { path: '/edit-salary/:id', component: editsalary, name:'edit-salary' },
    //customer
    { path: '/store-customer', component: storecustomer, name:'store-customer' },
    { path: '/customer', component: customer,name:'customer' },
    { path: '/edit-customer/:id', component: editcustomer,name:'edit-customer' },
    //pos

    { path: '/pos', component: pos, name:'pos' },
  ]