 
<script setup>
 import {reactive} from 'vue'
 import useUser from '../../composables/userApi'
 import { XCircleIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/vue/20/solid'
 const {error, statusCode, createUser} = useUser()
 
 const usersForm = reactive({
    name : '',
    title : '',
    email : '',
    role : '',
 });

 const handleAddUser = async () => {
  await createUser(usersForm)
  if (statusCode.value === 201) {
    document.getElementById('addForm').reset()
  }
 };
</script>

<template>
  <!-- Alert Error -->
  <div v-if="error" class="rounded-md bg-red-50 p-4 shadow mb-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-red-800">Oops! error encountered: {{ error.message }}</h3>
      </div>
    </div>
  </div>
  
  <!-- Alert Success -->
  <div v-if="statusCode === 201" class="rounded-md bg-green-50 p-4 shadow mb-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-green-800">User added successfully</p>
        </div>
        <div class="ml-auto pl-3">
          <div class="-mx-1.5 -my-1.5">
            <button type="button" class="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">
              <span class="sr-only">Dismiss</span>
              <XMarkIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>

 <form id="addForm"  @submit.prevent="handleAddUser" class="space-y-6">
  <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
          <p class="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
        </div>
        <div class="mt-5 md:col-span-2 md:mt-0">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-4">
              <label class="block text-sm font-medium text-gray-700">Name</label>
              <input v-model.trim="usersForm.name" required type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <label class="block text-sm font-medium text-gray-700">Title</label>
              <input v-model.trim="usersForm.title" required type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <label class="block text-sm font-medium text-gray-700">Email address</label>
              <input v-model.trim="usersForm.email" required type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label class="block text-sm font-medium text-gray-700">Role</label>
              <select v-model="usersForm.role" required class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                <option>Super Admin</option>
                <option>Admin</option>
                <option>Member</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <RouterLink to="/">
        <button type="button" class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Cancel</button>
      </RouterLink>
        <button type="submit" class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
      </div>
  </form>

</template>
