 <template>
      <div>
        <!-- Breadcrumbs-->
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
          <li class="breadcrumb-item active">All Employee</li>
        </ol>
        <!-- Icon Cards-->
       <div class="row card container">
          <div class="card-header">
            <i class="fas fa-chart-area"></i>
            Employee Insert 
           
          </div>
          <div class="card-body">
          
          <div class="card-body">
              <div class="table-responsive">
                <label>Search</label>
                <input type="text" v-model="searchItem"  class="form-control" style="width:200px; "><br>
                <table class="table table-bordered" id="" width="100%" cellspacing="0">

                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Photo</th>
                      <th>Phone</th>
                      <th>Salary</th>
                      <th>pay Salary</th>
                    </tr>
                  </thead>
                
                  <tbody>

                    <tr v-for="employee in filterSearch" :key="employee.id">
                      <td>{{employee.name}}</td>
                      <td><img :src="employee.photo" id="em_photo"></td>
                      <td>{{employee.phone}}</td>
                      <td>{{employee.salary}}</td>
                      <td>
                        <router-link :to="{name: 'pay-salary',params:{id:employee.id}}" class="btn btn-sm btn-info">Pay salary</router-link>
                        
                      </td>
                    </tr>
        
                   </tbody>
                </table>
              </div>
            </div>
            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
          </div>
       </div>
   </div>
</template>

<script>

    export default {
    mounted(){
            if (!User.loggedIn()) {
               this.$router.push({ name:'/' })
            } 
        },
        data()
        {
            return{
                employees:[],
                searchItem:''
            }
            
        },
        computed:
        {
            filterSearch()
            {
                return this.employees.filter(employee=>{
                    return employee.phone.match(this.searchItem);
                })
            }
        },
        methods:
        {
            allEmployee()
                {
                    axios.get('/api/employee/')
                    .then(({data})=> (this.employees=data))
                    .catch()
                },
             
                
            
        },
        created()
        {
            this.allEmployee();
        }
        	
    }



  
</script>

<style>
#add_new{
    float:right;
}
	
#em_photo{
    height:40px;
    width:40px;
}

</style>
