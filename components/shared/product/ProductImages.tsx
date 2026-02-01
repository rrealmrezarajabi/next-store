"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-75 object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            onClick={() => setCurrent(index)}
            key={image}
            className={cn(
              "cursor-pointer border p-1 mr-2 hover:border-blue-300",
              current === index && "border-blue-500",
            )}
          >
            <Image src={image} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
