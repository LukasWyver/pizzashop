import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <div className="h-5 w-5">🍕</div>
          <span className="font-semibold">pizza.shop</span>
        </div>

        <div className="flex max-w-2xl flex-col gap-6">
          <p className="text-7xl text-foreground">
            Aumente suas vendas em{' '}
            <span className="font-bold italic text-primary">3 passos</span>.
          </p>
          <div className="grid grid-cols-3 font-bold italic text-foreground">
            <p className="text-2xl">
              <span className="text-primary">1&bull;</span> Logou
            </p>
            <p className="text-2xl">
              <span className="text-primary">2&bull;</span> Cadastrou
            </p>
            <p className="text-2xl">
              <span className="text-primary">3&bull;</span> Vendeu
            </p>
          </div>
        </div>

        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
