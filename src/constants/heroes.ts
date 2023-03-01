import { IHero, IHeroImage } from "../interfaces/hero";

export const heroes: IHero[] = [
  {
    id: "dva",
    name: "D.Va",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ca114f72193e4d58a85c087e9409242f1a31e808cf4058678b8cbf767c2a9a0a.png",
    counteredBy: [
      "zarya",
      "sigma",
      "symmetra",
      "sombra",
      "baptiste",
      "zenyatta",
    ],
    goodAgainst: [
      "winston",
      "ball",
      "bastion",
      "echo",
      "hanzo",
      "junkrat",
      "pharah",
      "sojourn",
      "ana",
      "mercy",
    ],
  },
  {
    id: "doomfist",
    name: "Doomfist",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/13750471c693c1a360eb19d5ace229c8599a729cd961d72ebee0e157657b7d18.png",
    counteredBy: ["roadhog", "orisa", "sombra", "pharah", "ana", "brigitte"],
    goodAgainst: ["mei", "sojourn", "soldier", "baptiste"],
  },
  {
    id: "junker-queen",
    name: "Junker Queen",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cef2406b2244b80506f83b8fb9ebaf214f41fa8795cbeef84026cd8018561d04.png",
    counteredBy: ["rainhardt", "zarya", "ashe", "sojourn", "kiriko", "ana"],
    goodAgainst: ["zenyatta"],
  },
  {
    id: "orisa",
    name: "Orisa",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/71e96294617e81051d120b5d04b491bb1ea40e2933da44d6631aae149aac411d.png",
    counteredBy: ["zarya", "sigma", "pharah", "ashe", "baptiste", "lucio"],
    goodAgainst: [
      "doomfist",
      "ramattra",
      "reinhardt",
      "reaper",
      "torbjorn",
      "tracer",
    ],
  },
  {
    id: "ramattra",
    name: "Ramattra",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3e0367155e1940a24da076c6f1f065aacede88dbc323631491aa0cd5a51e0b66.png",
    counteredBy: ["orisa", "roadhog", "pharah", "bastion", "ana", "zenyatta"],
    goodAgainst: ["reinhardt", "echo", "pharah", "brigitte", "kiriko", "mercy"],
  },
  {
    id: "reinhardt",
    name: "Reinhardt",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/490d2f79f8547d6e364306af60c8184fb8024b8e55809e4cc501126109981a65.png",
    counteredBy: [
      "orisa",
      "ball",
      "ramattra",
      "sojourn",
      "sombra",
      "kiriko",
      "lucio",
    ],
    goodAgainst: [],
  },
  {
    id: "roadhog",
    name: "Roadhog",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/72e02e747b66b61fcbc02d35d350770b3ec7cbaabd0a7ca17c0d82743d43a7e8.png",
    counteredBy: ["sigma", "zarya", "hanzo", "reaper", "ana", "zenyatta"],
    goodAgainst: [
      "doomfist",
      "ramattra",
      "winston",
      "ball",
      "cassidy",
      "echo",
      "symmetra",
      "tracer",
      "lucio",
      "mercy",
      "moira",
    ],
  },
  {
    id: "sigma",
    name: "Sigma",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cd7a4c0a0df8924afb2c9f6df864ed040f20250440c36ca2eb634acf6609c5e4.png",
    counteredBy: ["zarya", "winston", "sombra", "pharah", "lucio", "zenyatta"],
    goodAgainst: [
      "dva",
      "orisa",
      "roadhog",
      "ashe",
      "bastion",
      "cassidy",
      "hanzo",
      "torbjorn",
      "kiriko",
    ],
  },
  {
    id: "winston",
    name: "Winston",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bd9c8e634d89488459dfc1aeb21b602fa5c39aa05601a4167682f3a3fed4e0ee.png",
    counteredBy: ["roadhog", "dva", "reaper", "sojourn", "ana", "zenyatta"],
    goodAgainst: [
      "sigma",
      "zarya",
      "ashe",
      "genji",
      "mei",
      "soldier",
      "sombra",
      "widowmaker",
      "lucio",
    ],
  },
  {
    id: "ball",
    name: "Wrecking Ball",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5c18e39ce567ee8a84078f775b9f76a2ba891de601c059a3d2b46b61ae4afb42.png",
    counteredBy: ["roadhog", "dva", "sombra", "reaper", "ana", "lucio"],
    goodAgainst: [
      "reinhardt",
      "zarya",
      "pharah",
      "widowmaker",
      "baptiste",
      "kiriko",
    ],
  },
  {
    id: "zarya",
    name: "Zarya",
    role: "tank",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8819ba85823136640d8eba2af6fd7b19d46b9ee8ab192a4e06f396d1e5231f7a.png",
    counteredBy: [
      "winston",
      "ball",
      "widowmaker",
      "tracer",
      "lucio",
      "zenyatta",
    ],
    goodAgainst: [
      "dva",
      "junker-queen",
      "orisa",
      "roadhog",
      "sigma",
      "genji",
      "junkrat",
      "reaper",
      "sombra",
      "symmetra",
      "ana",
      "brigitte",
    ],
  },
  {
    id: "ashe",
    name: "Ashe",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8dc2a024c9b7d95c7141b2ef065590dbc8d9018d12ad15f76b01923986702228.png",
    counteredBy: ["sigma", "winston", "widowmaker", "tracer", "kiriko", "ana"],
    goodAgainst: ["junker-queen", "orisa", "echo", "baptiste"],
  },
  {
    id: "bastion",
    name: "Bastion",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4d715f722c42215072b5dd0240904aaed7b5285df0b2b082d0a7f1865b5ea992.png",
    counteredBy: ["dva", "sigma", "sojourn", "hanzo", "zenyatta", "lucio"],
    goodAgainst: ["ramattra"],
  },
  {
    id: "cassidy",
    name: "Cassidy",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6cfb48b5597b657c2eafb1277dc5eef4a07eae90c265fcd37ed798189619f0a5.png",
    counteredBy: [
      "sigma",
      "roadhog",
      "widowmaker",
      "hanzo",
      "zenyatta",
      "baptiste",
    ],
    goodAgainst: ["mercy"],
  },
  {
    id: "echo",
    name: "Echo",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f086bf235cc6b7f138609594218a8385c8e5f6405a39eceb0deb9afb429619fe.png",
    counteredBy: [
      "ramattra",
      "dva",
      "roadhog",
      "ashe",
      "soldier",
      "widowmaker",
      "mercy",
      "ana",
    ],
    goodAgainst: ["hanzo", "junkrat", "pharah", "reaper"],
  },
  {
    id: "genji",
    name: "Genji",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4edf5ea6d58c449a2aeb619a3fda9fff36a069dfbe4da8bc5d8ec1c758ddb8dc.png",
    counteredBy: ["winston", "zarya", "pharah", "torbjorn", "lucio", "moira"],
    goodAgainst: ["widowmaker"],
  },
  {
    id: "hanzo",
    name: "Hanzo",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/aecd8fa677f0093344fab7ccb7c37516c764df3f5ff339a5a845a030a27ba7e0.png",
    counteredBy: ["sigma", "dva", "pharah", "echo", "mercy", "zenyatta"],
    goodAgainst: [
      "roadhog",
      "bastion",
      "cassidy",
      "mei",
      "sojourn",
      "soldier",
      "sombra",
      "torbjorn",
      "ana",
      "baptiste",
      "kiriko",
    ],
  },
  {
    id: "junkrat",
    name: "Junkrat",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/037e3df083624e5480f8996821287479a375f62b470572a22773da0eaf9441d0.png",
    counteredBy: [
      "dva",
      "zarya",
      "pharah",
      "echo",
      "widowmaker",
      "baptiste",
      "kiriko",
    ],
    goodAgainst: [],
  },
  {
    id: "mei",
    name: "Mei",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1533fcb0ee1d3f9586f84b4067c6f63eca3322c1c661f69bfb41cd9e4f4bcc11.png",
    counteredBy: [
      "doomfist",
      "winston",
      "pharah",
      "hanzo",
      "baptiste",
      "kiriko",
    ],
    goodAgainst: [],
  },
  {
    id: "pharah",
    name: "Pharah",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f8261595eca3e43e3b37cadb8161902cc416e38b7e0caa855f4555001156d814.png",
    counteredBy: [
      "dva",
      "ball",
      "ramattra",
      "echo",
      "widowmaker",
      "mercy",
      "baptiste",
    ],
    goodAgainst: [
      "doomfist",
      "orisa",
      "ramattra",
      "sigma",
      "genji",
      "hanzo",
      "junkrat",
      "mei",
      "reaper",
      "symmetra",
      "torbjorn",
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
    counteredBy: ["zarya", "orisa", "echo", "pharah", "ana", "lucio"],
    goodAgainst: ["roadhog", "winston", "ball", "moira"],
  },
  {
    id: "sojourn",
    name: "Sojourn",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a53bf7ad9d2f33aaf9199a00989f86d4ba1f67c281ba550312c7d96e70fec4ea.png",
    counteredBy: ["dva", "doomfist", "widowmaker", "hanzo", "mercy", "lucio"],
    goodAgainst: [
      "junker-queen",
      "reinhardt",
      "winston",
      "bastion",
      "sombra",
      "kiriko",
    ],
  },
  {
    id: "soldier",
    name: "Soldier: 76",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/20b4ef00ed05d6dba75df228241ed528df7b6c9556f04c8070bad1e2f89e0ff5.png",
    counteredBy: [
      "doomfist",
      "winston",
      "widowmaker",
      "hanzo",
      "zenyatta",
      "ana",
    ],
    goodAgainst: ["echo", "tracer", "brigitte", "mercy"],
  },
  {
    id: "sombra",
    name: "Sombra",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bca8532688f01b071806063b9472f1c0f9fc9c7948e6b59e210006e69cec9022.png",
    counteredBy: ["zarya", "winston", "hanzo", "sojourn", "ana", "kiriko"],
    goodAgainst: [
      "dva",
      "doomfist",
      "reinhardt",
      "sigma",
      "ball",
      "symmetra",
      "lucio",
      "moira",
      "zenyatta",
    ],
  },
  {
    id: "symmetra",
    name: "Symmetra",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7f2024c5387c9d76d944a5db021c2774d1e9d7cbf39e9b6a35b364d38ea250ac.png",
    counteredBy: ["roadhog", "zarya", "sombra", "pharah", "lucio", "mercy"],
    goodAgainst: ["dva"],
  },
  {
    id: "torbjorn",
    name: "Torbjorn",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1309ab1add1cc19189a2c8bc7b1471f88efa1073e9705d2397fdb37d45707d01.png",
    counteredBy: ["orisa", "sigma", "pharah", "hanzo", "zenyatta", "kiriko"],
    goodAgainst: ["genji", "tracer"],
  },
  {
    id: "tracer",
    name: "Tracer",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a66413200e934da19540afac965cfe8a2de4ada593d9a52d53108bb28e8bbc9c.png",
    counteredBy: [
      "roadhog",
      "orisa",
      "torbjorn",
      "soldier",
      "kiriko",
      "batiste",
    ],
    goodAgainst: ["zarya", "ashe", "widowmaker", "zenyatta"],
  },
  {
    id: "widowmaker",
    name: "Widowmaker",
    role: "damage",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a714f1cb33cc91c6b5b3e89ffe7e325b99e7c89cc8e8feced594f81305147efe.png",
    counteredBy: ["winston", "ball", "genji", "tracer", "lucio", "moira"],
    goodAgainst: [
      "zarya",
      "ashe",
      "cassidy",
      "echo",
      "junkrat",
      "pharah",
      "sojourn",
      "soldier",
      "ana",
      "zenyatta",
    ],
  },
  {
    id: "ana",
    name: "Ana",
    role: "support",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png",
    counteredBy: ["dva", "zarya", "widowmaker", "hanzo", "kiriko", "lucio"],
    goodAgainst: [
      "doomfist",
      "junker-queen",
      "ramattra",
      "roadhog",
      "winston",
      "ball",
      "ashe",
      "echo",
      "reaper",
      "soldier",
      "sombra",
      "mercy",
      "moira",
      "zenyatta",
    ],
  },
  {
    id: "baptiste",
    name: "Baptiste",
    role: "support",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f979896f74ba22db2a92a85ae1260124ab0a26665957a624365e0f96e5ac5b5c.png",
    counteredBy: ["ball", "doomfist", "hanzo", "ashe", "zenyatta", "lucio"],
    goodAgainst: [
      "dva",
      "orisa",
      "cassidy",
      "junkrat",
      "mei",
      "pharah",
      "mercy",
      "moira",
    ],
  },
  {
    id: "brigitte",
    name: "Brigitte",
    role: "support",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/48392820c6976ee1cd8dde13e71df85bf15560083ee5c8658fe7c298095d619a.png",
    counteredBy: [
      "rainhardt",
      "zarya",
      "ramattra",
      "pharah",
      "soldier",
      "lucio",
      "moira",
    ],
    goodAgainst: ["doomfist", "kiriko"],
  },
  {
    id: "kiriko",
    name: "Kiriko",
    role: "support",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/088aff2153bdfa426984b1d5c912f6af0ab313f0865a81be0edd114e9a2f79f9.png",
    counteredBy: [
      "sigma",
      "ball",
      "ramattra",
      "hanzo",
      "sojourn",
      "moira",
      "brigitte",
    ],
    goodAgainst: [
      "junker-queen",
      "reinhardt",
      "ashe",
      "junkrat",
      "mei",
      "sombra",
      "torbjorn",
      "tracer",
      "ana",
      "lucio",
    ],
  },
  {
    id: "lucio",
    name: "Lucio",
    role: "support",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e2ff2527610a0fbe0c9956f80925123ef3e66c213003e29d37436de30b90e4e1.png",
    counteredBy: ["roadhog", "winston", "sombra", "pharah", "moira", "kiriko"],
    goodAgainst: [
      "orisa",
      "reinhardt",
      "sigma",
      "ball",
      "zarya",
      "bastion",
      "genji",
      "reaper",
      "sojourn",
      "symmetra",
      "widowmaker",
      "ana",
      "baptiste",
      "brigitte",
      "zenyatta",
    ],
  },
  {
    id: "mercy",
    name: "Mercy",
    role: "support",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2508ddd39a178d5f6ae993ab43eeb3e7961e5a54a9507e6ae347381193f28943.png",
    counteredBy: [
      "dva",
      "roadhog",
      "ramattra",
      "soldier",
      "cassidy",
      "ana",
      "baptiste",
    ],
    goodAgainst: ["echo", "hanzo", "pharah", "sojourn", "symmetra"],
  },
  {
    id: "moira",
    name: "Moira",
    role: "support",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/000beeb5606e01497897fa9210dd3b1e78e1159ebfd8afdc9e989047d7d3d08f.png",
    counteredBy: [
      "roadhog",
      "rainhardt",
      "sombra",
      "reaper",
      "ana",
      "baptiste",
    ],
    goodAgainst: ["genji", "widowmaker", "brigitte", "kiriko", "lucio"],
  },
  {
    id: "zenyatta",
    name: "Zenyatta",
    role: "support",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/71cabc939c577581f66b952f9c70891db779251e8e70f29de3c7bf494edacfe4.png",
    counteredBy: [
      "junker-queen",
      "rainhardt",
      "sombra",
      "tracer",
      "widowmaker",
      "ana",
      "lucio",
    ],
    goodAgainst: [
      "dva",
      "ramattra",
      "roadhog",
      "sigma",
      "winston",
      "zarya",
      "bastion",
      "cassidy",
      "hanzo",
      "soldier",
      "torbjorn",
      "baptiste",
    ],
  },
];
export const heroImages: IHeroImage[] = [
  {
    id: "dva",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ca114f72193e4d58a85c087e9409242f1a31e808cf4058678b8cbf767c2a9a0a.png",
  },
  {
    id: "doomfist",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/13750471c693c1a360eb19d5ace229c8599a729cd961d72ebee0e157657b7d18.png",
  },
  {
    id: "junker-queen",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cef2406b2244b80506f83b8fb9ebaf214f41fa8795cbeef84026cd8018561d04.png",
  },
  {
    id: "orisa",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/71e96294617e81051d120b5d04b491bb1ea40e2933da44d6631aae149aac411d.png",
  },
  {
    id: "ramattra",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3e0367155e1940a24da076c6f1f065aacede88dbc323631491aa0cd5a51e0b66.png",
  },
  {
    id: "reinhardt",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/490d2f79f8547d6e364306af60c8184fb8024b8e55809e4cc501126109981a65.png",
  },
  {
    id: "roadhog",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/72e02e747b66b61fcbc02d35d350770b3ec7cbaabd0a7ca17c0d82743d43a7e8.png",
  },
  {
    id: "sigma",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cd7a4c0a0df8924afb2c9f6df864ed040f20250440c36ca2eb634acf6609c5e4.png",
  },
  {
    id: "winston",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bd9c8e634d89488459dfc1aeb21b602fa5c39aa05601a4167682f3a3fed4e0ee.png",
  },
  {
    id: "ball",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5c18e39ce567ee8a84078f775b9f76a2ba891de601c059a3d2b46b61ae4afb42.png",
  },
  {
    id: "zarya",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8819ba85823136640d8eba2af6fd7b19d46b9ee8ab192a4e06f396d1e5231f7a.png",
  },
  {
    id: "ashe",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8dc2a024c9b7d95c7141b2ef065590dbc8d9018d12ad15f76b01923986702228.png",
  },
  {
    id: "bastion",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4d715f722c42215072b5dd0240904aaed7b5285df0b2b082d0a7f1865b5ea992.png",
  },
  {
    id: "cassidy",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6cfb48b5597b657c2eafb1277dc5eef4a07eae90c265fcd37ed798189619f0a5.png",
  },
  {
    id: "echo",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f086bf235cc6b7f138609594218a8385c8e5f6405a39eceb0deb9afb429619fe.png",
  },
  {
    id: "genji",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4edf5ea6d58c449a2aeb619a3fda9fff36a069dfbe4da8bc5d8ec1c758ddb8dc.png",
  },
  {
    id: "hanzo",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/aecd8fa677f0093344fab7ccb7c37516c764df3f5ff339a5a845a030a27ba7e0.png",
  },
  {
    id: "junkrat",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/037e3df083624e5480f8996821287479a375f62b470572a22773da0eaf9441d0.png",
  },
  {
    id: "mei",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1533fcb0ee1d3f9586f84b4067c6f63eca3322c1c661f69bfb41cd9e4f4bcc11.png",
  },
  {
    id: "pharah",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f8261595eca3e43e3b37cadb8161902cc416e38b7e0caa855f4555001156d814.png",
  },
  {
    id: "reaper",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2edb9af69d987bb503cd31f7013ae693640e692b321a73d175957b9e64394f40.png",
  },
  {
    id: "sojourn",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a53bf7ad9d2f33aaf9199a00989f86d4ba1f67c281ba550312c7d96e70fec4ea.png",
  },
  {
    id: "soldier",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/20b4ef00ed05d6dba75df228241ed528df7b6c9556f04c8070bad1e2f89e0ff5.png",
  },
  {
    id: "sombra",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bca8532688f01b071806063b9472f1c0f9fc9c7948e6b59e210006e69cec9022.png",
  },
  {
    id: "symmetra",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7f2024c5387c9d76d944a5db021c2774d1e9d7cbf39e9b6a35b364d38ea250ac.png",
  },
  {
    id: "torbjorn",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1309ab1add1cc19189a2c8bc7b1471f88efa1073e9705d2397fdb37d45707d01.png",
  },
  {
    id: "tracer",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a66413200e934da19540afac965cfe8a2de4ada593d9a52d53108bb28e8bbc9c.png",
  },
  {
    id: "widowmaker",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a714f1cb33cc91c6b5b3e89ffe7e325b99e7c89cc8e8feced594f81305147efe.png",
  },
  {
    id: "ana",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png",
  },
  {
    id: "baptiste",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f979896f74ba22db2a92a85ae1260124ab0a26665957a624365e0f96e5ac5b5c.png",
  },
  {
    id: "brigitte",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/48392820c6976ee1cd8dde13e71df85bf15560083ee5c8658fe7c298095d619a.png",
  },
  {
    id: "kiriko",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/088aff2153bdfa426984b1d5c912f6af0ab313f0865a81be0edd114e9a2f79f9.png",
  },
  {
    id: "lucio",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e2ff2527610a0fbe0c9956f80925123ef3e66c213003e29d37436de30b90e4e1.png",
  },
  {
    id: "mercy",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2508ddd39a178d5f6ae993ab43eeb3e7961e5a54a9507e6ae347381193f28943.png",
  },
  {
    id: "moira",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/000beeb5606e01497897fa9210dd3b1e78e1159ebfd8afdc9e989047d7d3d08f.png",
  },
  {
    id: "zenyatta",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/71cabc939c577581f66b952f9c70891db779251e8e70f29de3c7bf494edacfe4.png",
  },
];
