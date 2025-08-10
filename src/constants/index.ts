import { generateRandomID } from "../lib/utils";

export const filterButtonsData = [
    {
        title: "All",
        actionTitle: "all"
    },
    {
        title: "Active",
        actionTitle: "active"
    },
    {
        title: "Inactive",
        actionTitle: "inactive"
    }
]

export const sampleData = [
    {
        id: generateRandomID(),
        logo: "/images/logo-devlens.svg",
        name: "DevLens",
        description: "Quickly inspect page layouts and visualize element boundaries.",
        isActive: true
    },
    {
        id: generateRandomID(),
        logo: "/images/logo-style-spy.svg",
        name: "StyleSpy",
        description: "Instantly analyze and copy CSS from any webpage element.",
        isActive: true,
    },
    {
        id: generateRandomID(),
        logo: "/images/logo-speed-boost.svg",
        name: "SpeedBoost",
        description: "Optimizes browser resource usage to accelerate page loading.",
        isActive: false,
    },
    {
        id: generateRandomID(),
        logo: "/images/logo-json-wizard.svg",
        name: "JSONWizard",
        description: "Formats, validates, and prettifies JSON responses in-browser.",
        isActive: true,
    },
    {
        id: generateRandomID(),
        logo: "/images/logo-tab-master-pro.svg",
        name: "TabMaster Pro",
        description: "Organizes browser tabs into groups and sessions.",
        isActive: true,
    },
    {
        id: generateRandomID(),
        logo: "/images/logo-viewport-buddy.svg",
        name: "ViewportBuddy",
        description: "Simulates various screen resolutions directly within the browser.",
        isActive: false,
    },
    {
        id: generateRandomID(),
        logo: "/images/logo-markup-notes.svg",
        name: "Markup Notes",
        description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
        isActive: true,
    },
    {
        id: generateRandomID(),
        logo: "/images/logo-grid-guides.svg",
        name: "GridGuides",
        description: "Overlay customizable grids and alignment guides on any webpage.",
        isActive: false,
    },
    {
        id: generateRandomID(),
        logo: "/images/logo-palette-picker.svg",
        name: "Palette Picker",
        description: "Instantly extracts color palettes from any webpage.",
        isActive: true,
    },
    {
        id: generateRandomID(),
        logo: "/images/logo-link-checker.svg",
        name: "LinkChecker",
        description: "Scans and highlights broken links on any page.",
        isActive: true,
    },
    {
        id: generateRandomID(),
        logo: "/images/logo-dom-snapshot.svg",
        name: "DOM Snapshot",
        description: "Capture and export DOM structures quickly.",
        isActive: false,
    },
    {
        id: generateRandomID(),
        logo: "/images/logo-console-plus.svg",
        name: "ConsolePlus",
        description: "Enhanced developer console with advanced filtering and logging.",
        isActive: true,
    }
]