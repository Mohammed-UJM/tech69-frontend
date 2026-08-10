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
  type: "Smartphone" | "Tablette" | "Ordinateur" | "Console de jeu";

  brands: Brand[];
};

export const devices: DeviceType[] = [
  {
    type: "Smartphone",

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
                price: 221.11,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 198.89,
              },
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
                price: 165.56,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 139,
              },
              // { id: "back", name: "Façade arrière", icon: "/icons/back.png", price: 132.22 },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 87.78,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 11.11 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 132.22,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 198.89,
              },
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
                price: 132.22,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 132.22,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 98.89,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 65.56,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 132.22,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 198.89,
              },
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
                price: 132.22,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 132.22,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 98.89,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 65.56,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 109,
              },
              // { id: "battery", name: "Batterie", icon: "/icons/battery.png", price: 198.89 },
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
                price: 109,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 109,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 122.22,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 65.56,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 122.22,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 98.89,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 122.22,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 87.78,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 122.22,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
          {
            name: "iPhone 16 Pro",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 122.22,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 98.89,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 122.22,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 87.78,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 122.22,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 98.89,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 87.78,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 122.22,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 87.78,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 98.89,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 87.78,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 98.89,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 87.78,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 98.89,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 98.89,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 76.67,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 122.22,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 76.67,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 87.78,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 87.78,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 87.78,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 76.67,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 122.22,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 87.78,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 87.78,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 76.67,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 76.67,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 65.56,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 65.56,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 65.56,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 76.65,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 65.56,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.65,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 76.65,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 65.56,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 65.56,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.65,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 87.78,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 87.78,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 65.56,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 65.56,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 65.56,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 65.56,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 65.56,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 65.56,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 65.56,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 65.56,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 65.56,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 65.56,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 65.56,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 65.56,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 122.22,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 65.56,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 65.56,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 122.22,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 65.56,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 65.56,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 65.56,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 65.56,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 54.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 54.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 54.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 54.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 54.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 38.89,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 38.89,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 27.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 27.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 38.89,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 21.11,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 21.11,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 27.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 27.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 38.89,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 21.11,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 38.89,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 38.89,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 27.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 27.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 38.89,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 21.11,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 38.89,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 38.89,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 27.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 27.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 38.89,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 21.11,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 38.89,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 38.89,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 27.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 27.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 38.89,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 21.11,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              // { id: "sim", name: "Tiroir carte SIM", icon: "/icons/sim.png", price: 7 },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              // { id: "sim-settings", name: "Paramètrage e-SIM", icon: "/icons/sim-settings.png", price: 22.22 },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              // { id: "location", name: "Dégéolocalisation", icon: "/icons/location.png", price: 22.22 },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
              // { id: "unlock", name: "Déblocage d'appareil", icon: "/icons/unlock.png", price: 50.9 }
            ],
          },
        ],
      },
      {
        name: "Samsung Game Z",

        models: [
          {
            name: "Fold 7",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 221.11,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 983.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 87.78,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Fold 6",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 221.11,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 983.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 87.78,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Fold 5",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 198.89,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 887.78,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 87.78,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Fold 4",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 198.89,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 832.22,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 87.78,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Fold 3",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 198.89,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 554.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 87.78,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Fold 2",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 198.89,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 365.56,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 87.78,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Fold",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 198.89,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 665.56,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 87.78,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Flip 7 FE",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 443.33,
              },
              {
                id: "back-top",
                name: "Façade arrière haute",
                icon: "/icons/back.png",
                price: 143.33,
              },
              {
                id: "back-bottom",
                name: "Façade arrière basse",
                icon: "/icons/back.png",
                price: 143.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 87.78,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Flip 7",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 332.22,
              },
              {
                id: "back-top",
                name: "Façade arrière haute",
                icon: "/icons/back.png",
                price: 143.33,
              },
              {
                id: "back-bottom",
                name: "Façade arrière basse",
                icon: "/icons/back.png",
                price: 65.56,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 87.78,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Flip 6",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 432.22,
              },
              {
                id: "back-top",
                name: "Façade arrière haute",
                icon: "/icons/back.png",
                price: 132.22,
              },
              {
                id: "back-bottom",
                name: "Façade arrière basse",
                icon: "/icons/back.png",
                price: 65.56,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 87.78,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Flip 5",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 554.44,
              },
              {
                id: "back-top",
                name: "Façade arrière haute",
                icon: "/icons/back.png",
                price: 132.22,
              },
              {
                id: "back-bottom",
                name: "Façade arrière basse",
                icon: "/icons/back.png",
                price: 65.56,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 87.78,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Flip 4",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 498.89,
              },
              {
                id: "back-top",
                name: "Façade arrière haute",
                icon: "/icons/back.png",
                price: 132.22,
              },
              {
                id: "back-bottom",
                name: "Façade arrière basse",
                icon: "/icons/back.png",
                price: 65.56,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 87.78,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Flip 3",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 465.56,
              },
              {
                id: "back-top",
                name: "Façade arrière haute",
                icon: "/icons/back.png",
                price: 132.22,
              },
              {
                id: "back-bottom",
                name: "Façade arrière basse",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 87.78,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Flip",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 387.78,
              },
              {
                id: "back-top",
                name: "Façade arrière haute",
                icon: "/icons/back.png",
                price: 122.22,
              },
              {
                id: "back-bottom",
                name: "Façade arrière basse",
                icon: "/icons/back.png",
                price: 65.56,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 87.78,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
        ],
      },

      {
        name: "Samsung Game S",

        models: [
          {
            name: "S26 Ultra",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 287.78,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 132.22,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 221.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 210,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 122.22,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 198.89,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 65.56,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 87.78,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              // { id: "nappe", name: "Nappe de connexion", icon: "/icons/nappe.png", price: 22.22 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
              // { id: "other", name: "Autres pannes", icon: "/icons/other.png", price: 79.9 }
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 287.78,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 87.78,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 198.89,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 76.67,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 187.78,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 76.67,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 65.56,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 65.56,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
                price: 354.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 87.78,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 87.78,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 87.78,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 54.44,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S24 FE",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 98.89,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 65.56,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 76.67,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 65.56,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S24 Ultra",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 310,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 65.56,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 65.56,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 65.56,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S24 Plus",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 143.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 76.67,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 65.56,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S24",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 198.89,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 65.56,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 76.67,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 65.56,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S23 FE",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 87.78,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 65.56,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S23 Ultra",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 287.78,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S23 Plus",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 143.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S23",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 165.56,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S22 Ultra",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 254.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S22 Plus",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 132.22,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S22",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 176.67,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S21 FE",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 87.78,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 65.56,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S21 Ultra",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 143.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S21 Plus",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 132.22,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S21",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 143.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S20 FE",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 76.67,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S20 Ultra",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 132.22,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S20 Plus",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 132.22,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S20 FE",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 76.67,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S20",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 132.22,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S10 Plus",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 65.56,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S10 E",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 132.22,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S10 Lite",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 187.78,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S10 5G",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 243.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 76.67,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 54.44,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 54.44,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S10",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 65.56,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S9 Plus",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 143.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "S9",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 122.22,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
        ],
      },
      {
        name: "Samsung Game A",

        models: [
          {
            name: "Galaxy A80",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 98.89,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 65.56,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              // { id: "main-camera", name: "Appareil photo arrière", icon: "/icons/main-camera.png", price: 87.78 },
              // { id: "front-camera", name: "Appareil photo avant", icon: "/icons/front-camera.png", price: 87.78 },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A72",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 87.78,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A71",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A70",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A57",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 143.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              // { id: "back", name: "Façade arrière", icon: "/icons/back.png", price: 43.33 },
              // { id: "speaker", name: "Haut parleur", icon: "/icons/speaker.png", price: 43.33 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A56",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A55",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A54",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 76.67,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A53",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 65.56,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A52s",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 76.67,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A52",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 76.67,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A51 5G",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 132.22,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A51",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 76.67,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A50s",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 65.56,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              // { id: "main-camera", name: "Appareil photo arrière", icon: "/icons/main-camera.png", price: 43.33 },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              // { id: "connector", name: "Connecteur de charge", icon: "/icons/connector.png", price: 54.44 },
              // { id: "back", name: "Façade arrière", icon: "/icons/back.png", price: 54.44 },
              // { id: "speaker", name: "Haut parleur", icon: "/icons/speaker.png", price: 43.33 },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A50",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 132.22,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A42",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 76.67,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A41",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 87.78,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A40",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A37",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 143.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A36",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A35",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A34",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 87.78,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A33",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 76.67,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A32",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A31",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 76.67,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 54.44,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A30s",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 76.67,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 54.44,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 54.44,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A30",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 76.67,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A26 5G",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 65.56,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A25 5G",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A24 5G",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 76.67,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A23",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A22",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A21s",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A20e",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A20",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 65.56,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A17",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A16",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A15",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A14",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A13",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A12",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 54.44,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A11",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A10s",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A10",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A07",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A06",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A05s",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A05",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A04, A04s, A04en A04 Core",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A03, A03s, A03e",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A02, A02s",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A01, A01 Core",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
              },
            ],
          },
          {
            name: "Galaxy A11",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 43.33,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 43.33,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 43.33,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 43.33,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 43.33,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 43.33,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 43.33,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 11.11,
              },
            ],

            services: [
              {
                id: "backup",
                name: "Sauvegarde données",
                icon: "/icons/backup.png",
                price: 22.22,
              },
              {
                id: "transfer",
                name: "Transfert de données",
                icon: "/icons/transfer.png",
                price: 22.22,
              },
              {
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 22.22,
              },
              {
                id: "settings",
                name: "Paramètrage appareil",
                icon: "/icons/settings.png",
                price: 22.22,
              },
              {
                id: "cloud",
                name: "Sauvegarde cloud",
                icon: "/icons/cloud.png",
                price: 22.22,
              },
              {
                id: "update",
                name: "Mise à jour système",
                icon: "/icons/update.png",
                price: 22.22,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 22.22,
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
    type: "Tablette",
    brands: [],
  },

  {
    type: "Ordinateur",

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

  {
    type: "Console de jeu",

    brands: [
      {
        name: "Play Station",

        models: [
          {
            name: "PS5",

            repairs: [
              {
                id: "connector-hdmi",
                name: "Connecteur HDMI",
                icon: "/icons/connector.png",
                price: 70,
              },
              {
                id: "connector-usb",
                name: "Connecteur USB",
                icon: "/icons/connector.png",
                price: 70,
              },
              {
                id: "connector-usb-c",
                name: "Connecteur USB-C",
                icon: "/icons/connector.png",
                price: 70,
              },
              {
                id: "prise-jack",
                name: "Prise Jack",
                icon: "/icons/connector.png",
                price: 87.78,
              },
              {
                id: "connector-charge",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 122.22,
              },
              {
                id: "block-alimetation",
                name: "Bloc d'Alimentation",
                icon: "/icons/connector.png",
                price: 98.89,
              },
              {
                id: "ventilateur",
                name: "Ventilateur",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "lecteur",
                name: "Lecteur de disque",
                icon: "/icons/connector.png",
                price: 132.22,
              },
              {
                id: "patte-thermique",
                name: "Patte Thermique",
                icon: "/icons/connector.png",
                price: 65.56,
              },
            ],
            services: [],
          },

          {
            name: "PS4",

            repairs: [
              {
                id: "connector-hdmi",
                name: "Connecteur HDMI",
                icon: "/icons/connector.png",
                price: 87.78,
              },
              {
                id: "connector-usb",
                name: "Connecteur USB",
                icon: "/icons/connector.png",
                price: 87.78,
              },
              {
                id: "connector-usb-c",
                name: "Connecteur USB-C",
                icon: "/icons/connector.png",
                price: 87.78,
              },
              {
                id: "connector-charge",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 122.22,
              },
              {
                id: "ventilateur",
                name: "Ventilateur",
                icon: "/icons/connector.png",
                price: 76.67,
              },
              {
                id: "lecteur",
                name: "Lecteur de disque",
                icon: "/icons/connector.png",
                price: 132.22,
              },
              {
                id: "patte-thermique",
                name: "Patte Thermique",
                icon: "/icons/connector.png",
                price: 65.56,
              },
            ],
            services: [],
          },
        ],
      },
    ],
  },
];
