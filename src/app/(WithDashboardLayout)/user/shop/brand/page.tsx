import ManageBrand from "@/components/modules/shop/brand";
import { getAllBrand } from "@/services/brand";


const CreateBrandPage = async() => {
    const {data,meta} = await getAllBrand();
    console.log(data);
    return (
        <div>
           <ManageBrand data={data}></ManageBrand>
        </div>
    );
};

export default CreateBrandPage;