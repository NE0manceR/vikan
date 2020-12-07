export class SignUpInfo {
    name: string;
    username: string;
    email: string;
    roles: string[];
    password: string;
    isSubscribe: boolean;

    constructor(name: string, username: string, email: string, password: string, isSubscribe: boolean) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.roles = ['user'];
        this.isSubscribe = isSubscribe;
    }
}
