<template>
  <v-app>
    <v-navigation-drawer clipped v-model="drawer" app src="./assets/Image/navBg.png">
      <v-layout fill-height column justify-space-between>
        <div>
          <v-list v-if="fnGetAuthStatus">
            <v-list-item>
              <v-list-item-avatar>
                <v-img v-if="fnGetUser.photoURL" :src="fnGetUser.photoURL"></v-img>
                <v-img v-else src="./assets/Image/user.png"></v-img>
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  <span class="name">{{ fnGetUser.name }}</span>
                </v-list-item-title>
                <v-list-item-subtitle>{{ fnGetUser.email }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list>
          <router-view name="sidebar"></router-view>
          <!-- 로그인된 경우만 로그아웃 버튼 표시 -->
            <v-list-item @click="fnDoLogout" v-if="fnGetAuthStatus">
              <v-list-item-action>
                <v-icon>mdi-arrow-right-bold-box-outline</v-icon>
              </v-list-item-action>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
            <v-list-item v-if="!fnGetAuthStatus && this.$route.path !== '/first'" to="/first">
              <v-list-item-action>
                <v-icon>mdi-login</v-icon>
              </v-list-item-action>
              <v-list-item-title>Login Page</v-list-item-title>
            </v-list-item>
            <v-list-item to="/end">
              <v-list-item-action>
                <v-icon>waving_hand</v-icon>
              </v-list-item-action>
              <v-list-item-title>Exit</v-list-item-title>
            </v-list-item>
          </v-list>
        </div>
        <v-list>
          <v-list-item>
            <v-img justify-end src="./assets/Image/gaurdian.png"></v-img>
          </v-list-item>
        </v-list>
      </v-layout>
    </v-navigation-drawer>
    <v-app-bar clipped-left app color="rgb(25, 25, 25)" dark>
        <v-app-bar-nav-icon @click.stop="drawer =! drawer"></v-app-bar-nav-icon>
        <v-toolbar-title color="white">S<b>Q</b>UID G<b>A</b>M<b>E</b></v-toolbar-title>
        <v-spacer></v-spacer>
    </v-app-bar>
    <v-main class="bgColor">
      <v-slide-x-transition>
        <!-- name 값이 없는 경우가 default components -->
        <router-view></router-view>
      </v-slide-x-transition>
    </v-main>
  </v-app>
</template>
<script>
export default {
    data() {
      return {
        drawer: false
      }
    },
    computed: {
      fnGetAuthStatus() {
        return this.$store.getters.fnGetAuthStatus
      },
      fnGetUser() {
          let oUserInfo = this.$store.getters.fnGetUser;
          return oUserInfo;
      },
    },
    methods: {
      // 스토어의 로그아웃 기능 사용
      fnDoLogout() {
        this.$store.dispatch('fnDoLogout')
      }
    },
}
</script>
<style>
/* App.vue의 style은 scoped 속성을 걸면 모든 style 태그에 bgColor를 설정해줘야 함 */
  .bgColor {
    background-color: rgb(34, 34, 34);
  }

 .name {
    font-weight: bolder;
  }

  b {
    color: #fe4063;
  }
</style>
