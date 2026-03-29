export type Repair = {
  id: string;

  name: string;

  icon: string;

  price: number;
};

export type Service = {
  id: string;

  name: string;

  icon: string;

  price: number;
};

export type Model = {
  name: string;

  repairs: Repair[];

  services: Service[];
};

export type Brand = {
  name: string;

  models: Model[];
};

export type DeviceType = {
  type: "smartphone" | "tablette" | "ordinateur";

  brands: Brand[];
};

export const devices: DeviceType[] = [
  {
    type: "smartphone",

    brands: [
      {
        name: "Apple",

        models: [
          {
            name: "iPhone 17 Air",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 499,
              },
              // { id: "battery", name: "Batterie", icon: "/icons/battery.png", price: 79 },
              // { id: "main-camera", name: "Appareil photo arrière", icon: "/icons/main-camera.png", price: 159 },
              // { id: "front-camera", name: "Appareil photo avant", icon: "/icons/front-camera.png", price: 149 },
              // { id: "connector", name: "Connecteur de charge", icon: "/icons/connector.png", price: 159 },
              // { id: "back", name: "Façade arrière", icon: "/icons/back.png", price: 119 },
              // { id: "speaker", name: "Haut parleur", icon: "/icons/speaker.png", price: 59 },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 10 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 17 Pro Max",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 259,
              },
              // { id: "battery", name: "Batterie", icon: "/icons/battery.png", price: 79 },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 159,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 149,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 159,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 119,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 59,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 17 Pro",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 199,
              },
              // { id: "battery", name: "Batterie", icon: "/icons/battery.png", price: 79 },
              // { id: "main-camera", name: "Appareil photo arrière", icon: "/icons/main-camera.png", price: 119 },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 119,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 139,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 119,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 59,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 17",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 169,
              },
              // { id: "battery", name: "Batterie", icon: "/icons/battery.png", price: 79 },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 139,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 119,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 139,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 119,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 39,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 16 Pro Max",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 119,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 89,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 99,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 79,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 79,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 89,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 49,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 16 Plus",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 89,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 79,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 99,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 79,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 79,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 89,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 39,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 16e",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 79,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 89,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 79,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 79,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 79,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 89,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 39,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 16",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 89,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 79,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 89,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 79,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 79,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 89,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 39,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 15 Pro Max",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 89,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 79,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 99,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 79,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 79,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 89,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 39,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 15 Pro",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 79,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 69,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 79,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 49,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 59,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 79,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 29,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 15 Plus",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 69,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 59,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 69,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 49,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 59,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 79,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 29,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 15",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 69,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 59,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 59,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 49,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 49,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 79,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 29,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 14 Pro Max",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 79,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 59,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 79,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 49,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 59,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 69,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 29,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 14 Pro",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 69,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 59,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 79,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 49,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 59,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 69,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 29,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 14 Plus",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 59,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 59,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 59,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 49,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 49,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 69,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 29,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 14",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 59,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 59,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 59,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 49,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 49,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 69,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 29,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 13 Pro Max",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 59,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 59,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 99,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 29,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 49,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 45,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 29,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 13 Pro",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 59,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 59,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 99,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 29,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 45,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 45,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 29,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 13 Mini",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 59,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 59,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 39,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 29,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 45,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 45,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 29,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 13",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 59,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 59,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 39,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 39,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 45,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 49,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 29,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 12 Pro Max",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 55,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 49,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 39,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 39,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 45,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 45,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 29,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 12 Pro",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 49,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 49,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 39,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 39,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 39,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 45,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 29,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 12 Mini",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 45,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 45,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 39,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 39,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 39,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 45,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 29,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 12",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 49,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 49,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 39,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 39,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 45,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 45,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 29,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 11 Pro Max",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 45,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 39,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 39,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 29,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 29,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 45,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 29,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 11 Pro",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 39,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 39,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 39,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 29,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 29,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 45,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 29,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 11",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 45,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 45,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 39,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 39,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 39,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 45,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 29,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone XR",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 39,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 39,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 39,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 29,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 29,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 45,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 29,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone XS Max",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 39,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 39,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 39,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 29,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 29,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 45,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 29,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone XS",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 35,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 35,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 25,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 25,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 29,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 35,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 19,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 19.9,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 14.9,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 9.9,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 9.9,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 9.9,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 9.9,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 19.9,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone X",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 39,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 39,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 29,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 29,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 39,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 39,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 19,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 19.9,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 14.9,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 9.9,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 9.9,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 9.9,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 9.9,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 19.9,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone SE 2022",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 39,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 39,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 25,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 25,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 39,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 35,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 19,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 19.9,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 14.9,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 9.9,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 9.9,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 9.9,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 9.9,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 19.9,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone SE 2020",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 35,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 35,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 25,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 25,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 29,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 35,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 19,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 19.9,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 14.9,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 9.9,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 9.9,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 9.9,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 9.9,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 19.9,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 8 Plus",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 35,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 35,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 25,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 25,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 29,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 35,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 19,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 19.9,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 14.9,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 9.9,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 9.9,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 9.9,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 9.9,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 19.9,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 8",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 35,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 35,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 25,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 25,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 29,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 35,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 19,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 19.9,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 14.9,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 9.9,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 9.9,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 9.9 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 9.9,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 9.9,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 9.9 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 19.9,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
        ],
      },

      {
        name: "Samsung",

        models: [
          {
            name: "S26 Ultra",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 259,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 119,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
            ],
          },
          {
            name: "S26 Plus",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 199,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
            ],
          },
          {
            name: "S26",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 189,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 99,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
            ],
          },
          {
            name: "S25 FE",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 179,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 79,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 79,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 79,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 69,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 59,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 49,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 19.9 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
            ],
          },
          {
            name: "S25 Ultra",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 259,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 79,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 79,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 79,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 69,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 69,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 49,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
            ],
          },
          {
            name: "S25 Plus",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 179,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 69,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 79,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 79,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 69,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 69,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 49,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
            ],
          },
          {
            name: "S25",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 169,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 69,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 59,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 59,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 69,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 69,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 49,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
            ],
          },
          {
            name: "S25 Edge",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 319,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 79,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 79,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 79,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 69,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 69,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 49,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 10,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 20,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 20,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 20,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 20,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 20,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 20,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 20,
              },
            ],
          },
        ],
      },

      {
        name: "Xiaomi",

        models: [
          {
            name: "Mi 13",

            repairs: [
              {
                id: "screen",

                name: "Façade avant",

                icon: "/icons/screen.png",

                price: 399.9,
              },

              {
                id: "battery",

                name: "Batterie",

                icon: "/icons/battery.png",

                price: 79.9,
              },
            ],

            services: [
              {
                id: "backup",

                name: "Sauvegarde données",

                icon: "/icons/backup.png",

                price: 19.9,
              },

              {
                id: "update",

                name: "Mise à jour système",

                icon: "/icons/update.png",

                price: 9.9,
              },
            ],
          },
        ],
      },

      {
        name: "OnePlus",

        models: [
          {
            name: "OnePlus 11",

            repairs: [
              {
                id: "screen",

                name: "Façade avant",

                icon: "/icons/screen.png",

                price: 399.9,
              },

              {
                id: "battery",

                name: "Batterie",

                icon: "/icons/battery.png",

                price: 79.9,
              },
            ],

            services: [
              {
                id: "backup",

                name: "Sauvegarde données",

                icon: "/icons/backup.png",

                price: 19.9,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    type: "tablette",

    brands: [
      {
        name: "Apple",

        models: [
          {
            name: "iPad Air",

            repairs: [
              {
                id: "screen",

                name: "Écran",

                icon: "/icons/screen.png",

                price: 399.9,
              },
            ],

            services: [
              {
                id: "backup",

                name: "Sauvegarde données",

                icon: "/icons/backup.png",

                price: 19.9,
              },
            ],
          },

          {
            name: "iPad Pro",

            repairs: [
              {
                id: "screen",

                name: "Écran",

                icon: "/icons/screen.png",

                price: 449.9,
              },
            ],

            services: [
              {
                id: "backup",

                name: "Sauvegarde données",

                icon: "/icons/backup.png",

                price: 19.9,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    type: "ordinateur",

    brands: [
      {
        name: "Dell",

        models: [
          {
            name: "XPS 13",

            repairs: [
              {
                id: "screen",

                name: "Écran",

                icon: "/icons/screen.png",

                price: 299.9,
              },

              {
                id: "battery",

                name: "Batterie",

                icon: "/icons/battery.png",

                price: 79.9,
              },
            ],

            services: [
              {
                id: "update",

                name: "Mise à jour système",

                icon: "/icons/update.png",

                price: 9.9,
              },
            ],
          },
        ],
      },

      {
        name: "HP",

        models: [
          {
            name: "Pavilion",

            repairs: [
              {
                id: "screen",

                name: "Écran",

                icon: "/icons/screen.png",

                price: 279.9,
              },
            ],

            services: [
              {
                id: "update",

                name: "Mise à jour système",

                icon: "/icons/update.png",

                price: 9.9,
              },
            ],
          },
        ],
      },
    ],
  },
];
