<script>
    export default {
        data() {
            return {
                user: {
                    email: 'bh',
                    password: '',
                },
            };
        },
        methods: {
            userLogin(){
                console.log(this.user)
            }
        }
    }
</script>



<template>
    <div class="login">
        <form @submit.prevent="userLogin">
            <h2>Login</h2>
            <div class="form-">
                <label>Email</label>
                <input type="text" v-model="user.email" />
            </div>
            <div class="form-">
                <label>Mot de passe</label>
                <input type="text" v-model="user.password" />
            </div>
            <button type="submit">Connexion</button>
        </form>
    </div>
</template>

<style scoped>

</style>