export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Methods", href: "#methods" },
  { label: "Contact", href: "#contact" },
] as const;

export const BASE_PATH = "";

export const SOCIAL_LINKS = [
  { label: "Instagram", icon: `${BASE_PATH}/images/instagram.webp`, href: "https://instagram.com/nirvaniyogaandsound" },
  { label: "TikTok", icon: `${BASE_PATH}/images/youtube.webp`, href: "https://tiktok.com/@nirvanisoundandvibration" },
] as const;

export const SERVICES = [
  {
    title: "Harmonizing Yoga Sessions",
    desc: "A mindful blend of breath, movement, and grounding sequences designed to release tension, build inner clarity, and restore balance to both body and mind.",
    img: `${BASE_PATH}/images/service3.webp`,
  },
  {
    title: "Sound Resonance Therapy",
    desc: "A deeply immersive healing experience using singing bowls and therapeutic frequencies to calm the nervous system, quiet mental noise, and support emotional release.",
    img: `${BASE_PATH}/images/service2.webp`,
  },
  {
    title: "Vibrational Energy Alignment",
    desc: "A subtle, restorative practice that uses vibration, intention, and guided stillness to realign your energetic field, helping you feel centered, renewed, and grounded.",
    img: `${BASE_PATH}/images/service1.webp`,
  },
] as const;

export const METHOD_STEPS = [
  {
    num: "1.",
    title: "Align",
    desc: "Ground your breath. Calm your senses.",
    icon: `${BASE_PATH}/images/icon-relax.webp`,
  },
  {
    num: "2.",
    title: "Release",
    desc: "Let movement create space.",
    icon: `${BASE_PATH}/images/icon-mind.webp`,
  },
  {
    num: "3.",
    title: "Resonate",
    desc: "Immerse in healing vibration.",
    icon: `${BASE_PATH}/images/icon-peace.webp`,
  },
  {
    num: "4.",
    title: "Transform",
    desc: "Return renewed and centered.",
    icon: `${BASE_PATH}/images/icon-transform.webp`,
  },
] as const;

export const BRAND_ESSENCE_ITEMS = [
  { text: "Mindful Movement", icon: `${BASE_PATH}/images/layer.webp` },
  { text: "Vibrational Healing", icon: `${BASE_PATH}/images/layer.webp` },
  { text: "Holistic Alignment", icon: `${BASE_PATH}/images/layer.webp` },
  { text: "Mindful Movement", icon: `${BASE_PATH}/images/layer.webp` },
  { text: "Vibrational Healing", icon: `${BASE_PATH}/images/layer.webp` },
  { text: "Holistic Alignment", icon: `${BASE_PATH}/images/layer.webp` },
] as const;

export const CONTACT_FIELDS = [
  { label: "Fullname", placeholder: "Your full name", type: "text" as const },
  { label: "Email", placeholder: "Enter your email", type: "email" as const },
  { label: "Contact Number", placeholder: "Your phone number", type: "tel" as const },
  { label: "Message", placeholder: "Enter what help you need", type: "text" as const },
] as const;
