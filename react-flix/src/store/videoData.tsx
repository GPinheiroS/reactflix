export interface vid {readonly id:number, readonly title:string, readonly local:string}
export interface youtuber {readonly id:number, readonly nome:string, readonly videos:vid[]}
export interface state {readonly atual:any, readonly select:youtuber[]}

export const initialState:state = {
    atual:{},
    select:[
            {
            id: 1,
            nome: "Casemiro",
                videos:[
                    {
                    id: 1,
                    title: 'Enquadros de Moto 43',
                    local: 'https://www.youtube.com/watch?v=whk1toIgyTU'},
                    {
                    id: 2,
                    title: 'Lancheira da Nina',
                    local: 'https://www.youtube.com/watch?v=DDaVNGOVCGc'
                    }
                ]
            },
            {
            id: 2,
            nome: "Nostalgia",
                videos:[
                    {
                    id: 1,
                    title: 'RETROSPECTIVA ANIMADA 2021 ♫ - ft Lucas Inutilismo',
                    local: 'https://www.youtube.com/watch?v=uxvGGWvKTmA'},
                    {
                    id: 2,
                    title: 'O QUE O IMPÉRIO ROMANO FEZ DE ERRADO? Nostalgia Animado',
                    local: 'https://www.youtube.com/watch?v=ENjqQKOegQY'
                    }
                ]
            },
            {
            id: 3,
            nome: "Felipe Ramos",
                videos:[
                    {
                    id: 1,
                    title: 'Pathologic 2: Um Diamante no Mundo dos Jogos',
                    local: 'https://www.youtube.com/watch?v=CfTx9k9vqd4'
                    },
                    {
                    id: 2,
                    title: 'Resident Evil 8: Resumo da Primeira Jogada (1/2)',
                    local: 'https://www.youtube.com/watch?v=vUVfOZuDs90&t'
                    },
                    {
                        id: 3,
                        title: 'Resident Evil 8: Resumo da Primeira Jogada (2/2)',
                        local: 'https://www.youtube.com/watch?v=t9rulRTRhy0&t'
                        }
                ]
            },
                {
                id: 4,
                nome: "Kurzgesagt – In a Nutshell",
                    videos:[
                        {
                        id: 1,
                        title: 'Is Meat Really that Bad?',
                        local: 'https://www.youtube.com/watch?v=F1Hq8eVOMHs'
                        },
                        {
                        id: 2,
                        title: 'What If You Fall into a Black Hole?',
                        local: 'https://www.youtube.com/watch?v=QqsLTNkzvaY&t'
                        }
                    ]
                },
                {
                id: 5,
                nome: "Rebosteio",
                    videos:[
                        {
                        id: 1,
                        title: 'Rebosteio! - Episódio 29',
                        local: 'https://www.youtube.com/watch?v=IsfKcAMl3L0'
                        },
                        {
                        id: 2,
                        title: 'Rebosteio! - Episódio 28',
                        local: 'https://www.youtube.com/watch?v=0w0YmyUPg5c'
                        }
                    ]
                },  
                {
                id: 6,
                nome: "exKate",
                    videos:[
                        {
                        id: 1,
                        title: 'Simbora Eevee',
                        local: 'https://www.youtube.com/watch?v=PotoFfnl65Y'
                        },
                        {
                        id: 2,
                        title: 'O que fizeram com o DIALGA???????? KKK',
                        local: 'https://www.youtube.com/watch?v=bdKn9x_GGuA'
                        }
                    ]
                },
                {
                id: 7,
                nome: "Rakin",
                    videos:[
                        {
                        id: 1,
                        title: 'LOST ARK É PAY TO WIN? | RAKIN',
                        local: 'https://www.youtube.com/watch?v=HtkKKN7OMYY'
                        },
                        {
                        id: 2,
                        title: 'PATCH NOVO DO LOST ARK - O QUE ESPERAR | RAKIN',
                        local: 'https://www.youtube.com/watch?v=7V9C5B82lto'
                        }
                    ]
                },
                {
                id: 8,
                nome: "Jovem Nerd",
                    videos:[
                        {
                        id: 1,
                        title: 'Trailer de Obi-Wan: A última chance!',
                        local: 'https://www.youtube.com/watch?v=Vv5aVkkSSNI'
                        },
                        {
                        id: 2,
                        title: 'Cities: Skylines - Cidade falida!',
                        local: 'https://www.youtube.com/watch?v=hc3V_gBa8EE'
                        }
                    ]
                },
                {
                id: 9,
                nome: "Girlfriend Reviews",
                    videos:[
                        {
                        id: 1,
                        title: 'Should Your Girlfriend Play Elden Ring?',
                        local: 'https://www.youtube.com/watch?v=IYlGsVud_QU'
                        },
                        {
                        id: 2,
                        title: 'Should couples play It Takes Two?',
                        local: 'https://www.youtube.com/watch?v=cHTLy37D4T0'
                        }
                    ]
                },
                {
                id: 10,
                nome: "Telepurte",
                    videos:[
                        {
                        id: 1,
                        title: 'One',
                        local: 'https://www.youtube.com/watch?v=mvIzZf42aBo'
                        },
                        {
                        id: 2,
                        title: 'Four',
                        local: 'https://www.youtube.com/watch?v=Qg9iuL-oqTo'
                        }
                    ]
                },
                {
                id: 11,
                nome: "Food Insider",
                    videos:[
                        {
                        id: 1,
                        title: 'How Extra-Virgin Olive Oil Is Made In Greece | Regional Eats',
                        local: 'https://www.youtube.com/watch?v=l4GrYUUcQG0'
                        },
                        {
                        id: 2,
                        title: 'US vs UK Pepsi | Food Wars',
                        local: 'https://www.youtube.com/watch?v=l27HGB0PwXs'
                        }
                    ]
                },
                {
                id: 12,
                nome: "MangaQ",
                    videos:[
                        {
                        id: 1,
                        title: 'ENTENDA ONE PIECE EM 30 MINUTOS - RESUMO DE ONE PIECE',
                        local: 'https://www.youtube.com/watch?v=5W6NTdnQf_g'
                        },
                        {
                        id: 2,
                        title: 'JOYBOY É LENDA A ESPREITA - O MAIOR ANTAGONISTA A LIBERDADE DE LUFFY - ONE PIECE',
                        local: 'https://www.youtube.com/watch?v=-hFRXzTvSWo'
                        }
                    ]
                }   
    ]}