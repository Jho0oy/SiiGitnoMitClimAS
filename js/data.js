export const DATA = {
  biomes: [
    { id: "amazonia", name: "Amazônia", desc: "Maior floresta tropical do mundo.", emoji: "🌳", img: "img/amazonia.jpg" },
    { id: "mata", name: "Mata Atlântica", desc: "Bioma costeiro muito ameaçado.", emoji: "🌲", img: "img/mata.jpg" },
    { id: "cerrado", name: "Cerrado", desc: "Savanas brasileiras ricas em biodiversidade.", emoji: "🌾", img: "img/cerrado.jpg" },
    { id: "caatinga", name: "Caatinga", desc: "Bioma semiárido com espécies adaptadas à seca.", emoji: "🌵", img: "img/caatinga.jpg" },
    { id: "pampa", name: "Pampa", desc: "Campos do sul com rica fauna e flora.", emoji: "🐄", img: "img/pampa.jpg" },
    { id: "pantanal", name: "Pantanal", desc: "Maior planície alagável do planeta.", emoji: "🦜", img: "img/pantanal.jpg" }
  ],

  problemsByBiome: {
    amazonia: [
      {
        name: "Aumento da temperatura e seca prolongada",
        desc: "Rios secando, incêndios florestais, estresse para fauna e flora.",
        ods: [
          { id: 13, title: "Ação climática", points: 40 },
          { id: 15, title: "Vida terrestre", points: 35 },
          { id: 6, title: "Água potável e saneamento", points: 30 },
          { id: 2, title: "Fome zero e agricultura sustentável", points: 25 }
        ]
      },
      {
        name: "Aumento de queimadas devido à seca",
        desc: "Destruição de habitats, emissões de CO₂, risco para comunidades.",
        ods: [
          { id: 13, title: "Ação climática", points: 40 },
          { id: 15, title: "Vida terrestre", points: 35 },
          { id: 12, title: "Consumo e produção responsáveis", points: 25 },
          { id: 3, title: "Saúde e bem-estar", points: 20 }
        ]
      },
      {
        name: "Alteração do regime de chuvas e inundações",
        desc: "Enchentes, perda de solos férteis, impactos em comunidades.",
        ods: [
          { id: 6, title: "Água potável e saneamento", points: 40 },
          { id: 13, title: "Ação climática", points: 35 },
          { id: 11, title: "Cidades e comunidades sustentáveis", points: 30 },
          { id: 15, title: "Vida terrestre", points: 25 }
        ]
      }
    ],

    mata: [
      {
        name: "Alteração do regime de chuvas",
        desc: "Enchentes urbanas, deslizamentos, erosão do solo.",
        ods: [
          { id: 11, title: "Cidades e comunidades sustentáveis", points: 40 },
          { id: 6, title: "Água potável e saneamento", points: 35 },
          { id: 13, title: "Ação climática", points: 30 },
          { id: 15, title: "Vida terrestre", points: 25 }
        ]
      },
      {
        name: "Aumento da temperatura e estresse hídrico",
        desc: "Perda de biodiversidade, incêndios florestais.",
        ods: [
          { id: 13, title: "Ação climática", points: 40 },
          { id: 15, title: "Vida terrestre", points: 35 },
          { id: 6, title: "Água potável e saneamento", points: 30 },
          { id: 12, title: "Consumo e produção responsáveis", points: 25 }
        ]
      },
      {
        name: "Eventos extremos (tempestades e vendavais)",
        desc: "Destruição de habitats, queda de árvores, impacto urbano.",
        ods: [
          { id: 11, title: "Cidades e comunidades sustentáveis", points: 40 },
          { id: 13, title: "Ação climática", points: 35 },
          { id: 15, title: "Vida terrestre", points: 30 },
          { id: 3, title: "Saúde e bem-estar", points: 25 }
        ]
      }
    ],

    cerrado: [
      {
        name: "Aumento da temperatura e seca prolongada",
        desc: "Redução de nascentes, perda de biodiversidade, risco de incêndios.",
        ods: [
          { id: 13, title: "Ação climática", points: 40 },
          { id: 15, title: "Vida terrestre", points: 35 },
          { id: 6, title: "Água potável e saneamento", points: 30 },
          { id: 2, title: "Fome zero e agricultura sustentável", points: 25 }
        ]
      },
      {
        name: "Aumento de queimadas naturais",
        desc: "Destruição de ecossistemas, emissões de gases de efeito estufa.",
        ods: [
          { id: 13, title: "Ação climática", points: 40 },
          { id: 15, title: "Vida terrestre", points: 35 },
          { id: 2, title: "Fome zero e agricultura sustentável", points: 25 },
          { id: 3, title: "Saúde e bem-estar", points: 20 }
        ]
      }
    ],

    caatinga: [
      {
        name: "Desertificação acelerada",
        desc: "Perda de solo fértil, redução de vegetação e fauna adaptada.",
        ods: [
          { id: 15, title: "Vida terrestre", points: 40 },
          { id: 2, title: "Fome zero e agricultura sustentável", points: 35 },
          { id: 6, title: "Água potável e saneamento", points: 30 },
          { id: 13, title: "Ação climática", points: 25 }
        ]
      },
      {
        name: "Escassez hídrica",
        desc: "Restrição de água para consumo humano, animais e agricultura.",
        ods: [
          { id: 6, title: "Água potável e saneamento", points: 40 },
          { id: 2, title: "Fome zero e agricultura sustentável", points: 35 },
          { id: 13, title: "Ação climática", points: 30 },
          { id: 1, title: "Erradicação da pobreza", points: 25 }
        ]
      }
    ],

    pampa: [
      {
        name: "Alteração do regime de chuvas",
        desc: "Enchentes e secas alternadas, erosão, perda de pastagens.",
        ods: [
          { id: 11, title: "Cidades e comunidades sustentáveis", points: 40 },
          { id: 13, title: "Ação climática", points: 35 },
          { id: 15, title: "Vida terrestre", points: 30 },
          { id: 2, title: "Fome zero e agricultura sustentável", points: 25 }
        ]
      },
      {
        name: "Aumento da temperatura e estiagem",
        desc: "Perda de biodiversidade, estresse hídrico, queda na produtividade.",
        ods: [
          { id: 13, title: "Ação climática", points: 40 },
          { id: 15, title: "Vida terrestre", points: 35 },
          { id: 2, title: "Fome zero e agricultura sustentável", points: 30 },
          { id: 6, title: "Água potável e saneamento", points: 25 }
        ]
      }
    ],

    pantanal: [
      {
        name: "Aumento da temperatura e evaporação",
        desc: "Redução do volume de água, estresse para fauna aquática e flora alagada.",
        ods: [
          { id: 6, title: "Água potável e saneamento", points: 40 },
          { id: 15, title: "Vida terrestre", points: 35 },
          { id: 14, title: "Vida na água", points: 30 },
          { id: 13, title: "Ação climática", points: 25 }
        ]
      },
      {
        name: "Queimadas e secas extremas",
        desc: "Destruição de ecossistemas, emissão de gases de efeito estufa, impactos na fauna.",
        ods: [
          { id: 13, title: "Ação climática", points: 40 },
          { id: 15, title: "Vida terrestre", points: 35 },
          { id: 14, title: "Vida na água", points: 30 },
          { id: 3, title: "Saúde e bem-estar", points: 25 }
        ]
      }
    ]
  }
};
