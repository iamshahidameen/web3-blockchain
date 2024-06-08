import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi'
function BalanceShow() {
    const account = useAccount()
    const { connectors, connect, status, error } = useConnect()
    const { disconnect } = useDisconnect()
    const { data, isError, isLoading } = useBalance({
      address: '0xb2AF0048B278a459C82fDC792de0FA22784290f6',
    })
 
  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>
        Balancgge: {isError ? 'There is an error' : isLoading ? 'Loading' :  data?.formatted + data?.symbol  }
        {account.status === 'connected' && (
          
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    </>
  )
}

export default BalanceShow