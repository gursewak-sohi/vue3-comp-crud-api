import { ref } from 'vue'
import axios from 'axios'

export default function useUser() {
    const url = "http://localhost:3000/users/"
    const usersData = ref([])
    const error = ref(null)
    const statusCode = ref(null)
    const deleteError = ref(null)
        // Get All Users
    const getAllUsers = async() => {
        usersData.value = []
        error.value = null
        try {
            const res = await axios(url)
            usersData.value = res.data
        } catch (err) {
            error.value = err
        }
    }

    // Get Single User
    const getSingleUser = async(id) => {
        usersData.value = []
        error.value = null
        try {
            const res = await axios(url + id)
            usersData.value = res.data
        } catch (err) {
            error.value = err
        }
    }

    // Create/Post User
    const createUser = async(usersForm) => {
        usersData.value = []
        error.value = null
        try {
            const config = {
                method: 'POST',
                url: url,
                headers: {
                    'content-type': 'application/json'
                },
                data: JSON.stringify(usersForm)
            }
            const res = await axios(config)
            usersData.value = res.data
            statusCode.value = res.status
        } catch (err) {
            error.value = err
        }
    }

    // Update User
    const updateUser = async(id, data) => {
        usersData.value = []
        error.value = null
        try {
            const config = {
                method: 'PUT',
                url: url + id,
                headers: {
                    'content-type': 'application/json'
                },
                data: JSON.stringify(data)
            }
            const res = await axios(config)
            usersData.value = res.data
            statusCode.value = res.status
        } catch (err) {
            error.value = err
        }
    }

    // Delete User
    const deleteUser = async(id) => {
        usersData.value = []
        error.value = null
        try {
            const config = {
                method: 'DELETE',
                url: url + id,
                headers: {
                    'content-type': 'application/json'
                },
            }
            const res = await axios(config)
            statusCode.value = res.status
        } catch (err) {
            deleteError.value = err
        }
    }

    return {
        usersData,
        error,
        statusCode,
        deleteError,
        getAllUsers,
        getSingleUser,
        createUser,
        updateUser,
        deleteUser
    }
}