// Felles datakilde for lag og norske spillere
const teams = [
  { id: 458327, name: "Selver/TalTech", volleyboxSlug: "selver-tallinn-t357" },
  { id: 122228, name: "CDV Rio Duero Soria", volleyboxSlug: "rio-duero-soria-t3694" },
  { id: 44675,  name: "Tourcoing VB Lille Métropole", volleyboxSlug: "tourcoing-vlm-t248" },
  { id: 25947, name: "Knack Roeselare", volleyboxSlug: "knack-roeselare-t1579" },
  { id: 447293, name: "Prima Donna Kaas Huizen", volleyboxSlug: "prima-donna-kaas-huizen-t12094" },
  { id: 183831, name: "ASV Arhus", volleyboxSlug: "asv-elite-t4364" },
  { id: 209169, name: "Nordenskov Uif", volleyboxSlug: "nordenskov-uif-t6594" },
  { id: 107699, name: "BBTS Bielsko-Biała", volleyboxSlug: "bbts-bielsko-biala-t1358" },
  { id: 43341, name: "Lycurgus Groningen", volleyboxSlug: "lycurgus-volleyball-t1292" }
];

const norwegianPlayersMap = {
  "selver-tallinn-t357": [{ name: "Mads Roness", url: "https://volleybox.net/mads-roness-p60414" }],
  "rio-duero-soria-t3694": [{ name: "Mikal Kalstad", url: "https://volleybox.net/mikal-kalstad-p158538/clubs" }],
  "tourcoing-vlm-t248": [{ name: "Eskil Engås", url: "https://volleybox.net/eskil-engs-p157395/clubs" }],
  "knack-roeselare-t1579": [{ name: "Oskar Espeland", url: "https://volleybox.net/oskar-espeland-p44340/clubs" }],
  "prima-donna-kaas-huizen-t12094": [
    { name: "Samson Olsen", url: "https://volleybox.net/samson-olsen-p58498/clubs" },
    { name: "Lars-Kristian Ekeland", url: "https://volleybox.net/lars-kristian-ekeland-p53712/clubs" }
  ],
  "asv-elite-t4364": [{ name: "Frithjof Moe Slinning", url: "https://volleybox.net/frithjof-moe-slinning-p158535/clubs" }],
  "bbts-bielsko-biala-t1358": [{ name: "Jakob Solgaard Thelle", url: "https://volleybox.net/jakob-solgaard-thelle-p17581/clubs" }],
  "nordenskov-uif-t6594": [{ name: "Peder Senumstad", url: "" }].
  "lycurgus-volleyball-t1292": [{ name: "Jo Gladsøy Sunde", url: "https://volleybox.net/jo-gladsy-sunde-p59716/clubs" }]
};
