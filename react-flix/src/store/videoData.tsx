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
                            }     
    ]}