import { reactive } from "vue";;

const AuthUser = reactive({
    user: [],
    permissions: [],
    setUserData(authUser)
    {
        this.user = authUser.user;
        this.permissions = authUser.permissions;
    },
    userCanAccess(perm)
    {
        return this.permissions.find(ele => ele == perm);
    }
});

export default AuthUser;