import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 px-6">
      <h1 className="text-center text-4xl font-bold">
        Página não encontrada 😕
      </h1>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-orange-500 dark:text-orange-400">
          Dashboard
        </Link>
      </p>
      <span className="animate-bounce text-3xl">👆</span>
    </div>
  )
}
