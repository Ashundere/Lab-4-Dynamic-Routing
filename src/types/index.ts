

export interface AuthContextType {
    currentUser: string | null;
    isAuthenticated: boolean;
    login: (user: string) => void;
    logout: () => void;
}

export interface Post{
    id: number
    slug: string,
    title: string,
    content: string
    image: string
}