import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi'
function BalanceShow() {
    const account = useAccount()
    const { connectors, connect, status, error } = useConnect()
    const { disconnect } = useDisconnect()
    const { data, isError, isLoading } = useBalance({
      address: '0x97E2bb58790FF8BDe92C189ecAFe3b7aC81a2c69',
    })
 console.log(data, 'data')
  return (
    <>
    <div className="row align-items-md-stretch account__details--item">
      <div className="col-md-6">
        <div className="h-100 p-5 text-bg-dark rounded-3">
          <pre>
          <h2>Account Details</h2>
          <h6>Account Status:<span style={{textTransform:'uppercase'}}> {account.status}</span></h6>
          <h6>Addresses: <span>{account.status === 'connected' && (
          ` ${JSON.stringify(account.addresses)}`
        )}</span> 
          </h6>
          <h6>Chain ID: <span style={{textTransform:'uppercase'}}> {account.chainId}</span></h6>
          </pre>
          {account.status === 'connected' && (
          <button className="btn btn-outline-light" type="button" onClick={() => disconnect()}>Disconnet</button>
        )}
        <div className="connect__metamask--wrapper" data-connector-length={connectors.length}>
        {account.status === 'disconnected' && (
          connectors.map((connector) => (
            <button
            className="btn btn-outline-light" data-connector-uid={connector.type} type="button"
              key={connector.uid}
              onClick={() => connect({ connector })}
            >
              {connector.name}
            </button>
          ))
        )}
        </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-light border rounded-3 account__balance--column">
          <h2>Account Balance</h2>
          <br />
          <h4>Ethereum: {account.status === 'disconnected' ? `Please connect MetaMask to show Balance`: isError ? 'There is an error' : isLoading ? 'Loading' :  data?.formatted + data?.symbol} </h4>
          {account.status === 'connected' && (
          <button className="btn btn-outline-secondary" type="button" onClick={() => disconnect()}>Disconnet</button>
        )}
        <div className="connect__metamask--wrapper" data-connector-length={connectors.length}>
          {account.status === 'disconnected' && (
          connectors.map((connector) => (
            <button
            className="btn btn-outline-secondary" type="button" data-connector-uid={connector.type} 
              key={connector.uid}
              onClick={() => connect({ connector })}
            >
              {connector.name}
            </button>
          ))
        )}</div>
        
        </div>
      </div>
    </div>
     
    </>
  )
}

export default BalanceShow