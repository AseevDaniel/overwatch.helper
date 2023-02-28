import React from "react";
import { IHeroImage } from "../../interfaces/hero";

interface CirecleImageListProps {
  heroes: IHeroImage[];
  className?: string;
}

export const CirecleImageList: React.FC<CirecleImageListProps> = ({
  heroes,
  className,
}) => {
  return (
    <>
      {heroes?.map((hero) => {
        return (
          <img
            key={hero.id}
            className={`${className || ""} circleImage`}
            src={hero.image}
            alt={hero.id}
          />
        );
      })}
    </>
  );
};
