<script >
import NavbarComponent from "./components/NavbarComponent.vue";
import SidebarComponent from "./components/SidebarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ContentHeader from "./components/ui/ContentHeader.vue";
import Cookies from "js-cookies";
export default {
  name: "App",
  components: {
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ContentHeader,
  },
  data() {
    return {
      file: null,
      previewImage: "",
    };
  },
  methods: {},
  computed: {
    token() {
      return Cookies.getItem("token") ?? "token";
    },
  },
};
</script>

<template>
  <div v-if="token">
    <div class="wrapper">
      <NavbarComponent />
      <SidebarComponent />
      <div class="content-wrapper">
        <content-header />
        <section class="content">
          <div class="container-fluid">
            <router-view />
          </div>
        </section>
      </div>
      <FooterComponent />
    </div>
  </div>
  <div v-else>
    <router-view />
  </div>
</template>

<style scoped>
</style>
