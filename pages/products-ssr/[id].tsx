import styles from "./id.module.css";
import MainLayout from "../../components/main-layout";

export async function getServerSideProps(context: any) {
  const id = context.params.id;

  const res = await fetch("http://localhost:3000/api/product/" + id);
  const productData = await res.json();
  return { props: { productData } };
}

export default function ProductsSSR({ productData }: any) {
  return (
    <MainLayout>
      <div className={styles["card-comp"]}>
        <h3 className={styles["card-title"]}>{productData.name}</h3>
        <img
          src={productData.pic}
          alt={productData.name.toLowerCase().replaceAll(" ", "-")}
          className={styles["card-img"]}
        />
        <h4 className={styles["card-price"]}>${productData.price}</h4>
      </div>
    </MainLayout>
  );
}
