export const getAllProduct = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product`, {
        next: {
          tags: ["Product"],
        },
      });
      return res.json();
    } catch (error) {}
  };
  