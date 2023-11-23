import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { IHero } from "../../interfaces/hero";
import "./hero-select.scss";
import { HeroSelectItem } from "./components/HeroSelectItem";
import { HeroesList } from "../HeroesList";
import { Modal } from "../common/Modal";

interface HeroSelectProps {
  // heroes: IHero[];
  onChangeSelected?: (heroes: IHero[]) => void;
}

const defaultSelectedHeroes = new Array(5).fill(undefined);

export const HeroSelect: React.FC<HeroSelectProps> = ({ onChangeSelected }) => {
  const [selectedHeroes, setSelectedHeroes] = useState<IHero[] | undefined[]>(
    defaultSelectedHeroes
  );
  const [currentHeroIndex, setCurrenHeroIndex] = useState<number | undefined>(
    undefined
  );

  const isModalShown = typeof currentHeroIndex === "number";

  const onSelectHero = (hero: IHero) => {
    if (!isModalShown) return;

    console.log(hero);

    setSelectedHeroes((prev) => {
      const existIndex = prev.findIndex(
        (selectedHero) => selectedHero?.id === hero.id
      );

      if (existIndex !== -1) {
        prev[existIndex] = undefined;
      }

      prev[currentHeroIndex] = hero;
      // onChangeSelected?.((prev as any).filter(Boolean));

      return prev;
    });
    setCurrenHeroIndex(undefined);
  };

  useEffect(() => {
    onChangeSelected?.((selectedHeroes as IHero[]).filter(Boolean));
  }, [JSON.stringify(selectedHeroes)]);

  return (
    <>
      <div className="heroesSelect">
        {selectedHeroes.map((item, index) => {
          return (
            <Fragment key={index}>
              <HeroSelectItem
                onClick={() => setCurrenHeroIndex(index)}
                hero={item}
              />
            </Fragment>
          );
        })}
      </div>
      <Modal
        isOpen={isModalShown}
        onClose={() => setCurrenHeroIndex(undefined)}
      >
        <HeroesList onClick={onSelectHero} />
      </Modal>
    </>
  );
};
