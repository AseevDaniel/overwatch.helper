import React from "react";
import { heroes as defaultHeroes } from "../../constants/heroes";
import { roles } from "../../constants/roles";
import { IHero } from "../../interfaces/hero";

import "./heroes-list.scss";
import {
  getCounterByForHero,
  getGoodAgainstForHero,
} from "../../helpers/teamSuggestions";
import { CirecleImageList } from "./CircleImagesList";

interface HeroesListProps {
  heroes?: IHero[];
  onClick?: (hero: IHero) => void;
  enemyTeam?: IHero[];
  isWithSorting?: boolean;
}

export const HeroesList: React.FC<HeroesListProps> = ({
  heroes = defaultHeroes,
  onClick,
  enemyTeam,
  isWithSorting,
}) => {
  return (
    <div className="heroesList">
      {heroes.map((hero) => {
        return (
          <div
            onClick={() => onClick?.(hero)}
            className="heroCard"
            key={hero.id}
          >
            <img src={hero.image} alt="" />
            <div className="info">
              {hero.name}
              <img className="roleImage" src={roles[hero.role]} alt="" />
            </div>
            {!!enemyTeam && (
              <>
                <div className="goodAgainst circleImageList">
                  <CirecleImageList
                    className="goodAgainstItem"
                    heroes={getGoodAgainstForHero(hero, enemyTeam)}
                  />
                </div>
                <div className="countersBy circleImageList">
                  <CirecleImageList
                    className="countertHeroItem"
                    heroes={getCounterByForHero(hero, enemyTeam)}
                  />
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
