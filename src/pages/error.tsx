import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 px-6">
      <h1 className="text-center text-4xl font-bold">
        Whoops, algo aconteceu... 😧
      </h1>
      <p className="text-center text-accent-foreground">
        Um erro aconteceu na aplicação, abaixo você encontra mais detalhes:
      </p>
      <pre className="my-6 w-full max-w-xl rounded-lg bg-muted p-6">
        {'```'}
        <br />
        {error?.message || JSON.stringify(error)}
        <br />
        {'```'}
      </pre>
      <span className="animate-bounce text-3xl">👇</span>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-orange-500 dark:text-orange-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
