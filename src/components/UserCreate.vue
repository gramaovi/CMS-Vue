<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Nume </label>
        <input v-model="form.nume" class="form-control" required />
      </div>

      <div class="form-group">
        <label>Prenume</label>
        <input v-model="form.prenume" class="form-control" required />
      </div>

     <div class="form-group">
        <label>Sex</label>
        <select v-model="form.sex" class="form-control" required>
        <option>Masculin</option>
        <option>Feminin</option>
        </select>
      </div>
   <div class="form-group">
        <label>Data nasterii</label>
        <input 
        v-model="form.bday" 
        class="form-control" 
        type="date"
        required
        />
      </div>

      <div class="form-group mt-3">
        <label>Email</label>
        <input
          v-model="form.email"
          class="form-control"
          type="email"
          required
        />
      </div>
       <div class="form-group">
        <label>Poza </label>
        <input 
        class="form-control"
        type="file"
        @change="onFileSelected"/>
      </div>
      <div>
        <div class="form-group">
        <img id="imgPreview"/>

        </div>
      </div>
      <button type="submit" class="btn btn-success mt-3">
        Create User
      </button>
    </form>
  </div>
</template>

<script>
import { createUser } from '@/firebase'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({ nume: '',prenume:'', email: '', sex: '', bday:''})
    const onSubmit = async () => {
      await createUser({ form })
      form.nume = ''
      form.prenume=''
      form.email = ''
      form.sex =''
      form.bday='';

      
    }

    return { form, onSubmit }
  },
  methods: {
   onFileSelected(event){
     var files=[];
     //this.selectedFile=event.target.files[0];
     files=event.target.files;
     var reader=new FileReader();
     reader.onload=function(){
     document.getElementById("imgPreview").src=reader.result;
     }
     reader.readAsDataURL(files[0]);
     console.log(files[0]);
   }
  }
}


</script>
