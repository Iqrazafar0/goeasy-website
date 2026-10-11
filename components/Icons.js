const base = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

export const IconCheck = (p) => (<svg {...base} width={18} height={18} {...p}><path d="M20 6 9 17l-5-5" /></svg>);
export const IconPhone = (p) => (<svg {...base} {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>);
export const IconMail = (p) => (<svg {...base} {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>);
export const IconPin = (p) => (<svg {...base} {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>);
export const IconClock = (p) => (<svg {...base} {...p}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>);
export const IconShield = (p) => (<svg {...base} {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>);
export const IconTruck = (p) => (<svg {...base} {...p}><path d="M5 17H3V6h11v11H9" /><path d="M14 9h4l3 4v4h-2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></svg>);
export const IconTag = (p) => (<svg {...base} {...p}><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z" /><circle cx="7" cy="7" r="1.5" /></svg>);
export const IconHeadset = (p) => (<svg {...base} {...p}><path d="M3 14v-2a9 9 0 0 1 18 0v2" /><path d="M21 15a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2zM3 15a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2z" /></svg>);
export const IconSeat = (p) => (<svg {...base} width={16} height={16} {...p}><circle cx="12" cy="7" r="4" /><path d="M5 21v-2a7 7 0 0 1 14 0v2" /></svg>);
export const IconGear = (p) => (<svg {...base} width={16} height={16} {...p}><circle cx="6" cy="6" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="12" cy="6" r="2" /><path d="M6 8v8M12 8v4H18V8" /></svg>);
export const IconCalendar = (p) => (<svg {...base} width={16} height={16} {...p}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>);
export const IconWhatsApp = ({ size = 20, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6.1a8.2 8.2 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.5.3-.5a.5.5 0 0 0 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5 5.9 5.9 0 0 0 1.2 3.1 13.5 13.5 0 0 0 5.2 4.6c1.9.8 2.7.9 3.6.7a3.1 3.1 0 0 0 2.1-1.4 2.6 2.6 0 0 0 .2-1.5c-.1-.1-.3-.2-.6-.4zM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 1 1 8.3 4.6zM20.5 3.5A11.9 11.9 0 0 0 1.8 17.8L.1 24l6.3-1.7A11.9 11.9 0 0 0 24 12a11.8 11.8 0 0 0-3.5-8.5z" />
  </svg>
);
export const IconCard = (p) => (<svg {...base} {...p}><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></svg>);
export const IconTerminal = (p) => (<svg {...base} {...p}><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M8 6h8v4H8zM8 14h2M12 14h2M16 14h0M8 18h2M12 18h2" /></svg>);
export const IconCash = (p) => (<svg {...base} {...p}><rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="12" cy="12" r="2.5" /><path d="M6 12h.01M18 12h.01" /></svg>);
export const IconStore = (p) => (<svg {...base} {...p}><path d="M3 9l1.5-5h15L21 9" /><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" /><path d="M5 12v9h14v-9M10 21v-5h4v5" /></svg>);
export const IconCrypto = (p) => (<svg {...base} {...p}><circle cx="12" cy="12" r="10" /><path d="M9 7h4.5a2.5 2.5 0 0 1 0 5H9zM9 12h5a2.5 2.5 0 0 1 0 5H9zM9 7v10M11 5v2M11 17v2" /></svg>);
export const IconGlobe = (p) => (<svg {...base} {...p}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg>);
export const IconPlane = (p) => (<svg {...base} {...p}><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" /></svg>);
export const IconChevron = ({ dir = "right", ...p }) => (<svg {...base} {...p}>{dir === "right" ? <path d="m9 18 6-6-6-6" /> : <path d="m15 18-6-6 6-6" />}</svg>);
export const IconGauge = (p) => (<svg {...base} {...p}><path d="M12 14l4-4" /><path d="M3.3 19a10 10 0 1 1 17.4 0" /></svg>);
export const IconEngine = (p) => (<svg {...base} {...p}><path d="M4 10h2V8h4V6h4v2h3l2 3h2v5h-2l-2 3H9l-2-2H4z" /></svg>);
export const IconDoor = (p) => (<svg {...base} {...p}><path d="M4 20V9l6-5h10v16z" /><path d="M14 13h2" /></svg>);
export const IconFuel = (p) => (<svg {...base} {...p}><path d="M3 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18zM3 10h12" /><path d="M15 8h2a2 2 0 0 1 2 2v6a2 2 0 0 0 4 0V9l-3-3" /></svg>);
export const IconBag = (p) => (<svg {...base} {...p}><rect x="4" y="7" width="16" height="13" rx="2" /><path d="M9 7V4h6v3" /></svg>);
export const IconRoad = (p) => (<svg {...base} {...p}><path d="M4 21 8 3M20 21 16 3M12 4v2M12 10v3M12 17v3" /></svg>);
export const IconWheel = (p) => (<svg {...base} {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><path d="M12 3v6M3.5 15l5.5-2M20.5 15 15 13" /></svg>);
export const IconShieldSmall = (p) => (<svg {...base} {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>);
