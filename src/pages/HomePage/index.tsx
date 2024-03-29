import React, { useEffect, useState } from "react";
import { HeroSelect } from "../../components/HeroSelect";
import { IHero } from "../../interfaces/hero";
import { HeroesList } from "../../components/HeroesList";
import {
  getBestCountersIds,
  getHeroesById,
  getHeroesWithoutCounters,
} from "../../helpers/teamSuggestions";
import { BestTeamGenerator } from "../../components/BestTeamGenerator";

import "./home-page.scss";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  const [selectedEnemyHeroes, setSelectedEnemyHeroes] = useState<IHero[]>([]);
  const isEnemyExist = selectedEnemyHeroes.length > 0;

  const suggestedHeroes = getHeroesById(
    getBestCountersIds(selectedEnemyHeroes)
  );

  useEffect(() => {}, [selectedEnemyHeroes]);

  return (
    <div className="homePage">
      <HeroSelect onChangeSelected={setSelectedEnemyHeroes} />

      {isEnemyExist && (
        <div className="bestHeroes">
          <HeroesList
            enemyTeam={selectedEnemyHeroes}
            heroes={suggestedHeroes}
          />

          <BestTeamGenerator counterHeroes={suggestedHeroes} />

          <h2>Other heroes</h2>

          <HeroesList heroes={getHeroesWithoutCounters(selectedEnemyHeroes)} />
        </div>
      )}
    </div>
  );
};
