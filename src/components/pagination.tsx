import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from 'lucide-react'

import { Button } from './ui/button'

export interface PaginationProps {
  page: number
  items: number
  limit: number
  onPageChange: (page: number) => Promise<void> | void
}

export function Pagination({
  page,
  items,
  limit,
  onPageChange,
}: PaginationProps) {
  const pages = Math.ceil(items / limit) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {items} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {page + 1} de {pages}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={page === 0}
            onClick={() => onPageChange(0)}
          >
            <ChevronsLeftIcon className="h-4 w-4" />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={page === 0}
            onClick={() => onPageChange(page - 1)}
          >
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="sr-only">Página anterior</span>
          </Button>

          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pages <= page + 1}
            onClick={() => onPageChange(page + 1)}
          >
            <ChevronRightIcon className="h-4 w-4" />
            <span className="sr-only">Próxima página</span>
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pages <= page + 1}
            onClick={() => onPageChange(pages - 1)}
          >
            <ChevronsRightIcon className="h-4 w-4" />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
