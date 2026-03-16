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
            name: "iPhone 14",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 439.9,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 89.9,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 119.9,
              },
              {
                id: "front-camera",
                name: "Appareil photo avant",
                icon: "/icons/front-camera.png",
                price: 119.9,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 79.9,
              },
              {
                id: "back",
                name: "Façade arrière",
                icon: "/icons/back.png",
                price: 119.9,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 69.9,
              },
              {
                id: "nappe",
                name: "Nappe de connexion",
                icon: "/icons/nappe.png",
                price: 19.9,
              },
              {
                id: "sim",
                name: "Tiroir carte SIM",
                icon: "/icons/sim.png",
                price: 19.9,
              },
              {
                id: "other",
                name: "Autres pannes",
                icon: "/icons/other.png",
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
              {
                id: "sim-settings",
                name: "Paramètrage e-SIM",
                icon: "/icons/sim-settings.png",
                price: 9.9,
              },
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
              {
                id: "location",
                name: "Dégéolocalisation",
                icon: "/icons/location.png",
                price: 9.9,
              },
              {
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 19.9,
              },
              {
                id: "unlock",
                name: "Déblocage d'appareil",
                icon: "/icons/unlock.png",
                price: 50.9,
              },
            ],
          },

          {
            name: "iPhone 13",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 319.9,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 69.9,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 109.9,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
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
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 9.9,
              },
            ],
          },

          {
            name: "iPhone 12",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 299.9,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 69.9,
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

      {
        name: "Samsung",

        models: [
          {
            name: "Galaxy S23",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 439.9,
              },
              {
                id: "battery",
                name: "Batterie",
                icon: "/icons/battery.png",
                price: 89.9,
              },
              {
                id: "main-camera",
                name: "Appareil photo arrière",
                icon: "/icons/main-camera.png",
                price: 119.9,
              },
              {
                id: "connector",
                name: "Connecteur de charge",
                icon: "/icons/connector.png",
                price: 79.9,
              },
              {
                id: "speaker",
                name: "Haut parleur",
                icon: "/icons/speaker.png",
                price: 69.9,
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
                id: "reset",
                name: "Réinitialisation",
                icon: "/icons/reset.png",
                price: 9.9,
              },
            ],
          },

          {
            name: "Galaxy S22",

            repairs: [
              {
                id: "screen",
                name: "Façade avant",
                icon: "/icons/screen.png",
                price: 419.9,
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
                id: "clean",
                name: "Nettoyage complet",
                icon: "/icons/clean.png",
                price: 9.9,
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
