// File to host all env variables...
interface ENV {
    PORT: number,
    MONGO: string,
    SECRETKEY: string
}

export const ENVs: ENV = {
    PORT: 3000,
    MONGO: "Your own MONGODB URI",
    SECRETKEY: "Your own JWT SecretKey"
}

