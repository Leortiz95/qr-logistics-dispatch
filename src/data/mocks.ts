export const fakePallets = [
  {
    produccion: "Argentina 2025",
    especie: "Maiz (Transgenico)",
    cultivar: "DK72-10PRO4",
    partida: "ZM00",
    contenido: "80000 Semillas",
    bolsasPallet: 84,
    grado: "C5",
    placaSugerida: "09.5 x 4.5",
    lote: "ZE1010059",
    material: "30114415",
    palletN: "1", //  ID ahora es string para evitar problemas
  },
  {
    produccion: "Argentina 2025",
    especie: "Maiz (Transgenico)",
    cultivar: "DK72-11PRO5",
    partida: "ZM01",
    contenido: "75000 Semillas",
    bolsasPallet: 80,
    grado: "C4",
    placaSugerida: "10.0 x 5.0",
    lote: "ZE1010060",
    material: "30114416",
    palletN: "2", // Asegurar compatibilidad con QR
  }
];

export const fakeViajes = [
  {
    viajeID: "VIAJE-001",
    conductor: "Juan Pérez",
    cuil: "20-22105685-0",
    patenteCamion: "ABC 123",
    patenteAcoplado: "XYZ 789",
    destino: "Planta Bayer",
  },
  {
    viajeID: "VIAJE-002",
    conductor: "Fernandez Gustavo Daniel",
    cuil: "20-40542783-5",
    patenteCamion: "DEF 456",
    patenteAcoplado: "UVW 123",
    destino: "Depósito Córdoba",
  },
  {
    viajeID: "VIAJE-003",
    conductor: "Alvarez Gonzalo Javier",
    cuil: "23-34277338-9",
    patenteCamion: "GHI 789",
    patenteAcoplado: "RST 456",
    destino: "Planta Rosario",
  },
  {
    viajeID: "VIAJE-004",
    conductor: "Malnoria Ariel",
    cuil: "20-26184074-0",
    patenteCamion: "JKL 012",
    patenteAcoplado: "LMN 345",
    destino: "Planta Mendoza",
  },
];

//  Listas separadas para cada dropdown
export const conductores = fakeViajes.map((v) => v.conductor);
export const camiones = fakeViajes.map((v) => v.patenteCamion);
export const acoplados = fakeViajes.map((v) => v.patenteAcoplado);
export const destinos = ["Gamadel", "Logística Rojas", "Satus Ager Colón", "Planta Bayer"];
