import { createContext, ReactNode, useState } from 'react'

export interface PageContextProps{
    sidebarOpen: boolean,
    showSideBar: (value: boolean) => void,
    userOptions: boolean,
    OpenUserOptions: () => void,
    closeUserOption: () => void,
}

export const PageContext = createContext<PageContextProps>({
    sidebarOpen: false,
    showSideBar: function(value: boolean) : void{},
    userOptions: false,
    OpenUserOptions: function(): void {},
    closeUserOption: function(): void {}

})

function PageContextProvider({children}: {children: ReactNode}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [userOptions, setUserOptions] = useState(false)

    const showSideBar = (value: boolean) => {
        setSidebarOpen(value)
    }

    const OpenUserOptions = () => {
        setUserOptions(!userOptions)
    }

    const closeUserOption = () => {
      setUserOptions(false)
    }

  return (
    <PageContext.Provider value={{sidebarOpen, showSideBar, userOptions, OpenUserOptions, closeUserOption} }>
      {children}
    </PageContext.Provider>
  )
}

export default PageContextProvider
