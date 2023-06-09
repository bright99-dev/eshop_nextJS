import React from "react";
import CardProduct from "./CardProduct";
import { SlEnergy } from "react-icons/sl";
import Grid from "./Grid";

const SectionProduct: React.FC<SectionProduct> = ({
  title,
  data,
  compareIcon,
  className,
}) => {
  return (
    <Grid variant="primary" className={`${className}`}>
      {title && (
        <div className="flex items-center text-2xl font-bold mb-2">
          <SlEnergy className="mr-2" />
          {title}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {data.map((item, index) => (
          <div key={index}>
            <CardProduct data={item} compareIcon={compareIcon}/>
          </div>
        ))}
      </div>
    </Grid>
  );
};

export default SectionProduct;

export function SectionProductSkeleton({ title }:SectionProductSkeleton ) {
  return (
    <Grid variant="primary">
      {title && (
        <div className="flex items-center text-2xl font-bold mb-2">
          <SlEnergy className="mr-2" />
          {title}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="w-full h-[280px] bg-gray-200 rounded-md animate-pulse"></div>
        <div className="w-full h-[280px] bg-gray-200 rounded-md animate-pulse"></div>
        <div className="w-full h-[280px] bg-gray-200 rounded-md animate-pulse"></div>
        <div className="w-full h-[280px] bg-gray-200 rounded-md animate-pulse"></div>
      </div>
    </Grid>
  );
}
