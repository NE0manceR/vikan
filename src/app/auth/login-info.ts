export class AuthLoginInfo {
    username: string;
    password: string;
    isSubscribe: boolean;

    constructor(username: string, password: string, isSubscribe: boolean) {
        this.username = username;
        this.password = password;
        this.isSubscribe = isSubscribe;
    }
}
