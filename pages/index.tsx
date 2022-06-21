import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  MediaRenderer,
  useActiveListings,
  useMarketplace,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  // Connect your marketplace smart contract here (replace this address)
  const marketplace = useMarketplace(
    "0x7D5526b94891cA618335cE0dc545Aaff8f61289D" // Your marketplace contract address here
  );

  const { data: listings, isLoading: loadingListings } =
    useActiveListings(marketplace);

  return (
    <>
      {/* Content */}
      <div className={styles.container}>
        {/* Top Section */}
        <h1 className={styles.h1}>Explore our NFTs</h1>
        <div className={styles.categories}>
          <div className={styles.categoria_item1}>
            <div className="box_categorie">
              <img src="https://app.teilur.com/wp-content/uploads/2022/03/icons8-chain-100-2.png" alt="IMG" />
              <div className={styles.info_categorie}>
                <h3>BLOCKCHAIN</h3>
                <p>0 Products</p>
              </div>
            </div>
          </div>
          <div className={styles.categoria_item2}>
            <div className="box_categorie">
              <img src="https://app.teilur.com/wp-content/uploads/2022/03/icons8-base-de-datos-100-2.png" alt="IMG" />
              <div className={styles.info_categorie}>
                <h3>DATA</h3>
              <p>0 Products</p>
              </div>
            </div>
          </div>
          <div className={styles.categoria_item3}>
            <div className="box_categorie">
              <img src="https://app.teilur.com/wp-content/uploads/2022/03/icons8-marketing-96-3.png" alt="IMG" />
              <div className={styles.info_categorie}>
                <h3>MARKETING</h3>
              <p>0 Products</p>
              </div>
            </div>
          </div>
          <div className={styles.categoria_item4}>
            <div className="box_categorie">
              <img src="https://app.teilur.com/wp-content/uploads/2022/03/icons8-puzle-100-3.png" alt="IMG" />
              <div className={styles.info_categorie}>
                <h3>DESIGN</h3>
              <p>0 Products</p>
              </div>
            </div>
          </div>
          <div className={styles.categoria_item5}>
            <div className="box_categorie">
              <img src="https://app.teilur.com/wp-content/uploads/2022/03/icons8-python-100-2.png" alt="IMG" />
              <div className={styles.info_categorie}>
                <h3>SOFTWARE</h3>
              <p>0 Products</p>
              </div>
            </div>
          </div>
        </div>
      {/* <p className={styles.explain}>
          Build an NFT marketplace using{" "}
          <b>
            {" "}
            <a
              href="https://thirdweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.purple}
            >
              thirdweb
            </a>
          </b>{" "}
          to list your ERC721 and ERC1155 tokens for auction or for direct sale.
        </p> */}

        {/* <hr className={styles.divider} /> */}

        {/* <div style={{ marginTop: 32, marginBottom: 32 }}>
          <Link href="/create">
            <a className={styles.mainButton} style={{ textDecoration: "none" }}>
              Create A Listing
            </a>
          </Link>
        </div> */}

        <div className="main">
          {
            // If the listings are loading, show a loading message
            loadingListings ? (
              <div>Loading listings...</div>
            ) : (
              // Otherwise, show the listings
              <div className={styles.listingGrid}>
                {listings?.map((listing) => (
                  <div
                    key={listing.id}
                    className={styles.listingShortView}
                    onClick={() => router.push(`/listing/${listing.id}`)}
                  >
                    <MediaRenderer
                      src={listing.asset.image}
                      style={{
                        borderRadius: 16,
                        // Fit the image to the container
                        width: "100%",
                        height: "100%",
                      }}
                    />
                    <h2 className={styles.nameContainer}>
                      <Link href={`/listing/${listing.id}`}>
                        <a className={styles.name}>{listing.asset.name}</a>
                      </Link>
                    </h2>

                    <p>
                      <b>{listing.buyoutCurrencyValuePerToken.displayValue}</b>{" "}
                      {listing.buyoutCurrencyValuePerToken.symbol}
                    </p>
                  </div>
                ))}
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Home;
