<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Nume</th>
          <th scope="col">Prenume</th>
          <th scope="col">Email</th>
          <th scope="col">Sex</th>
          <th scope="col">Data nasterii</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, nume, prenume, email, sex , bday} in users" :key="id">
          <td>{{ nume }}</td>
          <td>{{ prenume }}</td>
          <td>{{ email }}</td>
          <td>{{ sex }}</td>
          <td>{{ bday }}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteUser(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadUsers, deleteUser } from '@/firebase'

export default {
  setup() {
    const users = useLoadUsers()
    return { users, deleteUser }
  }
}
</script>
