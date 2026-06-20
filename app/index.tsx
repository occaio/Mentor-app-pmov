// app/index.tsx
import { Redirect } from 'expo-router';

export default function Index() {
  // Redireciona automaticamente para a rota /login assim que o app inicia
  return <Redirect href="/auth/login" />;
}