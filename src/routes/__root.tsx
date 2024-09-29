import 'react-toastify/dist/ReactToastify.css'
import '../index.css'

import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet, ScrollRestoration } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Navbar from '@/components/navbar'
import { Toaster } from '@/components/ui/toaster'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: RootComponent,
})

function RootComponent() {
  // const GlobalStyle = createGlobalStyle`
  //   body {
  //     font-family: Inter, sans-serif;
  //   }

  //   :root {
  //     --toastify-color-light: ${(props) => props.theme.complementaryColors.toastBackground};
  //     --toastify-color-dark: ${(props) => props.theme.complementaryColors.toastBackground};
  //     --toastify-color-info: ${(props) => props.theme.complementaryColors.info};
  //     --toastify-color-success: ${(props) => props.theme.complementaryColors.success};
  //     --toastify-color-warning: ${(props) => props.theme.complementaryColors.warning};
  //     --toastify-color-error: ${(props) => props.theme.complementaryColors.error};
  //     --toastify-color-transparent: rgb(255 255 255 / 70%);
  //   }
  // `

  return (
    <>
      {/* <GlobalStyle /> */}
      <Navbar />
      <Outlet />
      <Toaster />
      <TanStackRouterDevtools
        position={
          location.href.includes('login') || location.href.includes('register') ?
            'top-left'
          : 'bottom-right'
        }
      />
      <ScrollRestoration />
    </>
  )
}
