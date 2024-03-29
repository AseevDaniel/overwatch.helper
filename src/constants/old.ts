import { IHero } from "../interfaces/hero";

export const heroesOld: IHero[] = [
  {
    id: "dva",
    name: "D.Va",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ca114f72193e4d58a85c087e9409242f1a31e808cf4058678b8cbf767c2a9a0a.png",
    counteredBy: ["sombra", "zarya", "roadhog", "junkrat"],
    goodAgainst: ["hanzo", "symmetra", "ana", "baptiste"],
  },
  {
    id: "doomfist",
    name: "Doomfist",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/13750471c693c1a360eb19d5ace229c8599a729cd961d72ebee0e157657b7d18.png",
    counteredBy: ["reaper", "pharah", "genji", "echo"],
    goodAgainst: [],
  },
  {
    id: "junker-queen",
    name: "Junker Queen",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cef2406b2244b80506f83b8fb9ebaf214f41fa8795cbeef84026cd8018561d04.png",
    counteredBy: ["bastion", "zenyatta", "mei", "orisa"],
    goodAgainst: ["symmetra", "ana", "zenyatta"],
  },
  {
    id: "orisa",
    name: "Orisa",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/71e96294617e81051d120b5d04b491bb1ea40e2933da44d6631aae149aac411d.png",
    counteredBy: ["winston", "zenyatta", "junkrat", "reaper"],
    goodAgainst: ["junker-queen", "ramattra", "sigma"],
  },
  {
    id: "ramattra",
    name: "Ramattra",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3e0367155e1940a24da076c6f1f065aacede88dbc323631491aa0cd5a51e0b66.png",
    counteredBy: ["pharah", "roadhog", "orisa", "zenyatta"],
    goodAgainst: [],
  },
  {
    id: "reinhardt",
    name: "Reinhardt",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/490d2f79f8547d6e364306af60c8184fb8024b8e55809e4cc501126109981a65.png",
    counteredBy: ["reaper", "bastion", "pharah", "junkrat"],
    goodAgainst: ["sigma", "ashe", "widowmaker"],
  },
  {
    id: "roadhog",
    name: "Roadhog",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/72e02e747b66b61fcbc02d35d350770b3ec7cbaabd0a7ca17c0d82743d43a7e8.png",
    counteredBy: ["ana", "zarya", "widowmaker", "reaper"],
    goodAgainst: [
      "dva",
      "ramattra",
      "winston",
      "bastion",
      "soldier",
      "baptiste",
      "mercy",
    ],
  },
  {
    id: "sigma",
    name: "Sigma",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cd7a4c0a0df8924afb2c9f6df864ed040f20250440c36ca2eb634acf6609c5e4.png",
    counteredBy: ["orisa", "reaper", "genji", "reinhardt"],
    goodAgainst: ["soldier"],
  },
  {
    id: "winston",
    name: "Winston",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bd9c8e634d89488459dfc1aeb21b602fa5c39aa05601a4167682f3a3fed4e0ee.png",
    counteredBy: ["roadhog", "ana", "junkrat", "moira"],
    goodAgainst: [
      "orisa",
      "cassidy",
      "hanzo",
      "sojourn",
      "soldier",
      "symmetra",
      "tracer",
      "widowmaker",
      "mercy",
      "moira",
      "zenyatta",
    ],
  },
  {
    id: "ball",
    name: "Wrecking Ball",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5c18e39ce567ee8a84078f775b9f76a2ba891de601c059a3d2b46b61ae4afb42.png",
    counteredBy: ["sombra", "reaper", "bastion", "pharah"],
    goodAgainst: ["widowmaker", "moira"],
  },
  {
    id: "zarya",
    name: "Zarya",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8819ba85823136640d8eba2af6fd7b19d46b9ee8ab192a4e06f396d1e5231f7a.png",
    counteredBy: ["pharah", "sombra", "zenyatta", "bastion"],
    goodAgainst: ["dva", "roadhog", "genji", "sojourn"],
  },
  {
    id: "ashe",
    name: "Ashe",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8dc2a024c9b7d95c7141b2ef065590dbc8d9018d12ad15f76b01923986702228.png",
    counteredBy: ["widowmaker", "hanzo", "tracer", "reinhardt"],
    goodAgainst: [],
  },
  {
    id: "bastion",
    name: "Bastion",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4d715f722c42215072b5dd0240904aaed7b5285df0b2b082d0a7f1865b5ea992.png",
    counteredBy: ["roadhog", "junkrat", "ana", "reaper"],
    goodAgainst: [
      "junker-queen",
      "reinhardt",
      "ball",
      "zarya",
      "brigitte",
      "lucio",
    ],
  },
  {
    id: "cassidy",
    name: "Cassidy",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6cfb48b5597b657c2eafb1277dc5eef4a07eae90c265fcd37ed798189619f0a5.png",
    counteredBy: ["widowmaker", "winston", "baptiste", "tracer"],
    goodAgainst: [],
  },
  {
    id: "echo",
    name: "Echo",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f086bf235cc6b7f138609594218a8385c8e5f6405a39eceb0deb9afb429619fe.png",
    counteredBy: ["widowmaker", "sojourn", "hanzo", "sombra"],
    goodAgainst: ["doomfist", "junkrat", "reaper", "torbjorn"],
  },
  {
    id: "genji",
    name: "Genji",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4edf5ea6d58c449a2aeb619a3fda9fff36a069dfbe4da8bc5d8ec1c758ddb8dc.png",
    counteredBy: ["pharah", "brigitte", "zarya", "ana"],
    goodAgainst: [
      "doomfist",
      "sigma",
      "hanzo",
      "soldier",
      "baptiste",
      "zenyatta",
    ],
  },
  {
    id: "hanzo",
    name: "Hanzo",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/aecd8fa677f0093344fab7ccb7c37516c764df3f5ff339a5a845a030a27ba7e0.png",
    counteredBy: ["widowmaker", "winston", "genji", "dva"],
    goodAgainst: ["ashe", "echo", "pharah", "sombra", "baptiste", "brigitte"],
  },
  {
    id: "junkrat",
    name: "Junkrat",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/037e3df083624e5480f8996821287479a375f62b470572a22773da0eaf9441d0.png",
    counteredBy: ["pharah", "kiriko", "echo", "widowmaker"],
    goodAgainst: [
      "dva",
      "orisa",
      "reinhardt",
      "winston",
      "bastion",
      "sombra",
      "brigitte",
    ],
  },
  {
    id: "mei",
    name: "Mei",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1533fcb0ee1d3f9586f84b4067c6f63eca3322c1c661f69bfb41cd9e4f4bcc11.png",
    counteredBy: ["pharah", "sombra", "widowmaker", "soldier"],
    goodAgainst: ["junker-queen"],
  },
  {
    id: "pharah",
    name: "Pharah",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f8261595eca3e43e3b37cadb8161902cc416e38b7e0caa855f4555001156d814.png",
    counteredBy: ["widowmaker", "hanzo", "sojourn", "soldier"],
    goodAgainst: [
      "doomfist",
      "ramattra",
      "reinhardt",
      "ball",
      "zarya",
      "genji",
      "junkrat",
      "mei",
      "reaper",
      "symmetra",
      "torbjorn",
      "tracer",
      "brigitte",
      "lucio",
    ],
  },
  {
    id: "reaper",
    name: "Reaper",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2edb9af69d987bb503cd31f7013ae693640e692b321a73d175957b9e64394f40.png",
    counteredBy: ["widowmaker", "echo", "pharah", "zenyatta"],
    goodAgainst: [
      "doomfist",
      "orisa",
      "reinhardt",
      "roadhog",
      "sigma",
      "ball",
      "bastion",
    ],
  },
  {
    id: "sojourn",
    name: "Sojourn",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a53bf7ad9d2f33aaf9199a00989f86d4ba1f67c281ba550312c7d96e70fec4ea.png",
    counteredBy: ["winston", "zarya", "widowmaker", "lucio"],
    goodAgainst: ["echo", "pharah", "widowmaker", "kiriko", "mercy"],
  },
  {
    id: "soldier",
    name: "Soldier: 76",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/20b4ef00ed05d6dba75df228241ed528df7b6c9556f04c8070bad1e2f89e0ff5.png",
    counteredBy: ["roadhog", "winston", "genji", "sigma"],
    goodAgainst: ["pharah", "mei"],
  },
  {
    id: "sombra",
    name: "Sombra",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bca8532688f01b071806063b9472f1c0f9fc9c7948e6b59e210006e69cec9022.png",
    counteredBy: ["hanzo", "junkrat", "widowmaker", "tracer"],
    goodAgainst: ["dva", "ball", "zarya", "echo", "mei", "kiriko", "moira"],
  },
  {
    id: "symmetra",
    name: "Symmetra",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7f2024c5387c9d76d944a5db021c2774d1e9d7cbf39e9b6a35b364d38ea250ac.png",
    counteredBy: ["dva", "pharah", "winston", "junker-queen"],
    goodAgainst: [],
  },
  {
    id: "torbjorn",
    name: "Torbjorn",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1309ab1add1cc19189a2c8bc7b1471f88efa1073e9705d2397fdb37d45707d01.png",
    counteredBy: ["pharah", "widowmaker", "ana", "echo"],
    goodAgainst: ["tracer", "lucio"],
  },
  {
    id: "tracer",
    name: "Tracer",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a66413200e934da19540afac965cfe8a2de4ada593d9a52d53108bb28e8bbc9c.png",
    counteredBy: ["winston", "brigitte", "pharah", "torbjorn"],
    goodAgainst: ["ashe", "cassidy", "sombra", "ana", "kiriko"],
  },
  {
    id: "widowmaker",
    name: "Widowmaker",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a714f1cb33cc91c6b5b3e89ffe7e325b99e7c89cc8e8feced594f81305147efe.png",
    counteredBy: ["winston", "ball", "sojourn", "reinhardt"],
    goodAgainst: [
      "roadhog",
      "ashe",
      "cassidy",
      "echo",
      "hanzo",
      "junkrat",
      "mei",
      "pharah",
      "reaper",
      "sojourn",
      "sombra",
      "torbjorn",
      "ana",
      "kiriko",
      "mercy",
      "moira",
      "zenyatta",
    ],
  },
  {
    id: "ana",
    name: "Ana",
    role: "support",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png",
    counteredBy: ["dva", "widowmaker", "junker-queen", "tracer"],
    goodAgainst: ["roadhog", "winston", "bastion", "genji", "torbjorn"],
  },
  {
    id: "baptiste",
    name: "Baptiste",
    role: "support",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f979896f74ba22db2a92a85ae1260124ab0a26665957a624365e0f96e5ac5b5c.png",
    counteredBy: ["dva", "genji", "hanzo", "roadhog"],
    goodAgainst: ["cassidy"],
  },
  {
    id: "brigitte",
    name: "Brigitte",
    role: "support",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/48392820c6976ee1cd8dde13e71df85bf15560083ee5c8658fe7c298095d619a.png",
    counteredBy: ["bastion", "pharah", "junkrat", "hanzo"],
    goodAgainst: ["genji", "tracer"],
  },
  {
    id: "kiriko",
    name: "Kiriko",
    role: "support",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/088aff2153bdfa426984b1d5c912f6af0ab313f0865a81be0edd114e9a2f79f9.png",
    counteredBy: ["widowmaker", "sombra", "sojourn", "tracer"],
    goodAgainst: ["junkrat"],
  },
  {
    id: "lucio",
    name: "Lucio",
    role: "support",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e2ff2527610a0fbe0c9956f80925123ef3e66c213003e29d37436de30b90e4e1.png",
    counteredBy: ["pharah", "torbjorn", "moira", "bastion"],
    goodAgainst: ["sojourn"],
  },
  {
    id: "mercy",
    name: "Mercy",
    role: "support",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2508ddd39a178d5f6ae993ab43eeb3e7961e5a54a9507e6ae347381193f28943.png",
    counteredBy: ["widowmaker", "winston", "roadhog", "sojourn"],
    goodAgainst: [],
  },
  {
    id: "moira",
    name: "Moira",
    role: "support",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/000beeb5606e01497897fa9210dd3b1e78e1159ebfd8afdc9e989047d7d3d08f.png",
    counteredBy: ["widowmaker", "sombra", "ball", "winston"],
    goodAgainst: ["winston", "lucio"],
  },
  {
    id: "zenyatta",
    name: "Zenyatta",
    role: "support",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/71cabc939c577581f66b952f9c70891db779251e8e70f29de3c7bf494edacfe4.png",
    counteredBy: ["junker-queen", "winston", "widowmaker", "genji"],
    goodAgainst: ["junker-queen", "orisa", "ramattra", "zarya", "reaper"],
  },
];
