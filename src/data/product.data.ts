import { Product } from "./models";

const generatePath = (id: string) => (`@/assets/productos/${id}.png`)

export const products: Product[] = [
    {
        name: "Mist K",
        slug: "mist-k",
        category: "Nutrición",
        sub_category: "Macroelementos",
        crops: [
            "Cebada",
            "Girasol",
            "Trigo",
            "Maíz",
            "Algodón",
            "Sorgo",
            "Trigo",
            "Soja",
        ],
        brand: "Mist",
        description_html: "",
        id: "mst-k",
        image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Producto%20K-9.png",
        pdf_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/MIST%20K%20-%20Kioshi%20Stone%20-%20Ficha%20T%C3%83%C2%A9cnica.pdf",
        product_volume_state: "Liquidos",
        html_content: {
            descripction: `MIST-K®, está formulado en una dispersión nano mineral que aloja en sus poros el Potasio, actuando como un Carrier que almacena y dosifica el elemento en la medida que la planta o el suelo lo requiera. Además de Potasio contiene Calcio, Magnesio, Azufre y Silicio. El Potasio desempeña un rol importante en la regulación del agua en las plantas (osmo-regulación). Además, es esencial en casi todos los pasos de la síntesis de proteínas. En la producción de almidón, la enzima responsable del proceso está activada por el potasio. En tanto que la presencia de calcio mejora la absorción de nutrientes, el magnesio es de vital importancia en el proceso de fotosíntesis y el silicio aumenta la resistencia de las plantas para superar estrés biótico y abiótico.`,
            effects: {
                list: ["La rápida asimilación del calcio, el cual mejora el transporte del resto de los nutrientes.", "El silicio ayuda a superar el estrés por sales, hídrico, por calor, toxicidad por metales y desajuste nutricionales."],
                common: "El resultado final es un incremento en la calidad así como el aporte de macro y micronutrientes."
            },
            content: {
                list: ["Potasio (K): 3,5%", "Calcio (Ca): 6,5%", "Magnesio (Mg): 1,3%", "Azufre (S): 2,8%"]
            },
            properties: {
                list: ["pH: 7,3 (a 20°C)", "Densidad: 1,2 a 1,4 g/cc", "Reacción e índice: NEUTRO"]
            },
            storage: {
                list: ["Procurar un almacenaje entre 35ºC y -5ºC para preservar la integridad del producto.", "Guardar en lugar fresco y al abrigo de la luz solar directa.", "Evitar la formación de vapores."]
            },
            volume: {
                list: ["Bags in Box de 15 litros."]
            },
            packaging: "La presentación en Bag in Box de 15 litros, permite armar un pallet estándar de 56 unidades (840 litros), fácilmente transportable en camioneta y cuyo rendimiento permitirá cubrir hasta 280 Ha.",
            application_dosage: {
                extensive_industrial_fruits: {
                    title: "Cultivos Extensivos/Industriales/Frutales.",
                    type: "Pulverización, Fertirriego.",
                    dose: "Dosis: 1 a 2,5 Lts/ha por cada aplicación."
                },
                intensive: {
                    title: "Cultivos Intensivos:",
                    type: "Aplicación por Fertirriego",
                    dose: "Dosis: 2 a 3,5 Lts/ha por cada aplicación."
                },
                image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/K-01.svg"
            },
            reccommendations: {
                text: "Retirar la vejiga de la caja y proceder a su homogeneización previo a su uso. El contenido puede presentar una separación de fases, mediante la agitación vigorosa se obtiene la condición óptima de empleo.",
                pulverization: "Pulverizador: previamente limpiar bien la máquina, preparar la solución mezclando la dosis recomendada con el 50% del volumen de agua a utilizar, este proceso realizarlo con agitación continua. El volumen recomendado de agua entre 80 a 100 litros por hectárea, la presión de pulverización que no supere los 3 bar, manteniéndola en un rango entre 2 y 3 bar. Para mejor aplicación mantener la velocidad de la máquina entre 18 a 20 km/hora. Se recomienda usar pastillas de cono hueco. En el caso de recargas para continuar la actividad no dejar vaciar el tanque, mantener como mínimo 15% de su capacidad para volver hacer la mezcla del producto. Una vez terminada la aplicación se debe enjuagar el producto en la máquina con 200 litros y posteriormente proceder a realizar la limpieza habitual del equipo. ",
                fertiriego: "Fertirriego: Se deberá preparar la solución madre mezclando la dosis recomendada con el 50% del volumen de agua a utilizar en el riego. Luego de mezclado, se agrega agitando el volumen total de agua de riego. Nota: se deberá mantener la suspensión con agitación constante (evitar el uso de sopladores de aire). Una vez terminada la aplicación, se deberá lavar el equipo y sistema de conducción con agua limpia."
            },
            cautions_and_warnings: {
                text: "Se advierte que la empresa garantiza el contenido y riquezas declaradas en la etiqueta, sin embargo, en su utilización pueden intervenir factores que escapan a nuestro control como son la preparación de mezclas, la aplicación, la climatología, entre otros. El usuario será responsable de los daños causados al cultivo, al suelo o al aplicador, por inobservancia total o parcial de la información explicada en esta etiqueta. Utilizar sólo en caso de reconocida necesidad, sin sobrepasar las dosis recomendadas. Se recomienda su aplicación bajo asesoramiento técnico agronómico."
            }
        }
    },
    {
        name: "Mist ILEX",
        slug: "mist-ilex",
        category: "Nutrición",
        sub_category: "Balanceados",
        crops: [
            "Yerba Mate"
        ],
        brand: "Mist",
        description_html: "",
        id: "mst-ilex",
        image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Producto%20ILEX-8.png",
        pdf_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/MIST%20ILEX%20-%20Kioshi%20Stone%20-%20Ficha%20T%C3%83%C2%A9cnica.pdf",
        product_volume_state: "Liquidos",
        html_content: {
            descripction: `MIST-ILEX® es una dispersión de nanopartículas minerales preparada para nutrir el cultivo de YERBA MATE. La versatilidad de las bases minerales de los productos MIST, permite formular dispersiones adecuadas para aportar específicamente los nutrientes que requieren los cultivos y tratarlos de manera individual, aprovechando de esta manera la elevada eficiencia que ofrecen las nanopartículas en dosis bajas. El Calcio presente en las formulaciones del MIST favorece la entrega celular de todos estos minerales; el Magnesio, por su parte, es vital en el proceso de fotosíntesis y fijación simbiótica del nitrógeno atmosférico; el Potasio desempeña un rol importante en la regulación del agua en las plantas, tanto la absorción de agua a través de raíces y su pérdida por las estomas se ven afectados por este nutriente; el Fósforo por su parte, interviene en cada proceso de la planta que involucra transferencia de energía; el Azufre es constituyente estructural de compuestos orgánicos; y el Silicio y el Cobre aumentan la resistencia de las plantas para superar estrés biótico, abiótico y enfermedades.`,
            content: {
                list: [
                    "Nitrógeno total (N): 5,60%",
                    "Fósforo (P): 0,20%",
                    "Potasio (K): 2,90%",
                    "Calcio (Ca): 6,50%",
                    "Cobre (Cu): 0,07%",
                    "Magnesio (Mg): 1,50%",
                    "Molibdeno (Mo): 0,01%",
                    "Hierro (Fe): Trazas",
                    "Manganeso (Mn): Trazas",
                    "Zinc (Zn): Trazas",
                ]
            },
            properties: {
                list: [
                    "pH: 6,8 (a 20 °C)",
                    "Densidad: 1,2 a 1,4 g/cc",
                    "Reacción e índice: NEUTRO"
                ]
            },
            volume: {
                list: ["Bags in Box de 15, 5, 2 litros."]
            },
            packaging: "La presentación en Bag in Box de 15 litros, permite armar un pallet estándar de 56 unidades (840 litros), fácilmente transportable en camioneta y cuyo rendimiento permitirá cubrir hasta 280 Ha.",
            application_dosage: {
                others: [
                    "Cultivo: Yerba Mate.",
                    "Dosis: 6 a 12 L/ha.",
                    "Momento: Fines de agosto hasta marzo.",
                    "Las recomendaciones son generales, pueden variar por diversos factores y criterios. Consulte con su asesor."
                ]
            },
            reccommendations: {
                text: "Retirar la vejiga de la caja y proceder a su homogeneización previo a su uso. El contenido puede presentar una separación de fases, mediante la agitación vigorosa se obtiene la condición óptima de empleo.",
                pulverization: "Pulverizador: previamente limpiar bien la máquina, preparar la solución mezclando la dosis recomendada con el 50% del volumen de agua a utilizar, este proceso realizarlo con agitación continua. El volumen recomendado de agua entre 80 a 100 litros por hectárea, la presión de pulverización que no supere los 3 bar, manteniéndola en un rango entre 2 y 3 bar. Para mejor aplicación mantener la velocidad de la maquina entre 18 a 20 km/hora. Se recomienda usar pastillas de cono hueco. En el caso de recargas para continuar la actividad no dejar vaciar el tanque, mantener como mínimo 15% de su capacidad para volver hacer la mezcla del producto. Una vez terminada la aplicación se debe enjuagar el producto en la maquina con 200 litros y posteriormente proceder a realizar la limpieza habitual del equipo.",
                fertiriego: "Fertirriego: Se deberá preparar la solución madre mezclando la dosis recomendada con el 50% del volumen de agua a utilizar en el riego. Luego de mezclado, se agrega agitando el volumen total de agua de riego. Nota: se deberá mantener la suspensión con agitación constante (evitar el uso de sopladores de aire). Una vez terminada la aplicación, se deberá lavar el equipo y sistema de conducción con agua limpia."
            },
            cautions_and_warnings: {
                text: "Se advierte que la empresa garantiza el contenido y riquezas declaradas en la etiqueta, sin embargo, en su utilización pueden intervenir factores que escapan a nuestro control como son la preparación de mezclas, la aplicación, la climatología, entre otros. El usuario será responsable de los daños causados al cultivo, al suelo o al aplicador, por inobservancia total o parcial de la información explicada en esta etiqueta. Utilizar sólo en caso de reconocida necesidad, sin sobrepasar las dosis recomendadas. Se recomienda su aplicación bajo asesoramiento técnico agronómico. Los productos Mist son compatibles con la mayoría de productos agroquímicos, sin embargo se recomienda efectuar pruebas en un recipiente previo a realizar la mezcla."
            }
        }
    },
    {
        name: "Mist KUMA",
        slug: "mist-kuma",
        category: "Nutrición",
        sub_category: "Balanceados",
        crops: [
            "Frutales",
        ],
        brand: "Mist",
        description_html: "",
        id: "mst-kuma",
        image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Producto%20KUMA-8.png",
        pdf_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/MIST%20KUMA%20-%20Kioshi%20Stone%20-%20Ficha%20T%C3%83%C2%A9cnica.pdf",
        product_volume_state: "Liquidos",
        html_content: {
            descripction: `MIST-KUMA®, es una dispersión de nanopartículas minerales con una adecuada concentración de N de diversas fuentes: Urea, KNO3 y Ca(NO3)2. El Nitrógeno contenido más el Calcio, el Magnesio y el Azufre generan la sinergia que acompaña el crecimiento de los cultivos y puede ser aplicado en cualquier momento sobre el cultivo sin inducir estrés en la planta. El potasio es importante en la regulación del agua en las plantas (osmo-regulación). El fósforo interviene en todos los procesos que involucran intercambio de energía. Por su parte el silicio aporta rusticidad a los tejidos haciéndolos menos susceptibles al daño por plagas.`,
            effects: {
                list: [
                    "La incorporación de Nitrógeno de alta eficiencia para los cultivos.",
                    "Mejora la absorción del nitrógeno, favorece la translocación y evita las pérdidas tanto por lixiviación en profundidad, como por evaporación (NH3).",
                ],
            },
            content: {
                list: [
                    "Nitrógeno (N): 3,5%",
                    "Fósforo (P): 1%",
                    "Potasio (K): 3%",
                    "Azufre (S): 2%",
                    "Carbono (C): 3,4%",
                    "Calcio (Ca): 4,4%",
                    "Hierro (Fe): 0,2 %",
                    "Boro (B): Trazas",
                    "Magnesio (Mg): Trazas",
                ]
            },
            properties: {
                list: [
                    "pH: 6,5 (a 20 °C)",
                    "Densidad: 1,2 a 1,4 g/cc",
                    "Reacción e índice: NEUTRO"
                ]
            },
            storage: {
                list: [
                    "Procurar un almacenaje entre 35ºC y -5ºC para preservar la integridad del producto.",
                    "Guardar en lugar fresco y al abrigo de la luz solar directa.",
                    "Evitar la formación de vapores."
                ]
            },
            volume: {
                list: ["Bags in Box de 15 litros."]
            },
            packaging: "La presentación en Bag in Box de 15 litros, permite armar un pallet estándar de 56 unidades (840 litros), fácilmente transportable en camioneta y cuyo rendimiento permitirá cubrir hasta 280 Ha.",
            application_dosage: {
                others: [
                    "Cultivo: Trigo",
                    "Dosis: 3 a 6 lts/ha",
                    "Momento de aplicación: hoja bandera",
                    "Las recomendaciones son generales, pueden variar por diversos factores y criterios. Consulte con su asesor."
                ]
            },
            reccommendations: {
                text: "Retirar la vejiga de la caja y proceder a su homogeneización previo a su uso. El contenido puede presentar una separación de fases, mediante la agitación vigorosa se obtiene la condición óptima de empleo.",
                pulverization: "Pulverizador: previamente limpiar bien la máquina, preparar la solución mezclando la dosis recomendada con el 50% del volumen de agua a utilizar, este proceso realizarlo con agitación continua. El volumen recomendado de agua entre 50 y 60 litros por hectárea. Una vez terminada la aplicación se recomienda enjuagar el producto en la máquina con 200 litros y posteriormente proceder a realizar la limpieza habitual del equipo.",
                fertiriego: "Fertirriego: previamente limpiar bien la máquina, preparar la solución mezclando la dosis recomendada con el 50% del volumen de agua a utilizar, este proceso realizarlo con agitación continua. El volumen recomendado de agua entre 8 y 10 litros por hectárea. Una vez terminada la aplicación se recomienda proceder a realizar la limpieza habitual del equipo."
            },
            cautions_and_warnings: {
                text: "Se advierte que la empresa garantiza el contenido y riquezas declaradas en la etiqueta, sin embargo, en su utilización pueden intervenir factores que escapan a nuestro control como son la preparación de mezclas, la aplicación, la climatología, entre otros. El usuario será responsable de los daños causados al cultivo, al suelo o al aplicador, por inobservancia total o parcial de la información explicada en esta etiqueta. Utilizar sólo en caso de reconocida necesidad, sin sobrepasar las dosis recomendadas. Se recomienda su aplicación bajo asesoramiento técnico agronómico.\nLos productos Mist son compatibles con la mayoría de productos agroquímicos, sin embargo se recomienda efectuar pruebas en un recipiente previo a realizar la mezcla."
            }
        }
    },
    {
        name: "Mist PRD (Prado)",
        slug: "mist-prd-prado",
        category: "Nutrición",
        sub_category: "Balanceados",
        crops: [
            "Pasturas",
        ],
        brand: "Mist",
        description_html: "",
        id: "mst-prd-prado",
        image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Producto%20PRD-8.png",
        pdf_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/MIST%20PRD%20-%20Kioshi%20Stone%20-%20Ficha%20T%C3%83%C2%A9cnica.pdf",
        product_volume_state: "Liquidos",
        html_content: {
            descripction: `MIST-Prado®, es una dispersión de nanopartículas minerales especialmente formulada para nutrir pasturas, tiene una adecuada concentración en nutrientes principales, secundarios y micros que son esenciales para el crecimiento y desarrollo de estructuras radiculares como son el Calcio, Magnesio, Azufre, Nitrógeno, Fósforo y Silicio.

            El Calcio en sus formulaciones gobierna la entrega celular de todos los minerales; el magnesio, por su parte, es vital en el proceso de fotosíntesis y fijación simbiótica del nitrógeno atmosférico. El azufre interviene en procesos asociados a la eficiencia del uso de la radiación y contribuye a la calidad del forraje. En tanto el Nitrógeno contribuye a la expansión del área foliar. El Fósforo por su parte, interviene en múltiples procesos, como el desarrollo de la biomasa aérea y radical, la fotosíntesis, la síntesis de carbohidratos y proteínas y el silicio aumenta la resistencia de las plantas para superar estrés biótico y abiótico.`,
            content: {
                list: [
                    "Calcio (Ca): 5,6%",
                    "Magnesio (Mg): 1,4%",
                    "Nitrógeno (N): 5%",
                    "Azufre (S): 9%",
                    "Fósforo (P): Trazas",
                ]
            },
            properties: {
                list: [
                    "pH: 5,6 (a 20 °C)",
                    "Densidad: 1,2 a 1,4 g/cc",
                    "Reacción e índice: NEUTRO"
                ]
            },
            storage: {
                list: [
                    "Procurar un almacenaje entre 35ºC y -5ºC para preservar la integridad del producto.",
                    "Guardar en lugar fresco y al abrigo de la luz solar directa.",
                    "Evitar la formación de vapores."
                ]
            },
            volume: {
                list: ["Bags in Box de 15 litros."]
            },
            packaging: "La presentación en Bag in Box de 15 litros, permite armar un pallet estándar de 56 unidades (840 litros), fácilmente transportable en camioneta y cuyo rendimiento permitirá cubrir hasta 280 Ha.",
            application_dosage: {
                others: [
                    "Aplicación foliar por pulverización.",
                    "Cultivo: Pasturas.",
                    "Dosis: 1,5 a 2 L/ha.",
                    "Momento de aplicación: Primavera, otoño e invierno.",
                    "Las recomendaciones son generales, pueden variar por diversos factores y criterios. Consulte con su asesor."
                ]
            },
            reccommendations: {
                text: `Retirar la vejiga de la caja y proceder a su homogeneización previo a su uso. El contenido puede presentar una separación de fases, mediante la agitación vigorosa se obtiene la condición óptima de empleo.`,
                pulverization: `Pulverizador: previamente limpiar bien la máquina, preparar la solución mezclando la dosis recomendada con el 50% del volumen de agua a utilizar, este proceso realizarlo con agitación continua. El volumen recomendado de agua entre 50 y 60 litros por hectárea. Una vez terminada la aplicación se recomienda enjuagar el producto en la máquina con 200 litros y posteriormente proceder a realizar la limpieza habitual del equipo.`,
                fertiriego: `Fertirriego: previamente limpiar bien la máquina, preparar la solución mezclando la dosis recomendada con el 50% del volumen de agua a utilizar, este proceso realizarlo con agitación continua. El volumen recomendado de agua entre 8 y 10 litros por hectárea. Una vez terminada la aplicación se recomienda proceder a realizar la limpieza habitual del equipo.`,
                aereo: `Aéreo: previamente limpiar bien la máquina, preparar la solución mezclando la dosis recomendada con el 50% del volumen de agua a utilizar, este proceso realizarlo con agitación continua. El volumen recomendado de agua entre 8 y 10 litros por hectárea. Una vez terminada la aplicación se recomienda proceder a realizar la limpieza habitual del equipo.`,
            },
            cautions_and_warnings: {
                text: `Se advierte que la empresa garantiza el contenido y riquezas declaradas en la etiqueta, sin embargo, en su utilización pueden intervenir factores que escapan a nuestro control como son la preparación de mezclas, la aplicación, la climatología, entre otros. El usuario será responsable de los daños causados al cultivo, al suelo o al aplicador, por inobservancia total o parcial de la información explicada en esta etiqueta. Utilizar sólo en caso de reconocida necesidad, sin sobrepasar las dosis recomendadas. Se recomienda su aplicación bajo asesoramiento técnico agronómico. Los productos Mist son compatibles con la mayoría de productos agroquímicos, sin embargo se recomienda efectuar pruebas en un recipiente previo a realizar la mezcla.`
            }
        }
    },
    {
        name: "Mist BLC (Balance)",
        slug: "mist-blc-balance",
        category: "Nutrición",
        sub_category: "Balanceados",
        crops: [
            "Soja",
        ],
        brand: "Mist",
        description_html: "",
        id: "mst-blc-balance",
        image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Producto%20BLC-8.png",
        pdf_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/MIST%20BLC%20-%20Kioshi%20Stone%20-%20Ficha%20T%C3%83%C2%A9cnica.pdf",
        product_volume_state: "Liquidos",
        html_content: {
            descripction: `Mist-BLC (balance)®; es una dispersión de nanopartículas minerales, cuya formulación surge de vastas experiencias en trabajos de nutrición sobre este cultivo, posee la adecuada concentración de los elementos principales, secundarios y micronutrientes que son esenciales para el crecimiento, desarrollo de estructuras radiculares y formación de nódulos, como Fósforo, Calcio, Magnesio, Potasio y Boro.

            La línea MIST se ha caracterizado por tener calcio en sus formulaciones, básicamente porque gobierna la entrega celular de todos los minerales, el magnesio, por            su parte, es vital en el proceso de fotosíntesis y fijación simbiótica del nitrógeno atmosférico. El azufre y el boro participan en la síntesis de proteínas. El        potasio, además de que es esencial en la síntesis de proteínas, desempeña un rol importante en la regulación del agua en las plantas (osmo-regulación) y el         fósforo interviene en cada proceso de la planta que involucra transferencia de energía y por tanto en todas las reacciones que ocurren en las plantas y el suelo.F

            El Calcio en sus formulaciones gobierna la entrega celular de todos los minerales; el magnesio, por su parte, es vital en el proceso de fotosíntesis y fijación simbiótica del nitrógeno atmosférico. El azufre interviene en procesos asociados a la eficiencia del uso de la radiación y contribuye a la calidad del forraje. En tanto el Nitrógeno contribuye a la expansión del área foliar. El Fósforo por su parte, interviene en múltiples procesos, como el desarrollo de la biomasa aérea y radical, la fotosíntesis, la síntesis de carbohidratos y proteínas y el silicio aumenta la resistencia de las plantas para superar estrés biótico y abiótico.`,
            content: {
                list: [
                    "Calcio (Ca): 5,20%",
                    "Magnesio (Mg): 1,30%",
                    "Nitrógeno (N): 3,30%",
                    "Fósforo (P): 0,30%",
                    "Potasio (K): 1,70%",
                    "Boro (B): Trazas",
                ]
            },
            properties: {
                list: [
                    "pH: 6,8 (a 20 °C)",
                    "Densidad: 1,2 a 1,4 g/cc",
                    "Reacción e índice: NEUTRO"
                ]
            },
            storage: {
                list: [
                    "Procurar un almacenaje entre 35ºC y -5ºC para preservar la integridad del producto.",
                    "Guardar en lugar fresco y al abrigo de la luz solar directa.",
                    "Evitar la formación de vapores."
                ]
            },
            volume: {
                list: ["Bags in Box de 15 litros."]
            },
            packaging: "La presentación en Bag in Box de 15 litros, permite armar un pallet estándar de 56 unidades (840 litros), fácilmente transportable en camioneta y cuyo rendimiento permitirá cubrir hasta 280 Ha.",
            application_dosage: {
                others: [
                    "Aplicación foliar por pulverización.",
                    "Cultivo: Soja.",
                    "Dosis: 1 a 2 L/ha.",
                    "Momento de aplicación:",
                    "Vegetativo de V4 a V10.",
                    "Reproductivo de R1 a R4.",
                    "Las recomendaciones son generales, pueden variar por diversos factores y criterios. Consulte con su asesor.",
                ]
            },
            reccommendations: {
                text: `Retirar la vejiga de la caja y proceder a su homogeneización previo a su uso. El contenido puede presentar una separación de fases, mediante la agitación vigorosa se obtiene la condición óptima de empleo.`,
                pulverization: `Pulverizador: previamente limpiar bien la máquina, preparar la solución mezclando la dosis recomendada con el 50% del volumen de agua a utilizar, este proceso realizarlo con agitación continua. El volumen recomendado de agua entre 50 y 60 litros por hectárea. Una vez terminada la aplicación se recomienda enjuagar el producto en la maquina con 200 litros y posteriormente proceder a realizar la limpieza habitual del equipo.`,
                aereo: `Aéreo: previamente limpiar bien la máquina, preparar la solución mezclando la dosis recomendada con el 50% del volumen de agua a utilizar, este proceso realizarlo con agitación continua. El volumen recomendado de agua entre 8 y 10 litros por hectárea. Una vez terminada la aplicación se recomienda proceder a realizar la limpieza habitual del equipo.`,
            },
            cautions_and_warnings: {
                text: `Se advierte que la empresa garantiza el contenido y riquezas declaradas en la etiqueta, sin embargo, en su utilización pueden intervenir factores que escapan a nuestro control como son la preparación de mezclas, la aplicación, la climatología, entre otros. El usuario será responsable de los daños causados al cultivo, al suelo o al aplicador, por inobservancia total o parcial de la información explicada en esta etiqueta. Utilizar sólo en caso de reconocida necesidad, sin sobrepasar las dosis recomendadas. Se recomienda su aplicación bajo asesoramiento técnico agronómico.
                Los productos Mist son compatibles con la mayoría de productos agroquímicos, sin embargo se recomienda efectuar pruebas en un recipiente previo a realizar la mezcla.`
            }
        }
    },
    {
        name: "Mist ZN",
        slug: "mist-zn",
        category: "Nutrición",
        sub_category: "Microelementos",
        crops: [
            "Trigo",
            "Maíz",
            "Sorgo",
            "Pasturas",
        ],
        brand: "Mist",
        description_html: "",
        id: "mst-zn",
        image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Producto%20Zn-8.png",
        pdf_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/MIST%20ZN%20-%20Kioshi%20Stone%20-%20Ficha%20T%C3%83%C2%A9cnica.pdf",
        product_volume_state: "Liquidos",
        html_content: {
            descripction: `MIST-Zn® es una dispersión de nanopartículas minerales con una adecuada concentración en Zinc, Potasio, Silicio y Azufre. El Zinc es un micronutriente esencial para el crecimiento y reproducción de las plantas ya que participa en numerosos procesos metabólicos (síntesis de proteínas, carbohidratos, hormonas, entre otros), en la formación de clorofila y de auxinas, además de darle resistencia a la planta en condiciones de estrés por baja temperatura. En tanto que la presencia de Potasio ayuda a controlar el balance iónico e interviene en la translocación de microelementos, el Silicio aumenta la resistencia de las plantas para superar estrés biótico y abiótico, y el Azufre es un constituyente estructural de compuestos orgánicos y al igual que el Zinc participa en los procesos de síntesis proteínas.`,
            effects: {
                list: [
                    "La rápida asimilación del Calcio, el cual mejora el transporte del resto de los nutrientes.",
                    "Regula el pH y la saturación de bases localmente.",
                    "Aporte de Zinc, el cual es vital para los procesos de fotosíntesis, hormonales, síntesis de proteínas y metabólicos en el nitrógeno para la producción de aminoácidos.",
                ]
            },
            content: {
                list: [
                    "Zinc (Zn): 3,6%",
                ]
            },
            properties: {
                list: [
                    "pH: 6,0 (a 20°C)",
                    "Densidad: 1,2 a 1,4 g/cc",
                    "Reacción e índice: NEUTRO"
                ]
            },
            storage: {
                list: [
                    "Procurar un almacenaje entre 35ºC y -5ºC para preservar la integridad del producto.",
                    "Guardar en lugar fresco y al abrigo de la luz solar directa.",
                    "Evitar la formación de vapores."
                ]
            },
            volume: {
                list: ["Bags in Box de 15 litros."]
            },
            packaging: "La presentación en Bag in Box de 15 litros, permite armar un pallet estándar de 56 unidades (840 litros), fácilmente transportable en camioneta y cuyo rendimiento permitirá cubrir hasta 280 Ha.",
            application_dosage: {
                image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Zn-2.svg",
                extensive_industrial_fruits: {
                    title: "Cultivos Extensivos/Industriales/Frutales.",
                    type: "Pulverización, Fertirriego.",
                    dose: "Dosis: 200 a 800 cc/ha por cada aplicación.",
                },
                intensive: {
                    title: "Cultivos Intensivos",
                    type: "Aplicación por Fertirriego",
                    dose: "Dosis: 200 a 1000 cc/ha por cada aplicación."
                },
                others: [
                    "Aplicación foliar por pulverización.",
                    "Cultivo: Soja.",
                    "Dosis: 1 a 2 L/ha.",
                    "Momento de aplicación:",
                    "Vegetativo de V4 a V10.",
                    "Reproductivo de R1 a R4.",
                    "Las recomendaciones son generales, pueden variar por diversos factores y criterios. Consulte con su asesor.",
                ]
            },
            reccommendations: {
                text: `Retirar la vejiga de la caja y proceder a su homogeneización previo a su uso. El contenido puede presentar una separación de fases, mediante la agitación vigorosa se obtiene la condición óptima de empleo.`,
                pulverization: `Pulverizador: previamente limpiar bien la máquina, preparar la solución mezclando la dosis recomendada con el 50% del volumen de agua a utilizar, este proceso realizarlo con agitación continua. El volumen recomendado de agua entre 80 a 100 litros por hectárea, la presión de pulverización que no supere los 3 bar, manteniéndola en un rango entre 2 y 3 bar. Para mejor aplicación mantener la velocidad de la máquina entre 18 a 20 km/hora. Se recomienda usar pastillas de cono hueco. En el caso de recargas para continuar la actividad no dejar vaciar el tanque, mantener como mínimo 15% de su capacidad para volver hacer la mezcla del producto. Una vez terminada la aplicación se debe enjuagar el producto en la máquina con 200 litros y posteriormente proceder a realizar la limpieza habitual del equipo.`,
                fertiriego: `Fertirriego: Se deberá preparar la solución madre mezclando la dosis recomendada con el 50% del volumen de agua a utilizar en el riego. Luego de mezclado, se agrega agitando el volumen total de agua de riego. Nota: se deberá mantener la suspensión con agitación constante (evitar el uso de sopladores de aire). Una vez terminada la aplicación, se deberá lavar el equipo y sistema de conducción con agua limpia.`,
            },
            cautions_and_warnings: {
                text: `Se advierte que la empresa garantiza el contenido y riquezas declaradas en la etiqueta, sin embargo, en su utilización pueden intervenir factores que escapan a nuestro control como son la preparación de mezclas, la aplicación, la climatología, entre otros. El usuario será responsable de los daños causados al cultivo, al suelo o al aplicador, por inobservancia total o parcial de la información explicada en esta etiqueta. Utilizar sólo en caso de reconocida necesidad, sin sobrepasar las dosis recomendadas. Se recomienda su aplicación bajo asesoramiento técnico agronómico.`
            }
        }
    },
    {
        name: "Mist VL",
        slug: "mist-vl",
        category: "Vivificante de semillas",
        sub_category: undefined,
        crops: [
            "Soja",
        ],
        brand: "Mist",
        description_html: "",
        id: "mst-vl",
        image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Producto%20VL-8.png",
        pdf_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/MIST%20VL%20-%20Kioshi%20Stone%20-%20Ficha%20T%C3%83%C2%A9cnica.pdf",
        product_volume_state: "Liquidos",
        html_content: {
            descripction: `MIST-VL® es un vivificante para semillas. Es una dispersión de nanopartículas minerales que contiene los elementos:
            Azufre, Calcio, Silicio, Molibdeno, Manganeso, Boro y Cobalto. Estos minerales aseguran una zona de confort en la rizosfera y permiten la máxima expresión del PG de la semilla, favoreciendo el desarrollo de la plántula. Recomendado para leguminosas.`,
            effects: {
                list: [
                    "La rápida asimilación del Calcio, el cual mejora el transporte del resto de los nutrientes.",
                    "Regula el pH y la saturación de bases localmente.",
                    "Aporte de Azufre y Calcio de rápida disponibilidad.",
                    "Permite la máxima expresión del PG y desarrollo de la plántula.",
                    "El resultado final es un incremento en la producción y la mejora de las características organolépticas, además de que favorece a la fijación de rizobios y al confort de otros organismos fijadores y solubilizadores presentes en el suelo.",
                ]
            },
            content: {
                list: [
                    "Calcio (Ca): 10,0%",
                    "Azufre (S): 8,0%",
                    "Molibdeno (Mo): 0,01%",
                    "Cobalto (Co): 0,01%",
                    "Manganeso (Mn): Trazas",
                ]
            },
            properties: {
                list: [
                    "pH: 7,2 (a 20°C)",
                    "Densidad: 1,2 a 1,4 g/cc",
                    "Reacción e índice: NEUTRO"
                ]
            },
            volume: {
                list: ["Bags in Box de 2 litros."]
            },
            packaging: "La presentación en Bag in Box de 15 litros, permite armar un pallet estándar de 56 unidades (840 litros), fácilmente transportable en camioneta y cuyo rendimiento permitirá cubrir hasta 280 Ha.",
            application_dosage: {
                image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Zn-2.svg",
                intensive: {
                    title: "Cultivos Intensivos",
                    dose: "Incorporar 300 cc a 500cc cada 100 kg de semilla en 1 o 2 litros de agua según cultivo."
                },
                others: [
                    "El producto puede ser adicionado conjuntamente con los tratamientos habituales (fungicida, inoculantes, estimulantes, entre otros).",
                ]
            },
            reccommendations: {
                text: `Retirar la vejiga de la caja y proceder a su homogeneización previo a su uso. El contenido puede presentar una separación de fases, mediante la agitación vigorosa se obtiene la condición óptima de empleo. Se advierte que la empresa garantiza el contenido y riquezas declaradas en la etiqueta, sin embargo en su utilización pueden intervenir factores que escapan a nuestro control como son la preparación de mezclas, la aplicación, la climatología, etc. El usuario será responsable de los daños causados al cultivo, al suelo o al aplicador, por inobservancia total o parcial de la información explicada en esta etiqueta. Utilizar sólo en caso de reconocida necesidad, sin sobrepasar las dosis recomendadas. Se recomienda su aplicación bajo asesoramiento técnico agronómico.`,
            },
        },
    },
    {
        name: "Mist VG",
        slug: "mist-vg",
        category: "Vivificante de semillas",
        sub_category: undefined,
        crops: [
            'Girasol',
            "Sorgo",
            "Trigo",
            "Maíz",
        ],
        brand: "Mist",
        description_html: "",
        id: "mst-vg",
        image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Producto%20VG-8.png",
        pdf_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/MIST%20VG%20-%20Kioshi%20Stone%20-%20Ficha%20T%C3%83%C2%A9cnica.pdf",
        product_volume_state: "Liquidos",
        html_content: {
            descripction: `MIST-VG® es un vivificante para semillas. Es una dispersión de nanopartículas minerales que contiene los elementos: Nitrógeno, Azufre, Calcio, Magnesio, Hierro y Silicio. Estos minerales aseguran una zona de confort en la rizosfera y permiten la máxima expresión del PG de la semilla, favoreciendo el desarrollo de la plántula. Recomendado para gramíneas.`,
            effects: {
                list: [
                    "La rápida asimilación del Calcio, el cual mejora el transporte del resto de los nutrientes.",
                    "Regula el pH y la saturación de bases localmente.",
                    "Aporte de Nitrógeno y Hierro.",
                    "Permite la máxima expresión del PG y desarrollo de la plántula.",
                    "El resultado final es un incremento en la producción y la mejora de las características organolépticas, además de que favorece al confort de otros organismos fijadores y solubilizadores presentes en el suelo."
                ]
            },
            content: {
                list: [
                    "Nitrógeno (N): 2,0%",
                    "Azufre (S): 5,7%",
                    "Calcio (Ca): 6,8%",
                    "Hierro (Fe): 0,4%",
                    "Magnesio (Mg): Trazas",
                ]
            },
            properties: {
                list: [
                    "pH: 7,1 (a 20°C)",
                    "Densidad: 1,2 a 1,4 g/cc",
                    "Reacción e índice: NEUTRO",
                ]
            },
            storage: {
                list: [
                    "Procurar un almacenaje entre 35ºC y -5ºC para preservar la integridad del producto.",
                    "Guardar en lugar fresco y al abrigo de la luz solar directa.",
                    "Evitar la formación de vapores."
                ]
            },
            volume: {
                list: ["Bags in Box de 2 litros."]
            },
            application_dosage: {
                intensive: {
                    title: "Cultivos Intensivos-Extensivos",
                    dose: "Incorporar 300 cc a 500 cc cada 100 kg de semilla en 1 o 2 litros de agua según cultivo. El producto puede ser adicionado conjuntamente con los tratamientos habituales (fungicida, inoculantes, estimulantes, entre otros)."
                },
            },
            reccommendations: {
                text: `Retirar la vejiga de la caja y proceder a su homogeneización previo a su uso. El contenido puede presentar una separación de fases, mediante la agitación vigorosa se obtiene la condición óptima de empleo.
                Se advierte que la empresa garantiza el contenido y riquezas declaradas en la etiqueta, sin embargo en su utilización pueden intervenir factores que escapan a              nuestro control como son la preparación de mezclas, la aplicación, la climatología, etc. El usuario será responsable de los daños causados al cultivo, al suelo o               al aplicador, por inobservancia total o parcial de la información explicada en esta etiqueta. Utilizar sólo en caso de reconocida necesidad, sin sobrepasar las             dosis recomendadas. Se recomienda su aplicación bajo asesoramiento técnico agronómico.`,
            },
        }
    },
    {
        name: "Mist CLY",
        slug: "mist-cly",
        category: "Corrección de suelos",
        sub_category: undefined,
        crops: [],
        brand: "Mist",
        description_html: "",
        id: "mst-cly",
        image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Producto%20Cly-8.png",
        pdf_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/MIST%20CLY%20-%20Kioshi%20Stone%20-%20Ficha%20T%C3%83%C2%A9cnica-1.pdf",
        product_volume_state: "Liquidos",
        html_content: {
            descripction: `MIST-CLY® es una dispersión de nanopartículas minerales. Su fórmula contiene en mayor proporción illitas, arcillas derivadas de las micas; ricas en potasio, hierro y sílice. La estructura cristalina en 2D de las illitas y el aporte de carbones húmicos incrementa la capacidad de intercambio catiónico del suelo, favoreciendo la retención de cationes que mejoran la estructura y química edáfica. El silicio aumenta la resistencia de las plantas para superar estrés biótico y abiótico. El calcio participa en la absorción de nutrientes, mientras que el azufre es un constituyente estructural de compuestos orgánicos.`,
            effects: {
                list: [
                    "Aporte de nutrientes esenciales como potasio.",
                    "Incorporación de materia orgánica en forma de carbones húmicos.",
                    "Mejora de la estructura en suelos con poca materia orgánica, arenosos y/o planchados por salinización.",
                    "El resultado final es la mejora de las condiciones y la estructura del suelo.",
                ]
            },
            content: {
                list: [
                    "Carbono (C): 2,60%",
                    "Silicio (Si): 7%",
                    "Calcio (Ca): 1,0%",
                    "Hierro (Fe): 0,3%",
                    "Azufre (S): Trazas",
                    "Potasio (K): Trazas",
                ]
            },
            properties: {
                list: [
                    "pH: 7,2 (a 20°C)",
                    "Densidad: 1,2 a 1,4 g/cc",
                    "Reacción e índice: NEUTRO"
                ]
            },
            storage: {
                list: [
                    "Procurar un almacenaje entre 35ºC y -5ºC para preservar la integridad del producto.",
                    "Guardar en lugar fresco y al abrigo de la luz solar directa.",
                    "Evitar la formación de vapores."
                ]
            },
            volume: {
                list: ["Bags in Box de 15 litros."]
            },
            packaging: "La presentación en Bag in Box de 15 litros, permite armar un pallet estándar de 56 unidades (840 litros), fácilmente transportable en camioneta y cuyo rendimiento permitirá cubrir hasta 280 Ha.",
            application_dosage: {
                image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Cly.svg",
                extensive_industrial_fruits: {
                    title: "Cultivos Extensivos/Industriales/Frutales.",
                    type: "Pulverización, Fertirriego.",
                    dose: "Dosis: 1,5 a 3 Lts/ha por cada aplicación.",
                },
                intensive: {
                    title: "Cultivos Intensivos",
                    type: "Aplicación por Fertirriego",
                    dose: "Dosis: 2 a 4 Lts/ha por cada aplicación."
                },
            },
            reccommendations: {
                text: `Retirar la vejiga de la caja y proceder a su homogeneización previo a su uso. El contenido puede presentar una separación de fases, mediante la agitación vigorosa se obtiene la condición óptima de empleo.`,
                pulverization: `Pulverizador: previamente limpiar bien la máquina, preparar la solución mezclando la dosis recomendada con el 50% del volumen de agua a utilizar, este proceso realizarlo con agitación continua. El volumen recomendado de agua entre 80 a 100 litros por hectárea, la presión de pulverización que no supere los 3 bar, manteniéndola en un rango entre 2 y 3 bar. Para mejor aplicación mantener la velocidad de la maquina entre 18 a 20 km/hora. Se recomienda usar pastillas de cono hueco. En el caso de recargas para continuar la actividad no dejar vaciar el tanque, mantener como mínimo 15% de su capacidad para volver hacer la mezcla del producto. Una vez terminada la aplicación se debe enjuagar el producto en la maquina con 200 litros y posteriormente proceder a realizar la limpieza habitual del equipo.`,
                fertiriego: `Fertirriego: se deberá preparar la solución madre mezclando la dosis recomendada con el 50% del volumen de agua a utilizar en el riego. Luego de mezclado, se agrega agitando el volumen total de agua de riego. Nota: se deberá mantenerla suspensión con agitación constante (evitar el uso de sopladores de aire). Una vez terminada la aplicación, se deberá lavar el equipo y sistema de conducción con agua limpia.`,
            },
            cautions_and_warnings: {
                text: `Se advierte que la empresa garantiza el contenido y riquezas declaradas en la etiqueta, sin embargo, en su utilización pueden intervenir factores que escapan a nuestro control como son la preparación de mezclas, la aplicación, la climatología, entre otros. El usuario será responsable de los daños causados al cultivo, al suelo o al aplicador, por inobservancia total o parcial de la información explicada en esta etiqueta. Utilizar sólo en caso de reconocida necesidad, sin sobrepasar las dosis recomendadas. Se recomienda su aplicación bajo asesoramiento técnico agronómico.`
            }
        }
    },
    {
        name: "Mist S+",
        slug: "mist-s-plus",
        category: "Corrección de suelos",
        sub_category: undefined,
        crops: [],
        brand: "Mist",
        description_html: "",
        id: "mst-s-plus",
        image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Producto%20S+-8.png",
        pdf_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/MIST%20S-%20Kioshi%20Stone%20-%20Ficha%20T%C3%83%C2%A9cnica.pdf",
        product_volume_state: "Liquidos",
        html_content: {
            descripction: `MIST S+® es una dispersión de nanopartículas minerales con una adecuada concentración en Azufre. La presencia de calcio mejora la absorción de nutrientes, mientras que el Azufre es constituyente estructural de compuestos orgánicos, algunos de los cuales son únicamente sintetizados por las plantas, como es el caso de los aminoácidos cisteína, cistina y metionina, requeridos para producir proteínas. También participa en la formación de clorofila y de vitaminas. Mist S+® es un verdadero potenciador del suelo, siendo de fácil y precisa aplicación.`,
            effects: {
                list: [
                    "Más económico, fácil y preciso de aplicar que los sólidos, finos, granulados y laminados.",
                    "El MIST S+® son Azufre y Calcio de rápida disponibilidad, y de gran residualidad.",
                    "Especial para la adecuación de suelos muy alcalinos (elevado pH).",
                    "Permite la recuperación de zonas de escaso drenaje, con concentración de sales.",
                    "Reemplazo grandes cantidades de material a granel con solo 1,5 L por hectárea.",
                    "El resultado final es un incremento en la producción y la mejora de las características organolépticas, así como la mejora de las características del suelo.",
                ]
            },
            content: {
                list: [
                    "Calcio (Ca): 3%",
                    "Azufre (S): 18%",
                ]
            },
            properties: {
                list: [
                    "pH: 5,6 (a 20°C)",
                    "Densidad: 1,2 a 1,4 g/cc",
                    "Reacción e índice: NEUTRO (1)",
                    `<i>(1) El producto no es reactivo en condiciones normales de utilización, almacenamiento y transporte.</i>`
                ]
            },
            storage: {
                list: [
                    "Procurar un almacenaje entre 35ºC y -5ºC para preservar la integridad del producto.",
                    "Guardar en lugar fresco y al abrigo de la luz solar directa.",
                    "Evitar la formación de vapores."
                ]
            },
            volume: {
                list: ["Bags in Box de 15 litros."]
            },
            packaging: "La presentación en Bag in Box de 15 litros, permite armar un pallet estándar de 56 unidades (840 litros), fácilmente transportable en camioneta y cuyo rendimiento permitirá cubrir hasta 280 Ha.",
            application_dosage: {
                image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/S-4.svg",
                extensive_industrial_fruits: {
                    title: "Cultivos Extensivos/Industriales/Frutales.",
                    type: "Pulverización, Fertirriego.",
                    dose: "Dosis: 1,5 a 3 Lts/ha por cada aplicación.",
                },
                intensive: {
                    title: "Cultivos Intensivos",
                    type: "Aplicación por Fertirriego",
                    dose: "Cultivos hortícolas en general: 2 a 5 Lts/Ha por cada aplicación, se recomiendan varias aplicaciones según producto (30 a 40 Lts/Ha por cada ciclo/cultivo)."
                },
            },
            reccommendations: {
                text: `Retirar la vejiga de la caja y proceder a su homogeneización previo a su uso. El contenido puede presentar una separación de fases, mediante la agitación vigorosa se obtiene la condición óptima de empleo.`,
                pulverization: `Pulverizador: previamente limpiar bien la máquina, preparar la solución mezclando la dosis recomendada con el 50% del volumen de agua a utilizar, este proceso realizarlo con agitación continua. El volumen recomendado de agua entre 80 a 100 litros por hectárea, la presión de pulverización que no supere los 3 bar, manteniéndola en un rango entre 2 y 3 bar. Para mejor aplicación mantener la velocidad de la maquina entre 18 a 20 km/hora. Se recomienda usar pastillas de cono hueco. En el caso de recargas para continuar la actividad no dejar vaciar el tanque, mantener como mínimo 15% de su capacidad para volver hacer la mezcla del producto. Una vez terminada la aplicación se debe enjuagar el producto en la maquina con 200 litros y posteriormente proceder a realizar la limpieza habitual del equipo.`,
                fertiriego: `Fertirriego: se deberá preparar la solución madre mezclando la dosis recomendada con el 50% del volumen de agua a utilizar en el riego. Luego de mezclado, se agrega agitando el volumen total de agua de riego. Nota: se deberá mantenerla suspensión con agitación constante (evitar el uso de sopladores de aire). Una vez terminada la aplicación, se deberá lavar el equipo y sistema de conducción con agua limpia.`,
            },
            cautions_and_warnings: {
                text: `Se advierte que la empresa garantiza el contenido y riquezas declaradas en la etiqueta, sin embargo, en su utilización pueden intervenir factores que escapan a nuestro control como son la preparación de mezclas, la aplicación, la climatología, entre otros. El usuario será responsable de los daños causados al cultivo, al suelo o al aplicador, por inobservancia total o parcial de la información explicada en esta etiqueta. Utilizar sólo en caso de reconocida necesidad, sin sobrepasar las dosis recomendadas. Se recomienda su aplicación bajo asesoramiento técnico agronómico.`
            }
        }
    },
    {
        name: "Mist TPS-78",
        slug: "mist-tps-78",
        category: "Corrección de suelos",
        sub_category: undefined,
        crops: ["Algodón", "Cebada", "Cítricos", "Frutales", "Girasol", "Maíz", "Pasturas", "Soja", "Sorgo", "Trigo", "Yerba Mate"],
        brand: "Mist",
        description_html: "",
        id: "mst-tps-78",
        image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Producto%20TPS%2078-8.png",
        pdf_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/MIST%20TPS%2078%20-%20Kioshi%20Stone%20-%20Ficha%20T%C3%83%C2%A9cnica-1.pdf",
        product_volume_state: "Liquidos",
        html_content: {
            descripction: `MIST TPS 78® es una dispersión de nanopartículas minerales de alta pureza, cuya composición básica contiene azufre y calcio a la cual se le adiciona en su producción azufre elemental. Esta combinación es recomendada para desplazar sodio y sales del complejo de intercambio del suelo logrando así mejorar la estructura; reduciendo problemas de compactación y encostrado superficial.Además, se suministra azufre y calcio para la nutrición de las plantas.`,
            effects: {
                list: [
                    "La rápida asimilación del calcio, el cual mejora el transporte del resto de los nutrientes.",
                    "Más económico, fácil y preciso de aplicar que los sólidos, finos, granulados y laminados.",
                    "El MIST TPS 78® aporta Calcio y Azufre de rápida disponibilidad, y de gran residualidad.",
                    "Especial para la adecuación de suelos alcalinos salinos y/o alcalinos sódicos (elevado pH).",
                    "Permite la recuperación de zonas de escaso drenaje, con concentración de sales.",
                    "Reemplazo de grandes cantidades de material a granel con solo 1,5 L por hectárea. El resultado final es un incremento en la producción y la mejora de las condiciones del suelo y su estructura.",
                ]
            },
            content: {
                list: [
                    "Calcio (Ca): 8,3%",
                    "Azufre (S): 5,3%",
                ]
            },
            properties: {
                list: [
                    "pH: 7,2 (a 20°C)",
                    "Densidad: 1,2 a 1,4 g/cc",
                    "Reacción e índice: NEUTRO"
                ]
            },
            storage: {
                list: [
                    "Procurar un almacenaje entre 35ºC y -5ºC para preservar la integridad del producto.",
                    "Guardar en lugar fresco y al abrigo de la luz solar directa.",
                    "Evitar la formación de vapores."
                ]
            },
            volume: {
                list: ["Bags in Box de 15 litros."]
            },
            packaging: "La presentación en Bag in Box de 15 litros, permite armar un pallet estándar de 56 unidades (840 litros), fácilmente transportable en camioneta y cuyo rendimiento permitirá cubrir hasta 280 Ha.",
            application_dosage: {
                image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Mist%20TPS%2078.svg",
                extensive_industrial_fruits: {
                    title: "Cultivos Extensivos",
                    type: "Pulverización, Fertirriego.",
                    dose: "Dosis: 2 a 4 Lts/ha por cada aplicación.",
                },
                intensive: {
                    title: "Cultivos Intensivos",
                    type: "Aplicación por Fertirriego",
                    dose: "Dosis: 2 a 5 Lts/ha por cada aplicación."
                },
            },
            reccommendations: {
                text: `Retirar la vejiga de la caja y proceder a su homogeneización previo a su uso. El contenido puede presentar una separación de fases, mediante la agitación vigorosa se obtiene la condición óptima de empleo.`,
                pulverization: `Pulverizador: previamente limpiar bien la máquina, preparar la solución mezclando la dosis recomendada con el 50% del volumen de agua a utilizar, este proceso realizarlo con agitación continua. El volumen recomendado de agua entre 80 a 100 litros por hectárea, la presión de pulverización que no supere los 3 bar, manteniéndola en un rango entre 2 y 3 bar. Para mejor aplicación mantener la velocidad de la maquina entre 18 a 20 km/hora. Se recomienda usar pastillas de cono hueco. En el caso de recargas para continuar la actividad no dejar vaciar el tanque, mantener como mínimo 15% de su capacidad para volver hacer la mezcla del producto. Una vez terminada la aplicación se debe enjuagar el producto en la maquina con 200 litros y posteriormente proceder a realizar la limpieza habitual del equipo.`,
                fertiriego: `Fertirriego: se deberá preparar la solución madre mezclando la dosis recomendada con el 50% del volumen de agua a utilizar en el riego. Luego de mezclado, se agrega agitando el volumen total de agua de riego. Nota: se deberá mantenerla suspensión con agitación constante (evitar el uso de sopladores de aire). Una vez terminada la aplicación, se deberá lavar el equipo y sistema de conducción con agua limpia.`,
            },
            cautions_and_warnings: {
                text: `Se advierte que la empresa garantiza el contenido y riquezas declaradas en la etiqueta, sin embargo, en su utilización pueden intervenir factores que escapan a nuestro control como son la preparación de mezclas, la aplicación, la climatología, entre otros. El usuario será responsable de los daños causados al cultivo, al suelo o al aplicador, por inobservancia total o parcial de la información explicada en esta etiqueta. Utilizar sólo en caso de reconocida necesidad, sin sobrepasar las dosis recomendadas. Se recomienda su aplicación bajo asesoramiento técnico agronómico.`
            }
        }
    },
    {
        name: "Mist TPS",
        slug: "mist-tps",
        category: "Corrección de suelos",
        sub_category: undefined,
        crops: [
            "Algodón", "Cebada", "Cítricos", "Frutales", "Girasol", "Maíz", "Pasturas", "Soja", "Sorgo", "Trigo", "Yerba Mate"
        ],
        brand: "Mist",
        description_html: "",
        id: "mst-tps",
        image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Producto%20TPS-8.png",
        pdf_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/MIST%20TPS%20-%20Kioshi%20Stone%20-%20Ficha%20T%C3%83%C2%A9cnica-1.pdf",
        product_volume_state: "Liquidos",
        html_content: {
            descripction: `MIST-TPS® es una dispersión de nanopartículas minerales de alta calidad, la relación azufre / calcio / magnesio proviene de su fuente de origen. A esta se le adiciona en el tratamiento azufre al 99,9% para enriquecer la fórmula. Recomendado para alcanzar el equilibrio ácido-base del suelo generando leves correcciones de pH. También aporta bases reponiendo calcio y magnesio al complejo de Intercambio lo cual mejorará la estructura y química edáfica. Además aporta calcio, magnesio y azufre para la nutrición de las plantas.`,
            effects: {
                list: [
                    "La rápida asimilación del calcio, el cual mejora el transporte del resto de los nutrientes",
                    "El MIST TPS es especial para la adecuación de suelos con muchos años de producción, para restitución de los cationes básicos (acidez edáfica).",
                    "El resultado final es un incremento en la producción y la mejora de las condiciones del suelo y su estructura.",
                ]
            },
            content: {
                list: [
                    "Calcio (Ca): 8,8%",
                    "Magnesio (Mg): 1,9%",
                    "Azufre (S): 3,6%",
                ]
            },
            properties: {
                list: [
                    "pH: 6,9 a 7,5 (a 20°C)",
                    "Densidad: 1,2 a 1,4 g/cc",
                    "Reacción e índice: NEUTRO"
                ]
            },
            storage: {
                list: [
                    "Procurar un almacenaje entre 35ºC y -5ºC para preservar la integridad del producto.",
                    "Guardar en lugar fresco y al abrigo de la luz solar directa.",
                    "Evitar la formación de vapores."
                ]
            },
            volume: {
                list: ["Bags in Box de 15 litros."]
            },
            packaging: "La presentación en Bag in Box de 15 litros, permite armar un pallet estándar de 56 unidades (840 litros), fácilmente transportable en camioneta y cuyo rendimiento permitirá cubrir hasta 280 Ha.",
            application_dosage: {
                image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/TPS.svg",
                extensive_industrial_fruits: {
                    title: "Cultivos Extensivos",
                    type: "Pulverización, Fertirriego.",
                    dose: "Dosis: 2 a 4 Lts/ha por cada aplicación..",
                },
                intensive: {
                    title: "Cultivos Intensivos",
                    type: "Aplicación por Fertirriego",
                    dose: "Dosis: 2 a 5 Lts/ha por cada aplicación."
                },
            },
            reccommendations: {
                text: `Retirar la vejiga de la caja y proceder a su homogeneización previo a su uso. El contenido puede presentar una separación de fases, mediante la agitación vigorosa se obtiene la condición óptima de empleo.`,
                pulverization: `Pulverizador: previamente limpiar bien la máquina, preparar la solución mezclando la dosis recomendada con el 50% del volumen de agua a utilizar, este proceso realizarlo con agitación continua. El volumen recomendado de agua entre 80 a 100 litros por hectárea, la presión de pulverización que no supere los 3 bar, manteniéndola en un rango entre 2 y 3 bar. Para mejor aplicación mantener la velocidad de la maquina entre 18 a 20 km/hora. Se recomienda usar pastillas de cono hueco. En el caso de recargas para continuar la actividad no dejar vaciar el tanque, mantener como mínimo 15% de su capacidad para volver hacer la mezcla del producto. Una vez terminada la aplicación se debe enjuagar el producto en la maquina con 200 litros y posteriormente proceder a realizar la limpieza habitual del equipo.`,
                fertiriego: `Fertirriego: Se deberá preparar la solución madre mezclando la dosis recomendada con el 50% del volumen de agua a utilizar en el riego. Luego de mezclado, se agrega agitando el volumen total de agua de riego. Nota: se deberá mantenerla suspensión con agitación constante (evitar el uso de sopladores de aire). Una vez terminada la aplicación, se deberá lavar el equipo y sistema de conducción con agua limpia.`,
            },
            cautions_and_warnings: {
                text: `Se advierte que la empresa garantiza el contenido y riquezas declaradas en la etiqueta, sin embargo, en su utilización pueden intervenir factores que escapan a nuestro control como son la preparación de mezclas, la aplicación, la climatología, entre otros. El usuario será responsable de los daños causados al cultivo, al suelo o al aplicador, por inobservancia total o parcial de la información explicada en esta etiqueta. Utilizar sólo en caso de reconocida necesidad, sin sobrepasar las dosis recomendadas. Se recomienda su aplicación bajo asesoramiento técnico agronómico.`
            }
        }
    },
    {
        name: "Mist TPS-65",
        slug: "mist-tps-65",
        category: "Corrección de suelos",
        sub_category: undefined,
        crops: ["Algodón", "Cebada", "Cítricos", "Frutales", "Girasol", "Maíz", "Pasturas", "Soja", "Sorgo", "Trigo", "Yerba Mate"],
        brand: "Mist",
        description_html: "",
        id: "mst-tps-65",
        image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Producto%20TPS%2065-8.png",
        pdf_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/MIST%20TPS%2065%20-%20Kioshi%20Stone%20-%20Ficha%20T%C3%83%C2%A9cnica.pdf",
        product_volume_state: "Liquidos",
        html_content: {
            descripction: `MIST TPS 65® es una dispersión de nanopartículas minerales de alta pureza, que contiene calcio y magnesio natural de su génesis. A esta combinación se le adiciona en el proceso de azufre elemental. El MIST TPS 65® soluciona problemas de acidez del suelo, pone en disponibilidad los nutrientes y mejora la eficiencia de absorción de los nutrientes aplicados. Además, se suministra calcio, magnesio y azufre para la nutrición de las plantas.`,
            effects: {
                list: [
                    "La rápida asimilación del calcio, el cual mejora el transporte del resto de los nutrientes.",
                    "La corrección del pH ocasionada por los carbonatos aportados por MIST TPS 65® permite la adecuación de suelos ácidos (bajo pH< 5,5).",
                    "El Magnesio y el azufre son esenciales para la formación de la clorofila.",
                    "Incorpora Azufre responsable en la construcción de moléculas orgánicas.",
                    "Reemplazo de grandes cantidades de material a granel con 1,5 L por hectárea. El resultado final es la mejora de las condiciones del suelo y de su estructura.",
                ]
            },
            content: {
                list: [
                    "Calcio (Ca): 7,0%",
                    "Magnesio (Mg): 3,0%",
                ]
            },
            properties: {
                list: [
                    "pH: 7,9 (a 20°C)",
                    "Densidad: 1,2 a 1,4 g/cc",
                    "Reacción e índice: NEUTRO"
                ]
            },
            storage: {
                list: [
                    "Procurar un almacenaje entre 35ºC y -5ºC para preservar la integridad del producto.",
                    "Guardar en lugar fresco y al abrigo de la luz solar directa.",
                    "Evitar la formación de vapores."
                ]
            },
            volume: {
                list: ["Bags in Box de 15 litros."]
            },
            packaging: "La presentación en Bag in Box de 15 litros, permite armar un pallet estándar de 56 unidades (840 litros), fácilmente transportable en camioneta y cuyo rendimiento permitirá cubrir hasta 280 Ha.",
            application_dosage: {
                image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Mist-TPS_65-1.svg",
                extensive_industrial_fruits: {
                    title: "Cultivos Extensivos",
                    type: "Drench o chorreado a pie de cultivo-Fertirriego.",
                    dose: "Dosis: 2 a 4 Litros/ha por cada aplicación.",
                },
                intensive: {
                    title: "Cultivos Intensivos",
                    type: "Aplicación por Fertirriego",
                    dose: "Dosis: 2 a 5 Litros/ha por cada aplicación."
                },
            },
            reccommendations: {
                text: `Retirar la vejiga de la caja y proceder a su homogeneización previo a su uso. El contenido puede presentar una separación de fases, mediante la agitación vigorosa se obtiene la condición óptima de empleo.`,
                pulverization: `Pulverizador: previamente limpiar bien la máquina, preparar la solución mezclando la dosis recomendada con el 50% del volumen de agua a utilizar, este proceso realizarlo con agitación continua. El volumen recomendado de agua entre 80 a 100 litros por hectárea, la presión de pulverización que no supere los 3 bar, manteniéndola en un rango entre 2 y 3 bar. Para mejor aplicación mantener la velocidad de la maquina entre 18 a 20 km/hora. Se recomienda usar pastillas de cono hueco. En el caso de recargas para continuar la actividad no dejar vaciar el tanque, mantener como mínimo 15% de su capacidad para volver hacer la mezcla del producto. Una vez terminada la aplicación se debe enjuagar el producto en la maquina con 200 litros y posteriormente proceder a realizar la limpieza habitual del equipo.`,
                fertiriego: `Fertirriego: se deberá preparar la solución madre mezclando la dosis recomendada con el 50% del volumen de agua a utilizar en el riego. Luego de mezclado, se agrega agitando el volumen total de agua de riego. Nota: se deberá mantenerla suspensión con agitación constante (evitar el uso de sopladores de aire). Una vez terminada la aplicación, se deberá lavar el equipo y sistema de conducción con agua limpia.`,
            },
            cautions_and_warnings: {
                text: `Se advierte que la empresa garantiza el contenido y riquezas declaradas en la etiqueta, sin embargo, en su utilización pueden intervenir factores que escapan a nuestro control como son la preparación de mezclas, la aplicación, la climatología, entre otros. El usuario será responsable de los daños causados al cultivo, al suelo o al aplicador, por inobservancia total o parcial de la información explicada en esta etiqueta. Utilizar sólo en caso de reconocida necesidad, sin sobrepasar las dosis recomendadas. Se recomienda su aplicación bajo asesoramiento técnico agronómico.`
            }
        }
    },
    {
        name: "Mist CU",
        slug: "mist-cu",
        category: "Nutrición",
        sub_category: undefined,
        crops: [
            "Cítricos",
        ],
        brand: "Mist",
        description_html: "",
        id: "mst-cu",
        image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Producto%20Cu-8.png",
        pdf_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/MIST%20CU%20-%20Kioshi%20Stone%20-%20Ficha%20T%C3%83%C2%A9cnica-1.pdf",
        product_volume_state: "Liquidos",
        html_content: {
            descripction: `MIST-Cu® es una dispersión de nanopartículas minerales con una adecuada concentración en Cobre (En base seca > 20%), Potasio, Silicio y micros. El Cobre es un micronutriente esencial para el crecimiento, reproducción y respiración de las plantas. Participa junto con el Calcio en la formación de la pared celular. Influye en el metabolismo de carbohidratos, cumpliendo un rol importante en el desarrollo del sabor de los frutos y se le atribuye propiedades antimicrobianas porque aumenta la resistencia al estrés. Por su parte, la presencia de Potasio ayuda a controlar el balance iónico e interviene en la translocación de microelementos, el Silicio contribuye a mejorar la resistencia de las plantas para superar estrés, el Zinc participa en los procesos de síntesis proteínas y el Boro participa con el calcio en la síntesis de las paredes celulares y en la división celular.`,
            effects: {
                list: [
                    "Tiene un papel esencial en la fotosíntesis y en sistemas enzimáticos.",
                    "Es utilizado habitualmente como preventivo para evitar el desarrollo de enfermedades como cancrosis, sarna y mancha negra.",
                    "De gran efecto sinérgico aplicado con fungicidas y bactericidas.",
                ]
            },
            content: {
                list: [
                    "Cobre (Cu): 2,4%",
                    "Boro (B): 0,04%",
                    "Zinc (Zn): Trazas",
                ]
            },
            properties: {
                list: [
                    "pH: 7,2 (a 20°C)",
                    "Densidad: 1,2 a 1,4 g/cc",
                    "Reacción e índice: NEUTRO"
                ]
            },
            storage: {
                list: [
                    "Procurar un almacenaje entre 35ºC y -5ºC para preservar la integridad del producto.",
                    "Guardar en lugar fresco y al abrigo de la luz solar directa.",
                    "Evitar la formación de vapores."
                ]
            },
            volume: {
                list: ["Bags in Box de 15 litros."]
            },
            packaging: "La presentación en Bag in Box de 15 litros, permite armar un pallet estándar de 56 unidades (840 litros), fácilmente transportable en camioneta y cuyo rendimiento permitirá cubrir hasta 280 Ha.",
            application_dosage: {
                image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Mist-Cu.svg",
                extensive_industrial_fruits: {
                    title: "Cultivos Extensivos/Industriales/Frutales.",
                    type: "Pulverización, Fertirriego.",
                    dose: "Dosis: 500 a 800 cc/ha por cada aplicación.",
                },
                intensive: {
                    title: "Cultivos Intensivos",
                    type: "Aplicación por Fertirriego",
                    dose: "Dosis: 800 a 1000 cc/ha por cada aplicación."
                },
            },
            reccommendations: {
                text: `Retirar la vejiga de la caja y proceder a su homogeneización previo a su uso. El contenido puede presentar una separación de fases, mediante la agitación vigorosa se obtiene la condición óptima de empleo.`,
                pulverization: `Pulverizador: previamente limpiar bien la máquina, preparar la solución mezclando la dosis recomendada con el 50% del volumen de agua a utilizar, este proceso realizarlo con agitación continua. El volumen recomendado de agua entre 80 a 100 litros por hectárea, la presión de pulverización que no supere los 3 bar, manteniéndola en un rango entre 2 y 3 bar. Para mejor aplicación mantener la velocidad de la maquina entre 18 a 20 km/hora. Se recomienda usar pastillas de cono hueco. En el caso de recargas para continuar la actividad no dejar vaciar el tanque, mantener como mínimo 15% de su capacidad para volver hacer la mezcla del producto. Una vez terminada la aplicación se debe enjuagar el producto en la maquina con 200 litros y posteriormente proceder a realizar la limpieza habitual del equipo.`,
                fertiriego: `Fertirriego: se deberá preparar la solución madre mezclando la dosis recomendada con el 50% del volumen de agua a utilizar en el riego. Luego de mezclado, se agrega agitando el volumen total de agua de riego. Nota: se deberá mantener la suspensión con agitación constante (evitar el uso de sopladores de aire). Una vez terminada la aplicación, se deberá lavar el equipo y sistema de conducción con agua limpia.`,
            },
            cautions_and_warnings: {
                text: `Se advierte que la empresa garantiza el contenido y riquezas declaradas en la etiqueta, sin embargo, en su utilización pueden intervenir factores que escapan a nuestro control como son la preparación de mezclas, la aplicación, la climatología, entre otros. El usuario será responsable de los daños causados al cultivo, al suelo o al aplicador, por inobservancia total o parcial de la información explicada en esta etiqueta. Utilizar sólo en caso de reconocida necesidad, sin sobrepasar las dosis recomendadas. Se recomienda su aplicación bajo asesoramiento técnico agronómico.`
            }
        }
    },
    {
        name: "Mist B",
        slug: "mist-b",
        category: "Nutrición",
        sub_category: "Microelementos",
        crops: [
            "Girasol",
            "Soja",
            "Sorgo",
        ],
        brand: "Mist",
        description_html: "",
        id: "mst-b",
        image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Producto%20B-8.png",
        pdf_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/MIST%20B-%20Kioshi%20Stone%20-%20Ficha%20T%C3%83%C2%A9cnica-1.pdf",
        product_volume_state: "Liquidos",
        html_content: {
            descripction: `MIST-B® es una dispersión de nanopartículas minerales con una adecuada concentración en Boro, Calcio, Magnesio, Azufre y Silicio. El Boro participa con el calcio en la síntesis de las paredes celulares y es esencial para la división celular, además, cumple un rol importante en la regulación de niveles de hormonas y el transporte del potasio hacia los estomas (lo que ayuda a regular el equilibrio interno del agua). En tanto que la presencia de Calcio mejora la absorción de nutrientes, el Magnesio es de vital importancia en el proceso de fotosíntesis, el Silicio aumenta la resistencia de las plantas para superar estrés biótico y abiótico, y el Azufre es un constituyente estructural de compuestos orgánicos.`,
            effects: {
                list: [
                    "La rápida asimilación del Calcio, el cual mejora el transporte del resto de los nutrientes.",
                    "Regula el pH y la saturación de bases localmente.",
                ]
            },
            content: {
                list: [
                    "Boro (B): 2%",
                    "Magnesio (Mg): 0,4%",
                    "Calcio (Ca): 3,2%",
                ]
            },
            properties: {
                list: [
                    "pH: 6,5 (a 20°C)",
                    "Densidad: 1,2 a 1,4 g/cc",
                    "Reacción e índice: NEUTRO"
                ]
            },
            storage: {
                list: [
                    "Procurar un almacenaje entre 35ºC y -5ºC para preservar la integridad del producto.",
                    "Guardar en lugar fresco y al abrigo de la luz solar directa.",
                    "Evitar la formación de vapores."
                ]
            },
            volume: {
                list: ["Bags in Box de 15 litros."]
            },
            packaging: "La presentación en Bag in Box de 15 litros, permite armar un pallet estándar de 56 unidades (840 litros), fácilmente transportable en camioneta y cuyo rendimiento permitirá cubrir hasta 280 Ha.",
            application_dosage: {
                image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Mist-B.svg",
                extensive_industrial_fruits: {
                    title: "Cultivos Extensivos/Industriales/Frutales.",
                    type: "Pulverización, Fertirriego.",
                    dose: "Dosis: 800 a 1000 cc/ha por cada aplicación.",
                },
                intensive: {
                    title: "Cultivos Intensivos",
                    type: "Aplicación por Fertirriego",
                    dose: "Dosis: 200 a 1000 cc/ha por cada aplicación."
                },
            },
            reccommendations: {
                text: `Retirar la vejiga de la caja y proceder a su homogeneización previo a su uso. El contenido puede presentar una separación de fases, mediante la agitación vigorosa se obtiene la condición óptima de empleo.`,
                pulverization: `Pulverizador: previamente limpiar bien la máquina, preparar la solución mezclando la dosis recomendada con el 50% del volumen de agua a utilizar, este proceso realizarlo con agitación continua. El volumen recomendado de agua entre 80 a 100 litros por hectárea, la presión de pulverización que no supere los 3 bar, manteniéndola en un rango entre 2 y 3 bar. Para mejor aplicación mantener la velocidad de la maquina entre 18 a 20 km/hora. Se recomienda usar pastillas de cono hueco. En el caso de recargas para continuar la actividad no dejar vaciar el tanque, mantener como mínimo 15% de su capacidad para volver hacer la mezcla del producto. Una vez terminada la aplicación se debe enjuagar el producto en la maquina con 200 litros y posteriormente proceder a realizar la limpieza habitual del equipo.`,
                fertiriego: `Fertirriego: se deberá preparar la solución madre mezclando la dosis recomendada con el 50% del volumen de agua a utilizar en el riego. Luego de mezclado, se agrega agitando el volumen total de agua de riego. Nota: se deberá mantener la suspensión con agitación constante (evitar el uso de sopladores de aire). Una vez terminada la aplicación, se deberá lavar el equipo y sistema de conducción con agua limpia.`,
            },
            cautions_and_warnings: {
                text: `Se advierte que la empresa garantiza el contenido y riquezas declaradas en la etiqueta, sin embargo, en su utilización pueden intervenir factores que escapan a nuestro control como son la preparación de mezclas, la aplicación, la climatología, entre otros. El usuario será responsable de los daños causados al cultivo, al suelo o al aplicador, por inobservancia total o parcial de la información explicada en esta etiqueta. Utilizar sólo en caso de reconocida necesidad, sin sobrepasar las dosis recomendadas. Se recomienda su aplicación bajo asesoramiento técnico agronómico.`
            }
        }
    },
    {
        name: "Mist P",
        slug: "mist-p",
        category: "Arrancador de cultivos",
        sub_category: undefined,
        crops: [
            "Cebada",
            "Girasol",
            "Trigo",
            "Maíz",
            "Algodón",
            "Sorgo",
            "Soja",
        ],
        brand: "Mist",
        description_html: "",
        id: "mst-p",
        image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Producto%20P-8.png",
        pdf_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/MIST%20P%20-%20Kioshi%20Stone%20-%20Ficha%20T%C3%83%C2%A9cnica.pdf",
        product_volume_state: "Liquidos",
        html_content: {
            descripction: `MIST-P® es una dispersión de nanopartículas minerales con una adecuada concentración en Fósforo, Azufre, Calcio y Silicio. El Fósforo es uno de los nutrientes para el crecimiento de las plantas. Interviene en cada proceso de la planta que involucra transferencia de energía por formar parte de los compuestos denominados metabolitos energéticos (ATP, ADP, AMP), que son las fuentes que mueven todas las reacciones que ocurren en las plantas y el suelo. Participa en la división celular, transporte de nutrientes y por ende en su factor de crecimiento. Es necesario para la formación de los aminoácidos, proteínas, enzimas, etc. De modo que el aporte del Fósforo en cantidades óptimas conduce a la obtención de forrajes y granos con mayor contenido proteico. Además, la presencia de calcio mejora la absorción de nutrientes, mientras que el magnesio es de vital importancia en la clorofila y por ende en el proceso de fotosíntesis.`,
            effects: {
                list: [
                    "Incorporación de Fósforo de alta eficiencia para los cultivos.",
                    "La rápida asimilación del calcio, el cual mejora el transporte del resto de los nutrientes.",
                ]
            },
            content: {
                list: [
                    "Fósforo (P): 4,0%",
                    "Calcio (Ca): 11,2%",
                ]
            },
            properties: {
                list: [
                    "pH: 6,5 a 7 (a 20°C)",
                    "Densidad: 1,2 a 1,4 g/cc",
                    "Reacción e índice: NEUTRO"
                ]
            },
            storage: {
                list: [
                    "Procurar un almacenaje entre 35ºC y -5ºC para preservar la integridad del producto.",
                    "Guardar en lugar fresco y al abrigo de la luz solar directa.",
                    "Evitar la formación de vapores."
                ]
            },
            volume: {
                list: ["Bags in Box de 15 litros."]
            },
            packaging: "La presentación en Bag in Box de 15 litros, permite armar un pallet estándar de 56 unidades (840 litros), fácilmente transportable en camioneta y cuyo rendimiento permitirá cubrir hasta 280 Ha.",
            application_dosage: {
                image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/P-.svg",
                extensive_industrial_fruits: {
                    title: "Cultivos Extensivos",
                    type: "Pulverización, Fertirriego.",
                    dose: "Dosis: 2 a 4 Lts/ha por cada aplicación.",
                },
                intensive: {
                    title: "Cultivos Intensivos",
                    type: "Aplicación por Fertirriego",
                    dose: "Dosis: 4 a 6 Lts/ha por cada aplicación."
                },
            },
            reccommendations: {
                text: `Retirar la vejiga de la caja y proceder a su homogeneización previo a su uso. El contenido puede presentar una separación de fases, mediante la agitación vigorosa se obtiene la condición óptima de empleo.`,
                pulverization: `Pulverizador: previamente limpiar bien la máquina, preparar la solución mezclando la dosis recomendada con el 50% del volumen de agua a utilizar, este proceso realizarlo con agitación continua. El volumen recomendado de agua entre 80 a 100 litros por hectárea, la presión de pulverización que no supere los 3 bar, manteniéndola en un rango entre 2 y 3 bar. Para mejor aplicación mantener la velocidad de la maquina entre 18 a 20 km/hora. Se recomienda usar pastillas de cono hueco. En el caso de recargas para continuar la actividad no dejar vaciar el tanque, mantener como mínimo 15% de su capacidad para volver hacer la mezcla del producto. Una vez terminada la aplicación se debe enjuagar el producto en la maquina con 200 litros y posteriormente proceder a realizar la limpieza habitual del equipo.`,
                fertiriego: `Fertirriego: Se deberá preparar la solución madre mezclando la dosis recomendada con el 50% del volumen de agua a utilizar en el riego. Luego de mezclado, se agrega agitando el volumen total de agua de riego. Nota: se deberá mantener la suspensión con agitación constante (evitar el uso de sopladores de aire). Una vez terminada la aplicación, se deberá lavar el equipo y sistema de conducción con agua limpia.`,
            },
            cautions_and_warnings: {
                text: `Se advierte que la empresa garantiza el contenido y riquezas declaradas en la etiqueta, sin embargo, en su utilización pueden intervenir factores que escapan a nuestro control como son la preparación de mezclas, la aplicación, la climatología, entre otros. El usuario será responsable de los daños causados al cultivo, al suelo o al aplicador, por inobservancia total o parcial de la información explicada en esta etiqueta. Utilizar sólo en caso de reconocida necesidad, sin sobrepasar las dosis recomendadas. Se recomienda su aplicación bajo asesoramiento técnico agronómico.`
            }
        }
    },
    {
        name: "Mist N",
        slug: "mist-n",
        category: "Nutrición",
        sub_category: "Macroelementos",
        crops: [
            "Cebada",
            "Girasol",
            "Trigo",
            "Maíz",
            "Algodón",
            "Sorgo",
            "Trigo",
        ],
        brand: "Mist",
        description_html: "",
        id: "mst-n",
        image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Producto%20N-8.png",
        pdf_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/MIST%20N-%20Kioshi%20Stone%20-%20Ficha%20T%C3%83%C2%A9cnica-1.pdf",
        product_volume_state: "Liquidos",
        html_content: {
            descripction: `MIST-N®: como es habitual en los productos MIST, se utiliza una dispersión nano mineral que aloja en sus poros el Nitrógeno. Este Carrier almacena y dosifica el elemento en la medida que la planta o el suelo lo requiera. El Nitrógeno contenido más el Calcio, el Magnesio y el Azufre generan la sinergia que acompaña el crecimiento de los cultivos y puede ser aplicado en cualquier momento sobre el cultivo sin inducir estrés en la planta. La presencia de calcio mejora la absorción de nutrientes, mientras que el magnesio participa en la formación de la clorofila y por ende en el proceso de fotosíntesis. En tanto el nitrógeno es uno de los constituyentes de los compuestos orgánicos de los vegetales. Interviene en la multiplicación celular y su factor de crecimiento. Por su parte el azufre es necesario para la formación de los aminoácidos, proteínas y vitaminas.`,
            effects: {
                list: [
                    "La incorporación de Nitrógeno de alta eficiencia para los cultivos.",
                    "Mejora la absorción del nitrógeno, favorece la translocación y evita las pérdidas tanto por lixiviación en profundidad, como por evaporación (NH3).",
                ]
            },
            content: {
                list: [
                    "Nitrógeno (N): 14,5%",
                    "Calcio (Ca): 6,5%",
                    "Magnesio (Mg): 1,5%",
                    "Azufre (S): 2,5%",
                ]
            },
            properties: {
                list: [
                    "pH: 6,5 (a 20°C)",
                    "Densidad: 1,2 a 1,4 g/cc",
                    "Reacción e índice: NEUTRO"
                ]
            },
            storage: {
                list: [
                    "Procurar un almacenaje entre 35ºC y -5ºC para preservar la integridad del producto.",
                    "Guardar en lugar fresco y al abrigo de la luz solar directa.",
                    "Evitar la formación de vapores."
                ]
            },
            volume: {
                list: ["Bags in Box de 15 litros."]
            },
            packaging: "La presentación en Bag in Box de 15 litros, permite armar un pallet estándar de 56 unidades (840 litros), fácilmente transportable en camioneta y cuyo rendimiento permitirá cubrir hasta 280 Ha.",
            application_dosage: {
                image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/tabla_MistN.png",
                extensive_industrial_fruits: {
                    title: "Cultivos Extensivos",
                    type: "Aplicación foliar por pulverización.",
                    dose: "Dosis: 3 a 6 Lts/ha por cada aplicación.",
                },
                intensive: {
                    title: "Cultivos Intensivos",
                    type: "Aplicación foliar por pulverización.",
                    dose: "Dosis: 4 a 6 Lts/ha por cada aplicación."
                },
            },
            reccommendations: {
                text: `Retirar la vejiga de la caja y proceder a su homogeneización previo a su uso. El contenido puede presentar una separación de fases, mediante la agitación vigorosa se obtiene la condición óptima de empleo.`,
                pulverization: `Pulverizador: previamente limpiar bien la máquina, preparar la solución mezclando la dosis recomendada con el 50% del volumen de agua a utilizar, este proceso realizarlo con agitación continua. El volumen recomendado de agua entre 80 a 100 litros por hectárea, la presión de pulverización que no supere los 3 bar, manteniéndola en un rango entre 2 y 3 bar. Para mejor aplicación mantener la velocidad de la máquina entre 18 a 20 km/hora. Se recomienda usar pastillas de cono hueco. En el caso de recargas para continuar la actividad no dejar vaciar el tanque, mantener como mínimo 15% de su capacidad para volver hacer la mezcla del producto. Una vez terminada la aplicación se debe enjuagar el producto en la máquina con 200 litros y posteriormente proceder a realizar la limpieza habitual del equipo.`,
                fertiriego: `Fertirriego: Se deberá preparar la solución madre mezclando la dosis recomendada con el 50% del volumen de agua a utilizar en el riego. Luego de mezclado, se agrega agitando el volumen total de agua de riego. Nota: se deberá mantener la suspensión con agitación constante (evitar el uso de sopladores de aire). Una vez terminada la aplicación, se deberá lavar el equipo y sistema de conducción con agua limpia.`,
            },
            cautions_and_warnings: {
                text: `Se advierte que la empresa garantiza el contenido y riquezas declaradas en la etiqueta, sin embargo, en su utilización pueden intervenir factores que escapan a nuestro control como son la preparación de mezclas, la aplicación, la climatología, entre otros. El usuario será responsable de los daños causados al cultivo, al suelo o al aplicador, por inobservancia total o parcial de la información explicada en esta etiqueta. Utilizar sólo en caso de reconocida necesidad, sin sobrepasar las dosis recomendadas. Se recomienda su aplicación bajo asesoramiento técnico agronómico.`
            }
        }
    },
    {
        name: "Biome b-Phos 10-40",
        slug: "biome-b-phos-10-40",
        category: "Arrancador de cultivos",
        sub_category: undefined,
        crops: [
            "Algodón",
            "Cebada",
            "Cítricos",
            "Frutales",
            "Girasol",
            "Maíz",
            "Maíz",
            "Pasturas",
            "Soja",
            "Sorgo",
            "Trigo",
            "Yerba Mate"
        ],
        brand: "Biome",
        description_html: "",
        id: "biome-b-phos-10-40",
        image_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/bPhos-packaging.png",
        pdf_url: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Biome%20B-PHOS%2010-40%20%20Kioshi%20Stone%20%20Ficha%20T%C3%83%C2%A9cnica.pdf",
        product_volume_state: "Granulados",
        html_content: {
            descripction: `b-Phos es un fertilizante microgranulado diseñado para ser aplicado en la siembra junto a la semilla de manera segura sin riesgo de fitotoxicidad.
            Su fórmula equilibrada en cada microgránulo ofrece nítrógeno, fósforo, azufre, Zinc, Calcio, Boro y  microelementos favoreciendo el desarrollo radicular y la emergencia rápida y uniforme del cultivo.
            La formulación exclusiva de b-Phos compuesta por elementos solubles y nanopartículas minerales permite una mayor biodisponibilidad de nutrientes maximizando la distribución uniforme de los nutrientes en torno a cada semilla.`,
            storage: {
                list: [
                    "Almacenar en un lugar cerrado, fresco, seco y lejos de la luz del sol.",
                    "Almacenar en su envase original, en un lugar seguro y lejos del alcance de los niños. No almacenar cerca de semillas, alimentos y alimentos para forrajes."
                ]
            },
            application_dosage: {
                others: ["b-Phos se encuentra especialmente formulado para su aplicación en máquinas sembradoras adaptadas para la aplicación del fertilizante al momento de la siembra, junto a la semilla."]
            },
            cautions_and_warnings: {
                text: `
                - Como el almacenamiento, la época, lugar y dosis de la aplicación están fuera del control del vendedor y/o fabricante, eventuales daños a causa del almacenamiento u otras condiciones de uso introducidas por el usuario de manera diversa o por encima de las especificadas por el vendedor y/o fabricante no son de su responsabilidad.\n
                1- El vendedor y/o fabricante garantiza exclusivamente que este producto contiene los ingredientes y niveles especificados en la etiqueta.\n
                - PARA MAYOR INFORMACIÓN CONSULTAR A UN INGENIERO AGRÓNOMO.\n
                - NO EXCEDER LAS DOSIS INDICADAS, PODRÍA EXISTIR RIESGO DE FITOTOXICIDAD.\n
                - MANTENER ALEJADO DEL ALCANCE DE LOS NIÑOS Y PERSONAS INEXPERTAS.\n
                - NO TRANSPORTAR NI ALMACENAR CON ALIMENTOS.\n
                - INUTILIZAR LOS ENVASES VACIOS PARA EVITAR OTROS USOS.\n
                - EN CASO DE INTOXICACIÓN LLEVAR ESTA ETIQUETA AL MÉDICO.\n
                TRATAMIENTO Y MÉTODO DE DESTRUCCION DE ENVASES:\n
                Su tratamiento y/o disposición deben realizarse de acuerdo a normas legales aplicables.\n
                - NO REUTILIZAR ESTE ENVASE.\n
                `
            }
        }
    },
];
