import { reactive } from "vue";

const AuthUser = reactive({
    isAuthenticated: false,
    user: [],
    permissions: [],
    setUserData(authUser)
    {
        this.user = authUser.user;
        this.permissions = authUser.permissions;
    },
    userCanAccess(perm)
    {
        if (this.permissions)
        {
            return this.permissions.find(ele => ele == perm);
        }
    }
});

export default AuthUser;