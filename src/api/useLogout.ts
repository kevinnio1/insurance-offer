import { useAuthContext } from '@hooks/useAuthContext';

export function useLogout() {
    const {
        logout
    } = useAuthContext();

    logout();

    return null;
}