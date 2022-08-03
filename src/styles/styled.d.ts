import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      text: string
      backgroundColor: string
      backgroundColorItem: string

      primary: string
      secondary: string

      default: string
    }

    fonts: {
      extraBold: string
      bold: string
      semiBold: string
      medium: string
      regular: string
      light: string
    }
  }
}
