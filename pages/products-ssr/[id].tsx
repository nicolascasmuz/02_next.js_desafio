import styles from "./id.module.css";
import { productsIndex } from "../../lib/algolia";

export async function getServerSideProps(context: any) {
  const id = context.params.id;

  const productData = await productsIndex.getObject(id);
  return { props: { productData } };
}

export default function ProductPage({ productData }: any) {
  return (
    <div className={styles["card-comp"]}>
      <h3 className={styles["card-title"]}>{productData.name}</h3>
      <img
        src={productData.pic}
        alt={productData.name.toLowerCase().replaceAll(" ", "-")}
        className={styles["card-img"]}
      />
      <div className={styles["card-price-link"]}>
        <h4 className={styles["card-price"]}>${productData.price}</h4>
        <button className={styles["card-see-more"]}>Ver mas...</button>
      </div>
    </div>
  );
}
