import 'react-toastify/dist/ReactToastify.css'
import '../index.css'

import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet, ScrollRestoration } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Navbar from '@/components/navbar'
import { Toaster } from '@/components/ui/toaster'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <title>Clear Speech</title>
      <Navbar />
      <Outlet />
      <Toaster />
      <ScrollRestoration />
    </>
  )
}
