import { IdType, IHero } from "../interfaces/hero";
import { heroes, heroImages } from "../constants/heroes";

// console.log(
//     heroes.map((h) => {
//       return {
//         ...h,
//         goodAgainst: heroes.filter( hero => {
//           return hero.counteredBy.includes(h.id)
//         }).map( hero => hero.id)
//       };
//     })
// );

// for getting new data about against

export const getBestCountersIds = (enemyTeam: IHero[]): string[] => {
  const bestCountersIds = enemyTeam.reduce((res, hero): any => {
    return [...res, ...(hero.counteredBy as string[])];
  }, []);

  const counters = _countDuplicate(bestCountersIds);
  const sortedCounters = _sortObject(counters);

  return Object.keys(sortedCounters);

  // console.log(bestCountersIds);

  // return bestCountersIds.map((id) => {
  //   return heroes.find((hero) => hero.id === id);
  // }) as IHero[];
};

export const getHeroesById = (heroIds: string[]): IHero[] => {
  return heroIds.map((id) => {
    return heroes.find((hero) => hero.id === id);
  }) as IHero[];
};

export const getGoodAgainstForHero = (hero: IHero, enemyTeam = heroes) => {
  return heroImages
    .filter((againstHero) => {
      return hero.goodAgainst?.includes(againstHero.id);
    })
    .filter((hero) => {
      return !!enemyTeam.find((enemy) => enemy.id === hero.id);
    });
};

export const getCounterByForHero = (hero: IHero, enemyTeam = heroes) => {
  return heroImages
    .filter((againstHero) => {
      return hero.counteredBy.includes(againstHero.id);
    })
    .filter((hero) => {
      return !!enemyTeam.find((enemy) => enemy.id === hero.id);
    });
};

const _countDuplicate = (a: any[]) => {
  let counts: any = {};

  for (let i = 0; i < a.length; i++) {
    if (counts[a[i]]) {
      counts[a[i]] += 1;
    } else {
      counts[a[i]] = 1;
    }
  }

  return counts;
};

const _sortObject = (object: any) => {
  const sorted = Object.keys(object)
    .sort((key1, key2) => object[key2] - object[key1])
    .reduce(
      (obj, key) => ({
        ...obj,
        [key]: object[key],
      }),
      {}
    );

  return sorted;
};
