import ManageProducts from "@/components/modules/shop/products";
import { getAllProduct } from "@/services/products";





const ManageProductsPage = async () => {
  const { data, meta } = await getAllProduct() ;
  return (
    <div>
      <ManageProducts products={data} />
    </div>
  );
};

export default ManageProductsPage;