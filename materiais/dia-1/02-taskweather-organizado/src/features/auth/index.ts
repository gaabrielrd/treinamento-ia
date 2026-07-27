// Interface pública da feature: só isto pode ser importado de fora.
export { LoginForm } from './components/LoginForm';
export { useSession } from './hooks/useSession';
export { isValidEmail, normalizeEmail } from './model/session';
export type { Session } from './model/session';
