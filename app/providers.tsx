'use client'

import { DVCProvider, withDVCProvider } from "@devcycle/devcycle-react-sdk";

const DVC_TOKEN = 'my token'

const Providers = ({ children } : { children: React.ReactNode }) => {
  return <DVCProvider config={{ envKey: DVC_TOKEN }}><h1>{children}</h1></DVCProvider>
}

export default Providers
