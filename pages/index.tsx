import Link from "next/link";
import MainLayout from "../components/main-layout";
import { productsIndex } from "../lib/algolia";
import styles from "./index.module.css";
import { revalidatePath } from "next/cache";

export async function getServerSideProps(context: any) {
  const productsData = await productsIndex.search("");
  return { props: { productsData } };
}

export default function Main({ productsData }: any) {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.h1}>Todos los productos</h1>
        {productsData.hits.map((product: any) => {
          return (
            <div className={styles["card-comp"]} key={product.objectID}>
              <h3 className={styles["card-title"]}>{product.name}</h3>
              <img
                src={product.pic}
                alt={product.name.toLowerCase().replaceAll(" ", "-")}
                className={styles["card-img"]}
              />
              <div className={styles["card-price-link"]}>
                <h4 className={styles["card-price"]}>${product.price}</h4>
                <Link href={"/products/" + product.objectID}>
                  <button className={styles["card-see-more"]}>
                    Ver mas...
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
}
