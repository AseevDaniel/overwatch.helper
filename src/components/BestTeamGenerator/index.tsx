import React, { useState } from "react";
import { Modal } from "../common/Modal";
import { HeroesList } from "../HeroesList";
import { IHero } from "../../interfaces/hero";
import { createBestTeam } from "../../helpers/teamSuggestions";

interface BestTeamGeneratorProps {
  counterHeroes: IHero[];
  goodHeroes?: IHero[];
}

export const BestTeamGenerator: React.FC<BestTeamGeneratorProps> = ({
  counterHeroes,
  goodHeroes,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const bestTeam: IHero[] = createBestTeam(counterHeroes, goodHeroes);

  return (
    <div className="best-team-generator">
      <button onClick={() => setIsOpen(true)}>Generate Best Team</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <HeroesList heroes={bestTeam} />
      </Modal>
    </div>
  );
};
