import { http, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet ],
  connectors: [
    metaMask({
      dappMetadata: {
        name: "Your DApp Name",
        url: "https://your-dapp-url.com"
      }
    })
  ],
  ssr: true,
  transports: {
    [mainnet.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
