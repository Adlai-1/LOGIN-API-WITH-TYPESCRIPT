// File to host all env variables...
interface ENV {
    PORT: number,
    MONGO: string,
    SECRETKEY: string
}

export const ENVs: ENV = {
    PORT: 3000,
    MONGO: "mongodb://127.0.0.1:27017/Auth",
    SECRETKEY: "5437d5ad1411d437d31dc5a395aec2568c231662accfd24b24d8cbdd086c45ef"
}

/**
MONGO: "mongodb://127.0.0.1:27017/Auth",
SECRETKEY: "5437d5ad1411d437d31dc5a395aec2568c231662accfd24b24d8cbdd086c45ef"
**/