"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createBrand = async (data: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });
  revalidateTag("Brands")
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllBrand = async ()=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand`,{
          next: {
            tags: ["Brands"],
          },
        })
        return res.json()
    } catch (error) {
        
    }
}

export const deleteBrand = async (brandId:string):Promise<any>=>{
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/brand/${brandId}`,{
                method:"DELETE",
                headers:{
                    Authorization:(await cookies()).get("accessToken")!.value
                }
            }

        );
        revalidateTag("Brands")
        return res.json()
    } catch (error) {
        
    }
}