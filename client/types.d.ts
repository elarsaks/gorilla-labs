type User = {
    email: string;
    name: string;
    image: string;
};

type Session = {
    expires: string,
    user: User
}
