import React from "react";
import { IHero } from "../../../interfaces/hero";
import { EmptyStateHero } from "./EmptyStateHero";
import { roles } from "../../../constants/roles";

interface HeroSelectItemProps {
  hero?: IHero;
  onClick: () => void;
}

export const HeroSelectItem: React.FC<HeroSelectItemProps> = ({
  hero,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="heroSelectItem">
      {hero ? (
        <div className="selectedHero">
          <img className="heroImage" src={hero.image} alt="" />
          <span>
            {hero.name} <img src={roles[hero.role]} alt="" />
          </span>
        </div>
      ) : (
        <EmptyStateHero />
      )}
    </div>
  );
};
