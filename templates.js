// ==========================================
// Miyajima Fan Studio
// テンプレートセット定義
// settings.html / index.html 共通
// ==========================================

export const TEMPLATE_SETS = {
  general: {
    label: "一般",
    note: "無地・母の日・父の日",
    templates: [
      { id: "plain", name: "無地", image: "fan1-highres.png", en: "Plain", zh: "素色", ko: "무지", vi: "Trơn" },
      { id: "mother", name: "母の日", image: "fan-mother-highres.png", en: "Mother's Day", zh: "母亲节", ko: "어머니의 날", vi: "Ngày của Mẹ" },
      { id: "father", name: "父の日", image: "fan-father-highres.png", en: "Father's Day", zh: "父亲节", ko: "아버지의 날", vi: "Ngày của Cha" }
    ]
  },

  summer: {
    label: "夏バージョン",
    note: "無地・花火・海の仲間・水彩マリン・トロピカル",
    templates: [
      { id: "plain", name: "無地", image: "fan1-highres.png", en: "Plain", zh: "素色", ko: "무지", vi: "Trơn" },
      { id: "summer01", name: "花火", image: "fan2026summer01-highres.png", en: "Fireworks", zh: "烟花", ko: "불꽃놀이", vi: "Pháo hoa" },
      { id: "summer02", name: "海の仲間", image: "fan2026summer02-highres.png", en: "Sea Friends", zh: "海洋伙伴", ko: "바다 친구들", vi: "Bạn biển" },
      { id: "summer03", name: "水彩マリン", image: "fan2026summer03-highres.png", en: "Watercolor Marine", zh: "水彩海洋", ko: "수채화 마린", vi: "Biển màu nước" },
      { id: "summer04", name: "トロピカル", image: "fan2026summer04-highres.png", en: "Tropical", zh: "热带风", ko: "트로피컬", vi: "Nhiệt đới" }
    ]
  },

  kure_softball: {
    label: "呉ソフトボール大会",
    note: "無地・大会名入り",
    templates: [
      { id: "plain", name: "無地", image: "fan1-highres.png", en: "Plain", zh: "素色", ko: "무지", vi: "Trơn" },
      { id: "kure", name: "呉ソフトボール大会", image: "kure-softball.png", en: "Kure Softball Tournament", zh: "吴市垒球大会", ko: "구레 소프트볼 대회", vi: "Giải bóng mềm Kure" }
    ]
  },

  ecommerce_fan: {
    label: "通販用うちわ",
    note: "無地・母の日・父の日・誕生日・敬老の日",
    templates: [
      { id: "plain", name: "無地", image: "fan1-highres.png", en: "Plain", zh: "素色", ko: "무지", vi: "Trơn" },
      { id: "mother", name: "母の日", image: "fan-mother-highres.png", en: "Mother's Day", zh: "母亲节", ko: "어머니의 날", vi: "Ngày của Mẹ" },
      { id: "father", name: "父の日", image: "fan-father-highres.png", en: "Father's Day", zh: "父亲节", ko: "아버지의 날", vi: "Ngày của Cha" },
      { id: "birthday", name: "誕生日", image: "fan-birthday-highres.png", en: "Birthday", zh: "生日", ko: "생일", vi: "Sinh nhật" },
      { id: "respect", name: "敬老の日", image: "fan-respect-highres.png", en: "Respect for the Aged Day", zh: "敬老日", ko: "경로의 날", vi: "Ngày Kính lão" }
    ]
  }
};

export function getTemplateSet(templateSetId = "general") {
  return TEMPLATE_SETS[templateSetId] || TEMPLATE_SETS.general;
}

export function getTemplates(templateSetId = "general") {
  return getTemplateSet(templateSetId).templates;
}

export function getTemplateSetEntries() {
  return Object.entries(TEMPLATE_SETS);
}