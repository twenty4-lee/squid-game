<template>
    <v-container>
        <div v-if="!fnGetAuthStatus" class="emailLoginContainer">
            <h1 class="email"><b>E</b>mail <b>L</b>og<b>i</b>n</h1>
            <form @submit.prevent="fnDoLogin" class="formContainer">
                <v-text-field dark color="#fe4063" name="Email" label="Email" type="email" v-model="sEmail" required></v-text-field>
                <v-text-field dark color="#fe4063" name="Password" label="PassWord" type="password" v-model="sPassword" required></v-text-field>
                <button type="submit" class="mt-5 btn squidRed">
                    <v-icon class="mr-2">mdi-login</v-icon>Login
                </button>
                <v-alert class="mt-3" type="error" dismissible v-model="bAlert">{{ fnGetErrMsg }}</v-alert>
            </form>
        </div>
        <div v-else>
            <div class="buttonContainer">
                <h1 class="enjoy"><b>E</b>njoy<br>S<b>Q</b>UID G<b>A</b>M<b>E</b></h1>
                <button @click="fnMainPage()" class="btn squidRed">
                    <v-icon left color="white">mdi-home</v-icon>Main Page
                </button>
                <button @click="fnGameSelectPage()" class="btn squidGreen">
                    <v-icon left color="white">sports_esports</v-icon>Game Menu
                </button>
            </div>
            </div>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            bAlert: false, // 오류 메시지 표시 여부
            sEmail: "", // 이메일 입력값 임시 저장
            sPassword: "", // 비밀번호 입력값 임시 저장
        };
    },
     computed: {
         // 오류 메시지 스토어에서 읽어서 반환
         fnGetErrMsg() {
             return this.$store.getters.fnGetErrorMessage;
         },
         fnGetAuthStatus() {
            return this.$store.getters.fnGetAuthStatus
        },
     },
     methods: {
        // 스토어에서 이메일 로그인 처리 요청
        fnDoLogin() {
            this.$store.dispatch("fnDoLogin", {
                pEmail: this.sEmail,
                pPassword: this.sPassword
            });
        },
        fnMainPage() {
            this.$router.push('/main')
        },
        fnGameSelectPage() {
            this.$router.push('/gameSelect')
        }
     },
     watch: {
         // fnGetErrMsg() 함수가 오류 메시지를 반환하면 오류 메시지 표시
         fnGetErrMsg(pMsg) {
             if(pMsg) this.bAlert = true;
         },
         // bAlert값이 false로 바뀌면 오류 메시지 초기화
         bAlert(pValue) {
             if(pValue == false) this.$store.commit("fnSetErrorMessage", "");
         }
     }
};
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

    .container, .emailLoginContainer {
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .email, .enjoy {
        font-family: 'Oswald', sans-serif;
        font-size: 12vmin;
        color: #e6ebce;
        text-align: center;
        margin-bottom: 30px;
    }

    .formContainer {
        width: 100%;
        height: 30vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .v-input {
        width: 70%;
    }
</style>
<style src="../css/button.css"></style>