import Link from "next/link";
import MainLayout from "../components/main-layout";
import styles from "./index.module.css";

export async function getServerSideProps(context: any) {
  const res = await fetch("http://localhost:3000/api/products");
  const productsData = await res.json();
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
                <Link href={"/products-ssr/" + product.objectID}>
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
