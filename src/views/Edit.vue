<template>
  <div class="card card-body mt-4">
    <h3>Edit users</h3>
    <form @submit.prevent="update">
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

      <button type="submit" class="btn btn-primary  mt-3">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getUser, updateUser } from '@/firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const userId = computed(() => route.params.id)

    const form = reactive({ nume: '',prenume:'', email: '', sex: '', bday:''})
    onMounted(async () => {
      const user = await getUser(userId.value)
      console.log(user, userId.value)
      form.nume = user.nume
      form.prenume = user.prenume
      form.email = user.email
      form.sex = user.sex
      form.bday = user.bday
    })

    const update = async () => {
      await updateUser(userId.value, { ...form })
      router.push('/')
      form.name = ''
      form.email = ''
      form.prenume=''
      form.email=''
      form.sex=''
      form.bday=''
      document.getElementById("imgPreview").src="";
    }

    return { form, update }
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
