import { z } from "zod";

export const createShopSchema = z.object({
  shopName: z
    .string({ required_error: "ShopName is required" })
    .min(2, "Shop Name must be between 2 and 50 characters")
    .max(50, "Shop Name must be between 2 and 50 characters"),
  businessLicenseNumber: z
    .string({ required_error: "Business License number is required" }),
  address: z
    .string({ required_error: "address is required" }),
    contactNumber: z
    .string({ required_error: "Contact number  is required" })
    .min(1),
    website:z.string()
});
