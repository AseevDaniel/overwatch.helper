export type RoleType = "tank" | "damage" | "support";
export type IdType = string;

export interface IRole {
  [key: keyof typeof RoleType]: string;
}

export interface IHero {
  id: IdType;
  name: string;
  role: RoleType;
  image: string;
  counteredBy: IdType[];
  goodAgainst?: IdType[];
}

export interface IHeroImage extends Pick<IHero, "id" | "image"> {}
