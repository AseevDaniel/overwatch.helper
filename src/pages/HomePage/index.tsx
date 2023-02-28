import React, { useEffect, useState } from "react";
import "./home-page.scss";
import { heroes } from "../../constants/heroes";
import { roles } from "../../constants/roles";
import { HeroSelect } from "../../components/HeroSelect";
import { IHero } from "../../interfaces/hero";
import { HeroesList } from "../../components/HeroesList";
import {
  getBestCountersIds,
  getHeroesById,
} from "../../helpers/teamSuggestions";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  const [selectedEnemyHeroes, setSelectedEnemyHeroes] = useState<IHero[]>([]);
  const isEnemyExist = selectedEnemyHeroes.length > 0;

  const suggestedHeroes = getHeroesById(
    getBestCountersIds(selectedEnemyHeroes)
  );

  // console.log(suggestedHeroes);

  useEffect(() => {
    console.log("selectedEnemyHeroes", selectedEnemyHeroes);
    console.log("best team", getBestCountersIds(selectedEnemyHeroes));
    console.log(
      "best team heroes",
      getHeroesById(getBestCountersIds(selectedEnemyHeroes))
    );
  }, [selectedEnemyHeroes]);

  return (
    <div className="homePage">
      <HeroSelect onChangeSelected={setSelectedEnemyHeroes} />

      {isEnemyExist && (
        <div className="bestHeroes">
          <HeroesList
            enemyTeam={selectedEnemyHeroes}
            heroes={suggestedHeroes}
          />

          <button>Generate Team</button>
        </div>
      )}
    </div>
  );
};
