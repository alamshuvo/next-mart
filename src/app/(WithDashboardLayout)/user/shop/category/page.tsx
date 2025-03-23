import ManageCategories from "@/components/modules/shop/category";
import { getAllCategories } from "@/services/category";


const ProductCategory = async() => {
    const {data,meta} = await getAllCategories();
    console.log(data);
    return (
        <div>
           <ManageCategories categories={data}></ManageCategories>
        </div>
    );
};

export default ProductCategory;