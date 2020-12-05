export const Locale = {
    defaultLocale: "fr",
    locales: [
        {
            name: "fr",
            options: {
                months: [
                    "Janvier",
                    "Février",
                    "Mars",
                    "Avril",
                    "Mai",
                    "Juin",
                    "Juillet",
                    "Août",
                    "Septembre",
                    "Octobre",
                    "Novembre",
                    "Décembre"
                ],
                shortMonths: [
                    "Jan",
                    "Fév",
                    "Mar",
                    "Avr",
                    "Mai",
                    "Juin",
                    "Juil",
                    "Aoû",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Déc"
                ],
                days: [
                    "Dimanche",
                    "Lundi",
                    "Mardi",
                    "Mercredi",
                    "Jeudi",
                    "Vendredi",
                    "Samedi"
                ],
                shortDays: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                toolbar: {
                    download: "",
                    exportToSVG: "Exporter en SVG",
                    exportToPNG: "Exporter en PNG",
                    selection: "Sélectionner",
                    selectionZoom: "Zoomer la sélection",
                    zoomIn: "Zoom +",
                    zoomOut: "Zoom -",
                    pan: "Panoramique",
                    reset: "Réinitialiser le zoom"
                }
            }
        }
    ]
};

export const Toolbar = {
    show: true,
    offsetX: 0,
    offsetY: 0,
    tools: {
        download: '<i class="ti-download"></i>',
        selection: true,
        zoom: false,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: false,
        customIcons: []
    },
    export: {
        csv: {
            filename: undefined,
            columnDelimiter: ",",
            headerCategory: "category",
            headerValue: "value",
            dateFormatter(timestamp) {
                return new Date(timestamp).toISOString();
            }
        }
    }
};

// Les privilèges donnant droit d'enregistrer un courrier.
export const REGISTER_COURRIER = [
    "ENREGIST_COURRIER_ORDINAIRE",
    "ENREGIST_COURRIER_CONFIDENT",
    "ENREGIST_LETTRE_PRESIDENT"
];

// Les archives.
export const LIST_ARCHIV = [
    "CONSULT_ARCHIVE_PERSO",
    "CONSULT_ARCH_ORDINAIRE",
    "CONSULT_ARCH_CONFIDENT"
];

// Les courriers reçus.
export const LIST_COURRIER = [
    "CONSULT_COURRIER_DIRECTION",
    "CONSULT_COURRIER_RECU"
];

// Les privilèges donnant droit de gérer les utilisateurs.
export const MANAGE_USERS = ["TOUT_ADMIN", "TOUT_ROOT"];
