
const block = document.getElementById('main')



const enemyTeam = []
const counters = []

for (let i = 0; i < 5; i++) {

    const el = document.createElement('div')
    const img = document.createElement('img')
    const roleImg = document.createElement('img')

    img.src = heroes[i].image
    roleImg.src = roles[heroes[i].role]
    el.textContent = heroes[i].name

    enemyTeam.push(heroes[i])
    counters.push(...heroes[i].counteredBy)
     
}

enemyTeam.forEach( hero => {
    const el = document.createElement('div')
    const img = document.createElement('img')
    const roleImg = document.createElement('img')

    img.src = hero.image
    roleImg.src = roles[hero.role]
    el.textContent = hero.name
    


    el.append(img)
    el.append(roleImg)

    hero.counteredBy.forEach( counteredItem => {
        const newItem = document.createElement('p')
        newItem.textContent = heroes.find( hero => hero.id === counteredItem)?.name || '000000000000000000000000000000000000000000000'
        el.append(newItem)
    })

    block.append(el)
})





function _countDuplicate(a){
    let counts = {}
   
    for(let i =0; i < a.length; i++){ 
        if (counts[a[i]]){
            counts[a[i]] += 1
        } else {
            counts[a[i]] = 1
        }
    }  

    return counts
}

function _sortObject(object){
    const sorted = Object.keys(object)
  .sort((key1, key2) => object[key2] - object[key1])
  .reduce(
    (obj, key) => ({
      ...obj,
      [key]: object[key]
    }),
    {}
  )

  return sorted
}

function createBestTeam(counterHeroes, goodHeroes){
    const allHeroes = [...counterHeroes, ...goodHeroes]

     support = 2
     damage = 2
     tank = 1

    const resTeam = []
    
    heroes.forEach( hero => {
        if(this[hero.role] > 0) {
            resTeam.push(hero) 
            this[hero.role] --
        }
    })

    return resTeam

}

const bestCounters = _sortObject(_countDuplicate(counters))

const counterHeroes = Object.keys(bestCounters).map( element => heroes.find( h => h.id === element))

const goodHeroes = heroes.filter( hero => {
    let isConteredByEnemy = false
    enemyTeam.forEach(enemy => {
        if(hero.counteredBy.includes(enemy.id)){
            isConteredByEnemy = true
            return
        }
    })
    return !isConteredByEnemy
})

console.log(goodHeroes);


const bestTeam = createBestTeam(counterHeroes)
console.log(bestTeam);

if(bestTeam.length < 5)

bestTeam.forEach(hero => {
    if(!hero) return

    const el = document.createElement('div')
    const img = document.createElement('img')
    const roleImg = document.createElement('img')

    img.src = hero.image
    roleImg.src = roles[hero.role]
    el.textContent = hero.name + ' Counter ' + bestCounters[hero.id] + ' heroes'

    el.append(img)

    block.append(el)
});



