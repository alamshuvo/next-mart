import React from "react";
import CreateBrandModal from "./CreateBrand";

const ManageBrand = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Manage Brand</h1>
          <CreateBrandModal></CreateBrandModal>
        </div>
      </div>
    </div>
  );
};

export default ManageBrand;
