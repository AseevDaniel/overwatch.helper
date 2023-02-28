import React from "react";

interface EmptyStateHeroProps {}

const emptyImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Circled_plus.svg/800px-Circled_plus.svg.png";

export const EmptyStateHero: React.FC<EmptyStateHeroProps> = ({}) => {
  return (
    <div className="emptyStateHero">
      <img src={emptyImage} alt="" />
    </div>
  );
};
