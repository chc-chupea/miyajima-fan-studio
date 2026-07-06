// ==========================================
// Miyajima Fan Studio
// テンプレートセット定義 完成版
// settings.html / index.html 共通利用
// ==========================================

export const TEMPLATE_SETS = {
  general: {
    label: "一般",
    note: "無地・母の日・父の日",
    templates: [
      { id: "plain", name: "無地", image: "fan1-highres.png" },
      { id: "mother", name: "母の日", image: "fan-mother-highres.png" },
      { id: "father", name: "父の日", image: "fan-father-highres.png" }
    ]
  },

  summer: {
    label: "夏バージョン",
    note: "花火・海・水彩マリン・トロピカル",
    templates: [
      { id: "plain", name: "無地", image: "fan1-highres.png" },
      { id: "summer01", name: "花火", image: "fan2026summer01-highres.png" },
      { id: "summer02", name: "海の仲間", image: "fan2026summer02-highres.png" },
      { id: "summer03", name: "水彩マリン", image: "fan2026summer03-highres.png" },
      { id: "summer04", name: "トロピカル", image: "fan2026summer04-highres.png" }
    ]
  },

  kure_softball: {
    label: "呉ソフトボール大会",
    note: "無地・大会名入り",
    templates: [
      { id: "plain", name: "無地", image: "fan1-highres.png" },
      { id: "kure_softball", name: "呉ソフトボール大会", image: "kure-softball.png" }
    ]
  },

  ecommerce_fan: {
    label: "通販用うちわ",
    note: "無地・母の日・父の日・誕生日・敬老の日",
    templates: [
      { id: "plain", name: "無地", image: "fan1-highres.png" },
      { id: "mother", name: "母の日", image: "fan-mother-highres.png" },
      { id: "father", name: "父の日", image: "fan-father-highres.png" },
      { id: "birthday", name: "誕生日", image: "fan-birthday-highres.png" },
      { id: "respect", name: "敬老の日", image: "fan-respect-highres.png" }
    ]
  }
};

export function getTemplateSet(templateSetId = "general") {
  return TEMPLATE_SETS[templateSetId] || TEMPLATE_SETS.general;
}

export function getTemplateOptions(templateSetId = "general") {
  return getTemplateSet(templateSetId).templates;
}

export function getTemplateSetEntries() {
  return Object.entries(TEMPLATE_SETS);
}