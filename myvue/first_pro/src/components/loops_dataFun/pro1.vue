<template>
    <div>
        <h1>
            For loop table data
        </h1>
        <table>
            <tr>
                <td>ID</td><td>Name</td>
            </tr>
            <tr v-for="user in users" :key="user.id">
               <td>
                {{ user.id }}
            </td> <td>{{ user.name }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default{
    name:'fl',
    props:{

    },
    data(){
        return {
            users:
            [
                {id:1,name:'supreet'},
                {id:2,name:'aditya'}
            ]
        }
    }
};
</script>