<template>
    <div class="flex items-center justify-center h-screen bg-gray-900">
        <div class="w-full max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 class="text-2xl font-bold mb-4 text-gray-700 text-center">Cadastro de Usuário</h1>

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                        Nome
                    </label>
                    <input v-model="formData.name"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name" type="text" placeholder="Name">
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="age">
                        Idade
                    </label>
                    <input v-model="formData.age"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="age" type="number" placeholder="Age">
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input v-model="formData.email"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="email" placeholder="Email">
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Senha
                    </label>
                    <input v-model="formData.password"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="Password">
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="isAdmin">
                        Admin(Apenas para testes, em um sistema real, não teria essa opção.)
                    </label>
                    <input v-model="formData.isAdmin" type="checkbox" id="isAdmin">
                </div>

                <div class="flex justify-center">
                    <button @click.prevent="submitForm"
                        class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        Cadastrar
                    </button>
                </div>

                <router-link to="/entrar" class="block text-center text-blue-600 text-sm mt-2 hover:text-blue-800">
                    Já possui uma conta? Clique aqui.
                </router-link>
            </form>
            <p class="text-center text-gray-500 text-xs">
                &copy;2023 - @lsprgabriel
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                age: null,
                email: '',
                password: '',
                isAdmin: false,
            },
        };
    },
    methods: {
        // POST Request to create a new user localhost:3000/api/signup
        async submitForm() {
            try {
                await fetch('http://127.0.0.1:3000/api/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.formData),
                });
                this.$router.push('/entrar');
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
