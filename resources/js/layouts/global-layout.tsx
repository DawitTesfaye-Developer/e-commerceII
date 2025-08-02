import React, { ReactNode } from 'react'
import { ThemeProvider } from '../components/ui/theme-provider';

export default function GlobalLayout({ children }: { children: ReactNode }) {

  return (

      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >

        {children}

      </ThemeProvider>
  )
}

