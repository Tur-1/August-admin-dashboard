import { reactive } from "vue";;

const AuthUser = reactive({
    user: {},
    setUserData(user)
    {

        this.user = user;
    }
});

export default AuthUser;