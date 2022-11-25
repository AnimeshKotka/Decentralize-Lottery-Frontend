import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header.component";
import LotteryEntrance from "../components/LotteryEnterence";
import Web3Header from "../components/Web3Header";
import { useMoralis } from "react-moralis";
const supportedChains = ["31337", "5"];

export default function Home() {
  const { isWeb3Enabled, chainId } = useMoralis();

  return (
    <div className={styles.container}>
      <Head>
        <title>Raffle Lottery</title>
        <meta name="description" content="Smart Contract Lottery " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}
      <Web3Header />
      {isWeb3Enabled ? (
        <div>
          {supportedChains.includes(parseInt(chainId).toString()) ? (
            <div className="flex flex-row">
              <LotteryEntrance className="p-8" />
            </div>
          ) : (
            <div>{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</div>
          )}
        </div>
      ) : (
        <div>Please connect to a Wallet</div>
      )}
      <footer className={styles.footer}>
        <a
          href="https://github.com/AnimeshKotka"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
