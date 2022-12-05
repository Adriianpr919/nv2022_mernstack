import bcrypt from 'bcryptjs';

//i create first data.js for seed all datas into db
const data = {
    users: [
        {
            username: "Admin",
            email: "admin123@gmail.com",
            password: bcrypt.hashSync("admin"),
            isAdmin: true
        }
    ],

    blogs: [
        {
            title: "TITULO 1.",
            description: "COMENTARIOS 1."
        },
        {
            title: "TITULO 2.",
            description: "COMENTARIOS 2."
        },
        {
            title: "TITULO 3.",
            description: "COMENTARIOS 3."
        },
        {
            title: "TITULO 4.",
            description: "COMENTARIOS 4."
        },
        {
            title: "TITULO 5.",
            description: "COMENTARIOS 5."
        },
    ],
    products: [
        {
            title: "Anillo corazón Reborde",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Anillo elaborado en oro 18K con incrustaciones en circón natural.",
            price: 3590000,
            star: "5★",
            sizes: [
                {
                    title: "4"
                },
                {
                    title: "4.5"
                },
                {
                    title: "5"
                },
                {
                    title: "5.5"
                },
                {
                    title: "6"
                },
                {
                    title: "6.5"
                },
                {
                    title: "7"
                },
                {
                    title: "7.5"
                },
                {
                    title: "8"
                },
                {
                    title: "8.5"
                },
                {
                    title: "9"
                },
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/JcLJg6b/IMG-3974.jpg",
            imageOne: "https://i.ibb.co/WvBRFZd/IMG-6751.jpg"
        },
        {
            title: "Anillo Corazón Pendulo",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Anillo elaborado en oro 18K con incrustaciones en circón natural.",
            price: 3490000,
            star: "5★",
            sizes: [
                {
                    title: "4"
                },
                {
                    title: "4.5"
                },
                {
                    title: "5"
                },
                {
                    title: "5.5"
                },
                {
                    title: "6"
                },
                {
                    title: "6.5"
                },
                {
                    title: "7"
                },
                {
                    title: "7.5"
                },
                {
                    title: "8"
                },
                {
                    title: "8.5"
                },
                {
                    title: "9"
                },
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/k6q71L3/IMG-5609.jpg",
            imageOne: "https://i.ibb.co/t371LTD/IMG-5610-IMG-5615.png"
        },
        {
            title: "Anillo Ancho",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Anillo elaborado en oro 18K con incrustaciones en circón natural.",
            price: 3790000,
            star: "5★",
            sizes: [
                {
                    title: "4"
                },
                {
                    title: "4.5"
                },
                {
                    title: "5"
                },
                {
                    title: "5.5"
                },
                {
                    title: "6"
                },
                {
                    title: "6.5"
                },
                {
                    title: "7"
                },
                {
                    title: "7.5"
                },
                {
                    title: "8"
                },
                {
                    title: "8.5"
                },
                {
                    title: "9"
                },
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/RCm3dyb/IMG-5616.jpg",
            imageOne: "https://i.ibb.co/M1KJS3g/IMG-5619-IMG-5620-IMG-5621.png"
        },
        {
            title: "Anillo Reborde",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Anillo elaborado en oro 18K con incrustaciones en circón natural.",
            price: 0,
            star: "4★",
            sizes: [
                {
                    title: "4"
                },
                {
                    title: "4.5"
                },
                {
                    title: "5"
                },
                {
                    title: "5.5"
                },
                {
                    title: "6"
                },
                {
                    title: "6.5"
                },
                {
                    title: "7"
                },
                {
                    title: "7.5"
                },
                {
                    title: "8"
                },
                {
                    title: "8.5"
                },
                {
                    title: "9"
                },
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/PC5WnXt/IMG-5590.jpg",
            imageOne: "https://i.ibb.co/Mp4mbbg/IMG-5587.jpg"
        },
        {
            title: "Dije Corazón Reborde",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 2290000,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/ZLpy1Rq/IMG-5162.jpg",
            imageOne: "https://i.ibb.co/kBLpLDB/20210222-160614.jpg"
        },
        {
            title: "Dije Fe",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con turmalinas.",
            price: 3590000,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/FHZJmbh/IMG-4897.jpg",
            imageOne: "https://i.ibb.co/r76GXsw/IMG-5154-IMG-8130-IMG-023134-IMG-7885-IMG-8198.png"
        },
        {
            title: "Dije Bendición",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 3390000,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/Y8K0cGz/IMG-4902.jpg",
            imageOne: "https://i.ibb.co/zF76rs0/IMG-3489-IMG-5013-IMG-7808.png"
        },
        {
            title: "Dije Faith & Family",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 3890000,
            star: "5★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/Y3gHYxL/IMG-5187.jpg",
            imageOne: "https://i.ibb.co/SBtrc50/IMG-9795-IMG-3734-IMG-5159.png"
        },
        {
            title: "Dije Oso Ted",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 3590000,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/RBLQbpW/IMG-3975.jpg",
            imageOne: "https://i.ibb.co/TqX2kBG/IMG-2792-IMG-2223-IMG-3738-IMG-3976-IMG-6567-IMG-4313-IMG-7996.png"
        },
        {
            title: "Dije Oso Bebe",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 2690000,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/WcsJp0k/IMG-2979.jpg",
            imageOne: "https://i.ibb.co/HXWy44F/IMG-3009.jpg"
        },
        {
            title: "Dije Oso Minimalista",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K.",
            price: 3290000,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/gd6JB8n/IMG-4899.jpg",
            imageOne: "https://i.ibb.co/drnvpHh/IMG-1044.jpg"
        },
        {
            title: "Dije Oso Gordito",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 5980000,
            star: "5★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/Jrt1dwP/IMG-5186.jpg",
            imageOne: "https://i.ibb.co/T0d0Qyz/IMG-4312-IMG-0969.png"
        },
        {
            title: "Dije Cruz Reborde",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 0,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/PrPDfdD/IMG-6879.jpg",
            imageOne: "https://i.ibb.co/0h7X7dV/IMG-5806.jpg"
        },
        {
            title: "Dije Cruz Ancha",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 1690000,
            star: "5★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/yYQwDj9/Snapseed.jpg",
            imageOne: "https://i.ibb.co/BVsLnJG/IMG-8085-IMG-122343.png"
        },
        {
            title: "Dije Niña",
            category: "Niños y Niñas",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 990000,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/vZmDDdp/IMG-1070.jpg",
            imageOne: "https://i.ibb.co/bzzKsJc/IMG-1068-IMG-1069-IMG-1070-IMG-1071-IMG-1072.png"
        },
        {
            title: "Dije Niño",
            category: "Niños y Niñas",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 990000,
            star: "5★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/G036Y6D/IMG-6089.jpg",
            imageOne: "https://i.ibb.co/pRNBS95/IMG-6090-IMG-6091-IMG-6092-IMG-6093.png"
        },
        {
            title: "Dije Papá",
            category: "Hombres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 1090000,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/8PSfC5G/IMG-1056.jpg",
            imageOne: "https://i.ibb.co/qBD9JCX/IMG-1058-IMG-1060-IMG-6067-IMG-6068.png"
        },
        {
            title: "Dije Mamá",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural",
            price: 1090000,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/sj4qMz3/IMG-1054.jpg",
            imageOne: "https://i.ibb.co/pLcQcRG/IMG-1052-IMG-1049-IMG-1051-IMG-10481047.png"
        },
        {
            title: "Dije Niña Trapo",
            category: "Niños y Niñas",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 1890000,
            star: "5★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/fGLY0zs/IMG-4900.jpg",
            imageOne: "https://i.ibb.co/WKfLR3y/IMG-7439-IMG-7442-IMG-7440.png"
        },
        {
            title: "Dije Niño Trapo",
            category: "Niños y Niñas",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 1890000,
            star: "5★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/41946t7/IMG-7424.jpg",
            imageOne: "https://i.ibb.co/gdSYdtK/IMG-7429-IMG-7450.png"
        },
        {
            title: "Dije Rostro Pantera",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con diseño calado.",
            price: 0,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/9Yvb7C2/IMG-5809.jpg",
            imageOne: "https://i.ibb.co/zXmDLzD/20210306-161225.jpg"
        },
        {
            title: "Dije Relicario Corazón",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K doble faz.",
            price: 2490000,
            star: "5★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/zXXvNHr/IMG-2610.jpg",
            imageOne: "https://i.ibb.co/r5hr24N/IMG-8806.jpg"
        },
        {
            title: "Dije Cruz Estilizada",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 1190000,
            star: "5★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/j6B3wZz/IMG-6877.jpg",
            imageOne: "https://i.ibb.co/D8k4d7k/IMG-5667-IMG-0496-IMG-5628-IMG-5665-IMG-5666.png"
        },
        {
            title: "Dije Dado Personalizado",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 3990000,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/n1ZHkjD/IMG-3967.jpg",
            imageOne: "https://i.ibb.co/Nnx0MQL/IMG-006-IMG-3981-IMG-8614.png"
        },
        {
            title: "Dije Candado",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural, doble faz.",
            price: 3890000,
            star: "5★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/Dzxv2FY/IMG-4315.jpg",
            imageOne: "https://i.ibb.co/Xy8nzNs/IMG-4352-IMG-2292-IMG-4314.png"
        },
        {
            title: "Dije Oso Corazón Globo",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 3390000,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/KsFb6Ry/IMG-3977.jpg",
            imageOne: "https://i.ibb.co/nfP7kTF/IMG-8820-IMG-3200-IMG-5158.png"
        },
        {
            title: "Candongas Reborde",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Candongas elaboradas en oro 18K con incrustaciones en circón natural.",
            price: 2290000,
            star: "5★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/qDdSfVQ/products-A1.png",
            imageOne: "https://i.ibb.co/JntVmcC/products-A2.png"
        },
        {
            title: "Topos Corazón",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Topos elaborados en oro 18K con incrustaciones en circón natural.",
            price: 1690000,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/fMgjh67/IMG-5604.jpg",
            imageOne: "https://i.ibb.co/zhzk02S/IMG-5644-IMG-5645-IMG-5600.png"
        },
        {
            title: "Candongas Engaste Mini",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Candongas elaboradas en oro 18K con incrustaciones en circón natural.",
            price: 1490000,
            star: "5★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/qDdSfVQ/products-A1.png",
            imageOne: "https://i.ibb.co/JntVmcC/products-A2.png"
        },
        {
            title: "Topos Bola Engastada",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Topos elaborados en oro 18K con incrustaciones en circón natural.",
            price: 1590000,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/qDdSfVQ/products-A1.png",
            imageOne: "https://i.ibb.co/JntVmcC/products-A2.png"
        },
        {
            title: "Candongas Cuadradas",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Candongas elaboradas en oro 18K con incrustaciones en circón natural, doble faz.",
            price: 2690000,
            star: "5★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/qDdSfVQ/products-A1.png",
            imageOne: "https://i.ibb.co/JntVmcC/products-A2.png"
        },
        {
            title: "Candonga Turmalinas",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Candongas elaboradas en oro 18K con turmalinas.",
            price: 3590000,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/qDdSfVQ/products-A1.png",
            imageOne: "https://i.ibb.co/JntVmcC/products-A2.png"
        },
        {
            title: "Gargantilla Corazón Silueta",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Gargantilla elaborada en oro 18K con incrustaciones en circón natural.",
            price: 5890000,
            star: "5★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/qDdSfVQ/products-A1.png",
            imageOne: "https://i.ibb.co/JntVmcC/products-A2.png"
        },
        {
            title: "Aro Barra Engastado",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Aro elaborado en oro 18K con incrustaciones en circón natural.",
            price: 3890000,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/qDdSfVQ/products-A1.png",
            imageOne: "https://i.ibb.co/JntVmcC/products-A2.png"
        },
        {
            title: "Anillo Turmanilas",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Anillo elaborado en oro 18K con turmalinas.",
            price: 1990000,
            star: "4★",
            sizes: [
                {
                    title: "4"
                },
                {
                    title: "4.5"
                },
                {
                    title: "5"
                },
                {
                    title: "5.5"
                },
                {
                    title: "6"
                },
                {
                    title: "6.5"
                },
                {
                    title: "7"
                },
                {
                    title: "7.5"
                },
                {
                    title: "8"
                },
                {
                    title: "8.5"
                },
                {
                    title: "9"
                },
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/qDdSfVQ/products-A1.png",
            imageOne: "https://i.ibb.co/JntVmcC/products-A2.png"
        },
        {
            title: "Dije Pingüino",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 2690000,
            star: "5★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/qDdSfVQ/products-A1.png",
            imageOne: "https://i.ibb.co/JntVmcC/products-A2.png"
        },
        {
            title: "Pulsera San Benito",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Pulsera en oro 18K con tambor de San Benito alusivo a la protección.",
            price: 3290000,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/qDdSfVQ/products-A1.png",
            imageOne: "https://i.ibb.co/JntVmcC/products-A2.png"
        },
        {
            title: "Dije Casa Hogar",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 1290000,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/qDdSfVQ/products-A1.png",
            imageOne: "https://i.ibb.co/JntVmcC/products-A2.png"
        },
        {
            title: "Tobillera Silueta Corazón",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Tobillera elaborada en oro 18K con incrustaciones en circón natural.",
            price: 4290000,
            star: "5★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/qDdSfVQ/products-A1.png",
            imageOne: "https://i.ibb.co/JntVmcC/products-A2.png"
        },
        {
            title: "Anillo Pandora",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Anillo elaborado en oro 18K con incrustaciones en circón natural.",
            price: 590000,
            star: "4★",
            sizes: [
                {
                    title: "4"
                },
                {
                    title: "4.5"
                },
                {
                    title: "5"
                },
                {
                    title: "5.5"
                },
                {
                    title: "6"
                },
                {
                    title: "6.5"
                },
                {
                    title: "7"
                },
                {
                    title: "7.5"
                },
                {
                    title: "8"
                },
                {
                    title: "8.5"
                },
                {
                    title: "9"
                },
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/qDdSfVQ/products-A1.png",
            imageOne: "https://i.ibb.co/JntVmcC/products-A2.png"
        },
        {
            title: "Dije Corazón Mini",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 790000,
            star: "5★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/qDdSfVQ/products-A1.png",
            imageOne: "https://i.ibb.co/JntVmcC/products-A2.png"
        },
        {
            title: "Dije Rostro Cristo",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 2790000,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/qDdSfVQ/products-A1.png",
            imageOne: "https://i.ibb.co/JntVmcC/products-A2.png"
        },
        {
            title: "Cadena Eslabón",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Cadena de eslabón elaborada en oro 18K.",
            price: 4090000,
            star: "5★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/qDdSfVQ/products-A1.png",
            imageOne: "https://i.ibb.co/JntVmcC/products-A2.png"
        },
        {
            title: "Dije Placa Militar",
            category: "Mujeres",
            subcategory: "Destacados",
            description: "Dije elaborado en oro 18K, puedes personalizarla a tu gusto.",
            price: 4290000,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/qDdSfVQ/products-A1.png",
            imageOne: "https://i.ibb.co/JntVmcC/products-A2.png"
        },
    ],

    category: [
        {
            value: "Hombres",
            label: "Hombres"
        },
        {
            value: "Mujeres",
            label: "Mujeres"
        },
        {
            value: "Niños y Niñas",
            label: "Niños y Niñas"
        },
    ],

    subcategory: [
        {
            checked: false,
            label: 'Nuevos'
        },
        {
            checked: false,
            label: 'Destacados'
        },
    ],

    rating: [
        {
            value: '1',
            label: "1★"
        },
        {
            value: '2',
            label: "2★"
        },
        {
            value: '3',
            label: "3★"
        },
        {
            value: '4',
            label: "4★"
        },
        {
            value: '5',
            label: "5★"
        }
    ]
}

export default data;