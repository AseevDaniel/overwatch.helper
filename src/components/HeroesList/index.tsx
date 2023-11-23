import React from "react";
import { heroes as defaultHeroes } from "../../constants/heroes";
import { roles } from "../../constants/roles";
import { IHero } from "../../interfaces/hero";

import "./heroes-list.scss";
import {
  getCounterByForHero,
  getGoodAgainstForHero,
  getSortedBestTeam,
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
  const sortedHeroes = getSortedBestTeam(heroes, enemyTeam || []);

  console.log(sortedHeroes);

  return (
    <div className="heroesList">
      {sortedHeroes.map((hero) => {
        if (!hero) return "oh no";

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
