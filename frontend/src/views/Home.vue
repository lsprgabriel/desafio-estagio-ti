<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900">
    <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-white text-center">Desafio Técnico - Frontend</h1>
    <div class="flex flex-col md:flex-row">
      <router-link to="/cadastrar" class="mb-2 md:mb-0 md:mr-2 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
          Cadastrar
        </router-link>
        <router-link to="/entrar" class="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
          Entrar
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // async login() {
    //   try {
    //     await this.$store.dispatch('login', {
    //       email: this.email,
    //       password: this.password,
    //     });
    //     this.$router.push('/dashboard');
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
};
</script>


