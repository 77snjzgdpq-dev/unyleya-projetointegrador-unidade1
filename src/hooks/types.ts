
export type AuthSessionType = {
    token: string;
    setToken: (novoToken: string) => void;
    clearToken: () => void;
}