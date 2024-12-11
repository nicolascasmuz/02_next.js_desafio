import styles from "./id.module.css";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(context: any) {
  const id = context.params.id;

  const res = await fetch("http://localhost:3000/api/product/" + id);
  const productData = await res.json();
  return { props: { productData }, revalidate: 1000 };
}

export default function ProductsISG({ productData }: any) {
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
