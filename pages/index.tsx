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
    "0xA26D17927eADE00BB36d45476e528c49470c6C23" // Your marketplace contract address here
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
                <div className={styles.barHover}></div>
                <p>0 Products</p>
              </div>
            </div>
          </div>
          <div className={styles.categoria_item2}>
            <div className="box_categorie">
              <img src="https://app.teilur.com/wp-content/uploads/2022/03/icons8-base-de-datos-100-2.png" alt="IMG" />
              <div className={styles.info_categorie}>
              <h3>DATA</h3>
              <div className={styles.barHover}></div>

              <p>0 Products</p>
              </div>
            </div>
          </div>
          <div className={styles.categoria_item3}>
            <div className="box_categorie">
              <img src="https://app.teilur.com/wp-content/uploads/2022/03/icons8-marketing-96-3.png" alt="IMG" />
              <div className={styles.info_categorie}>
                <h3>MARKETING</h3>
                <div className={styles.barHover}></div>
              <p>0 Products</p>
              </div>
            </div>
          </div>
          <div className={styles.categoria_item4}>
            <div className="box_categorie">
              <img src="https://app.teilur.com/wp-content/uploads/2022/03/icons8-puzle-100-3.png" alt="IMG" />
              <div className={styles.info_categorie}>
                <h3>DESIGN</h3>
                <div className={styles.barHover}></div>
              <p>0 Products</p>
              </div>
            </div>
          </div>
          <div className={styles.categoria_item5}>
            <div className="box_categorie">
              <img src="https://app.teilur.com/wp-content/uploads/2022/03/icons8-python-100-2.png" alt="IMG" />
              <div className={styles.info_categorie}>
                <h3>SOFTWARE</h3>
                <div className={styles.barHover}></div>
              <p>0 Products</p>
              </div>
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

        <div className={styles.main}>
          <div className={styles.filters}>
            <div className={styles.filter_status}>
              <h3>FILTER BY STATUS</h3>
              <div className={styles.box_status}>
                <div className={styles.circle}>
                  <div className={styles.box_circle}>

                  </div>
                  <p>Recruting</p>
                </div>
                <div className={styles.quantity}>
                  1
                </div>
              </div>
            </div>
            <div className={styles.filter_country}>
              <h3>FILTER BY COUNTRY</h3>
                <div className={styles.box_country}>
                  <select value="Any Country">
                    <option value="Any Country" key="">Any Country</option>
                  </select>
                </div>
            </div>
            <div className={styles.filter_vertical}>
              <h3>FILTER BY VERTICAL</h3>
                <div className={styles.box_vertical}>
                  <div className={styles.icon}>
                    <div className={styles.box_icon}>
                    <img src="https://app.teilur.com/wp-content/uploads/2022/03/icons8-python-100-2.png" alt="IMG" />
                    </div>
                    <p>Recruting</p>
                  </div>
                  <div className={styles.quantity}>
                    1
                  </div>
                </div>
            </div>
          </div>
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
                    <div className={styles.img_card}>
                    <MediaRenderer
                      src={listing.asset.image}
                      // style={{
                      //   borderRadius: 16,
                      //   // Fit the image to the container
                      //   width: "80%",
                      //   height: "80%",
                      // }}
                    />
                    </div>
                    <div className={styles.description_card}>
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
                  </div>
                ))}
              </div>
            )
          }
        </div>
    </>
  );
};

export default Home;
