import { useMoralis } from "react-moralis";
import { useEffect } from "react";

export default function Headers() {
  const {
    enableWeb3,
    account,
    isWeb3Enabled,
    deactivateWeb3,
    Moralis,
    isWeb3EnableLoading,
  } = useMoralis();
  useEffect(() => {
    if (
      !isWeb3Enabled &&
      typeof window !== "undefined" &&
      window.localStorage.getItem("connected")
    ) {
      enableWeb3();
      // enableWeb3({provider: window.localStorage.getItem("connected")}) // add walletconnect
    }
  }, [isWeb3Enabled]);

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      console.log(`Account changed to ${account}`);
      if (account == null) {
        window.localStorage.removeItem("connected");
        deactivateWeb3();
        console.log("Null Account found");
      }
    });
  }, []);

  return (
    <nav className="p-5 border-b-2 flex flex-row">
      <h1 className="py-4 px-4 font-bold text-3xl"> Decentralized Lottery</h1>
      <div className="ml-auto py-2 px-4">
        {account ? (
          <div>
            Connected to {account.slice(0, 6)}...
            {account.slice(account.length - 4)}
          </div>
        ) : (
          <button
            onClick={async () => {
              enableWeb3();
              if (typeof window !== "undefined") {
                window.localStorage.setItem("connected", "injected");
                // window.localStorage.setItem("connected", "walletconnect")
              }
            }}
            disabled={isWeb3EnableLoading}
          >
            Connect
          </button>
        )}

        {/* <ConnectButton moralisAuth={false} /> */}
      </div>
    </nav>
  );
}
