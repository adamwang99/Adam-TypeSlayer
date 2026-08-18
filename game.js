const APP_VERSION = 'v10.2.0';
const BUILD_DATE = '17.08.2026';

function syncAppVersion() {
  document.querySelectorAll('.app-version-target').forEach(el => el.textContent = APP_VERSION);
  document.querySelectorAll('.app-build-target').forEach(el => el.textContent = BUILD_DATE);
}

const BOSS_ARCHETYPES = [
  {
    world: 'ĐẢO MÂY KHỞI ĐẦU',
    boss: 'Vua Slime Rêu Rậm',
    kind: 'slime',
    id: 'mossling-slime',
    level: 0,
    bg: 'assets/bg/slime_clean.webp',
    flip: 1,
    hpBase: 1200,
    skills: [
      { name: 'Bong Bóng Axit', icon: '🫧', mult: 1.0, fx: 'beam' },
      { name: 'Dây Gai Rừng', icon: '🌿', mult: 1.2, fx: 'drain', leech: 0.12 },
      { name: 'Cú Nhảy Đè', icon: '🌊', mult: 1.45, fx: 'slam' }
    ]
  },
  {
    world: 'BÃI PHẾ LIỆU HẮC ÁM',
    boss: 'Yêu Tinh Răng Sắt',
    kind: 'goblin',
    id: 'scrapfang-goblin',
    level: 1,
    bg: 'assets/bg/slime_clean.webp',
    flip: 1,
    hpBase: 1550,
    skills: [
      { name: 'Vung Chùy Sắt', icon: '🪵', mult: 1.1, fx: 'slam' },
      { name: 'Phóng Mảnh Vỡ', icon: '🔩', mult: 1.25, fx: 'beam' },
      { name: 'Đột Kích Bất Ngờ', icon: '🗡️', mult: 1.5, fx: 'siphon' }
    ]
  },
  {
    world: 'RỪNG GAI HUNG DỮ',
    boss: 'Lợn Rừng Lưng Gai',
    kind: 'boar',
    id: 'thornback-boar',
    level: 2,
    bg: 'assets/bg/slime_clean.webp',
    flip: 1,
    hpBase: 1950,
    skills: [
      { name: 'Húc Gai Nhọn', icon: '🐗', mult: 1.15, fx: 'slam' },
      { name: 'Nanh Sừng Húc', icon: '⚔️', mult: 1.35, fx: 'slam' },
      { name: 'Giậm Đất Chấn Động', icon: '💥', mult: 1.55, fx: 'smash' }
    ]
  },
  {
    world: 'HANG ĐÊM TỐI',
    boss: 'Dơi Ma Bóng Tối',
    kind: 'bat',
    id: 'duskwing-bat',
    level: 3,
    bg: 'assets/bg/golem_clean.webp',
    flip: 1,
    hpBase: 2400,
    skills: [
      { name: 'Lao Xuống Đêm', icon: '🦇', mult: 1.2, fx: 'beam' },
      { name: 'Sóng Âm Siêu Thanh', icon: '🔊', mult: 1.38, fx: 'drain', weak: true },
      { name: 'Đàn Dơi Hắc Ám', icon: '🌌', mult: 1.6, fx: 'siphon', leech: 0.15 }
    ]
  },
  {
    world: 'HANG PHA LÊ CỔ',
    boss: 'Golem Pha Lê',
    kind: 'golem',
    id: 'stonehide-golem',
    level: 4,
    bg: 'assets/bg/golem_clean.webp',
    flip: 1,
    hpBase: 2950,
    skills: [
      { name: 'Nắm Đấm Đá Tảng', icon: '🥊', mult: 1.25, fx: 'smash' },
      { name: 'Ném Đá Tảng', icon: '🪨', mult: 1.45, fx: 'beam' },
      { name: 'Địa Chấn Tách Đất', icon: '🌋', mult: 1.7, fx: 'slam' }
    ]
  },
  {
    world: 'PHÁO ĐÀI THÉP',
    boss: 'Độc Nhãn Khổng Lồ',
    kind: 'ogre',
    id: 'ironjaw-ogre',
    level: 5,
    bg: 'assets/bg/golem_clean.webp',
    flip: 1,
    hpBase: 3600,
    skills: [
      { name: 'Chùy Sắt Ngàn Cân', icon: '⛓️', mult: 1.3, fx: 'smash' },
      { name: 'Xích Nghiền Xương', icon: '⛓', mult: 1.5, fx: 'drain' },
      { name: 'Tiếng Gầm Chiến Trận', icon: '📢', mult: 1.75, fx: 'smash' }
    ]
  },
  {
    world: 'ĐỈNH NÚI KỊCH ĐỘC',
    boss: 'Sư Tử Cánh Độc',
    kind: 'manticore',
    id: 'venomtail-manticore',
    level: 6,
    bg: 'assets/bg/void_clean.webp',
    flip: 1,
    hpBase: 4350,
    skills: [
      { name: 'Móng Vuốt Kịch Độc', icon: '🦅', mult: 1.35, fx: 'beam' },
      { name: 'Đuôi Gai Đâm', icon: '🦂', mult: 1.55, fx: 'drain', weak: true },
      { name: 'Cào Xé Không Gian', icon: '🌪️', mult: 1.8, fx: 'slam' }
    ]
  },
  {
    world: 'ĐẤU TRƯỜNG LÔI ĐÌNH',
    boss: 'Ngưu Ma Vương Sấm Sét',
    kind: 'minotaur',
    id: 'stormhorn-minotaur',
    level: 7,
    bg: 'assets/bg/void_clean.webp',
    flip: 1,
    hpBase: 5200,
    skills: [
      { name: 'Húc Điện Cao Thế', icon: '⚡', mult: 1.4, fx: 'beam' },
      { name: 'Búa Rìu Bão Tố', icon: '🪓', mult: 1.6, fx: 'smash' },
      { name: 'Chẻ Đôi Bầu Trời', icon: '🌩️', mult: 1.9, fx: 'slam' }
    ]
  },
  {
    world: 'HỎA DIỆM SƠN',
    boss: 'Hỏa Thần Khổng Lồ',
    kind: 'colossus',
    id: 'ember-colossus',
    level: 8,
    bg: 'assets/bg/void_clean.webp',
    flip: 1,
    hpBase: 6200,
    skills: [
      { name: 'Lao Bóng Tối', icon: '🔥', mult: 1.45, fx: 'beam' },
      { name: 'Trảm Huyết Ma', icon: '🩸', mult: 1.68, fx: 'drain', leech: 0.18 },
      { name: 'Nhảy Vồ Cuồng Nộ', icon: '☄️', mult: 2.0, fx: 'smash' }
    ]
  },
  {
    world: 'BĂNG ĐẢO VĨNH HẰNG',
    boss: 'Băng Long Bắc Cực',
    kind: 'wyrm',
    id: 'frostclaw-wyrm',
    level: 9,
    bg: 'assets/bg/void_clean.webp',
    flip: 1,
    hpBase: 7300,
    skills: [
      { name: 'Hơi Thở Băng Giá', icon: '❄️', mult: 1.5, fx: 'beam' },
      { name: 'Quét Băng Hàn Băng', icon: '🧊', mult: 1.75, fx: 'smash' },
      { name: 'Lao Đao Băng Tuyết', icon: '🐉', mult: 2.15, fx: 'slam' }
    ]
  }
];

const CLASSES = {
  assassin: { name: 'Sát thủ', baseHp: 480, key: 15, word: 132, accent: '#8b5cf6', fx: 'assets/fx/fx_1.webp' },
  warrior: { name: 'Chiến binh', baseHp: 720, key: 17, word: 122, accent: '#f3b23c', fx: 'assets/fx/fx_5.webp' },
  mage: { name: 'Pháp sư', baseHp: 480, key: 13, word: 154, accent: '#42a5ff', fx: 'assets/fx/fx_9.webp' }
};

const CLASS_COMBAT = {
  assassin: { wordBase: 18, critEvery: 7, critMult: 1.75, incomingMult: 1, cooldownMult: 1, passive: 'Mỗi 7 từ: CRIT x1,75' },
  warrior: { wordBase: 21, critEvery: 11, critMult: 1.65, incomingMult: 0.90, cooldownMult: 1, passive: 'HP +50% (720 Máu) · Giảm 10% damage nhận' },
  mage: { wordBase: 17, critEvery: 10, critMult: 1.7, incomingMult: 1, cooldownMult: 0.80, passive: 'Hồi kỹ năng nhanh hơn 20%' }
};

const HERO_SKILLS = {
  assassin: [
    { id: 'shadow', icon: '⚔', name: 'Ảnh Trảm', key: 'F1 / Alt+1', cd: 11, desc: 'Từ kế tiếp x1,75 damage và chắc chắn chí mạng.' },
    { id: 'venom', icon: '☠', name: 'Độc Nhận', key: 'F2 / Alt+2', cd: 17, desc: '3 từ kế tiếp x1,25 damage, hút thêm 3% HP.' },
    { id: 'evade', icon: '🌫', name: 'Vô Ảnh', key: 'F3 / Alt+3', cd: 23, desc: 'Né hoàn toàn 2 skill boss kế tiếp.' }
  ],
  warrior: [
    { id: 'heavy', icon: '🗡', name: 'Trọng Trảm', key: 'F1 / Alt+1', cd: 12, desc: 'Từ kế tiếp x2 damage.' },
    { id: 'guard', icon: '🛡', name: 'Thành Đồng', key: 'F2 / Alt+2', cd: 20, desc: '2 đòn boss kế tiếp giảm 60% damage.' },
    { id: 'quake', icon: '💥', name: 'Chấn Địa', key: 'F3 / Alt+3', cd: 24, desc: 'Làm boss choáng 4 giây, từ kế tiếp x1,4.' }
  ],
  mage: [
    { id: 'fire', icon: '🔥', name: 'Hỏa Cầu', key: 'F1 / Alt+1', cd: 10, desc: 'Từ kế tiếp x1,65 damage.' },
    { id: 'frost', icon: '❄', name: 'Băng Phong', key: 'F2 / Alt+2', cd: 16, desc: 'Làm chậm nhịp tấn công boss 40% trong 10 giây.' },
    { id: 'storm', icon: '⚡', name: 'Lôi Liên', key: 'F3 / Alt+3', cd: 22, desc: '3 từ kế tiếp x1,35 damage.' }
  ]
};

// Standard Vietnamese / ANSI 104-key Touch Typing Finger Mapping
const FINGER = {
  // Left Pinky (Út trái) - Home A
  '`': ['left', 'pinky'], '~': ['left', 'pinky'],
  '1': ['left', 'pinky'], '!': ['left', 'pinky'],
  'q': ['left', 'pinky'], 'Q': ['left', 'pinky'],
  'a': ['left', 'pinky'], 'A': ['left', 'pinky'],
  'z': ['left', 'pinky'], 'Z': ['left', 'pinky'],
  'tab': ['left', 'pinky'], 'caps': ['left', 'pinky'],
  'shift-left': ['left', 'pinky'], 'ctrl-l': ['left', 'pinky'],

  // Left Ring (Áp út trái) - Home S
  '2': ['left', 'ring'], '@': ['left', 'ring'],
  'w': ['left', 'ring'], 'W': ['left', 'ring'],
  's': ['left', 'ring'], 'S': ['left', 'ring'],
  'x': ['left', 'ring'], 'X': ['left', 'ring'],

  // Left Middle (Giữa trái) - Home D
  '3': ['left', 'middle'], '#': ['left', 'middle'],
  'e': ['left', 'middle'], 'E': ['left', 'middle'],
  'd': ['left', 'middle'], 'D': ['left', 'middle'],
  'c': ['left', 'middle'], 'C': ['left', 'middle'],

  // Left Index (Trỏ trái) - Home F (Tactile bump)
  '4': ['left', 'index'], '$': ['left', 'index'],
  '5': ['left', 'index'], '%': ['left', 'index'],
  'r': ['left', 'index'], 'R': ['left', 'index'],
  't': ['left', 'index'], 'T': ['left', 'index'],
  'f': ['left', 'index'], 'F': ['left', 'index'],
  'g': ['left', 'index'], 'G': ['left', 'index'],
  'v': ['left', 'index'], 'V': ['left', 'index'],
  'b': ['left', 'index'], 'B': ['left', 'index'],

  // Right Index (Trỏ phải) - Home J (Tactile bump)
  '6': ['right', 'index'], '^': ['right', 'index'],
  '7': ['right', 'index'], '&': ['right', 'index'],
  'y': ['right', 'index'], 'Y': ['right', 'index'],
  'u': ['right', 'index'], 'U': ['right', 'index'],
  'h': ['right', 'index'], 'H': ['right', 'index'],
  'j': ['right', 'index'], 'J': ['right', 'index'],
  'n': ['right', 'index'], 'N': ['right', 'index'],
  'm': ['right', 'index'], 'M': ['right', 'index'],

  // Right Middle (Giữa phải) - Home K
  '8': ['right', 'middle'], '*': ['right', 'middle'],
  'i': ['right', 'middle'], 'I': ['right', 'middle'],
  'k': ['right', 'middle'], 'K': ['right', 'middle'],
  ',': ['right', 'middle'], '<': ['right', 'middle'],

  // Right Ring (Áp út phải) - Home L
  '9': ['right', 'ring'], '(': ['right', 'ring'],
  'o': ['right', 'ring'], 'O': ['right', 'ring'],
  'l': ['right', 'ring'], 'L': ['right', 'ring'],
  '.': ['right', 'ring'], '>': ['right', 'ring'],

  // Right Pinky (Út phải) - Home ;
  '0': ['right', 'pinky'], ')': ['right', 'pinky'],
  '-': ['right', 'pinky'], '_': ['right', 'pinky'],
  '=': ['right', 'pinky'], '+': ['right', 'pinky'],
  'backspace': ['right', 'pinky'],
  'p': ['right', 'pinky'], 'P': ['right', 'pinky'],
  '[': ['right', 'pinky'], '{': ['right', 'pinky'],
  ']': ['right', 'pinky'], '}': ['right', 'pinky'],
  '\\': ['right', 'pinky'], '|': ['right', 'pinky'],
  ';': ['right', 'pinky'], ':': ['right', 'pinky'],
  "'": ['right', 'pinky'], '"': ['right', 'pinky'],
  '/': ['right', 'pinky'], '?': ['right', 'pinky'],
  'enter': ['right', 'pinky'], '\n': ['right', 'pinky'],
  'shift-right': ['right', 'pinky'], 'ctrl-r': ['right', 'pinky'],

  // Thumb (Ngón cái)
  ' ': ['left', 'thumb'],
  'alt-l': ['left', 'thumb'],
  'alt-r': ['right', 'thumb']
};

const FINGER_COLORS = {
  'left-pinky': '#ff7675',
  'left-ring': '#fdcb6e',
  'left-middle': '#ffeaa7',
  'left-index': '#00b894',
  'right-index': '#0984e3',
  'right-middle': '#6c5ce7',
  'right-ring': '#a29bfe',
  'right-pinky': '#fd79a8',
  'left-thumb': '#e17055',
  'right-thumb': '#e17055'
};

const LABEL = { pinky: 'Ngón út', ring: 'Ngón áp út', middle: 'Ngón giữa', index: 'Ngón trỏ', thumb: 'Ngón cái' };

const AUDIO = {
  music: [
    'assets/audio/remix/remix_1.ogg',
    'assets/audio/remix/remix_2.ogg',
    'assets/audio/remix/remix_3.ogg',
    'assets/audio/remix/remix_4.ogg',
    'assets/audio/remix/remix_5.ogg',
    'assets/audio/remix/remix_6.ogg'
  ],
  // Hero Voices & Skill Incantations (Tight & Punchy)
  hero_attack_1: 'assets/audio/voice/hero_attack_1.ogg',
  hero_attack_2: 'assets/audio/voice/hero_attack_2.ogg',
  hero_skill_shadow: 'assets/audio/voice/hero_skill_shadow.ogg',
  hero_skill_venom: 'assets/audio/voice/hero_skill_venom.ogg',
  hero_skill_evade: 'assets/audio/voice/hero_skill_evade.ogg',
  hero_skill_heavy: 'assets/audio/voice/hero_skill_heavy.ogg',
  hero_skill_guard: 'assets/audio/voice/hero_skill_guard.ogg',
  hero_skill_quake: 'assets/audio/voice/hero_skill_quake.ogg',
  hero_skill_fire: 'assets/audio/voice/hero_skill_fire.ogg',
  hero_skill_frost: 'assets/audio/voice/hero_skill_frost.ogg',
  hero_skill_storm: 'assets/audio/voice/hero_skill_storm.ogg',
  hero_hurt_light: 'assets/audio/voice/hero_hurt_light.ogg',
  hero_hurt_heavy: 'assets/audio/voice/hero_hurt_heavy.ogg',
  hero_victory: 'assets/audio/voice/hero_victory.ogg',
  hero_defeat: 'assets/audio/voice/hero_defeat.ogg',
  
  // Boss Roars & SFX (Tight 1.3s - 1.6s)
  boss_slime: 'assets/audio/boss/boss_slime.ogg',
  boss_goblin: 'assets/audio/boss/boss_goblin.ogg',
  boss_boar: 'assets/audio/boss/boss_boar.ogg',
  boss_treant: 'assets/audio/boss/boss_treant.ogg',
  boss_golem: 'assets/audio/boss/boss_golem.ogg',
  boss_manticore: 'assets/audio/boss/boss_manticore.ogg',
  boss_minotaur: 'assets/audio/boss/boss_minotaur.ogg',
  boss_colossus: 'assets/audio/boss/boss_colossus.ogg',
  boss_hydra: 'assets/audio/boss/boss_hydra.ogg',
  boss_dragon: 'assets/audio/boss/boss_dragon.ogg',
  boss_enrage: 'assets/audio/boss/boss_enrage.ogg',
  boss_death: 'assets/audio/boss/boss_death.ogg',
  
  // Weapon & Elemental Impacts
  sfx_typing_hit: 'assets/audio/skills/sfx_typing_hit.ogg',
  sfx_blade_slash: 'assets/audio/skills/sfx_blade_slash.ogg',
  sfx_heavy_impact: 'assets/audio/skills/sfx_heavy_impact.ogg',
  sfx_fire_burst: 'assets/audio/skills/sfx_fire_burst.ogg',
  sfx_ice_shatter: 'assets/audio/skills/sfx_ice_shatter.ogg',
  sfx_lightning: 'assets/audio/skills/sfx_lightning.ogg',
  sfx_shield_block: 'assets/audio/skills/sfx_shield_block.ogg',
  sfx_crit_bell: 'assets/audio/skills/sfx_crit_bell.ogg',
  sfx_lifesteal: 'assets/audio/skills/sfx_lifesteal.ogg',
  sfx_card_legendary: 'assets/audio/skills/sfx_card_legendary.ogg',
  
  // Aliases & Utilities
  slash: 'assets/audio/skills/sfx_blade_slash.ogg',
  impact: 'assets/audio/skills/sfx_heavy_impact.ogg',
  crit: 'assets/audio/skills/sfx_crit_bell.ogg',
  attack: 'assets/audio/voice/hero_attack_1.ogg',
  hurt: 'assets/audio/voice/hero_hurt_light.ogg',
  victory: 'assets/audio/voice/hero_victory.ogg',
  defeat: 'assets/audio/voice/hero_defeat.ogg',
  cheers: 'assets/audio/voice/hero_victory.ogg',
  applause: 'assets/audio/applause.ogg',
  wellDone: 'assets/audio/well_done.ogg'
};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

let cfg = { classKey: 'assassin', typingMode: 'telex', internalIme: true, handGuide: true };
let G = {}, bossTimer = null, ticker = null, paused = false, soundOn = true, musicOn = true;
let musicEl = null, specialMusic = null, dangerTimer = null, attackVoiceAt = 0, hurtVoiceAt = 0;
let musicLastIndex = -1, skillUiTimer = null;

const VOL_KEY = 'typeSlayerVN.volume.v1';
const HAND_GUIDE_KEY = 'typeSlayerVN.handGuide.v100';
const IME_PREF_KEY = 'typeSlayerVN.internalIme.v1';
const PROFILE_KEY = 'typeSlayerVN.playerProfiles.v2';
const LAST_PLAYER_KEY = 'typeSlayerVN.lastPlayer.v2';

let musicVolume = 0.70, sfxVolume = 0.80;
try {
  const v = JSON.parse(localStorage.getItem(VOL_KEY) || '{}');
  if (Number.isFinite(v.music)) musicVolume = Math.max(0, Math.min(1, v.music));
  if (Number.isFinite(v.sfx)) sfxVolume = Math.max(0, Math.min(1, v.sfx));
} catch (e) {}

try {
  const savedHand = localStorage.getItem(HAND_GUIDE_KEY);
  cfg.handGuide = savedHand === null ? true : savedHand === '1';
} catch (e) {
  cfg.handGuide = true;
}

// ---------- PLAYER PROFILES ----------
function loadProfiles() {
  try { return JSON.parse(localStorage.getItem(PROFILE_KEY) || '{}') || {}; } catch (e) { return {}; }
}
function saveProfiles(p) {
  try { localStorage.setItem(PROFILE_KEY, JSON.stringify(p)); } catch (e) {}
}
function cleanName(v) {
  return (v || '').replace(/\s+/g, ' ').trim().slice(0, 20);
}
function profileKey(name) {
  return cleanName(name).toLocaleLowerCase('vi-VN') || 'chien binh';
}
function getProfile(name) {
  const p = loadProfiles()[profileKey(name)];
  return p || { name: cleanName(name) || 'Chiến binh', bestScore: 0, bestRound: 0 };
}
function updateProfile(score = 0, round = 1) {
  if (!G.playerName) return;
  const all = loadProfiles(), k = profileKey(G.playerName), old = all[k] || { name: G.playerName, bestScore: 0, bestRound: 0 };
  old.name = G.playerName;
  old.bestScore = Math.max(old.bestScore || 0, Math.floor(score || 0));
  old.bestRound = Math.max(old.bestRound || 0, Math.floor(round || 1));
  all[k] = old;
  saveProfiles(all);
  G.profile = old;
  updateProfileUI();
}
function rememberPlayer(name) {
  try { localStorage.setItem(LAST_PLAYER_KEY, name); } catch (e) {}
}
function updateSetupProfile() {
  const name = cleanName($('#playerNameInput').value), p = getProfile(name);
  $('#setupPlayerLabel').textContent = name || 'người chơi';
  $('#setupBestScore').textContent = (p.bestScore || 0).toLocaleString('vi-VN');
  $('#setupBestRound').textContent = p.bestRound || 0;
  $('#playerProfileHint').textContent = name ? `Đã lưu: ${p.name} · điểm cao ${Number(p.bestScore || 0).toLocaleString('vi-VN')} · vòng ${p.bestRound || 0}` : 'Nhập tên để xem kỷ lục cá nhân.';
}
function updateProfileUI() {
  const p = G.profile || getProfile(G.playerName || '');
  if ($('#bestScore')) $('#bestScore').textContent = Number(p.bestScore || 0).toLocaleString('vi-VN');
  if ($('#playerNameHud')) $('#playerNameHud').textContent = G.playerName || 'Chiến binh';
}

// ---------- 100% CURATED & CHILD-SAFE VIETNAMESE LIBRARY ----------
// ---------- MASSIVE 100% CURATED & CHILD-SAFE VIETNAMESE LIBRARY (5X EXPANDED) ----------
const CURATED_WORDS = [
  // 1. Thiên nhiên, Thắng cảnh & Đất nước
  'bình minh', 'hoàng hôn', 'dòng suối', 'cánh rừng', 'đại dương', 'mây trắng', 'cầu vồng',
  'ngọn hải đăng', 'bông hoa', 'cơn mưa', 'thác nước', 'chim én', 'đồng cỏ', 'biển xanh',
  'đồi chè', 'giọt sương', 'ánh nắng', 'hoa sen', 'trăng rằm', 'ngọn núi', 'bờ cát',
  'vịnh hạ long', 'rừng ngập mặn', 'núi ngự bình', 'sông hương', 'đỉnh phan xi păng',
  'thung lũng', 'ruộng bậc thang', 'đảo ngọc', 'rạn san hô', 'vườn quốc gia', 'hồ ba bể',
  'động phong nha', 'sông cửu long', 'sông hồng', 'rừng nguyên sinh', 'núi non hùng vĩ',
  'bầu trời trong xanh', 'ngàn hoa khoe sắc', 'dãy trường sơn', 'đồi thông reo', 'bãi cát vàng',

  // 2. Phẩm chất đạo đức & Nhân cách cao đẹp
  'yêu thương', 'chia sẻ', 'chăm chỉ', 'thật thà', 'trung thực', 'khiêm tốn', 'biết ơn',
  'kính trọng', 'lễ phép', 'đoàn kết', 'kiên trì', 'tự tin', 'sáng tạo', 'thông minh',
  'rèn luyện', 'học tập', 'bạn bè', 'gia đình', 'nụ cười', 'niềm vui', 'ước mơ',
  'nhân ái', 'khoan dung', 'nghĩa hiệp', 'chân thành', 'tự giác', 'trách nhiệm', 'hiếu thảo',
  'tinh tế', 'lạc quan', 'quả cảm', 'bền bỉ', 'nghị lực', 'trí tuệ', 'hoài bão', 'vững vàng',
  'tấm lòng vàng', 'kỷ luật thép', 'tinh thần thép', 'lòng trắc ẩn', 'chí lớn', 'nghĩa tình',

  // 3. Phiêu lưu, Võ học & Thần thoại
  'chiến binh', 'hiệp sĩ', 'dũng cảm', 'thanh kiếm', 'ngọc sáng', 'vương miện', 'cánh cổng',
  'lâu đài', 'phiêu lưu', 'khám phá', 'thám hiểm', 'cổ vật', 'con thuyền', 'thảo nguyên',
  'bí kíp', 'cung tên', 'khiên ma thuật', 'thần rồng', 'phượng hoàng', 'ngũ hành', 'hỏa diệm',
  'lôi đình', 'băng tuyết', 'phong ba', 'trảm phong', 'kình lực', 'hộ thể', 'kỳ lân',
  'thần thú', 'chưởng pháp', 'kiếm khí', 'long bào', 'bảo kiếm', 'vô ảnh cước', 'ngọc tỉ',

  // 4. Khoa học, Công nghệ & Khám phá vũ trụ
  'hành tinh', 'mặt trời', 'mặt trăng', 'vì sao', 'quỹ đạo', 'ánh sáng', 'năng lượng',
  'vệ tinh', 'vũ trụ', 'trái đất', 'bầu trời', 'thiên hà', 'môi trường', 'tri thức',
  'công nghệ', 'lượng tử', 'trí tuệ nhân tạo', 'kính thiên văn', 'phi thuyền không gian',
  'nam châm', 'trọng lực', 'tế bào', 'nguyên tử', 'sóng vô tuyến', 'vệ tinh viễn thông',
  'năng lượng xanh', 'điện toán đám mây', 'robot thông minh', 'dữ liệu số', 'mạng toàn cầu',

  // 5. Văn hóa dân gian, Ẩm thực & Bản sắc Việt
  'bánh chưng xanh', 'áo dài thướt tha', 'chiếc nón lá', 'phố cổ hà nội', 'trống đồng đông sơn',
  'hoa mai vàng', 'hoa đào thắm', 'đờn ca tài tử', 'hát quan họ', 'chợ nổi miền tây', 'cây tre làng',
  'gốm bát tràng', 'đèn lồng hội an', 'múa lân rồng', 'chùa một cột', 'hồ hoàn kiếm', 'tháp rùa cổ kính',
  'cà phê sữa đá', 'bát phở bò', 'bánh mì giòn', 'cốm làng vòng', 'chè hạt sen', 'hoa phượng đỏ'
];

const CURATED_PROVERBS = [
  // Đạo lý, Tình nghĩa gia đình & Đồng bào
  { theme: 'Ca dao tục ngữ', text: 'Uống nước nhớ nguồn, ăn quả nhớ kẻ trồng cây.' },
  { theme: 'Ca dao tục ngữ', text: 'Công cha như núi Thái Sơn, nghĩa mẹ như nước trong nguồn chảy ra.' },
  { theme: 'Ca dao tục ngữ', text: 'Một lòng thờ mẹ kính cha, cho tròn chữ hiếu mới là đạo con.' },
  { theme: 'Ca dao tục ngữ', text: 'Bầu ơi thương lấy bí cùng, tuy rằng khác giống nhưng chung một giàn.' },
  { theme: 'Ca dao tục ngữ', text: 'Nhiễu điều phủ lấy giá gương, người trong một nước phải thương nhau cùng.' },
  { theme: 'Ca dao tục ngữ', text: 'Lá lành đùm lá rách, thương người như thể thương thân.' },
  { theme: 'Ca dao tục ngữ', text: 'Một miếng khi đói bằng một gói khi no.' },
  { theme: 'Ca dao tục ngữ', text: 'Anh em như thể tay chân, rách lành đùm bọc dở hay đỡ đần.' },
  { theme: 'Ca dao tục ngữ', text: 'Môi hở răng lạnh, máu chảy ruột mềm.' },
  { theme: 'Ca dao tục ngữ', text: 'Một giọt máu đào hơn ao nước lã.' },
  { theme: 'Ca dao tục ngữ', text: 'Bán anh em xa, mua láng giềng gần.' },
  { theme: 'Ca dao tục ngữ', text: 'Thuận vợ thuận chồng, tát biển Đông cũng cạn.' },

  // Học tập, Ý chí & Rèn luyện
  { theme: 'Ca dao tục ngữ', text: 'Học ăn học nói, học gói học mở.' },
  { theme: 'Ca dao tục ngữ', text: 'Đi một ngày đàng, học một sàng khôn.' },
  { theme: 'Ca dao tục ngữ', text: 'Có công mài sắt, có ngày nên kim.' },
  { theme: 'Ca dao tục ngữ', text: 'Muốn biết phải hỏi, muốn giỏi phải học.' },
  { theme: 'Ca dao tục ngữ', text: 'Dốt đến đâu học lâu cũng biết.' },
  { theme: 'Ca dao tục ngữ', text: 'Không thầy đố mày làm nên.' },
  { theme: 'Ca dao tục ngữ', text: 'Học thầy không tày học bạn.' },
  { theme: 'Ca dao tục ngữ', text: 'Tiên học lễ, hậu học văn.' },
  { theme: 'Ca dao tục ngữ', text: 'Dao có mài mới sắc, người có học mới khôn.' },
  { theme: 'Ca dao tục ngữ', text: 'Kiến tha lâu cũng đầy tổ.' },
  { theme: 'Ca dao tục ngữ', text: 'Thất bại là mẹ thành công.' },
  { theme: 'Ca dao tục ngữ', text: 'Chớ thấy sóng cả mà ngã tay chèo.' },
  { theme: 'Ca dao tục ngữ', text: 'Lửa thử vàng, gian nan thử sức.' },
  { theme: 'Ca dao tục ngữ', text: 'Nước chảy đá mòn, công thành danh toại.' },
  { theme: 'Ca dao tục ngữ', text: 'Có chí thì nên, có nền thì vững.' },
  { theme: 'Ca dao tục ngữ', text: 'Thắng không kiêu, bại không nản.' },
  { theme: 'Ca dao tục ngữ', text: 'Vạn sự khởi đầu nan, gian nan không nản chí.' },
  { theme: 'Ca dao tục ngữ', text: 'Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao.' },
  { theme: 'Ca dao tục ngữ', text: 'Cần cù bù thông minh, chăm chỉ gặt hái thành công.' },
  { theme: 'Ca dao tục ngữ', text: 'Non cao cũng có đường trèo, đường dẫu hiểm nghèo cũng có lối đi.' },

  // Lời ăn tiếng nói, Phẩm giá & Lối sống
  { theme: 'Ca dao tục ngữ', text: 'Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau.' },
  { theme: 'Ca dao tục ngữ', text: 'Chim khôn kêu tiếng rảnh rang, người khôn nói tiếng dịu dàng dễ nghe.' },
  { theme: 'Ca dao tục ngữ', text: 'Lời chào cao hơn mâm cỗ.' },
  { theme: 'Ca dao tục ngữ', text: 'Gần mực thì đen, gần đèn thì rạng.' },
  { theme: 'Ca dao tục ngữ', text: 'Ăn ngay nói thật, mọi tật mọi lành.' },
  { theme: 'Ca dao tục ngữ', text: 'Đói cho sạch, rách cho thơm.' },
  { theme: 'Ca dao tục ngữ', text: 'Giấy rách phải giữ lấy lề.' },
  { theme: 'Ca dao tục ngữ', text: 'Tốt gỗ hơn tốt nước sơn, xấu người đẹp nết còn hơn đẹp người.' },
  { theme: 'Ca dao tục ngữ', text: 'Ở hiền gặp lành, gieo gió gặt bão.' },
  { theme: 'Ca dao tục ngữ', text: 'Cây ngay không sợ chết đứng.' },
  { theme: 'Ca dao tục ngữ', text: 'Khéo ăn thì no, khéo co thì ấm.' },
  { theme: 'Ca dao tục ngữ', text: 'Tấc đất tấc vàng, ruộng đồng phì nhiêu.' },
  { theme: 'Ca dao tục ngữ', text: 'Nhất nước, nhì phân, tam cần, tứ giống.' },
  { theme: 'Ca dao tục ngữ', text: 'Cày sâu cuốc bẫm, ngày mùa bội thu.' },
  { theme: 'Ca dao tục ngữ', text: 'Trâu ơi ta bảo trâu này, trâu ra ngoài ruộng trâu cày với ta.' },
  { theme: 'Ca dao tục ngữ', text: 'Gió đưa cành trúc la đà, tiếng chuông Trấn Vũ canh gà Thọ Xương.' },
  { theme: 'Ca dao tục ngữ', text: 'Đường vô xứ Nghệ quanh quanh, non xanh nước biếc như tranh họa đồ.' },
  { theme: 'Ca dao tục ngữ', text: 'Tháp Mười đẹp nhất bông sen, Việt Nam đẹp nhất có tên Bác Hồ.' }
];

const CURATED_INSPIRING_SENTENCES = [
  // Tri thức, Nghị lực & Thành công
  { theme: 'Truyền cảm hứng', text: 'Mỗi ngày đọc một trang sách là bước thêm một bước đến chân trời tri thức.' },
  { theme: 'Truyền cảm hứng', text: 'Sự kiên trì và lòng dũng cảm sẽ giúp chúng ta vượt qua mọi chông gai thử thách.' },
  { theme: 'Truyền cảm hứng', text: 'Thành công không phải là đích đến, mà là cả một hành trình nỗ lực không ngừng nghỉ.' },
  { theme: 'Truyền cảm hứng', text: 'Con đường vạn dặm luôn bắt đầu từ những bước chân đầu tiên vững chắc và kiên định.' },
  { theme: 'Truyền cảm hứng', text: 'Hãy sống như những đóa hướng dương luôn tự tin vươn mình đón lấy ánh sáng mặt trời.' },
  { theme: 'Truyền cảm hứng', text: 'Khi bạn nỗ lực hết mình vì đam mê, cả thế giới sẽ mở lối cho bạn bước tới.' },
  { theme: 'Truyền cảm hứng', text: 'Đừng sợ vấp ngã, vì mỗi lần đứng dậy bạn sẽ trở nên mạnh mẽ và khôn ngoan hơn.' },
  { theme: 'Truyền cảm hứng', text: 'Tự học là ngọn đuốc sáng nhất soi đường dẫn lối trên con đường chinh phục ước mơ.' },
  { theme: 'Truyền cảm hứng', text: 'Sáng tạo không ngừng giúp con người mở ra những cánh cửa mới của tương lai tươi sáng.' },
  { theme: 'Truyền cảm hứng', text: 'Mỗi thất bại là một bài học quý giá rèn giũa ý chí và bản lĩnh kiên cường.' },

  // Đời sống, Tình cảm & Tâm hồn
  { theme: 'Đời sống', text: 'Nụ cười chân thành và lời cảm ơn luôn mang lại niềm vui sưởi ấm lòng người.' },
  { theme: 'Đời sống', text: 'Mỗi việc tốt nhỏ bạn làm hôm nay sẽ góp phần làm cho cuộc đời trở nên ấm áp hơn.' },
  { theme: 'Đời sống', text: 'Lòng biết ơn là cội nguồn của mọi niềm hạnh phúc và sự thanh thản trong tâm hồn.' },
  { theme: 'Đời sống', text: 'Sự giản dị và khiêm nhường là nét đẹp tinh tế nhất của một tâm hồn cao thượng.' },
  { theme: 'Đời sống', text: 'Biết tha thứ và bao dung giúp tâm hồn chúng ta luôn nhẹ nhàng và an vui.' },
  { theme: 'Tình bạn', text: 'Hãy luôn biết lắng nghe và chia sẻ để xây đắp nên những tình bạn chân thành, bền vững.' },
  { theme: 'Gia đình', text: 'Tình yêu thương gia đình là ngọn lửa ấm áp soi đường cho ta trên mọi nẻo đường đời.' },
  { theme: 'Tâm hồn', text: 'Âm nhạc và nghệ thuật nuôi dưỡng tâm hồn con người trở nên phong phú và bay bổng.' },

  // Thiên nhiên, Quê hương & Văn hóa
  { theme: 'Thiên nhiên', text: 'Mặt trời luôn mọc sau đêm dài, mang ánh bình minh ấm áp chan hòa khắp muôn nơi.' },
  { theme: 'Thiên nhiên', text: 'Cây xanh cho bóng mát và hoa thơm, dòng sông bồi đắp phù sa màu mỡ cho đồng ruộng.' },
  { theme: 'Thiên nhiên', text: 'Những giọt sương mai đọng trên cánh hoa sen lấp lánh rạng rỡ dưới ánh nắng sớm.' },
  { theme: 'Thiên nhiên', text: 'Đàn chim én sải cánh bay lượn giữa bầu trời xanh biếc báo hiệu một mùa xuân mới an lành.' },
  { theme: 'Thiên nhiên', text: 'Thiên nhiên là người mẹ vĩ đại nuôi dưỡng sự sống của muôn loài trên Trái Đất.' },
  { theme: 'Quê hương', text: 'Dù đi đâu về đâu, quê hương luôn là bến đỗ bình yên và ấm áp nhất trong tim mỗi người.' },
  { theme: 'Văn hóa', text: 'Giữ gìn sự trong sáng của tiếng Việt là niềm tự hào thiêng liêng của mỗi người chúng ta.' },
  { theme: 'Kỹ năng', text: 'Tập trung cao độ và gõ phím chuẩn xác là chìa khóa để rèn luyện sự thuần thục tuyệt đỉnh.' }
];

const CURATED_STORIES = [
  { theme: 'Bài học ngụ ngôn', text: 'Thỏ ỷ mình chạy nhanh nên mải mê bắt bướm hái hoa trên đường. Rùa biết mình chậm chạp nên kiên nhẫn từng bước một tiến về phía trước. Cuối cùng, sự bền bỉ đã giúp Rùa cán đích trước trong sự ngỡ ngàng của Thỏ.' },
  { theme: 'Bức tranh thiên nhiên', text: 'Mỗi buổi sớm mai khi mặt trời vừa nhô lên khỏi rặng tre, tiếng chim họa mi lại cất lên thánh thót. Cả khu vườn như bừng tỉnh sau một giấc ngủ êm đềm, muôn hoa khoe sắc đón chào ngày mới tràn ngập niềm vui.' },
  { theme: 'Bài học ngụ ngôn', text: 'Cơn bão lớn quét qua cánh đồng khiến cây sồi to lớn gãy đổ vì gồng mình chống cự. Trong khi đó, những cây sậy mềm mại khẽ uốn mình theo chiều gió nên vẫn đứng vững bình yên khi giông bão qua đi.' },
  { theme: 'Khoa học & Môi trường', text: 'Trái Đất là ngôi nhà chung tươi đẹp của muôn loài với đại dương bao la và những cánh rừng bạt ngàn. Bảo vệ môi trường và giữ gìn màu xanh của thiên nhiên là trách nhiệm thiêng liêng của mỗi chúng ta.' },
  { theme: 'Ý chí vươn lên', text: 'Không có con đường nào đạt được ước mơ mà không có thử thách. Người biết kiên trì rèn luyện, không bao giờ nản lòng trước khó khăn sẽ luôn tìm thấy chiếc chìa khóa mở ra tương lai tươi sáng.' },
  { theme: 'Bức tranh quê hương', text: 'Cánh đồng làng trải rộng một màu vàng óng ả dưới ánh nắng ban mai. Từng bông lúa trĩu hạt uốn cong như nét cười rạng rỡ của người nông dân sau chuỗi ngày lao động cần cù, vất vả.' },
  { theme: 'Bảo vệ thiên nhiên', text: 'Dưới tán lá xanh mát của rừng đại ngàn, muôn loài cùng chung sống chan hòa. Dòng suối nhỏ len qua từng khe đá, tưới mát cho những gốc cây cổ thụ và đàn hươu sao đến uống nước mỗi buổi chiều.' },
  { theme: 'Ngọn hải đăng', text: 'Sừng sững đứng trên vách đá cheo leo, ngọn hải đăng bền bỉ soi sáng dẫn lối cho những chuyến tàu vượt sóng gió trở về đất liền. Ánh sáng ấy như niềm tin kiên định không bao giờ tắt giữa biển đêm.' },
  { theme: 'Sức mạnh tình bạn', text: 'Khi cùng nhau chia sẻ khó khăn, gánh nặng sẽ vơi đi một nửa và niềm vui sẽ nhân lên gấp bội. Tình bạn chân thành và sự đoàn kết là món quà quý giá nhất trong cuộc sống.' },
  { theme: 'Khám phá vũ trụ', text: 'Bầu trời đêm lấp lánh hàng triệu vì sao bí ẩn luôn vẫy gọi trí tò mò của con người. Bằng tri thức và lòng say mê khám phá, nhân loại đã từng bước bay vào không gian và chinh phục những đỉnh cao mới.' },
  { theme: 'Bài học ngụ ngôn', text: 'Vào mùa hè rực nắng, đàn kiến cần mẫn tha từng hạt thóc về tích trữ trong tổ sâu. Chú ve sầu mải mê ca hát suốt ngày cười nhạo kiến vất vả. Khi mùa đông lạnh giá tràn về, đàn kiến ấm no trong tổ còn ve sầu đói lả nhận ra bài học sâu sắc.' },
  { theme: 'Ước mơ tuổi thơ', text: 'Cậu bé thả diều trên đồi cỏ xanh lộng gió. Cánh diều no gió bay vút lên cao giữa nền trời xanh thẳm, mang theo những ước mơ thơ ngây bay xa đến những chân trời rộng mở.' },
  { theme: 'Làng nghề truyền thống', text: 'Người thợ gốm làng Bát Tràng tỉ mỉ chuốt từng khối đất sét trên bàn xoay. Dưới bàn tay tài hoa và ngọn lửa lò nung rực hồng, những chiếc bình hoa men lam tuyệt mỹ ra đời, mang đậm linh hồn văn hóa nghìn năm.' },
  { theme: 'Sông nước Cửu Long', text: 'Dòng sông Mê Kông cuồn cuộn chảy qua chín cửa sông đổ ra biển lớn, bồi đắp nên đồng bằng sông Cửu Long trù phú. Nơi đây cây trái quanh năm ngọt lành và những câu hò trên sông nước êm đềm xao xuyến lòng người.' },
  { theme: 'Biểu tượng hoa sen', text: 'Hoa sen vươn mình lên từ bùn lầy tăm tối nhưng vẫn tỏa hương thơm thanh khiết ngát bay. Đó là biểu tượng cao đẹp cho ý chí quật cường, giữ trọn tâm hồn trong sạch giữa muôn vàn gian khó.' }
];

const CURATED_LONG_DOCUMENTS = [
  {
    theme: '📜 Hịch Tướng Sĩ · Bản Hùng Ca',
    text: 'Ta thường nghe: Kỷ Tín đem mình chết thay, cứu thoát cho Cao Đế; Do Vu chìa lưng chịu giáo, che chở cho Chiêu Vương. Từ xưa các bậc trung thần nghĩa sĩ bỏ mình vì nước, đời nào không có? Huống chi ta cùng các ngươi sinh phải thời loạn lạc, lớn lên gặp buổi gian nan.'
  },
  {
    theme: '📜 Bình Ngô Đại Cáo · Tuyên Ngôn Độc Lập',
    text: 'Việc nhân nghĩa cốt ở yên dân, quân điếu phạt trước lo trừ bạo. Như nước Đại Việt ta từ trước, vốn xưng nền văn hiến đã lâu. Núi sông bờ cõi đã chia, phong tục Bắc Nam cũng khác. Bao đời gây nền độc lập, muôn thuở vững bền giang sơn.'
  },
  {
    theme: '📜 Nam Quốc Sơn Hà · Hào Khí Đông A',
    text: 'Sông núi nước Nam vua Nam ở, rành rành định phận tại sách trời. Cớ sao lũ giặc sang xâm phạm, chúng bay sẽ bị đánh tơi bời. Độc lập tự do là quyền thiêng liêng bất khả xâm phạm của toàn thể dân tộc Việt Nam ngàn đời.'
  },
  {
    theme: '📜 Việt Nam Quê Hương Ta · Áng Thơ Bất Hủ',
    text: 'Việt Nam đất nước ta ơi, mênh mông biển lúa đâu trời đẹp hơn. Cánh cò bay lả dập dờn, mây mờ che đỉnh Trường Sơn sớm chiều. Quê hương biết mấy thân yêu, bao nhiêu đời đã chịu nhiều thương đau. Mặt người vất vả in sâu, gái trai cũng một áo nâu nhuộm bùn.'
  },
  {
    theme: '📜 Tinh Thần Dân Tộc · Lòng Yêu Nước',
    text: 'Dân ta có một lòng nồng nàn yêu nước. Đó là một truyền thống quý báu của ta. Từ xưa đến nay, mỗi khi Tổ quốc bị xâm lăng, thì tinh thần ấy lại sôi nổi, nó kết thành một làn sóng vô cùng mạnh mẽ, to lớn, nó lướt qua mọi sự nguy hiểm, khó khăn, nhấn chìm tất cả lũ bán nước và lũ cướp nước.'
  },
  {
    theme: '📜 Kỷ Nguyên Trí Tuệ · Kiến Tạo Tương Lai',
    text: 'Kỷ nguyên số mở ra một thế giới kết nối không giới hạn, nơi tri thức nhân loại được lan tỏa với tốc độ ánh sáng. Bằng sự sáng tạo bền bỉ, ý chí tự học và làm chủ công nghệ, thế hệ trẻ hôm nay đang tự tin kiến tạo tương lai, đưa đất nước vươn tầm cao mới trên trường quốc tế.'
  },
  {
    theme: '📜 Khám Phá Đại Dương · Bí Ẩn Hành Tinh',
    text: 'Đại dương bao la sâu thẳm chiếm hơn bảy mươi phần trăm bề mặt Trái Đất, chứa đựng hàng triệu loài sinh vật kỳ thú cùng những rạn san hô rực rỡ sắc màu. Nơi đây là lá phổi xanh điều hòa khí hậu toàn cầu, lưu giữ những bí ẩn vô tận đang chờ đợi con người thám hiểm và bảo vệ.'
  },
  {
    theme: '📜 Đỉnh Cao Khát Vọng · Bản Lĩnh Chiến Binh',
    text: 'Không có kho báu nào quý giá hơn tri thức, không có sức mạnh nào bền vững hơn ý chí kiên định. Người biết làm chủ bàn phím và ngôn từ sẽ nắm giữ chiếc chìa khóa mở ra cánh cửa của thế giới hiện đại, tự tin bước đi trên con đường chinh phục những đỉnh cao mơ ước.'
  },
  {
    theme: '📜 Khúc Ca Thăng Long · Dấu Ấn Ngàn Năm',
    text: 'Thăng Long nghìn năm văn vật, rồng bay lên giữa chốn đô thành rạng rỡ. Dấu ấn thời gian in hằn trên từng mái ngói cổ kính, bờ hồ Gươm liễu rủ biếc xanh và hồn thiêng sông núi trường tồn cùng dòng chảy lịch sử dân tộc.'
  },
  {
    theme: '📜 Cội Nguồn Lịch Sử · Nghĩa Đồng Bào',
    text: 'Dù ai đi ngược về xuôi, nhớ ngày Giỗ Tổ mùng mười tháng ba. Khắp phương trời cùng chung một cội, con Lạc cháu Hồng muôn thuở sắt son. Uống nước nhớ nguồn, ngàn năm giữ gìn non sông bờ cõi rạng danh muôn đời.'
  }
];

function pick(a) { return a[Math.floor(Math.random() * a.length)]; }

function normalizePromptText(text) {
  if (!text) return '';
  return text
    .replace(/[\u201C\u201D\u201E\u00AB\u00BB]/g, '"')
    .replace(/[\u2018\u2019\u201A\u201B\u02BC]/g, "'")
    .replace(/[\u2013\u2014\u2015]/g, '-')
    .replace(/\u2026/g, '...')
    .replace(/[\r\t]+/g, ' ')
    .replace(/[ ]{2,}/g, ' ')
    .trim();
}

function promptForRound(round) {
  let text = '', themeName = 'Luyện tập';

  if (round <= 1) {
    // Vòng 1: Từ đơn / từ ghép 2 từ quen thuộc
    const w = pick(CURATED_WORDS);
    themeName = 'Từ vựng tiếng Việt';
    text = w;
  } else if (round <= 3) {
    // Vòng 2-3: Từ vựng & Thành ngữ, ca dao tục ngữ ngắn
    if (Math.random() < 0.65) {
      const item = pick(CURATED_PROVERBS);
      themeName = item.theme;
      text = item.text;
    } else {
      themeName = 'Từ vựng tiếng Việt';
      text = pick(CURATED_WORDS);
    }
  } else if (round <= 5) {
    // Vòng 4-5: Ca dao tục ngữ & Câu danh ngôn sống đẹp
    if (Math.random() < 0.5) {
      const item = pick(CURATED_PROVERBS);
      themeName = item.theme;
      text = item.text;
    } else {
      const item = pick(CURATED_INSPIRING_SENTENCES);
      themeName = item.theme;
      text = item.text;
    }
  } else if (round <= 7) {
    // Vòng 6-7: Đoạn văn ngụ ngôn & Khám phá thiên nhiên
    const story = pick(CURATED_STORIES);
    themeName = story.theme;
    text = story.text;
  } else {
    // Vòng 8+ (Level cuối & Thử thách đỉnh cao): VĂN BẢN DÀI TOÀN DIỆN (Teleprompter Flow)
    const doc = pick(CURATED_LONG_DOCUMENTS);
    themeName = doc.theme;
    text = doc.text;
  }

  G.promptTheme = themeName;
  return normalizePromptText(text);
}

// ---------- VIETNAMESE TYPING ENGINE ----------
const TONE_MARKS = { '\u0301': 'acute', '\u0300': 'grave', '\u0309': 'hook', '\u0303': 'tilde', '\u0323': 'dot' };
const TELEX_TONE = { acute: 's', grave: 'f', hook: 'r', tilde: 'x', dot: 'j' };
const VNI_TONE = { acute: '1', grave: '2', hook: '3', tilde: '4', dot: '5' };

function isLetter(ch) { return /^[A-Za-zÀ-ỹĐđ]$/u.test(ch); }

function charInfo(ch) {
  const low = ch.toLocaleLowerCase('vi-VN');
  if (low === 'đ') return { base: 'd', shape: 'stroke', tone: null };
  const n = low.normalize('NFD'), base = n[0], marks = [...n.slice(1)], toneMark = marks.find(m => TONE_MARKS[m]), tone = toneMark ? TONE_MARKS[toneMark] : null;
  let shape = null;
  if (marks.includes('\u0302')) shape = 'circ';
  else if (marks.includes('\u0306')) shape = 'breve';
  else if (marks.includes('\u031b')) shape = 'horn';
  return { base, shape, tone };
}

function shapeKeys(info, mode) {
  if (mode === 'vni') {
    if (info.shape === 'stroke') return 'd9';
    if (info.shape === 'circ') return info.base + '6';
    if (info.shape === 'breve') return info.base + '8';
    if (info.shape === 'horn') return info.base + '7';
    return info.base;
  }
  if (info.shape === 'stroke') return 'dd';
  if (info.shape === 'circ') return info.base + info.base;
  if (info.shape === 'breve') return info.base + 'w';
  if (info.shape === 'horn') return info.base + 'w';
  return info.base;
}

function addSteps(model, keys, charIndex) {
  for (const k of [...keys]) {
    const si = model.target.length;
    model.target += k;
    model.stepMap.push(charIndex);
    model.toneTargets.push(null);
    model.toneNames.push(null);
    if (model.charStart[charIndex] < 0) model.charStart[charIndex] = si;
    model.charEnd[charIndex] = si;
  }
}

function addToneStep(model, toneKey, wordLastCharIndex, toneCharIndex, tName) {
  const si = model.target.length;
  model.target += toneKey;
  model.stepMap.push(wordLastCharIndex);
  model.toneTargets.push(toneCharIndex);
  model.toneNames.push(tName);
  model.charEnd[wordLastCharIndex] = si;
}

function isUpperCaseLetter(ch) {
  return isLetter(ch) && ch === ch.toLocaleUpperCase('vi-VN') && ch !== ch.toLocaleLowerCase('vi-VN');
}

function buildTypingModel(text, mode = cfg.typingMode) {
  const clean = normalizePromptText(text);
  const chars = [...clean];
  if (G && G.requireEnter && chars[chars.length - 1] !== '\n') {
    chars.push('\n');
  }
  const model = {
    chars,
    target: '',
    stepMap: [],
    toneTargets: [],
    toneNames: [],
    charStart: Array(chars.length).fill(-1),
    charEnd: Array(chars.length).fill(-1)
  };
  let i = 0;
  while (i < chars.length) {
    if (isLetter(chars[i])) {
      const word = [];
      while (i < chars.length && isLetter(chars[i])) {
        word.push(i);
        i++;
      }
      let tone = null, toneChar = -1;
      for (const ci of word) {
        const info = charInfo(chars[ci]);
        let keys = shapeKeys(info, mode);
        if (isUpperCaseLetter(chars[ci])) {
          keys = keys.charAt(0).toUpperCase() + keys.slice(1);
        }
        addSteps(model, keys, ci);
        if (info.tone) {
          tone = info.tone;
          toneChar = ci;
        }
      }
      if (tone && toneChar >= 0) {
        const toneKey = (mode === 'vni' ? VNI_TONE : TELEX_TONE)[tone];
        const lastCharIndex = word[word.length - 1];
        addToneStep(model, toneKey, lastCharIndex, toneChar, toneName(tone));
      }
    } else {
      const ch = chars[i];
      const k = (ch === '\n') ? '\n' : (ch === '\t' ? ' ' : ch);
      const si = model.target.length;
      model.target += k;
      model.stepMap.push(i);
      model.toneTargets.push(null);
      model.toneNames.push(null);
      if (model.charStart[i] < 0) model.charStart[i] = si;
      model.charEnd[i] = si;
      i++;
    }
  }
  return model;
}

function buildDirectModel(text) {
  const clean = normalizePromptText(text);
  const chars = [...clean];
  if (G && G.requireEnter && chars[chars.length - 1] !== '\n') {
    chars.push('\n');
  }
  const model = {
    chars,
    target: chars.join(''),
    stepMap: [],
    toneTargets: Array(chars.length).fill(null),
    toneNames: Array(chars.length).fill(null),
    charStart: Array(chars.length).fill(-1),
    charEnd: Array(chars.length).fill(-1)
  };
  chars.forEach((ch, i) => {
    model.stepMap.push(i);
    model.charStart[i] = i;
    model.charEnd[i] = i;
  });
  return model;
}

function stripToneKeepingShape(ch) {
  if (!isLetter(ch)) return ch;
  const toneMarks = new Set(Object.keys(TONE_MARKS));
  return ch.normalize('NFD').split('').filter(c => !toneMarks.has(c)).join('').normalize('NFC');
}

function baseCharForPreview(ch) {
  if (!isLetter(ch)) return ch;
  const info = charInfo(ch);
  let b = info.base;
  if (ch === ch.toLocaleUpperCase('vi-VN')) b = b.toLocaleUpperCase('vi-VN');
  return b;
}

function internalCompositionPreview() {
  if (!G.model || !cfg.internalIme) return '';
  const chars = G.model.chars, out = [];
  for (let ci = 0; ci < chars.length; ci++) {
    const ch = chars[ci], steps = [];
    for (let si = 0; si < G.model.stepMap.length; si++) {
      if (G.model.stepMap[si] === ci) steps.push(si);
    }
    const typed = steps.filter(si => si < G.index).length;
    if (!typed) continue;
    if (!isLetter(ch)) { out.push(ch); continue; }
    const info = charInfo(ch), shapeLen = [...shapeKeys(info, cfg.typingMode)].length;
    if (typed >= steps.length) out.push(ch);
    else if (typed >= shapeLen) out.push(stripToneKeepingShape(ch));
    else out.push(baseCharForPreview(ch));
  }
  return out.join('');
}

function updateCompositionPreview(externalValue = null) {
  const box = $('.composition-hint'), engine = $('#inputEngineHud'), preview = $('#compositionPreview');
  if (!box || !engine || !preview) return;
  if (cfg.internalIme) {
    box.classList.remove('external');
    engine.textContent = 'BỘ GÕ TÍCH HỢP';
    preview.textContent = (internalCompositionPreview() || '') + '▌';
  } else {
    box.classList.add('external');
    engine.textContent = 'BỘ GÕ NGOÀI';
    preview.textContent = (externalValue !== null ? externalValue : (G.externalValue || '')) + '▌';
  }
}

function charCompatible(input, target) {
  if (input === target) return true;
  if (!isLetter(input) || !isLetter(target)) return false;
  const a = charInfo(input), b = charInfo(target);
  if (a.base !== b.base) return false;
  if (b.shape === 'stroke') return a.shape === null || a.shape === 'stroke';
  if (a.shape && a.shape !== b.shape) return false;
  if (!b.shape && a.shape) return false;
  if (a.tone && a.tone !== b.tone) return false;
  if (!b.tone && a.tone) return false;
  return true;
}

function compatiblePrefix(value, target) {
  const a = [...value.normalize('NFC')], b = [...target.normalize('NFC')];
  if (a.length > b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (!charCompatible(a[i], b[i])) return false;
  }
  return true;
}

function exactPrefixLength(value, target) {
  const a = [...value.normalize('NFC')], b = [...target.normalize('NFC')];
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  return i;
}

function isToneStep(step = G.index) {
  if (!cfg.internalIme || !G.model || step < 0 || step >= G.model.target.length) return false;
  return !!(G.model.toneTargets && G.model.toneTargets[step] != null);
}

function getToneStepInfo(step = G.index) {
  if (!isToneStep(step)) return null;
  const toneChar = G.model.toneTargets[step];
  const tName = (G.model.toneNames && G.model.toneNames[step]) || 'DẤU';
  const targetChar = G.model.chars[toneChar];
  const key = G.model.target[step];
  return { toneChar, toneName: tName, targetChar, key };
}

function toneName(t) {
  return { acute: 'SẮC', grave: 'HUYỀN', hook: 'HỎI', tilde: 'NGÃ', dot: 'NẶNG' }[t] || 'DẤU';
}

function displayState(i) {
  if (!G.model || !G.model.stepMap) return 'pending';
  const current = G.model.stepMap[G.index];
  if (current == null || current < 0) return 'pending';

  if (isToneStep(G.index)) {
    const toneChar = G.model.toneTargets[G.index];
    if (i === toneChar) return 'current tone-target';
    if (i < current) return 'done';
    if (i === current) return 'done';
    return 'pending';
  }

  if (i < current) return 'done';
  if (i === current) return 'current';
  return 'pending';
}

// ---------- UPGRADES & BALANCE (ROGUELIKE PERK POOL) ----------
const MAX_UPGRADE_STACKS = 15;
const RARITY_LABELS = {
  common: 'THƯỜNG',
  rare: 'HIẾM',
  epic: 'SỬ THI',
  legendary: 'HUYỀN THOẠI'
};

const UPGRADES = [
  // --- COMMON (THƯỜNG - 30 THẺ) ---
  { id: 'd_atk1', icon: '⚔️', title: 'Kiếm Thuật +6,0%', desc: 'Tăng +6,0% sát thương từ đòn gõ. Tối đa 15 cộng dồn.', type: 'damage', value: 0.060, rarity: 'common' },
  { id: 'd_atk1_b', icon: '🏹', title: 'Mũi Tên Gió +5,0%', desc: 'Tăng +5,0% sát thương từ đòn gõ. Tối đa 15 cộng dồn.', type: 'damage', value: 0.050, rarity: 'common' },
  { id: 'd_atk1_c', icon: '🗡️', title: 'Đoản Đao Sơ Cấp +5,5%', desc: 'Tăng +5,5% sát thương từ đòn gõ. Tối đa 15 cộng dồn.', type: 'damage', value: 0.055, rarity: 'common' },
  { id: 'd_atk1_d', icon: '🔥', title: 'Hỏa Hồn Tinh Thể +6,5%', desc: 'Tăng +6,5% sát thương từ đòn gõ. Tối đa 15 cộng dồn.', type: 'damage', value: 0.065, rarity: 'common' },
  { id: 'd_atk1_e', icon: '👊', title: 'Cương Quyền Sơ Khai +7,0%', desc: 'Tăng +7,0% sát thương từ đòn gõ. Tối đa 15 cộng dồn.', type: 'damage', value: 0.070, rarity: 'common' },
  { id: 'd_atk1_f', icon: '❄️', title: 'Đao Khí Vỡ Băng +5,8%', desc: 'Tăng +5,8% sát thương từ đòn gõ. Tối đa 15 cộng dồn.', type: 'damage', value: 0.058, rarity: 'common' },

  { id: 'h_heart1', icon: '🛡️', title: 'Kim Thân +80 HP', desc: 'Tăng vĩnh viễn +80 HP tối đa và hồi ngay 80 HP. Tối đa 15 cộng dồn.', type: 'maxHp', value: 80, rarity: 'common' },
  { id: 'h_heart1_b', icon: '💎', title: 'Ngọc Sinh Mệnh +70 HP', desc: 'Tăng vĩnh viễn +70 HP tối đa và hồi ngay 70 HP. Tối đa 15 cộng dồn.', type: 'maxHp', value: 70, rarity: 'common' },
  { id: 'h_heart1_c', icon: '🌲', title: 'Cổ Mộc Trường Tồn +90 HP', desc: 'Tăng vĩnh viễn +90 HP tối đa và hồi ngay 90 HP. Tối đa 15 cộng dồn.', type: 'maxHp', value: 90, rarity: 'common' },
  { id: 'h_heart1_d', icon: '📜', title: 'Bình An Phù +60 HP', desc: 'Tăng vĩnh viễn +60 HP tối đa và hồi ngay 60 HP. Tối đa 15 cộng dồn.', type: 'maxHp', value: 60, rarity: 'common' },
  { id: 'h_heart1_e', icon: '🌿', title: 'Thảo Dược Trường Sinh +75 HP', desc: 'Tăng vĩnh viễn +75 HP tối đa và hồi ngay 75 HP. Tối đa 15 cộng dồn.', type: 'maxHp', value: 75, rarity: 'common' },
  { id: 'h_heart1_f', icon: '🛡️', title: 'Hộ Thân Thạch +85 HP', desc: 'Tăng vĩnh viễn +85 HP tối đa và hồi ngay 85 HP. Tối đa 15 cộng dồn.', type: 'maxHp', value: 85, rarity: 'common' },

  { id: 'def_armor1', icon: '🛡️', title: 'Giáp Hộ Mệnh -6%', desc: 'Giảm 6% sát thương nhận vào từ Boss. Tối đa 15 cộng dồn.', type: 'defense', value: 0.06, rarity: 'common' },
  { id: 'def_armor1_b', icon: '🪵', title: 'Khiên Gỗ Bạch Dương -5%', desc: 'Giảm 5% sát thương nhận vào từ Boss. Tối đa 15 cộng dồn.', type: 'defense', value: 0.05, rarity: 'common' },
  { id: 'def_armor1_c', icon: '🥋', title: 'Áo Giáp Da Rừng -5,5%', desc: 'Giảm 5,5% sát thương nhận vào từ Boss. Tối đa 15 cộng dồn.', type: 'defense', value: 0.055, rarity: 'common' },
  { id: 'def_armor1_d', icon: '🕸️', title: 'Lưới Tinh Thể -6,5%', desc: 'Giảm 6,5% sát thương nhận vào từ Boss. Tối đa 15 cộng dồn.', type: 'defense', value: 0.065, rarity: 'common' },
  { id: 'def_armor1_e', icon: '❄️', title: 'Giáp Băng Sơ Cấp -7%', desc: 'Giảm 7% sát thương nhận vào từ Boss. Tối đa 15 cộng dồn.', type: 'defense', value: 0.07, rarity: 'common' },
  { id: 'def_armor1_f', icon: '⚙️', title: 'Tấm Chắn Thép Non -6%', desc: 'Giảm 6% sát thương nhận vào từ Boss. Tối đa 15 cộng dồn.', type: 'defense', value: 0.06, rarity: 'common' },

  { id: 'cd_time1', icon: '⏳', title: 'Tập Trung Cao Độ -8%', desc: 'Giảm 8% thời gian hồi chiêu tất cả kỹ năng (F1, F2, F3). Tối đa 15 cộng dồn.', type: 'cooldown', value: 0.08, rarity: 'common' },
  { id: 'cd_time1_b', icon: '🍃', title: 'Gió Lướt Nhẹ -7%', desc: 'Giảm 7% thời gian hồi chiêu tất cả kỹ năng (F1, F2, F3). Tối đa 15 cộng dồn.', type: 'cooldown', value: 0.07, rarity: 'common' },
  { id: 'cd_time1_c', icon: '🧘', title: 'Tâm Trí Tĩnh Lặng -6%', desc: 'Giảm 6% thời gian hồi chiêu tất cả kỹ năng (F1, F2, F3). Tối đa 15 cộng dồn.', type: 'cooldown', value: 0.06, rarity: 'common' },
  { id: 'cd_time1_d', icon: '⚡', title: 'Phản Xạ Nhanh -8,5%', desc: 'Giảm 8,5% thời gian hồi chiêu tất cả kỹ năng (F1, F2, F3). Tối đa 15 cộng dồn.', type: 'cooldown', value: 0.085, rarity: 'common' },
  { id: 'cd_time1_e', icon: '🎐', title: 'Nhịp Thở Thanh Thoát -7,5%', desc: 'Giảm 7,5% thời gian hồi chiêu tất cả kỹ năng (F1, F2, F3). Tối đa 15 cộng dồn.', type: 'cooldown', value: 0.075, rarity: 'common' },

  { id: 'sc_score0', icon: '✨', title: 'Khích Lệ +15% Điểm', desc: 'Tăng +15% điểm thưởng tích lũy mỗi từ. Tối đa 15 cộng dồn.', type: 'score', value: 0.15, rarity: 'common' },
  { id: 'sc_score0_b', icon: '🎯', title: 'Hưng Phấn Gõ Phím +12%', desc: 'Tăng +12% điểm thưởng tích lũy mỗi từ. Tối đa 15 cộng dồn.', type: 'score', value: 0.12, rarity: 'common' },
  { id: 'sc_score0_c', icon: '🌟', title: 'Hào Khí Chiến Trường +18%', desc: 'Tăng +18% điểm thưởng tích lũy mỗi từ. Tối đa 15 cộng dồn.', type: 'score', value: 0.18, rarity: 'common' },

  { id: 'heal_pot1', icon: '🌿', title: 'Thần Dược Cấp Tốc +35%', desc: 'Hồi ngay 35% lượng máu tối đa.', type: 'heal', value: 0.35, rarity: 'common' },
  { id: 'heal_pot1_b', icon: '🧪', title: 'Bình Tiên Đan Nhỏ +30%', desc: 'Hồi ngay 30% lượng máu tối đa.', type: 'heal', value: 0.30, rarity: 'common' },
  { id: 'heal_pot1_c', icon: '💧', title: 'Suối Nguồn Thanh Tẩy +40%', desc: 'Hồi ngay 40% lượng máu tối đa.', type: 'heal', value: 0.40, rarity: 'common' },
  { id: 'heal_pot1_d', icon: '🍵', title: 'Trà Thảo Mộc Phục Hồi +25%', desc: 'Hồi ngay 25% lượng máu tối đa.', type: 'heal', value: 0.25, rarity: 'common' },

  // --- RARE (HIẾM - 7 THẺ) ---
  { id: 'd_atk2', icon: '🗡️', title: 'Trảm Kích +10,0%', desc: 'Tăng +10,0% sát thương bộc phá. Tối đa 15 cộng dồn.', type: 'damage', value: 0.100, rarity: 'rare' },
  { id: 'c_crit1', icon: '💥', title: 'Bạo Kích +20%', desc: 'Tăng +20% sát thương khi nổ đòn chí mạng. Tối đa 15 cộng dồn.', type: 'critDmg', value: 0.20, rarity: 'rare' },
  { id: 'l_leech1', icon: '🩸', title: 'Huyết Hồn +6,0%', desc: 'Hồi HP bằng 6,0% sát thương gây ra. Tối đa 15 cộng dồn.', type: 'lifesteal', value: 0.060, rarity: 'rare' },
  { id: 'def_armor2', icon: '✨', title: 'Khiên Ma Thuật -10%', desc: 'Giảm 10% sát thương nhận vào từ Boss. Tối đa 15 cộng dồn.', type: 'defense', value: 0.10, rarity: 'rare' },
  { id: 'cd_time2', icon: '🌀', title: 'Gió Lốc Thời Gian -14%', desc: 'Giảm 14% thời gian hồi chiêu tất cả kỹ năng (F1, F2, F3). Tối đa 15 cộng dồn.', type: 'cooldown', value: 0.14, rarity: 'rare' },
  { id: 'sc_score1', icon: '🏆', title: 'Vinh Quang Đấu Sĩ +25%', desc: 'Tăng +25% điểm thưởng tích lũy mỗi từ. Tối đa 15 cộng dồn.', type: 'score', value: 0.25, rarity: 'rare' },
  { id: 'heal_pot2', icon: '✨', title: 'Thánh Thủy Phục Sinh +60%', desc: 'Hồi ngay 60% lượng máu tối đa.', type: 'heal', value: 0.60, rarity: 'rare' },

  // --- EPIC (SỬ THI / SIÊU HIẾM - 6 THẺ) ---
  { id: 'd_atk3', icon: '🔥', title: 'Cuồng Nộ +15,0%', desc: 'Tăng +15,0% sát thương đòn đánh. Tối đa 15 cộng dồn.', type: 'damage', value: 0.150, rarity: 'epic' },
  { id: 'c_crit2', icon: '⚡', title: 'Lôi Đình Kích +35%', desc: 'Tăng +35% sát thương khi nổ đòn chí mạng. Tối đa 15 cộng dồn.', type: 'critDmg', value: 0.35, rarity: 'epic' },
  { id: 'l_leech2', icon: '🧛', title: 'Huyết Ma +10,0%', desc: 'Hồi HP bằng 10,0% sát thương gây ra. Tối đa 15 cộng dồn.', type: 'lifesteal', value: 0.100, rarity: 'epic' },
  { id: 'h_heart2', icon: '💖', title: 'Trái Tim Khổng Lồ +150 HP', desc: 'Tăng vĩnh viễn +150 HP tối đa và hồi ngay 150 HP. Tối đa 15 cộng dồn.', type: 'maxHp', value: 150, rarity: 'epic' },
  { id: 'def_armor3', icon: '🛡️', title: 'Kim Cang Bất Hoại -15%', desc: 'Giảm 15% sát thương nhận vào từ Boss. Tối đa 15 cộng dồn.', type: 'defense', value: 0.15, rarity: 'epic' },
  { id: 'heal_pot3', icon: '💖', title: 'Hồi Đầy Máu 100%', desc: 'Hồi phục ngay lập tức toàn bộ 100% HP.', type: 'heal', value: 1.00, rarity: 'epic' },

  // --- LEGENDARY (HUYỀN THOẠI - 5 THẺ) ---
  { id: 'l_leech3', icon: '🩸', title: 'Huyết Khí Thần Thoại +16,0%', desc: 'Hồi HP bằng 16,0% sát thương gây ra. Hút máu cực hạn.', type: 'lifesteal', value: 0.160, rarity: 'legendary' },
  { id: 'd_atk4', icon: '👑', title: 'Bá Vương Trảm +22,0%', desc: 'Sức mạnh tối thượng tăng +22,0% toàn bộ sát thương.', type: 'damage', value: 0.220, rarity: 'legendary' },
  { id: 'c_crit3', icon: '⚡', title: 'Thiên Kiếp Bạo Kích +50%', desc: 'Sát thương chí mạng bùng nổ tăng thêm +50%.', type: 'critDmg', value: 0.500, rarity: 'legendary' },
  { id: 'h_heart3', icon: '💎', title: 'Bất Diệt Kim Thân +250 HP', desc: 'Tăng vĩnh viễn +250 HP tối đa và hồi ngay 250 HP.', type: 'maxHp', value: 250, rarity: 'legendary' },
  { id: 'cd_time3', icon: '🌌', title: 'Thời Không Thần Trụ -20%', desc: 'Giảm 20% thời gian hồi chiêu tất cả kỹ năng (F1, F2, F3).', type: 'cooldown', value: 0.200, rarity: 'legendary' }
];

function upgradeAvailable(u) {
  const g = G.upgrades || {};
  if (u.type === 'damage' && (g.damageStacks || 0) >= MAX_UPGRADE_STACKS) return false;
  if (u.type === 'critDmg' && (g.critStacks || 0) >= MAX_UPGRADE_STACKS) return false;
  if (u.type === 'lifesteal' && (g.lifestealStacks || 0) >= MAX_UPGRADE_STACKS) return false;
  if (u.type === 'maxHp' && (g.hpStacks || 0) >= MAX_UPGRADE_STACKS) return false;
  if (u.type === 'defense' && (g.defStacks || 0) >= MAX_UPGRADE_STACKS) return false;
  if (u.type === 'cooldown' && (g.cdStacks || 0) >= MAX_UPGRADE_STACKS) return false;
  if (u.type === 'score' && (g.scoreStacks || 0) >= MAX_UPGRADE_STACKS) return false;
  return true;
}

function chooseUpgrades() {
  const available = UPGRADES.filter(upgradeAvailable);
  // Weight roll algorithm: Common (0.60), Rare (0.24), Epic (0.11), Legendary (0.05 + roundBonus)
  const roundBonus = Math.min(0.06, (G.round || 1) * 0.006);
  const shuffled = [...available].sort((a, b) => {
    const rWeight = (r) => {
      if (r === 'legendary') return 0.04 + roundBonus;
      if (r === 'epic') return 0.11 + roundBonus * 0.5;
      if (r === 'rare') return 0.25;
      return 0.60; // Common
    };
    const wA = rWeight(a.rarity) * Math.random();
    const wB = rWeight(b.rarity) * Math.random();
    return wB - wA;
  });

  const picks = [];
  const pickedTypes = new Set();

  for (const u of shuffled) {
    if (picks.length >= 3) break;
    if (!pickedTypes.has(u.type)) {
      picks.push(u);
      pickedTypes.add(u.type);
    }
  }

  if (picks.length < 3) {
    for (const u of shuffled) {
      if (picks.length >= 3) break;
      if (!picks.some(p => p.id === u.id)) {
        picks.push(u);
      }
    }
  }

  return picks;
}

const RARITY_ICONS = {
  common: '⚔️',
  rare: '💎',
  epic: '🔮',
  legendary: '👑'
};

function getStackInfo(u) {
  const g = G.upgrades || {};
  if (u.type === 'damage') return `Cộng dồn ${g.damageStacks || 0}/${MAX_UPGRADE_STACKS}`;
  if (u.type === 'critDmg') return `Cộng dồn ${g.critStacks || 0}/${MAX_UPGRADE_STACKS}`;
  if (u.type === 'lifesteal') return `Cộng dồn ${g.lifestealStacks || 0}/${MAX_UPGRADE_STACKS}`;
  if (u.type === 'maxHp') return `Cộng dồn ${g.hpStacks || 0}/${MAX_UPGRADE_STACKS}`;
  if (u.type === 'defense') return `Cộng dồn ${g.defStacks || 0}/${MAX_UPGRADE_STACKS}`;
  if (u.type === 'cooldown') return `Cộng dồn ${g.cdStacks || 0}/${MAX_UPGRADE_STACKS}`;
  if (u.type === 'score') return `Cộng dồn ${g.scoreStacks || 0}/${MAX_UPGRADE_STACKS}`;
  return 'Hiệu ứng tức thì';
}

function showUpgradeModal() {
  const picks = chooseUpgrades(), box = $('#upgradeChoices');
  const g = G.upgrades || {};

  box.innerHTML = picks.map(u => `
    <button class="upgrade-choice rarity-${u.rarity}" data-upgrade="${u.id}">
      <div class="u-rarity-tag ${u.rarity}">${RARITY_ICONS[u.rarity] || ''} ${RARITY_LABELS[u.rarity] || 'THƯỜNG'}</div>
      <div class="u-icon">${u.icon}</div>
      <b>${u.title}</b>
      <p>${u.desc}</p>
      <small>${getStackInfo(u)}</small>
    </button>
  `).join('');

  const stats = [];
  if (g.damageBonus) stats.push(`DMG +${(g.damageBonus * 100).toFixed(1)}%`);
  if (g.critDamageBonus) stats.push(`Crit +${(g.critDamageBonus * 100).toFixed(1)}%`);
  if (g.lifesteal) stats.push(`Hút máu ${(g.lifesteal * 100).toFixed(1)}%`);
  if (g.maxHpBonus) stats.push(`HP +${g.maxHpBonus}`);
  if (g.damageReduction) stats.push(`Giáp -${(g.damageReduction * 100).toFixed(1)}%`);
  if (g.cooldownReduction) stats.push(`Hồi chiêu -${(g.cooldownReduction * 100).toFixed(1)}%`);
  if (g.scoreBonus) stats.push(`Điểm +${(g.scoreBonus * 100).toFixed(1)}%`);

  $('#upgradeStats').textContent = `Chiến binh: ${stats.length ? stats.join(' · ') : 'Chưa có cộng dồn'} · HP ${Math.round(G.playerHp)}/${Math.round(G.maxHp)}`;
  box.querySelectorAll('[data-upgrade]').forEach(b => b.onclick = () => selectUpgrade(b.dataset.upgrade));
  $('#upgradeModal').classList.add('show');
}

// ---------- RICH CARD HOVER TOOLTIPS ----------
function getCardTooltipHtml(u) {
  if (!u) return '';
  const rarityLabel = RARITY_LABELS[u.rarity] || 'THƯỜNG';
  const icon = u.icon || '⚔️';

  let mechanic = '', example = '', tactic = '';

  if (u.type === 'cooldown') {
    const pct = Math.round(u.value * 100);
    mechanic = `Giảm <b>${pct}%</b> thời gian hồi chiêu của cả 3 kỹ năng chủ động (<b>F1</b> Sát thương, <b>F2</b> Choáng/Làm chậm Boss, <b>F3</b> Giáp/Né đòn).`;
    example = `Kỹ năng hồi 10 giây ➔ sau khi nhận thẻ chỉ còn <span class="ct-highlight">${(10 * (1 - u.value)).toFixed(1)} giây</span>.`;
    tactic = `Giúp xả tuyệt chiêu và ngắt đòn đánh của Boss liên tục, cực kỳ hữu ích khi đấu Boss cấp cao & Trùm Cuối.`;
  } else if (u.type === 'score') {
    const pct = Math.round(u.value * 100);
    mechanic = `Tăng <b>+${pct}%</b> tổng điểm thưởng nhận được sau mỗi từ gõ đúng theo công thức: <i>Điểm = (Độ dài × WPM × Combo) × Hệ số thẻ</i>.`;
    example = `Gõ 1 từ chuẩn nhận 100 điểm ➔ có thẻ nhận ngay <span class="ct-highlight">${100 + pct} điểm</span>.`;
    tactic = `Thẻ chuyên dụng giúp bứt phá điểm số kỷ lục để leo Top Bảng Xếp Hạng (Leaderboard).`;
  } else if (u.type === 'damage') {
    const pct = (u.value * 100).toFixed(1);
    mechanic = `Tăng trực tiếp <b>+${pct}%</b> sát thương cho tất cả các đòn gõ phím hoàn thành từ.`;
    example = `Đòn đánh thường gây 100 sát thương ➔ tăng thành <span class="ct-highlight">${(100 * (1 + u.value)).toFixed(0)} sát thương</span>.`;
    tactic = `Tăng tốc độ bào máu Boss, hạ gục kẻ địch trước khi chúng kịp tung ra đòn phản công.`;
  } else if (u.type === 'critDmg') {
    const pct = Math.round(u.value * 100);
    mechanic = `Tăng <b>+${pct}%</b> sát thương khi kích hoạt đòn đánh Bạo Kích (Chí Mạng - Critical Strike).`;
    example = `Đòn bạo kích gây 200 sát thương ➔ bùng nổ thành <span class="ct-highlight">${Math.round(200 * (1 + u.value * 0.8))} sát thương</span>.`;
    tactic = `Sức mạnh kết hợp siêu khủng khi đi kèm chiêu F1 hoặc chuỗi gõ nhanh Combo liên tục.`;
  } else if (u.type === 'lifesteal') {
    const pct = (u.value * 100).toFixed(1);
    mechanic = `Hút máu: Hồi lại lượng máu bằng <b>${pct}%</b> sát thương thực tế gây ra lên Boss.`;
    example = `Gõ xong 1 từ gây 300 sát thương ➔ hồi ngay <span class="ct-highlight">+${Math.round(300 * u.value)} HP</span> vào thanh máu.`;
    tactic = `Giữ cho thanh máu luôn dồi dào, tự động hồi phục liên tục mà không lo bị Boss cấu rỉa đến chết.`;
  } else if (u.type === 'maxHp') {
    mechanic = `Mở rộng vĩnh viễn giới hạn thanh máu tối đa thêm <b>+${u.value} HP</b> và hồi ngay <b>+${u.value} HP</b>.`;
    example = `Máu tối đa 480 HP ➔ tăng vọt lên <span class="ct-highlight">${480 + u.value} HP</span>.`;
    tactic = `Chống sốc sát thương từ các đòn nộ của Boss vòng cao, mở rộng ngưỡng an toàn cho người chơi.`;
  } else if (u.type === 'defense') {
    const pct = Math.round(u.value * 100);
    mechanic = `Giáp hộ mệnh: Giảm trực tiếp <b>${pct}%</b> lượng sát thương nhận vào từ các đòn đánh của Boss.`;
    example = `Boss tung đòn đánh 100 sát thương ➔ bạn chỉ nhận <span class="ct-highlight">${100 - pct} sát thương</span>.`;
    tactic = `Tăng khả năng chống chịu bền bỉ trước các Boss cuồng nộ và đòn đánh diện rộng.`;
  } else if (u.type === 'heal') {
    const pct = Math.round(u.value * 100);
    mechanic = `Bình dược thần tốc: Hồi phục ngay lập tức <b>${pct}%</b> lượng máu tối đa hiện tại.`;
    example = `Đang trong tình trạng cạn máu nguy kịch ➔ hồi ngay <span class="ct-highlight">+${pct}% HP</span>.`;
    tactic = `Cứu mạng khẩn cấp ngay lập tức khi chuẩn bị bước vào các trận chiến cam go.`;
  }

  return `
    <div class="ct-header">
      <div class="ct-icon">${icon}</div>
      <div class="ct-title-group">
        <span class="ct-badge ${u.rarity}">${RARITY_ICONS[u.rarity] || ''} ${rarityLabel}</span>
        <div class="ct-name">${u.title}</div>
      </div>
    </div>
    <div class="ct-block">
      <div class="ct-label">⚙️ Cơ chế hoạt động:</div>
      <p class="ct-desc">${mechanic}</p>
    </div>
    <div class="ct-block">
      <div class="ct-label">💡 Ví dụ thực tế:</div>
      <p class="ct-desc">${example}</p>
    </div>
    <div class="ct-block">
      <div class="ct-label">⚔️ Lợi ích chiến thuật:</div>
      <p class="ct-desc">${tactic}</p>
    </div>
  `;
}

let tooltipEl = null;
function initCardTooltipEvents() {
  tooltipEl = $('#cardHoverTooltip');
  if (!tooltipEl) return;

  function showTooltipForCard(cardEl, cardId) {
    const u = UPGRADES.find(x => x.id === cardId);
    if (!u) return;

    tooltipEl.className = `card-hover-tooltip glass rarity-${u.rarity} show`;
    tooltipEl.innerHTML = getCardTooltipHtml(u);
    positionTooltip(cardEl);
  }

  function positionTooltip(cardEl) {
    if (!tooltipEl || !cardEl) return;
    const cr = cardEl.getBoundingClientRect();
    const tr = tooltipEl.getBoundingClientRect();
    const tw = tr.width || 320, th = tr.height || 220;

    let left = cr.left + cr.width * 0.5 - tw * 0.5;
    let top = cr.top - th - 12; // Above card

    // If overflowing top, place below card
    if (top < 10) {
      top = cr.bottom + 12;
    }
    // Clamp horizontally within viewport
    if (left < 10) left = 10;
    if (left + tw > window.innerWidth - 10) {
      left = window.innerWidth - tw - 10;
    }

    tooltipEl.style.left = `${Math.round(left)}px`;
    tooltipEl.style.top = `${Math.round(top)}px`;
  }

  function hideTooltip() {
    if (tooltipEl) {
      tooltipEl.classList.remove('show');
    }
  }

  // Delegate mouseover and mouseout on document for all .upgrade-choice elements
  document.addEventListener('mouseover', (e) => {
    const choice = e.target.closest('.upgrade-choice');
    if (choice) {
      const cardId = choice.dataset.upgrade || choice.dataset.previewCard;
      if (cardId) showTooltipForCard(choice, cardId);
    }
  }, { passive: true });

  document.addEventListener('mouseout', (e) => {
    const choice = e.target.closest('.upgrade-choice');
    if (choice) {
      const related = e.relatedTarget;
      if (!related || !choice.contains(related)) {
        hideTooltip();
      }
    }
  }, { passive: true });

  document.addEventListener('click', () => hideTooltip(), { passive: true });
}

// ---------- ALL BONUS CARDS GALLERY INSPECTOR ----------
let currentCardFilter = 'all';

function renderAllCardsGrid(filter = 'all') {
  currentCardFilter = filter;
  const grid = $('#allCardsGrid');
  if (!grid) return;

  const filtered = UPGRADES.filter(u => filter === 'all' || u.rarity === filter);

  grid.innerHTML = filtered.map(u => `
    <div class="upgrade-choice rarity-${u.rarity}" data-preview-card="${u.id}" style="cursor: pointer;" title="Nhấp để áp dụng thử nghiệm thẻ này">
      <div class="u-rarity-tag ${u.rarity}">${RARITY_ICONS[u.rarity] || ''} ${RARITY_LABELS[u.rarity] || 'THƯỜNG'}</div>
      <div class="u-icon">${u.icon}</div>
      <b>${u.title}</b>
      <p>${u.desc}</p>
      <small>${getStackInfo(u)}</small>
    </div>
  `).join('');

  grid.querySelectorAll('[data-preview-card]').forEach(cardEl => {
    cardEl.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const cardId = cardEl.dataset.previewCard;
      const u = UPGRADES.find(x => x.id === cardId);
      if (u) {
        if (G && G.round) {
          selectUpgrade(u.id);
          showImeToast(`👑 DEV: Đã áp dụng [${RARITY_LABELS[u.rarity]}] ${u.title}`);
        } else {
          showImeToast(`🔍 Thẻ: [${RARITY_LABELS[u.rarity]}] ${u.title}`);
        }
      }
    };
  });
}

function showAllCardsModal() {
  const modal = $('#allCardsModal');
  if (!modal) return;
  renderAllCardsGrid(currentCardFilter || 'all');
  modal.classList.add('show');
  showImeToast('🎴 Đã mở Bảng Kiểm Tra Toàn Bộ 24 Thẻ Thưởng');
}

function closeAllCardsModal() {
  $('#allCardsModal')?.classList.remove('show');
  if (gameCanOwnFocus()) setTimeout(() => focusGameSink(true), 30);
}

function selectUpgrade(id) {
  const u = UPGRADES.find(x => x.id === id);
  if (!u || !upgradeAvailable(u)) return;
  const g = G.upgrades;

  switch (u.type) {
    case 'damage':
      g.damageBonus = (g.damageBonus || 0) + u.value;
      g.damageStacks = (g.damageStacks || 0) + 1;
      showImeToast(`⚔ Sát thương: +${(g.damageBonus * 100).toFixed(1)}% (${g.damageStacks}/15)`);
      break;
    case 'critDmg':
      g.critDamageBonus = (g.critDamageBonus || 0) + u.value;
      g.critStacks = (g.critStacks || 0) + 1;
      showImeToast(`💥 Sát thương chí mạng: +${(g.critDamageBonus * 100).toFixed(1)}% (${g.critStacks}/15)`);
      break;
    case 'lifesteal':
      g.lifesteal = (g.lifesteal || 0) + u.value;
      g.lifestealStacks = (g.lifestealStacks || 0) + 1;
      showImeToast(`🩸 Hút máu: ${(g.lifesteal * 100).toFixed(1)}% (${g.lifestealStacks}/15)`);
      break;
    case 'maxHp':
      G.maxHp += u.value;
      G.playerHp = Math.min(G.maxHp, G.playerHp + u.value);
      g.maxHpBonus = (g.maxHpBonus || 0) + u.value;
      g.hpStacks = (g.hpStacks || 0) + 1;
      spawnHealFloat(u.value);
      showImeToast(`💖 HP tối đa: ${G.maxHp} (+${g.maxHpBonus} HP)`);
      break;
    case 'defense':
      g.damageReduction = Math.min(0.60, (g.damageReduction || 0) + u.value);
      g.defStacks = (g.defStacks || 0) + 1;
      showImeToast(`🛡 Giảm sát thương: -${(g.damageReduction * 100).toFixed(1)}% (${g.defStacks}/15)`);
      break;
    case 'cooldown':
      g.cooldownReduction = Math.min(0.65, (g.cooldownReduction || 0) + u.value);
      g.cdStacks = (g.cdStacks || 0) + 1;
      showImeToast(`⏳ Giảm hồi chiêu: -${(g.cooldownReduction * 100).toFixed(1)}% (${g.cdStacks}/15)`);
      break;
    case 'score':
      g.scoreBonus = (g.scoreBonus || 0) + u.value;
      g.scoreStacks = (g.scoreStacks || 0) + 1;
      showImeToast(`🏆 Điểm thưởng: +${(g.scoreBonus * 100).toFixed(1)}% (${g.scoreStacks}/15)`);
      break;
    case 'heal':
      const healAmt = Math.round(G.maxHp * u.value);
      G.playerHp = Math.min(G.maxHp, G.playerHp + healAmt);
      spawnHealFloat(healAmt);
      showImeToast(`🌿 Hồi phục: +${healAmt} HP`);
      break;
  }

  playLocal('crit', 0.85);
  $('#upgradeModal').classList.remove('show');
  updateBuffUI();
  updateHud();
  heroRoundTransition();
  setTimeout(advanceRound, 620);
}

function heroRoundTransition() {
  const w = $('#heroWrap'), img = $('#hero');
  const cls = cfg.classKey || 'warrior';
  
  if (cls === 'assassin') {
    // Sát Thủ: Tàn ảnh bóng tối lướt vụt xuyên không
    img.src = assetHero('jump');
    w.className = 'fighter hero-wrap transition-assassin';
    spawnAfterimages(5, 0.5);
    playLocal('sfx_blade_slash', 0.85);
  } else if (cls === 'mage') {
    // Pháp Sư: Mở cổng ma pháp & bay thăng thiên
    img.src = assetHero('skill');
    w.className = 'fighter hero-wrap transition-mage';
    spawnSparks(w, '#38bdf8', 25);
    playLocal('sfx_lightning', 0.75);
  } else {
    // Chiến Binh: Giương khiên sải bước uy mãnh tiến về phía trước
    img.src = assetHero('jump');
    w.className = 'fighter hero-wrap transition-warrior';
    spawnGroundWave();
    playLocal('sfx_heavy_impact', 0.85);
  }
  showImeToast('⚔ Tiến vào khu vực tiếp theo...');
}

function updateBuffUI() {
  const g = G.upgrades || {};
  const buffs = [];
  if (g.damageBonus) buffs.push(`DMG +${(g.damageBonus * 100).toFixed(1)}%`);
  if (g.critDamageBonus) buffs.push(`Crit +${(g.critDamageBonus * 100).toFixed(1)}%`);
  if (g.lifesteal) buffs.push(`Hút máu ${(g.lifesteal * 100).toFixed(1)}%`);
  if (g.maxHpBonus) buffs.push(`Max HP +${g.maxHpBonus}`);
  if (g.damageReduction) buffs.push(`Giáp -${(g.damageReduction * 100).toFixed(1)}%`);
  if (g.cooldownReduction) buffs.push(`Hồi chiêu -${(g.cooldownReduction * 100).toFixed(1)}%`);
  if (g.scoreBonus) buffs.push(`Điểm +${(g.scoreBonus * 100).toFixed(1)}%`);

  const el = $('#buffSummary');
  if (el) el.textContent = buffs.length ? buffs.join(' · ') : 'Chưa có nâng cấp';

  const p = $('#playerBonusText');
  if (p) {
    const cc = CLASS_COMBAT[cfg.classKey];
    const bonusText = buffs.length ? buffs.join(' · ') : 'Cơ bản';
    p.textContent = `BONUS: ${bonusText} · ${cc.passive}`;
  }
}

// ---------- BOSS EFFECTS & SKILLS ----------
const BOSS_EFFECTS = [
  { id: 'rage', icon: '🔥', name: 'Cuồng nộ', desc: '+15% sát thương', damageMult: 1.15, color: '#ff704f' },
  { id: 'swift', icon: '⚡', name: 'Tốc kích', desc: 'đánh nhanh hơn 18%', attackMult: 0.82, color: '#62d8ff' },
  { id: 'leech', icon: '🩸', name: 'Hút sinh lực', desc: 'hồi 12% damage gây ra', leech: 0.12, color: '#ff5c86' },
  { id: 'crit', icon: '💥', name: 'Bạo kích', desc: '25% cơ hội x1,5 damage', critChance: 0.25, critMult: 1.5, color: '#ffd45e' },
  { id: 'arcane', icon: '🔮', name: 'Ma lực', desc: '+8% damage · đánh nhanh 8%', damageMult: 1.08, attackMult: 0.92, color: '#bc79ff' }
];

function randomBossEffect() {
  let choices = BOSS_EFFECTS;
  if (G.bossEffectLast) choices = BOSS_EFFECTS.filter(x => x.id !== G.bossEffectLast);
  const e = choices[Math.floor(Math.random() * choices.length)];
  G.bossEffectLast = e.id;
  return e;
}

const BOSS_SKILLS = {
  slime: [
    { id: 'slime_splash', icon: '💧', name: 'Phun Axit Ăn Mòn', mult: 1.00, pose: 'cast', fx: 'orb', sfx: 'slimeSplash' },
    { id: 'bubble_blast', icon: '🫧', name: 'Bọt Khí Bẫy Bắt', mult: 1.15, pose: 'cast', fx: 'drain', sfx: 'bubbleBlast', leech: 0.20 },
    { id: 'slime_slam', icon: '💥', name: 'Nhảy Đè Rung Chuyển', mult: 1.30, pose: 'attack', fx: 'slam', sfx: 'sfx_heavy_impact' }
  ],
  goblin: [
    { id: 'goblin_slash', icon: '🗡️', name: 'Phi Đao Tẩm Độc', mult: 1.05, pose: 'attack', fx: 'slash', sfx: 'sfx_blade_slash' },
    { id: 'goblin_bomb', icon: '💣', name: 'Bom Khói Mù', mult: 1.20, pose: 'cast', fx: 'orb', sfx: 'sfx_fire_burst', weak: 0.12, weakMs: 6000 },
    { id: 'goblin_cackle', icon: '😈', name: 'Tiếng Cười Độc Địa', mult: 1.35, pose: 'cast', fx: 'shards', sfx: 'boss_goblin' }
  ],
  boar: [
    { id: 'boar_charge', icon: '🐗', name: 'Ủi Rách Mặt Đất', mult: 1.10, pose: 'attack', fx: 'slam', sfx: 'sfx_heavy_impact' },
    { id: 'boar_roar', icon: '🛡️', name: 'Húc Rào Gai Nhọn', mult: 1.25, pose: 'cast', fx: 'fracture', sfx: 'boss_boar' },
    { id: 'boar_dust', icon: '🌪️', name: 'Lốc Xoáy Bụi Đỏ', mult: 1.35, pose: 'attack', fx: 'slash', sfx: 'sfx_blade_slash' }
  ],
  treant: [
    { id: 'treant_whip', icon: '🌿', name: 'Dây Leo Quất Ngã', mult: 1.05, pose: 'attack', fx: 'slash', sfx: 'vineWhip' },
    { id: 'treant_groan', icon: '🌲', name: 'Gai Nhọn Mọc Ngầm', mult: 1.25, pose: 'cast', fx: 'shards', sfx: 'boss_treant' },
    { id: 'treant_drain', icon: '🍃', name: 'Bão Bào Tử Hút Máu', mult: 1.15, pose: 'cast', fx: 'drain', sfx: 'sfx_lifesteal', leech: 0.25 }
  ],
  golem: [
    { id: 'golem_fist', icon: '🪨', name: 'Nắm Đấm Đá Ngàn Cân', mult: 1.10, pose: 'attack', fx: 'slam', sfx: 'stoneFist' },
    { id: 'golem_quake', icon: '🌋', name: 'Đập Đất Nham Thạch', mult: 1.30, pose: 'attack', fx: 'smash', sfx: 'groundBreaker' },
    { id: 'golem_boulder', icon: '💎', name: 'Ném Tảng Đá Pha Lê', mult: 1.40, pose: 'cast', fx: 'shards', sfx: 'boss_golem' }
  ],
  manticore: [
    { id: 'manticore_sting', icon: '🦂', name: 'Gai Độc Đuôi Bọ Cạp', mult: 1.10, pose: 'attack', fx: 'slash', sfx: 'sfx_blade_slash', weak: 0.15, weakMs: 6500 },
    { id: 'manticore_screech', icon: '🦅', name: 'Sóng Âm Gầm Thét', mult: 1.25, pose: 'cast', fx: 'shards', sfx: 'boss_manticore' },
    { id: 'manticore_fire', icon: '🔥', name: 'Phun Lửa Đỏ Rực', mult: 1.40, pose: 'cast', fx: 'orb', sfx: 'sfx_fire_burst' }
  ],
  minotaur: [
    { id: 'minotaur_axe', icon: '🪓', name: 'Búa Rìu Phá Trận', mult: 1.15, pose: 'attack', fx: 'smash', sfx: 'sfx_heavy_impact' },
    { id: 'minotaur_bellow', icon: '🐂', name: 'Húc Bay Cuồng Nộ', mult: 1.30, pose: 'attack', fx: 'slam', sfx: 'boss_minotaur' },
    { id: 'minotaur_thunder', icon: '⚡', name: 'Chấn Động Đấu Trường', mult: 1.45, pose: 'cast', fx: 'shards', sfx: 'sfx_lightning' }
  ],
  colossus: [
    { id: 'colossus_inferno', icon: '🔥', name: 'Hỏa Cầu Nham Thạch', mult: 1.20, pose: 'cast', fx: 'orb', sfx: 'voidInferno' },
    { id: 'colossus_roar', icon: '🌋', name: 'Trụ Lửa Phun Trào', mult: 1.35, pose: 'cast', fx: 'beam', sfx: 'boss_colossus' },
    { id: 'colossus_meteor', icon: '🔨', name: 'Nện Đất Thiên Thạch', mult: 1.50, pose: 'attack', fx: 'smash', sfx: 'sfx_heavy_impact' }
  ],
  hydra: [
    { id: 'hydra_bite', icon: '🐍', name: 'Cắn Nuốt Độc Xà', mult: 1.15, pose: 'attack', fx: 'slash', sfx: 'abyssBite' },
    { id: 'hydra_rampage', icon: '🌊', name: 'Bão Độc Cuồng Nộ', mult: 1.30, pose: 'attack', fx: 'slam', sfx: 'hydraRampage' },
    { id: 'hydra_spit', icon: '🩸', name: 'Nọc Độc Ăn Mòn', mult: 1.45, pose: 'cast', fx: 'drain', sfx: 'boss_hydra', leech: 0.20 }
  ],
  dragon: [
    { id: 'dragon_darkorb', icon: '🌌', name: 'Hư Không Hắc Cầu', mult: 1.25, pose: 'cast', fx: 'voidorb', sfx: 'voidInferno' },
    { id: 'dragon_beam', icon: '⚡', name: 'Tia Hủy Diệt Tối Thượng', mult: 1.50, pose: 'cast', fx: 'beam', sfx: 'sfx_lightning' },
    { id: 'dragon_roar', icon: '🐉', name: 'Long Ngâm Chấn Thiên', mult: 1.65, pose: 'attack', fx: 'smash', sfx: 'boss_dragon' }
  ],
  void: [
    { id: 'void_darkorb', icon: '🔮', name: 'Hư Không Hắc Cầu', mult: 1.25, pose: 'cast', fx: 'voidorb', sfx: 'voidInferno' },
    { id: 'void_beam', icon: '☄', name: 'Hư Không Diệt Thế', mult: 1.50, pose: 'cast', fx: 'beam', sfx: 'sfx_lightning' },
    { id: 'void_roar', icon: '🐉', name: 'Long Ngâm Chấn Thiên', mult: 1.65, pose: 'attack', fx: 'smash', sfx: 'boss_dragon' }
  ]
};

function isBossInRage() {
  return G.bossMaxHp > 0 && (G.bossHp / G.bossMaxHp) <= 0.30 && G.bossHp > 0;
}

function triggerBossRagePhase() {
  if (G.transition || G.bossHp <= 0) return;
  playLocal('voidRoar', 0.9);
  setTimeout(() => playLocal('impact', 0.8), 160);
  flash(0.35, '255,50,50');
  screenShake(16, 320);
  setBossPose('rage', 'idle', 0);
  showImeToast('🔥 BOSS BẬT CUỒNG NỘ (<30% HP)! COMBO CHIÊU LIÊN TỤC!');
  const warn = $('#warning');
  if (warn) {
    warn.textContent = `🔥 BOSS BẬT CUỒNG NỘ (<30% HP)! TỐC ĐỘ GẤP BỘI & COMBO LIÊN HOÀN!`;
    warn.classList.remove('show');
    void warn.offsetWidth;
    warn.classList.add('show');
  }
  startBossTimer();
}

function bossComboCount(round) {
  // Khi Boss dưới 30% HP -> Cuồng Nộ kích hoạt: luôn đánh combo 2 đến 3 skill liên hoàn!
  if (isBossInRage()) {
    return Math.random() < 0.65 ? 3 : 2;
  }
  if (round <= 2) return 1;
  if (round <= 5) return Math.random() < 0.4 ? 2 : 1;
  if (round <= 8) return Math.random() < 0.6 ? 2 : 1;
  return Math.random() < 0.5 ? 3 : 2;
}

function chooseBossSkillCombo() {
  const cur = currentBoss();
  const rawPool = cur?.skills || BOSS_SKILLS[cur?.kind] || BOSS_SKILLS.slime;
  const pool = [...rawPool];
  const count = Math.min(bossComboCount(G.round), pool.length);
  
  // Random không trùng kỹ năng trong combo & không trùng với skill vừa đánh ở lượt trước
  let best = [];
  for (let tries = 0; tries < 40; tries++) {
    const p = [...pool];
    // Fisher-Yates shuffle
    for (let i = p.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [p[i], p[j]] = [p[j], p[i]];
    }
    const selected = p.slice(0, count);
    const firstSkillId = selected[0]?.id || selected[0]?.name;
    const lastExecuted = G.lastBossSkillExecuted;
    
    // Điều kiện nghiêm ngặt: Skill đầu tiên của lượt này KHÔNG ĐƯỢC TRÙNG với Skill vừa đánh ở lượt trước
    if (pool.length > 1 && lastExecuted && firstSkillId === lastExecuted) {
      continue;
    }
    
    const sig = selected.map(x => x.name || x.id).join(' ➔ ');
    if (sig !== G.lastBossComboSig) {
      best = selected;
      break;
    }
    best = selected;
  }
  
  if (best.length === 0) {
    const filtered = pool.filter(x => (x.id || x.name) !== G.lastBossSkillExecuted);
    best = (filtered.length > 0 ? filtered : pool).slice(0, count);
  }
  
  G.lastBossComboSig = best.map(x => x.name || x.id).join(' ➔ ');
  return best;
}

// ---------- AUDIO POOL & AUDIO ENGINE ----------
const audioPools = {};
const AUDIO_POOL_SIZE = 4;

function getPooledAudio(src, volume = 1) {
  if (!audioPools[src]) {
    audioPools[src] = [];
    for (let i = 0; i < AUDIO_POOL_SIZE; i++) {
      const a = new Audio(src);
      a.preload = 'auto';
      audioPools[src].push(a);
    }
  }
  const pool = audioPools[src];
  const a = pool.find(x => x.paused || x.ended) || pool[0];
  try {
    a.currentTime = 0;
    a.volume = Math.max(0, Math.min(1, volume));
  } catch (e) {}
  return a;
}

let customPlaylist = [];
let useCustomMusic = false;

function updateCustomMusicUI() {
  const isCustom = useCustomMusic && customPlaylist.length > 0;
  $$('.custom-music-badge').forEach(badge => {
    badge.textContent = isCustom ? `Nhạc riêng (${customPlaylist.length} bài)` : `Gốc (6 bài)`;
    badge.classList.toggle('active', isCustom);
  });
  $$('.custom-playlist-info').forEach(info => {
    info.style.display = isCustom ? 'flex' : 'none';
  });
  if (isCustom) {
    const activeName = customPlaylist[G.musicBlockIndex || 0]?.name || customPlaylist[0]?.name || 'Bài hát tùy chỉnh';
    $$('.custom-track-name').forEach(el => el.textContent = activeName);
  }
}

function handleCustomMusicFiles(fileList) {
  if (!fileList || fileList.length === 0) return;
  const files = Array.from(fileList).filter(f => {
    return f.type.startsWith('audio/') || /\.(mp3|ogg|wav|m4a|flac|aac|opus)$/i.test(f.name);
  });
  if (files.length === 0) {
    showImeToast('⚠ Không tìm thấy file âm thanh hợp lệ (.mp3, .ogg, .wav, .m4a, .flac)');
    return;
  }
  customPlaylist.forEach(item => {
    try { URL.revokeObjectURL(item.url); } catch (e) {}
  });
  customPlaylist = files.map(f => ({
    name: f.name.replace(/\.[^/.]+$/, ''),
    url: URL.createObjectURL(f)
  }));
  useCustomMusic = true;
  musicLastIndex = -1;
  G.musicBlockIndex = -1;
  showImeToast(`🎵 Đã nạp ${customPlaylist.length} bài hát riêng!`);
  updateCustomMusicUI();
  if (musicOn && $('#game').classList.contains('active')) {
    playBattleMusic(true);
  }
}

function resetCustomMusic() {
  customPlaylist.forEach(item => {
    try { URL.revokeObjectURL(item.url); } catch (e) {}
  });
  customPlaylist = [];
  useCustomMusic = false;
  musicLastIndex = -1;
  G.musicBlockIndex = -1;
  showImeToast('↺ Đã khôi phục danh sách nhạc nền mặc định RPG');
  updateCustomMusicUI();
  if (musicOn && $('#game').classList.contains('active')) {
    playBattleMusic(true);
  }
}

function unlockAudio() {
  if (musicOn && $('#game').classList.contains('active')) playBattleMusic();
}

function chooseMusicIndex(forceNew = false) {
  const tracks = (useCustomMusic && customPlaylist.length > 0) ? customPlaylist : AUDIO.music;
  if (tracks.length <= 1) return 0;
  const block = Math.floor(Math.max(0, (G.round || 1) - 1) / 3);
  if (!forceNew && G.musicBlock === block && Number.isInteger(G.musicBlockIndex) && G.musicBlockIndex < tracks.length) return G.musicBlockIndex;
  let i = Math.floor(Math.random() * tracks.length), guard = 0;
  while (i === musicLastIndex && guard++ < 12) i = Math.floor(Math.random() * tracks.length);
  musicLastIndex = i;
  G.musicBlock = block;
  G.musicBlockIndex = i;
  return i;
}

function playBattleMusic(forceNew = false) {
  if (!musicOn || !G.round) return;
  if (musicEl && !forceNew && !musicEl.paused) {
    applyDangerMusic();
    return;
  }
  const block = Math.floor((G.round - 1) / 3), resume = G.musicResume && G.musicResume.block === block && !forceNew ? G.musicResume : null;
  stopMusic();
  const tracks = (useCustomMusic && customPlaylist.length > 0) ? customPlaylist : AUDIO.music;
  const idx = resume ? resume.index : chooseMusicIndex(forceNew);
  const trackObj = (useCustomMusic && customPlaylist.length > 0) ? customPlaylist[idx] : null;
  const src = trackObj ? trackObj.url : AUDIO.music[idx];
  const a = new Audio(src);
  musicEl = a;
  a.dataset.src = src;
  a.preload = 'auto';
  a.loop = false;
  a.volume = musicVolume;
  const startAt = resume?.time || 0;
  if (startAt > 0) a.addEventListener('loadedmetadata', () => { try { if (a.duration > startAt + 2) a.currentTime = startAt; } catch (e) {} }, { once: true });
  G.musicResume = null;
  a.addEventListener('ended', () => { if (musicOn && $('#game').classList.contains('active') && !G.transition) playBattleMusic(true); });
  const pr = a.play();
  if (pr && pr.catch) pr.catch(() => {});
  applyDangerMusic();
  updateCustomMusicUI();
}

function stopMusic() {
  if (musicEl) { musicEl.pause(); musicEl.src = ''; }
  musicEl = null;
  if (dangerTimer) { clearInterval(dangerTimer); dangerTimer = null; }
}

function stopSpecial() {
  if (specialMusic) { specialMusic.pause(); specialMusic.src = ''; }
  specialMusic = null;
}

function stopAllSfx() {
  Object.values(audioPools).forEach(pool => {
    pool.forEach(a => {
      try {
        a.pause();
        a.currentTime = 0;
      } catch (e) {}
    });
  });
}

function playSpecial(kind) {
  if (kind === 'victory' && musicEl && G.round) {
    G.musicResume = { block: Math.floor((G.round - 1) / 3), index: Number.isInteger(G.musicBlockIndex) ? G.musicBlockIndex : musicLastIndex, time: musicEl.currentTime || 0 };
  }
  stopMusic();
  stopSpecial();
  if (!musicOn || musicVolume <= 0) return;
  const src = AUDIO[kind];
  if (!src) return;
  const a = new Audio(src);
  specialMusic = a;
  a.preload = 'auto';
  a.volume = Math.min(1, musicVolume * 1.05);
  const p = a.play();
  if (p && p.catch) p.catch(() => {});
}

function playLocal(name, volume = 0.75) {
  if (!soundOn || sfxVolume <= 0 || !AUDIO[name]) return;
  try {
    const a = getPooledAudio(AUDIO[name], volume * sfxVolume);
    if (!a) return;
    const p = a.play();
    if (p && p.catch) p.catch(() => fallbackTone(name));
  } catch (e) {
    fallbackTone(name);
  }
}

function playVocalGrunt(type = 'hurt') {
  if (!soundOn || sfxVolume <= 0) return;
  try {
    const C = window.AudioContext || window.webkitAudioContext;
    if (!C) return;
    const c = fallbackTone.ctx || (fallbackTone.ctx = new C());
    if (c.state === 'suspended') c.resume();

    const t = c.currentTime;
    const isHurt = type === 'hurt';
    const isMage = cfg.classKey === 'mage', isWarrior = cfg.classKey === 'warrior';

    // 1. Vocal vocal-tract resonance oscillator
    const osc = c.createOscillator();
    const gain = c.createGain();
    const filter = c.createBiquadFilter();

    osc.type = 'sawtooth';
    const baseFreq = isMage ? 250 : isWarrior ? 135 : 175;
    const targetFreq = isHurt ? baseFreq * 0.58 : baseFreq * 1.35;
    const dur = isHurt ? 0.26 : 0.18;

    osc.frequency.setValueAtTime(baseFreq, t);
    osc.frequency.exponentialRampToValueAtTime(Math.max(40, targetFreq), t + dur);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(isMage ? 820 : isWarrior ? 460 : 620, t);
    filter.Q.setValueAtTime(isHurt ? 2.5 : 1.8, t);

    const baseVol = (isHurt ? 0.42 : 0.28) * sfxVolume;
    gain.gain.setValueAtTime(baseVol, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(c.destination);

    osc.start(t);
    osc.stop(t + dur + 0.02);

    // 2. Breathy vocal gasp/noise burst
    const bufferSize = Math.floor(c.sampleRate * (isHurt ? 0.16 : 0.10));
    const noiseBuffer = c.createBuffer(1, bufferSize, c.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.35));
    }
    const noise = c.createBufferSource();
    noise.buffer = noiseBuffer;
    const noiseFilter = c.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(isHurt ? 1100 : 1600, t);
    noiseFilter.Q.setValueAtTime(1.4, t);
    const noiseGain = c.createGain();
    noiseGain.gain.setValueAtTime((isHurt ? 0.22 : 0.15) * sfxVolume, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + (isHurt ? 0.16 : 0.10));

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(c.destination);

    noise.start(t);
    noise.stop(t + (isHurt ? 0.17 : 0.11));
  } catch (e) {}
}

function fallbackTone(name) {
  if (!soundOn || sfxVolume <= 0) return;
  try {
    const C = window.AudioContext || window.webkitAudioContext;
    if (!C) return;
    const c = fallbackTone.ctx || (fallbackTone.ctx = new C());
    if (c.state === 'suspended') c.resume();
    const o = c.createOscillator(), g = c.createGain();
    o.type = 'triangle';
    o.frequency.value = name === 'impact' ? 130 : name === 'crit' ? 780 : name === 'hurt' ? 210 : name === 'heartbeat' ? 75 : 470;
    g.gain.setValueAtTime((name === 'heartbeat' ? 0.035 : 0.075) * sfxVolume, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + (name === 'heartbeat' ? 0.18 : 0.12));
    o.connect(g);
    g.connect(c.destination);
    o.start();
    o.stop(c.currentTime + (name === 'heartbeat' ? 0.19 : 0.13));
  } catch (e) {}
}

function attackVoice(force = false) {
  if (!soundOn || sfxVolume <= 0) return;
  const n = Date.now();
  if (!force && n < attackVoiceAt) return;
  attackVoiceAt = n + 450;
  const attackSound = Math.random() < 0.5 ? 'hero_attack_1' : 'hero_attack_2';
  playLocal(attackSound, 0.9);
  playLocal('sfx_blade_slash', 0.65);
}

function hurtVoice(force = true, heavy = false) {
  if (!soundOn || sfxVolume <= 0) return;
  const n = Date.now();
  if (!force && n < hurtVoiceAt) return;
  hurtVoiceAt = n + 380;
  playLocal(heavy ? 'hero_hurt_heavy' : 'hero_hurt_light', 0.95);
}

function applyDangerMusic() {
  const danger = G.maxHp && G.playerHp / G.maxHp < 0.30 && G.playerHp > 0;
  if (musicEl) {
    musicEl.playbackRate = danger ? 1.20 : 1;
    musicEl.volume = Math.min(1, musicVolume * (danger ? 1.18 : 1));
  }
  $('#dangerBadge').classList.toggle('show', danger);
  $('#game').classList.toggle('danger', danger);
  if (danger && !dangerTimer) dangerTimer = setInterval(() => fallbackTone('heartbeat'), 680);
  if (!danger && dangerTimer) { clearInterval(dangerTimer); dangerTimer = null; }
}

document.addEventListener('pointerdown', unlockAudio, { passive: true });
document.addEventListener('keydown', unlockAudio, { capture: true });

function saveVolumes() {
  try { localStorage.setItem(VOL_KEY, JSON.stringify({ music: musicVolume, sfx: sfxVolume })); } catch (e) {}
}

function updateVolumeUI() {
  const mPct = Math.round(musicVolume * 100);
  const sPct = Math.round(sfxVolume * 100);

  $$('.music-vol-slider').forEach(el => el.value = mPct);
  $$('.sfx-vol-slider').forEach(el => el.value = sPct);
  $$('.music-vol-val').forEach(el => el.textContent = mPct + '%');
  $$('.sfx-vol-val').forEach(el => el.textContent = sPct + '%');
  if ($('#musicVolume')) $('#musicVolume').value = mPct;
  if ($('#sfxVolume')) $('#sfxVolume').value = sPct;
  if ($('#musicVolText')) $('#musicVolText').textContent = mPct + '%';
  if ($('#sfxVolText')) $('#sfxVolText').textContent = sPct + '%';

  const mBtns = [$('#musicBtn'), $('#inGameMusicBtn')];
  mBtns.forEach(btn => {
    if (btn) btn.classList.toggle('off', !musicOn || musicVolume === 0);
  });

  const sBtns = [$('#soundBtn'), $('#inGameSoundBtn')];
  sBtns.forEach(btn => {
    if (btn) {
      btn.classList.toggle('off', !soundOn || sfxVolume === 0);
      btn.textContent = (soundOn && sfxVolume > 0) ? '🔊' : '🔇';
    }
  });

  if (musicEl) applyDangerMusic();
  if (specialMusic) specialMusic.volume = Math.min(1, musicVolume * 1.05);
}

// ---------- UI & FLOW ----------
function show(id) {
  ['setup', 'game', 'result'].forEach(x => $('#' + x).classList.remove('active'));
  $('#' + id).classList.add('active');
}

function setPaused(on, showMenu = true) {
  if (!$('#game').classList.contains('active')) return;
  on = !!on;
  if (on === paused) {
    if (showMenu) $('#pauseModal')?.classList.toggle('show', on);
    return;
  }
  paused = on;
  const pBtns = [$('#pauseBtn'), $('#inGamePauseBtn')];
  pBtns.forEach(btn => {
    if (btn) {
      btn.classList.toggle('on', paused);
      btn.textContent = paused ? '▶' : 'Ⅱ';
    }
  });
  if (paused) {
    G.pauseStarted = Date.now();
    if (musicEl) musicEl.pause();
    if (specialMusic) specialMusic.pause();
    if (showMenu) $('#pauseModal')?.classList.add('show');
  } else {
    if (G.pauseStarted) {
      G.pausedTotal = (G.pausedTotal || 0) + (Date.now() - G.pauseStarted);
      G.pauseStarted = 0;
    }
    $('#pauseModal')?.classList.remove('show');
    if (musicOn && musicEl) musicEl.play().catch(() => {});
    else if (musicOn && !G.transition) playBattleMusic();
    if (specialMusic) specialMusic.play().catch(() => {});
  }
}

function togglePauseMenu() {
  if ($('#upgradeModal')?.classList.contains('show')) return;
  setPaused(!paused, true);
}

function stopCurrentGame() {
  if (!$('#game').classList.contains('active')) return;
  setPaused(false, false);
  $('#pauseModal')?.classList.remove('show');
  finish(false);
  $('#resultTitle').textContent = 'Đã dừng game';
}

function returnToCharacterSelect() {
  clearInterval(bossTimer);
  clearInterval(ticker);
  if (skillUiTimer) clearInterval(skillUiTimer);
  setPaused(false, false);
  $('#pauseModal')?.classList.remove('show');
  stopMusic();
  stopSpecial();
  G.transition = true;
  show('setup');
  updateSetupProfile();
}

function safe(fn) {
  try { return fn(); } catch (err) { console.warn('Non-critical effect error', err); return null; }
}

$$('.class-card').forEach(b => b.onclick = () => {
  $$('.class-card').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  cfg.classKey = b.dataset.class;
});

$('#playerNameInput').value = (() => {
  try { return localStorage.getItem(LAST_PLAYER_KEY) || ''; } catch (e) { return ''; }
})();
$('#playerNameInput').addEventListener('input', updateSetupProfile);
updateSetupProfile();

try {
  cfg.internalIme = localStorage.getItem(IME_PREF_KEY) !== '0';
} catch (e) {
  cfg.internalIme = true;
}
$('#internalImeToggle').checked = cfg.internalIme;

function updateImeSetupUI() {
  const on = $('#internalImeToggle').checked;
  $('#imeSetupState').textContent = on ? 'BẬT · Khóa bộ gõ ngoài trong trận' : 'TẮT · Dùng bộ gõ ngoài';
  $('#imeSetupState').style.color = on ? '#75d49a' : '#a9c9ff';
  $('#imeSetupHint').textContent = on ? 'BẬT: game đọc mã phím vật lý (KeyboardEvent.code), chặn nhập liệu/IME bên ngoài trong vùng chiến đấu. UniKey bật hay tắt đều không ảnh hưởng.' : 'TẮT: game nhận chữ Unicode từ UniKey/Windows/macOS.';
}
updateImeSetupUI();

$('#internalImeToggle').addEventListener('change', () => {
  cfg.internalIme = $('#internalImeToggle').checked;
  try { localStorage.setItem(IME_PREF_KEY, cfg.internalIme ? '1' : '0'); } catch (e) {}
  updateImeSetupUI();
});

$('#typingModeSelect').addEventListener('change', () => {
  cfg.typingMode = $('#typingModeSelect').value;
});

$('#startBtn').onclick = start;
$('#againBtn').onclick = start;
$('#backBtn').onclick = () => { stopMusic(); stopSpecial(); show('setup'); updateSetupProfile(); };
$('#resumeBtn').onclick = () => setPaused(false, true);
$('#stopGameBtn').onclick = stopCurrentGame;
$('#reselectBtn').onclick = returnToCharacterSelect;

// About & Guide modal triggers
$$('[data-open-about]').forEach(btn => {
  btn.onclick = (e) => {
    e.stopPropagation();
    $('#creditsModal')?.classList.add('show');
  };
});
if ($('#creditsBtn')) {
  $('#creditsBtn').onclick = () => $('#creditsModal')?.classList.add('show');
}

$$('[data-open-guide]').forEach(btn => {
  btn.onclick = (e) => {
    e.stopPropagation();
    $('#guideModal')?.classList.add('show');
  };
});
if ($('#guideBtn')) {
  $('#guideBtn').onclick = () => $('#guideModal')?.classList.add('show');
}
if ($('#guideGameBtn')) {
  $('#guideGameBtn').onclick = () => $('#guideModal')?.classList.add('show');
}

$$('[data-close]').forEach(b => b.onclick = () => b.closest('.modal').classList.remove('show'));
$$('.modal:not(.upgrade-modal)').forEach(m => m.onclick = e => { if (e.target === m) m.classList.remove('show'); });

const handlePauseToggle = (e) => {
  if (e) e.stopPropagation();
  togglePauseMenu();
  focusGameSink(true);
};

$('#pauseBtn').onclick = handlePauseToggle;
if ($('#inGamePauseBtn')) $('#inGamePauseBtn').onclick = handlePauseToggle;
if ($('#quickPauseBtn')) $('#quickPauseBtn').onclick = handlePauseToggle;

const handleSoundToggle = (e) => {
  if (e) e.stopPropagation();
  soundOn = !soundOn;
  if (!soundOn) {
    stopAllSfx();
    showImeToast('🔇 Hiệu ứng âm thanh: TẮT');
  } else {
    if (sfxVolume <= 0) sfxVolume = 0.8;
    playLocal('crit', 0.7);
    showImeToast('🔊 Hiệu ứng âm thanh: BẬT');
  }
  saveVolumes();
  updateVolumeUI();
  focusGameSink(true);
};

$('#soundBtn').onclick = handleSoundToggle;
if ($('#inGameSoundBtn')) $('#inGameSoundBtn').onclick = handleSoundToggle;

const handleMusicToggle = (e) => {
  if (e) e.stopPropagation();
  musicOn = !musicOn;
  if (!musicOn) {
    stopMusic();
    stopSpecial();
    showImeToast('♫ Nhạc nền: TẮT');
  } else {
    if (musicVolume <= 0) musicVolume = 0.7;
    if ($('#game').classList.contains('active')) playBattleMusic(true);
    showImeToast('♫ Nhạc nền: BẬT');
  }
  saveVolumes();
  updateVolumeUI();
  focusGameSink(true);
};

$('#musicBtn').onclick = handleMusicToggle;
if ($('#inGameMusicBtn')) $('#inGameMusicBtn').onclick = handleMusicToggle;

const handleTopVolumeToggle = (e) => {
  if (e) e.stopPropagation();
  const topPanel = $('#topVolumePanel');
  const bottomPanel = $('#volumePanel');
  if (!topPanel) return;
  const willOpen = !topPanel.classList.contains('show');
  topPanel.classList.toggle('show', willOpen);
  if (bottomPanel) bottomPanel.classList.remove('show');
  $('#inGameVolumeBtn')?.classList.toggle('on', willOpen);
  $('#volumeBtn')?.classList.remove('on');
  if (willOpen) updateVolumeUI();
};

const handleBottomVolumeToggle = (e) => {
  if (e) e.stopPropagation();
  const topPanel = $('#topVolumePanel');
  const bottomPanel = $('#volumePanel');
  if (!bottomPanel) return;
  const willOpen = !bottomPanel.classList.contains('show');
  bottomPanel.classList.toggle('show', willOpen);
  if (topPanel) topPanel.classList.remove('show');
  $('#volumeBtn')?.classList.toggle('on', willOpen);
  $('#inGameVolumeBtn')?.classList.remove('on');
  if (willOpen) updateVolumeUI();
};

if ($('#inGameVolumeBtn')) $('#inGameVolumeBtn').onclick = handleTopVolumeToggle;
if ($('#volumeBtn')) $('#volumeBtn').onclick = handleBottomVolumeToggle;

// Prevent clicks inside volume panels from being swallowed or hijacked
$$('.volume-panel').forEach(panel => {
  ['pointerdown', 'mousedown', 'touchstart', 'click'].forEach(evt => {
    panel.addEventListener(evt, e => e.stopPropagation(), { passive: false });
  });
});

$$('[data-close-vol]').forEach(btn => {
  btn.onclick = e => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    $('#topVolumePanel')?.classList.remove('show');
    $('#volumePanel')?.classList.remove('show');
    $('#inGameVolumeBtn')?.classList.remove('on');
    $('#volumeBtn')?.classList.remove('on');
    focusGameSink(true);
  };
});

// Quick mute/max step buttons inside volume dropdowns
$$('[data-vol-action]').forEach(btn => {
  btn.onclick = e => {
    e.preventDefault();
    e.stopPropagation();
    const action = btn.dataset.volAction;
    if (action === 'mute-music') {
      if (musicVolume > 0 && musicOn) {
        musicVolume = 0;
        musicOn = false;
        stopMusic();
        stopSpecial();
      } else {
        musicVolume = 0.7;
        musicOn = true;
        if ($('#game').classList.contains('active')) playBattleMusic(true);
      }
    } else if (action === 'max-music') {
      musicVolume = 1.0;
      musicOn = true;
      if ($('#game').classList.contains('active') && !musicEl) playBattleMusic(true);
    } else if (action === 'mute-sfx') {
      if (sfxVolume > 0 && soundOn) {
        sfxVolume = 0;
        soundOn = false;
        stopAllSfx();
      } else {
        sfxVolume = 0.8;
        soundOn = true;
        playLocal('crit', 0.8);
      }
    } else if (action === 'max-sfx') {
      sfxVolume = 1.0;
      soundOn = true;
      playLocal('crit', 1.0);
    }
    saveVolumes();
    updateVolumeUI();
  };
});

// Live slider interactions for all volume sliders (top & bottom)
$$('.music-vol-slider').forEach(slider => {
  const onMusicInput = (e) => {
    const val = Number(e.target.value);
    musicVolume = Math.max(0, Math.min(1, val / 100));
    if (musicVolume > 0 && !musicOn) musicOn = true;
    if (musicVolume === 0) musicOn = false;
    saveVolumes();
    updateVolumeUI();
    if (musicOn && musicEl) {
      musicEl.volume = musicVolume;
    } else if (musicOn && !musicEl && musicVolume > 0 && $('#game').classList.contains('active')) {
      playBattleMusic();
    }
  };
  slider.addEventListener('input', onMusicInput);
  slider.addEventListener('change', onMusicInput);
});

let sfxPreviewDebounce = null;
$$('.sfx-vol-slider').forEach(slider => {
  const onSfxInput = (e) => {
    const val = Number(e.target.value);
    sfxVolume = Math.max(0, Math.min(1, val / 100));
    if (sfxVolume > 0 && !soundOn) soundOn = true;
    if (sfxVolume === 0) soundOn = false;
    saveVolumes();
    updateVolumeUI();
    clearTimeout(sfxPreviewDebounce);
    sfxPreviewDebounce = setTimeout(() => {
      playLocal('slash', 0.7);
    }, 90);
  };
  slider.addEventListener('input', onSfxInput);
  slider.addEventListener('change', onSfxInput);
});

// Dismiss volume popups when clicking outside
document.addEventListener('pointerdown', e => {
  const isInsidePanel = e.target.closest('.volume-panel');
  const isVolBtn = e.target.closest('#inGameVolumeBtn') || e.target.closest('#volumeBtn');
  if (!isInsidePanel && !isVolBtn) {
    $('#topVolumePanel')?.classList.remove('show');
    $('#volumePanel')?.classList.remove('show');
    $('#inGameVolumeBtn')?.classList.remove('on');
    $('#volumeBtn')?.classList.remove('on');
  }
}, { passive: true });

// Custom music folder/files and reset button handlers
$$('[data-upload-music]').forEach(btn => {
  btn.onclick = e => {
    e.preventDefault();
    e.stopPropagation();
    const mode = btn.dataset.uploadMusic;
    if (mode === 'folder') {
      $('#musicFolderInput')?.click();
    } else {
      $('#musicFilesInput')?.click();
    }
  };
});

$('#musicFolderInput')?.addEventListener('change', e => {
  handleCustomMusicFiles(e.target.files);
  e.target.value = '';
});

$('#musicFilesInput')?.addEventListener('change', e => {
  handleCustomMusicFiles(e.target.files);
  e.target.value = '';
});

window.addEventListener('dragover', e => {
  e.preventDefault();
  if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
});

window.addEventListener('drop', e => {
  e.preventDefault();
  if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    handleCustomMusicFiles(e.dataTransfer.files);
  }
});

$$('[data-reset-music]').forEach(btn => {
  btn.onclick = e => {
    e.preventDefault();
    e.stopPropagation();
    resetCustomMusic();
  };
});

updateVolumeUI();
updateCustomMusicUI();
syncAppVersion();

function showImeToast(text) {
  const t = $('#imeToast');
  if (!t) return;
  t.textContent = text;
  t.classList.remove('show');
  void t.offsetWidth;
  t.classList.add('show');
}

function gameCanOwnFocus() {
  const ae = document.activeElement;
  if (ae && (ae.closest('.dev-panel, .volume-panel, select, input, textarea, .modal, button') || ae.tagName === 'SELECT' || ae.tagName === 'INPUT' || ae.tagName === 'BUTTON')) return false;
  return !!(cfg.internalIme && $('#game')?.classList.contains('active') && !paused && !$('#upgradeModal')?.classList.contains('show') && !$('#pauseModal')?.classList.contains('show'));
}

function focusGameSink(force = false) {
  if (!gameCanOwnFocus()) return;
  const game = $('#game');
  if (!game) return;
  const ae = document.activeElement;
  if (!force && ae === game) return;
  try { game.focus({ preventScroll: true }); } catch (e) { try { game.focus(); } catch (_) {} }
}

function focusExternalCapture() {
  if (cfg.internalIme) return;
  const input = $('#externalImeCapture');
  if (input) setTimeout(() => { try { input.focus({ preventScroll: true }); input.setSelectionRange(input.value.length, input.value.length); } catch (e) {} }, 20);
}

function updateImeGameUI() {
  const on = cfg.internalIme, btn = $('#imeBtn'), cap = $('#externalImeCapture');
  if (btn) {
    btn.textContent = `Bộ gõ tích hợp: ${on ? 'BẬT · KHÓA IME' : 'TẮT'}`;
    btn.classList.toggle('external', !on);
  }
  if (cap) {
    cap.disabled = on;
    cap.tabIndex = on ? -1 : 0;
    cap.setAttribute('inputmode', on ? 'none' : 'text');
    cap.setAttribute('aria-hidden', on ? 'true' : 'false');
    if (on) { cap.value = ''; cap.blur(); }
  }
  if ($('#typingModeHud')) $('#typingModeHud').textContent = on ? `${cfg.typingMode.toUpperCase()} · KHÓA BỘ GÕ NGOÀI` : `${cfg.typingMode.toUpperCase()} · BỘ GÕ NGOÀI`;
  if ($('#typingHintLabel')) $('#typingHintLabel').textContent = on ? 'Phím vật lý · focus khóa' : 'Đầu vào';
  updateCompositionPreview();
  if (on) setTimeout(() => focusGameSink(true), 0);
  else focusExternalCapture();
}

function setInternalIme(on, { reset = true, toast = true } = {}) {
  cfg.internalIme = !!on;
  $('#internalImeToggle').checked = cfg.internalIme;
  try { localStorage.setItem(IME_PREF_KEY, cfg.internalIme ? '1' : '0'); } catch (e) {}
  updateImeSetupUI();
  if (reset && $('#game').classList.contains('active') && G.round) nextPrompt();
  else updateImeGameUI();
  if (toast) showImeToast(cfg.internalIme ? 'Bộ gõ tích hợp: BẬT · không cần UniKey' : 'Bộ gõ tích hợp: TẮT · đang dùng bộ gõ ngoài');
}

$('#imeBtn').onclick = () => setInternalIme(!cfg.internalIme, { reset: true, toast: true });

document.addEventListener('pointerdown', e => {
  if ($('#game').classList.contains('active') && !cfg.internalIme && !e.target.closest('button,select,input,label,.modal')) focusExternalCapture();
}, { passive: true });

document.addEventListener('pointerdown', e => {
  if (e.target.closest('.dev-panel, .volume-panel, input, select, textarea, button, label, .modal, option')) return;
  if (!gameCanOwnFocus()) return;
  setTimeout(() => focusGameSink(true), 0);
}, true);

document.addEventListener('pointerup', e => {
  if (e.target.closest('.dev-panel, .volume-panel, input, select, textarea, button, label, .modal, option')) return;
  if (!gameCanOwnFocus()) return;
  setTimeout(() => focusGameSink(true), 0);
}, true);

document.addEventListener('focusin', e => {
  if (!gameCanOwnFocus()) return;
  const t = e.target;
  if (t === $('#game')) return;
  if (t === $('#externalImeCapture') || t?.matches?.('textarea,[contenteditable=true]')) {
    try { t.blur(); } catch (_) {}
    setTimeout(() => focusGameSink(true), 0);
  }
}, true);

window.addEventListener('focus', () => {
  if (gameCanOwnFocus()) setTimeout(() => focusGameSink(true), 30);
});

// ---------- PROCEDURAL AMBIENT CANVAS & BACKGROUND PRESETS (24 THEMES, 0 KB EXTRA) ----------
let ambientCanvas = null, ambientCtx = null, ambientRaf = null, ambientParticles = [], ambientOrbs = [];
let ambientTheme = {
  hue: 198,
  particleType: 'clouds',
  colors: ['#38bdf8', '#0284c7', '#f59e0b']
};

const BACKGROUND_PRESETS = [
  // 1. Clouds
  { id: 'cloud_azure', name: '☁️ 1. Đảo Mây Khởi Đầu (Azure Mist & Nắng)', bg: 'assets/bg/slime_clean.webp', hue: 198, sat: 1.12, bright: 0.98, particleType: 'clouds', colors: ['#38bdf8', '#0284c7', '#f59e0b'] },
  // 2. Crystal Caves
  { id: 'crystal_neon', name: '💎 2. Hang Pha Lê (Crystal Sparkles)', bg: 'assets/bg/golem_clean.webp', hue: 275, sat: 1.25, bright: 0.95, particleType: 'crystals', colors: ['#c084fc', '#7c3aed', '#2dd4bf'] },
  // 3. Void Abyss
  { id: 'void_abyss', name: '🌌 3. Hư Không Huyền Ảo (Void Dust)', bg: 'assets/bg/void_clean.webp', hue: 310, sat: 1.35, bright: 0.92, particleType: 'nebula', colors: ['#f472b6', '#a21caf', '#38bdf8'] },
  // 4. Volcano Magma
  { id: 'volcano_magma', name: '🌋 4. Hỏa Diệm Sơn (Tro Núi Lửa & Tàn Than)', bg: 'assets/bg/void_clean.webp', hue: 24, sat: 1.45, bright: 0.90, particleType: 'volcanic_embers', colors: ['#fb923c', '#dc2626', '#facc15'] },
  // 5. Mystic Forest
  { id: 'mystic_forest', name: '🌲 5. Rừng Thiêng Hắc Ám (Đom Đóm Lục Bảo)', bg: 'assets/bg/slime_clean.webp', hue: 145, sat: 1.30, bright: 0.88, particleType: 'fireflies', colors: ['#34d399', '#059669', '#fde047'] },
  // 6. Storm Arena
  { id: 'storm_arena', name: '⚡ 6. Đấu Trường Lôi Đình (Sấm Sét & Tia Điện)', bg: 'assets/bg/void_clean.webp', hue: 240, sat: 1.45, bright: 0.94, particleType: 'lightning_sparks', colors: ['#60a5fa', '#3b82f6', '#fbbf24'] },
  // 7. Frost Tundra
  { id: 'frost_tundra', name: '❄️ 7. Băng Đảo Bắc Cực (Băng Tuyết Rơi)', bg: 'assets/bg/golem_clean.webp', hue: 185, sat: 1.20, bright: 1.05, particleType: 'snowflakes', colors: ['#a5f3fc', '#06b6d4', '#e0f2fe'] },
  // 8. Ocean Atlantis
  { id: 'ocean_atlantis', name: '🌊 8. Thủy Cung Atlantis (Bọt Khí Đại Dương)', bg: 'assets/bg/slime_clean.webp', hue: 205, sat: 1.40, bright: 0.95, particleType: 'ocean_bubbles', colors: ['#38bdf8', '#0ea5e9', '#67e8f9'] },
  // 9. Sakura Drift
  { id: 'sakura_drift', name: '🌸 9. Vườn Đào Tiên Cảnh (Hoa Anh Đào Rơi)', bg: 'assets/bg/slime_clean.webp', hue: 335, sat: 1.25, bright: 1.02, particleType: 'sakura_petals', colors: ['#f472b6', '#fb7185', '#fda4af'] },
  // 10. Autumn Leaves
  { id: 'autumn_leaves', name: '🍂 10. Rừng Thu Lá Vàng (Lá Phong Rơi)', bg: 'assets/bg/golem_clean.webp', hue: 35, sat: 1.35, bright: 0.96, particleType: 'autumn_leaves', colors: ['#f97316', '#ea580c', '#facc15'] },
  // 11. Blood Moon
  { id: 'blood_moon', name: '🩸 11. Huyết Nguyệt Ma Vực (Sương Đỏ Tà Thuật)', bg: 'assets/bg/void_clean.webp', hue: 350, sat: 1.50, bright: 0.85, particleType: 'blood_mist', colors: ['#f87171', '#b91c1c', '#7f1d1d'] },
  // 12. Cyber Matrix
  { id: 'cyber_matrix', name: '🔮 12. Ma Trận Số Hóa (Neon Cyber Grid)', bg: 'assets/bg/golem_clean.webp', hue: 290, sat: 1.40, bright: 0.92, particleType: 'cyber_grid', colors: ['#e879f9', '#8b5cf6', '#06b6d4'] },
  // 13. Golden Sanctuary
  { id: 'golden_sanctuary', name: '👑 13. Thánh Điện Hoàng Kim (Hào Quang Mặt Trời)', bg: 'assets/bg/slime_clean.webp', hue: 45, sat: 1.35, bright: 1.02, particleType: 'solar_flares', colors: ['#fde047', '#eab308', '#ca8a04'] },
  // 14. Cosmic Asteroids
  { id: 'cosmic_asteroids', name: '🪐 14. Vành Đai Thiên Thạch (Sao Băng Lướt)', bg: 'assets/bg/void_clean.webp', hue: 260, sat: 1.30, bright: 0.90, particleType: 'cosmic_drift', colors: ['#818cf8', '#6366f1', '#c084fc'] },
  // 15. Emerald Meadow
  { id: 'emerald_meadow', name: '🌿 15. Vườn Địa Đàng (Bào Tử Phấn Hoa)', bg: 'assets/bg/slime_clean.webp', hue: 130, sat: 1.25, bright: 0.98, particleType: 'spores', colors: ['#4ade80', '#22c55e', '#a3e635'] },
  // 16. Bioluminescent Coral
  { id: 'bioluminescent_coral', name: '🪸 16. Rạn San Hô Dạ Quang (Sinh Vật Biển Đêm)', bg: 'assets/bg/golem_clean.webp', hue: 175, sat: 1.45, bright: 0.92, particleType: 'ocean_bubbles', colors: ['#2dd4bf', '#14b8a6', '#06b6d4'] },
  // 17. Golden Desert
  { id: 'golden_desert', name: '🏜️ 17. Hoang Mạc Cát Vàng (Bụi Cát Hoàng Hôn)', bg: 'assets/bg/golem_clean.webp', hue: 30, sat: 1.30, bright: 1.04, particleType: 'sand_drift', colors: ['#fbbf24', '#f59e0b', '#d97706'] },
  // 18. Gothic Castle
  { id: 'gothic_castle', name: '🏰 18. Lâu Đài Ma Cà Rồng (Bóng Ma & Dơi Đêm)', bg: 'assets/bg/void_clean.webp', hue: 280, sat: 1.20, bright: 0.82, particleType: 'ash_fall', colors: ['#a855f7', '#6b21a8', '#3b0764'] },
  // 19. Toxic Lab
  { id: 'toxic_lab', name: '🧪 19. Đầm Lầy Độc Dược (Bong Bóng Axit)', bg: 'assets/bg/golem_clean.webp', hue: 100, sat: 1.50, bright: 0.90, particleType: 'toxic_bubbles', colors: ['#84cc16', '#65a30d', '#22c55e'] },
  // 20. Milky Way
  { id: 'milky_way', name: '🌌 20. Dải Ngân Hà Vô Cực (Tinh Vân Xoáy 3D)', bg: 'assets/bg/void_clean.webp', hue: 250, sat: 1.40, bright: 0.95, particleType: 'stars_nebula', colors: ['#c084fc', '#818cf8', '#38bdf8'] },
  // 21. Torii Sunset
  { id: 'torii_sunset', name: '⛩️ 21. Cổng Trời Thần Đạo (Hoàng Hôn Ánh Dương)', bg: 'assets/bg/slime_clean.webp', hue: 15, sat: 1.40, bright: 1.00, particleType: 'solar_flares', colors: ['#f87171', '#fb923c', '#fde047'] },
  // 22. Ashen Battlefield
  { id: 'ashen_battlefield', name: '🪓 22. Chiến Trường Tro Tàn (Tro Than Rơi)', bg: 'assets/bg/void_clean.webp', hue: 10, sat: 0.90, bright: 0.80, particleType: 'volcanic_embers', colors: ['#9ca3af', '#6b7280', '#ef4444'] },
  // 23. Fireworks Carnival
  { id: 'fireworks_carnival', name: '🎆 23. Lễ Hội Pháo Hoa (Hoa Lửa Lấp Lánh)', bg: 'assets/bg/golem_clean.webp', hue: 320, sat: 1.50, bright: 0.95, particleType: 'fireworks', colors: ['#f43f5e', '#ec4899', '#f59e0b', '#06b6d4'] },
  // 24. Minimalist OLED
  { id: 'minimal_oled', name: '🌑 24. Bóng Đêm OLED 0 KB (Dark Minimalist)', bg: 'assets/bg/void_clean.webp', hue: 0, sat: 0.80, bright: 0.75, particleType: 'minimal', colors: ['#64748b', '#334155', '#1e293b'] }
];

let devBgIndex = 0;
let currentCustomBgId = null;

function setGameBackground(bgIdOrIndex) {
  let preset = null;
  if (typeof bgIdOrIndex === 'number') {
    devBgIndex = (bgIdOrIndex + BACKGROUND_PRESETS.length) % BACKGROUND_PRESETS.length;
    preset = BACKGROUND_PRESETS[devBgIndex];
  } else {
    devBgIndex = BACKGROUND_PRESETS.findIndex(p => p.id === bgIdOrIndex);
    if (devBgIndex < 0) devBgIndex = 0;
    preset = BACKGROUND_PRESETS[devBgIndex];
  }
  if (!preset) return;
  currentCustomBgId = preset.id;

  const bgA = $('#bgA'), bgB = $('#bgB');
  if (preset.bg) {
    if (bgA) {
      bgA.style.backgroundImage = `url('${preset.bg}')`;
      bgA.style.setProperty('--bg-hue', preset.hue + 'deg');
      bgA.style.setProperty('--bg-sat', String(preset.sat));
      bgA.style.setProperty('--bg-bright', String(preset.bright));
      bgA.style.display = 'block';
    }
    if (bgB) {
      bgB.style.backgroundImage = `url('${preset.bg}')`;
      bgB.style.setProperty('--bg-hue', preset.hue + 'deg');
      bgB.style.setProperty('--bg-sat', String(preset.sat));
      bgB.style.setProperty('--bg-bright', String(preset.bright));
      bgB.style.display = 'block';
    }
  } else {
    // Pure 0 KB procedural or OLED canvas background
    if (bgA) { bgA.style.backgroundImage = 'none'; bgA.style.display = 'none'; }
    if (bgB) { bgB.style.backgroundImage = 'none'; bgB.style.display = 'none'; }
  }

  ambientTheme = {
    hue: preset.hue,
    particleType: preset.particleType || 'clouds',
    colors: preset.colors
  };

  const sel = $('#devBgSelect');
  if (sel && sel.value !== preset.id) sel.value = preset.id;
  const badge = $('#devBgPos');
  if (badge) badge.textContent = `${devBgIndex + 1} / ${BACKGROUND_PRESETS.length}`;
  showImeToast(`🖼️ Đã đổi nền (${devBgIndex + 1}/${BACKGROUND_PRESETS.length}): ${preset.name}`);
}

function devNextBg() {
  setGameBackground(devBgIndex + 1);
}

function devPrevBg() {
  setGameBackground(devBgIndex - 1);
}

function initAmbientCanvas() {
  ambientCanvas = document.getElementById('ambientCanvas');
  if (!ambientCanvas) return;
  ambientCtx = ambientCanvas.getContext('2d', { alpha: true });

  function resize() {
    if (!ambientCanvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    ambientCanvas.width = Math.round(window.innerWidth * dpr);
    ambientCanvas.height = Math.round(window.innerHeight * dpr);
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  ambientParticles = [];
  const pCount = Math.min(80, Math.floor(window.innerWidth / 18));
  for (let i = 0; i < pCount; i++) {
    ambientParticles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.45,
      vy: -0.25 - Math.random() * 0.55,
      speed: 0.8 + Math.random() * 1.6,
      size: 1 + Math.random() * 2.8,
      alpha: 0.2 + Math.random() * 0.65,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.03,
      rot: Math.random() * Math.PI * 2,
      colorIndex: Math.floor(Math.random() * 4)
    });
  }

  ambientOrbs = [];
  for (let i = 0; i < 6; i++) {
    ambientOrbs.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      radius: 70 + Math.random() * 140,
      alpha: 0.06 + Math.random() * 0.12,
      phase: Math.random() * Math.PI * 2,
      speed: 0.008 + Math.random() * 0.012,
      colorIndex: i % 3
    });
  }

  if (ambientRaf) cancelAnimationFrame(ambientRaf);
  ambientLoop();
}

function updateAmbientTheme(round = 1) {
  if (currentCustomBgId) return;
  const themeIdx = Math.floor(Math.max(0, round - 1) / 3) % BACKGROUND_PRESETS.length;
  ambientTheme = {
    hue: BACKGROUND_PRESETS[themeIdx].hue,
    particleType: BACKGROUND_PRESETS[themeIdx].particleType || 'clouds',
    colors: BACKGROUND_PRESETS[themeIdx].colors
  };
}

function ambientLoop() {
  if (!ambientCanvas || !ambientCtx) return;
  if (document.hidden) {
    ambientRaf = requestAnimationFrame(ambientLoop);
    return;
  }

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = ambientCanvas.width / dpr, h = ambientCanvas.height / dpr;
  ambientCtx.clearRect(0, 0, ambientCanvas.width, ambientCanvas.height);
  ambientCtx.save();
  ambientCtx.scale(dpr, dpr);

  const colors = ambientTheme.colors || ['#38bdf8', '#0284c7', '#f59e0b'];
  const pType = ambientTheme.particleType || 'clouds';

  // Render ambient background soft radial gradients
  for (let orb of ambientOrbs) {
    orb.phase += orb.speed;
    orb.x += orb.vx + Math.sin(orb.phase) * 0.3;
    orb.y += orb.vy + Math.cos(orb.phase) * 0.3;
    if (orb.x < -orb.radius) orb.x = w + orb.radius;
    if (orb.x > w + orb.radius) orb.x = -orb.radius;
    if (orb.y < -orb.radius) orb.y = h + orb.radius;
    if (orb.y > h + orb.radius) orb.y = -orb.radius;

    const radGrad = ambientCtx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
    const color = colors[orb.colorIndex % colors.length] || colors[0];
    radGrad.addColorStop(0, color);
    radGrad.addColorStop(0.6, color);
    radGrad.addColorStop(1, 'transparent');

    ambientCtx.globalAlpha = orb.alpha * (0.85 + Math.sin(orb.phase) * 0.15);
    ambientCtx.fillStyle = radGrad;
    ambientCtx.beginPath();
    ambientCtx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
    ambientCtx.fill();
  }

  // Render individual customized dynamic particles
  for (let p of ambientParticles) {
    const pAlpha = p.alpha * (0.6 + Math.sin(p.pulse) * 0.4);
    const color = colors[p.colorIndex % colors.length] || '#fff';

    if (pType === 'snowflakes') {
      // 1. Snowflakes (Falling snow crystals & frost)
      ambientCtx.save();
      ambientCtx.translate(p.x, p.y);
      p.rot = (p.rot || 0) + 0.015;
      ambientCtx.rotate(p.rot);
      ambientCtx.strokeStyle = color;
      ambientCtx.lineWidth = 1.2;
      ambientCtx.globalAlpha = Math.max(0, Math.min(1, pAlpha));
      ambientCtx.shadowColor = '#a5f3fc';
      ambientCtx.shadowBlur = 6;
      for (let a = 0; a < 3; a++) {
        ambientCtx.beginPath();
        ambientCtx.moveTo(-p.size * 2, 0);
        ambientCtx.lineTo(p.size * 2, 0);
        ambientCtx.stroke();
        ambientCtx.rotate(Math.PI / 3);
      }
      ambientCtx.restore();

      p.pulse += p.pulseSpeed;
      p.x += Math.sin(p.pulse) * 0.7;
      p.y += p.speed;
      if (p.y > h + 15) { p.y = -15; p.x = Math.random() * w; }
      if (p.x < -15) p.x = w + 15;
      if (p.x > w + 15) p.x = -15;

    } else if (pType === 'ocean_bubbles' || pType === 'toxic_bubbles') {
      // 2. Rising aquatic bubbles & acid spheres with specular glint
      ambientCtx.save();
      ambientCtx.globalAlpha = Math.max(0, Math.min(1, pAlpha * 0.85));
      ambientCtx.strokeStyle = color;
      ambientCtx.lineWidth = 1.4;
      ambientCtx.shadowColor = color;
      ambientCtx.shadowBlur = 7;
      ambientCtx.beginPath();
      ambientCtx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
      ambientCtx.stroke();
      ambientCtx.fillStyle = '#ffffff';
      ambientCtx.globalAlpha = Math.max(0, Math.min(1, pAlpha * 0.9));
      ambientCtx.beginPath();
      ambientCtx.arc(p.x - p.size * 0.7, p.y - p.size * 0.7, Math.max(1, p.size * 0.5), 0, Math.PI * 2);
      ambientCtx.fill();
      ambientCtx.restore();

      p.pulse += p.pulseSpeed;
      p.x += Math.sin(p.pulse) * 0.55;
      p.y -= p.speed * 1.1;
      if (p.y < -20) { p.y = h + 20; p.x = Math.random() * w; }
      if (p.x < -20) p.x = w + 20;
      if (p.x > w + 20) p.x = -20;

    } else if (pType === 'volcanic_embers' || pType === 'fireworks') {
      // 3. Fiery volcanic embers & sparks rising with turbulence
      ambientCtx.save();
      ambientCtx.globalAlpha = Math.max(0, Math.min(1, pAlpha * (0.8 + Math.sin(p.pulse * 3) * 0.2)));
      ambientCtx.fillStyle = color;
      ambientCtx.shadowColor = color;
      ambientCtx.shadowBlur = 10;
      ambientCtx.beginPath();
      ambientCtx.arc(p.x, p.y, p.size * 1.6, 0, Math.PI * 2);
      ambientCtx.fill();
      ambientCtx.fillStyle = '#fff7ed';
      ambientCtx.beginPath();
      ambientCtx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2);
      ambientCtx.fill();
      ambientCtx.restore();

      p.pulse += p.pulseSpeed;
      p.x += Math.sin(p.pulse) * 0.65 + (Math.random() - 0.5) * 0.3;
      p.y -= p.speed * 1.6;
      if (p.y < -15) { p.y = h + 15; p.x = Math.random() * w; }
      if (p.x < -15) p.x = w + 15;
      if (p.x > w + 15) p.x = -15;

    } else if (pType === 'sakura_petals') {
      // 4. Cherry blossom petals falling and spinning
      ambientCtx.save();
      ambientCtx.translate(p.x, p.y);
      p.rot = (p.rot || 0) + 0.02;
      ambientCtx.rotate(p.rot);
      ambientCtx.globalAlpha = Math.max(0, Math.min(1, pAlpha * 0.85));
      ambientCtx.fillStyle = color;
      ambientCtx.shadowColor = color;
      ambientCtx.shadowBlur = 6;
      ambientCtx.beginPath();
      ambientCtx.ellipse(0, 0, p.size * 2.2, p.size * 1.1, 0, 0, Math.PI * 2);
      ambientCtx.fill();
      ambientCtx.restore();

      p.pulse += p.pulseSpeed;
      p.x += Math.sin(p.pulse) * 0.8 + 0.4;
      p.y += p.speed * 0.9;
      if (p.y > h + 15) { p.y = -15; p.x = Math.random() * w; }
      if (p.x < -15) p.x = w + 15;
      if (p.x > w + 15) p.x = -15;

    } else if (pType === 'autumn_leaves') {
      // 5. Golden autumn leaves tumbling
      ambientCtx.save();
      ambientCtx.translate(p.x, p.y);
      p.rot = (p.rot || 0) + 0.018;
      ambientCtx.rotate(p.rot);
      ambientCtx.globalAlpha = Math.max(0, Math.min(1, pAlpha * 0.85));
      ambientCtx.fillStyle = color;
      ambientCtx.shadowColor = color;
      ambientCtx.shadowBlur = 6;
      ambientCtx.beginPath();
      ambientCtx.moveTo(0, -p.size * 2.2);
      ambientCtx.lineTo(p.size * 1.4, 0);
      ambientCtx.lineTo(0, p.size * 2.2);
      ambientCtx.lineTo(-p.size * 1.4, 0);
      ambientCtx.closePath();
      ambientCtx.fill();
      ambientCtx.restore();

      p.pulse += p.pulseSpeed;
      p.x += Math.sin(p.pulse) * 0.9 + 0.3;
      p.y += p.speed * 1.0;
      if (p.y > h + 15) { p.y = -15; p.x = Math.random() * w; }
      if (p.x < -15) p.x = w + 15;
      if (p.x > w + 15) p.x = -15;

    } else if (pType === 'lightning_sparks') {
      // 6. Lightning electric sparks & arcs
      if (Math.random() < 0.06) {
        ambientCtx.save();
        ambientCtx.strokeStyle = color;
        ambientCtx.lineWidth = 1.6;
        ambientCtx.shadowColor = '#60a5fa';
        ambientCtx.shadowBlur = 12;
        ambientCtx.globalAlpha = 0.85;
        ambientCtx.beginPath();
        let sx = p.x, sy = p.y;
        ambientCtx.moveTo(sx, sy);
        for (let seg = 0; seg < 3; seg++) {
          sx += (Math.random() - 0.5) * 30;
          sy += (Math.random() - 0.5) * 30;
          ambientCtx.lineTo(sx, sy);
        }
        ambientCtx.stroke();
        ambientCtx.restore();
      }

      ambientCtx.save();
      ambientCtx.globalAlpha = Math.max(0, Math.min(1, pAlpha));
      ambientCtx.fillStyle = color;
      ambientCtx.shadowColor = color;
      ambientCtx.shadowBlur = 8;
      ambientCtx.beginPath();
      ambientCtx.arc(p.x, p.y, p.size * 1.3, 0, Math.PI * 2);
      ambientCtx.fill();
      ambientCtx.restore();

      p.pulse += p.pulseSpeed;
      p.x += p.vx + Math.sin(p.pulse) * 0.4;
      p.y += p.vy;
      if (p.y < -15) { p.y = h + 15; p.x = Math.random() * w; }
      if (p.y > h + 15) { p.y = -15; p.x = Math.random() * w; }
      if (p.x < -15) p.x = w + 15;
      if (p.x > w + 15) p.x = -15;

    } else {
      // Standard / Fireflies / Celestial Nebula Stars / Cosmic Dust
      ambientCtx.save();
      ambientCtx.globalAlpha = Math.max(0, Math.min(1, pAlpha));
      ambientCtx.fillStyle = color;
      ambientCtx.shadowColor = color;
      ambientCtx.shadowBlur = pType === 'fireflies' ? 12 : 8;
      ambientCtx.beginPath();
      ambientCtx.arc(p.x, p.y, p.size * (pType === 'fireflies' ? 1.5 : 1.1), 0, Math.PI * 2);
      ambientCtx.fill();
      ambientCtx.restore();

      p.pulse += p.pulseSpeed;
      p.x += p.vx + Math.sin(p.pulse) * 0.35;
      p.y += p.vy;
      if (p.y < -15) { p.y = h + 15; p.x = Math.random() * w; }
      if (p.y > h + 15) { p.y = -15; p.x = Math.random() * w; }
      if (p.x < -15) p.x = w + 15;
      if (p.x > w + 15) p.x = -15;
    }
  }

  ambientCtx.restore();
  ambientRaf = requestAnimationFrame(ambientLoop);
}

// Difficulty Banner Notification
let diffBannerTimer = null;
function showDifficultyBanner(title, desc) {
  const banner = $('#difficultyBanner');
  if (!banner) return;
  const t = $('#diffTitle'), d = $('#diffDesc');
  if (t) t.textContent = title;
  if (d) d.textContent = desc;
  banner.classList.remove('show');
  void banner.offsetWidth;
  banner.classList.add('show');
  clearTimeout(diffBannerTimer);
  diffBannerTimer = setTimeout(() => {
    banner.classList.remove('show');
  }, 4800);
}

// ---------- SPRITE ASSETS ----------
function assetHero(p) { return `assets/sprites/${cfg.classKey}_${p}.webp`; }
function currentBoss() { return BOSS_ARCHETYPES[(G.round - 1) % BOSS_ARCHETYPES.length]; }
function assetBoss(p) {
  const b = currentBoss();
  const level = b.level !== undefined ? b.level : ((G.round - 1) % BOSS_ARCHETYPES.length);
  let pose = p;
  if (p === 'cast') pose = 'attack';
  else if (p === 'dead') pose = 'defeat';
  return `assets/sprites/bosses/boss_${level}_${pose}.png`;
}

// ---------- KEYBOARD & TOUCH-TYPING HANDS ENGINE ----------
function baseKeyFor(k) {
  if (!k) return '';
  if (k === '\n' || k === 'enter') return 'enter';
  const map = {
    '~': '`', '!': '1', '@': '2', '#': '3', '$': '4', '%': '5',
    '^': '6', '&': '7', '*': '8', '(': '9', ')': '0', '_': '-', '+': '=',
    '{': '[', '}': ']', '|': '\\', ':': ';', '"': "'", '<': ',', '>': '.', '?': '/'
  };
  if (map[k]) return map[k];
  return k.toLowerCase();
}

function keyEl(k) {
  return document.querySelector(`.key[data-key="${CSS.escape(baseKeyFor(k))}"]`);
}

function getKeyboardStage() {
  return document.querySelector('.keyboard-card .hands-stage') || document.querySelector('.keyboard-card');
}

function keyPoint(k, rx = 0.5, ry = 0.5) {
  const s = getKeyboardStage(), el = keyEl(k);
  if (!s || !el) return null;
  const sr = s.getBoundingClientRect(), kr = el.getBoundingClientRect();
  if (kr.width === 0 || kr.height === 0) return null;
  return {
    x: kr.left + kr.width * rx - sr.left,
    y: kr.top + kr.height * ry - sr.top,
    w: kr.width,
    h: kr.height,
    left: kr.left - sr.left,
    top: kr.top - sr.top
  };
}

function layoutHands() {
  const s = getKeyboardStage(), lh = $('#leftHand'), rh = $('#rightHand');
  if (!s || !lh || !rh) return;

  const pA = keyPoint('a'), pF = keyPoint('f');
  const pJ = keyPoint('j'), pSemi = keyPoint(';');

  if (!pA || !pF || !pJ || !pSemi) {
    requestAnimationFrame(() => {
      const pA2 = keyPoint('a'), pF2 = keyPoint('f'), pJ2 = keyPoint('j'), pSemi2 = keyPoint(';');
      if (pA2 && pF2 && pJ2 && pSemi2) layoutHands();
    });
    return;
  }

  // 1. Left Hand Geometry (Resting naturally on Home Row A S D F & Space)
  const leftSpanX = pF.x - pA.x;
  const leftW = Math.round(leftSpanX / 0.587);
  const leftH = Math.round(leftW * (520 / 332));
  const homeY = (pA.y + pF.y) * 0.5;
  const leftX = Math.round(pA.x - (85 / 332) * leftW);
  const leftY = Math.round(homeY - (50 / 520) * leftH);

  // 2. Right Hand Geometry (Resting naturally on Home Row J K L ; & Space)
  const rightSpanX = pSemi.x - pJ.x;
  const rightW = Math.round(rightSpanX / 0.533);
  const rightH = Math.round(rightW * (520 / 347));
  const rightX = Math.round(pJ.x - (55 / 347) * rightW);
  const rightY = Math.round(homeY - (50 / 520) * rightH);

  lh.style.width = leftW + 'px';
  lh.style.height = leftH + 'px';
  rh.style.width = rightW + 'px';
  rh.style.height = rightH + 'px';

  if (cfg.handGuide) {
    lh.style.left = leftX + 'px';
    lh.style.top = leftY + 'px';
    rh.style.left = rightX + 'px';
    rh.style.top = rightY + 'px';
    lh.style.transform = 'rotate(1deg)';
    rh.style.transform = 'rotate(-1deg)';
    lh.classList.remove('guide-off');
    rh.classList.remove('guide-off');
    lh.style.display = 'block';
    rh.style.display = 'block';
  } else {
    lh.classList.add('guide-off');
    rh.classList.add('guide-off');
    lh.style.display = 'none';
    rh.style.display = 'none';
  }
}

function updateFingertipBeacon(k) {
  const beacon = $('#fingertipBeacon');
  if (!beacon) return;
  if (!cfg.handGuide || !k) {
    beacon.classList.remove('show');
    return;
  }

  const map = FINGER[k] || FINGER[baseKeyFor(k)];
  if (!map) {
    beacon.classList.remove('show');
    return;
  }

  const [side, finger] = map;
  const fingerKey = `${side}-${finger}`;
  const color = FINGER_COLORS[fingerKey] || '#ffd66f';
  beacon.style.setProperty('--beacon-color', color);

  const pt = keyPoint(k, 0.5, 0.5);
  if (!pt) {
    beacon.classList.remove('show');
    return;
  }

  beacon.style.left = Math.round(pt.x) + 'px';
  beacon.style.top = Math.round(pt.y) + 'px';
  beacon.classList.add('show');
}

let handTiltResetTimer = null;
function physicalPress(k) {
  const bk = baseKeyFor(k);
  const el = keyEl(k);
  if (el) {
    el.classList.add('down');
    setTimeout(() => el.classList.remove('down'), 80);
  }

  if (!cfg.handGuide) return;

  const map = FINGER[k] || FINGER[bk];
  if (!map) return;
  const [side, finger] = map;
  const fingerKey = `${side}-${finger}`;
  const fingerColor = FINGER_COLORS[fingerKey] || '#ffd66f';

  // 1. Dynamic Hand Strike Motion (The base hand itself reaches & strikes down)
  const hand = side === 'left' ? $('#leftHand') : $('#rightHand');
  const anchorPt = side === 'left' ? keyPoint('f') : keyPoint('j');
  const targetPt = keyPoint(k, 0.5, 0.5);
  const baseRot = side === 'left' ? 6 : -6;

  if (hand && anchorPt && targetPt) {
    const dx = Math.round((targetPt.x - anchorPt.x) * 0.22);
    const dy = Math.round((targetPt.y - anchorPt.y) * 0.28);
    const rot = Math.max(-5, Math.min(5, (targetPt.x - anchorPt.x) * 0.035));

    hand.style.transform = `translate(${dx}px, ${dy + 4}px) rotate(${(baseRot + rot).toFixed(1)}deg)`;
    hand.style.filter = `drop-shadow(0 10px 24px rgba(0,0,0,0.5)) drop-shadow(0 0 16px ${fingerColor}) brightness(1.2)`;

    clearTimeout(handTiltResetTimer);
    handTiltResetTimer = setTimeout(() => {
      if (hand) {
        hand.style.transform = `rotate(${baseRot}deg)`;
        hand.style.filter = '';
      }
    }, 85);
  }

  // 2. Spawn tactile fingertip strike ripple directly at key center
  const stage = $('#handsStage');
  if (stage && targetPt) {
    const rip = document.createElement('i');
    rip.className = 'finger-strike-ripple';
    rip.style.setProperty('--ripple-color', fingerColor);
    rip.style.left = Math.round(targetPt.x) + 'px';
    rip.style.top = Math.round(targetPt.y) + 'px';
    stage.appendChild(rip);
    setTimeout(() => rip.remove(), 260);
  }
}

function refreshHandGuide() {
  const c = $('.keyboard-card'), btn = $('#handGuideToggleFloating');
  if (c) c.classList.toggle('hand-guide-enabled', !!cfg.handGuide);
  if (btn) {
    btn.textContent = `🙌 Tay hướng dẫn: ${cfg.handGuide ? 'BẬT' : 'TẮT'}`;
    btn.classList.toggle('on', !!cfg.handGuide);
  }
  layoutHands();
  const beacon = $('#fingertipBeacon');
  if (beacon && !cfg.handGuide) beacon.classList.remove('show');
}

const KEYBOARD_ROWS_ANSI = [
  [
    { key: '`', sub: '~', width: '' },
    { key: '1', sub: '!', width: '' },
    { key: '2', sub: '@', width: '' },
    { key: '3', sub: '#', width: '' },
    { key: '4', sub: '$', width: '' },
    { key: '5', sub: '%', width: '' },
    { key: '6', sub: '^', width: '' },
    { key: '7', sub: '&', width: '' },
    { key: '8', sub: '*', width: '' },
    { key: '9', sub: '(', width: '' },
    { key: '0', sub: ')', width: '' },
    { key: '-', sub: '_', width: '' },
    { key: '=', sub: '+', width: '' },
    { key: 'backspace', label: '⌫ Back', width: 'w-backspace' }
  ],
  [
    { key: 'tab', label: '⇥ Tab', width: 'w-tab' },
    { key: 'q', width: '' },
    { key: 'w', width: '' },
    { key: 'e', width: '' },
    { key: 'r', width: '' },
    { key: 't', width: '' },
    { key: 'y', width: '' },
    { key: 'u', width: '' },
    { key: 'i', width: '' },
    { key: 'o', width: '' },
    { key: 'p', width: '' },
    { key: '[', sub: '{', width: '' },
    { key: ']', sub: '}', width: '' },
    { key: '\\', sub: '|', width: 'w-backslash' }
  ],
  [
    { key: 'caps', label: '⇪ Caps', width: 'w-caps' },
    { key: 'a', width: '' },
    { key: 's', width: '' },
    { key: 'd', width: '' },
    { key: 'f', bump: true, width: '' },
    { key: 'g', width: '' },
    { key: 'h', width: '' },
    { key: 'j', bump: true, width: '' },
    { key: 'k', width: '' },
    { key: 'l', width: '' },
    { key: ';', sub: ':', width: '' },
    { key: "'", sub: '"', width: '' },
    { key: 'enter', label: '↵ ENTER', width: 'w-enter' }
  ],
  [
    { key: 'shift-left', label: '⇧ Shift', width: 'w-shift-l' },
    { key: 'z', width: '' },
    { key: 'x', width: '' },
    { key: 'c', width: '' },
    { key: 'v', width: '' },
    { key: 'b', width: '' },
    { key: 'n', width: '' },
    { key: 'm', width: '' },
    { key: ',', sub: '<', width: '' },
    { key: '.', sub: '>', width: '' },
    { key: '/', sub: '?', width: '' },
    { key: 'shift-right', label: '⇧ Shift', width: 'w-shift-r' }
  ],
  [
    { key: 'ctrl-l', label: 'Ctrl', width: 'w-ctrl' },
    { key: 'alt-l', label: 'Alt', width: 'w-alt' },
    { key: ' ', label: 'SPACE BAR', width: 'w-space' },
    { key: 'alt-r', label: 'Alt', width: 'w-alt' },
    { key: 'ctrl-r', label: 'Ctrl', width: 'w-ctrl' }
  ]
];

function buildKeyboard() {
  $('#keyboard').innerHTML = KEYBOARD_ROWS_ANSI.map(row => `
    <div class="key-row">
      ${row.map(item => {
        const k = item.key;
        const f = FINGER[k], fingerClass = f ? ` finger-${f[0]}-${f[1]}` : '';
        const bumpClass = item.bump ? ' bump' : '';
        const widthClass = item.width ? ` ${item.width}` : '';
        const isF = k === 'f', isJ = k === 'j';
        const homeClass = isF ? ' home-f' : isJ ? ' home-j' : '';

        if (item.sub) {
          return `<div class="key has-sub${bumpClass}${widthClass}${homeClass}${fingerClass}" data-key="${k}" data-finger="${f ? `${f[0]}-${f[1]}` : ''}"><span class="key-sub">${item.sub}</span><span class="key-main">${k.toUpperCase()}</span></div>`;
        }
        const text = item.label || k.toUpperCase();
        return `<div class="key${bumpClass}${widthClass}${homeClass}${fingerClass}" data-key="${k}" data-finger="${f ? `${f[0]}-${f[1]}` : ''}"><span class="key-main">${text}</span></div>`;
      }).join('')}
    </div>
  `).join('');

  const btn = $('#handGuideToggleFloating');
  if (btn) {
    btn.onclick = e => {
      e.preventDefault();
      cfg.handGuide = !cfg.handGuide;
      try { localStorage.setItem(HAND_GUIDE_KEY, cfg.handGuide ? '1' : '0'); } catch (_) {}
      refreshHandGuide();
      focusGameSink(true);
    };
  }
}
buildKeyboard();

// ---------- GAME INITIALIZATION & SCALING ----------
function start() {
  clearInterval(bossTimer);
  clearInterval(ticker);
  if (skillUiTimer) clearInterval(skillUiTimer);
  stopMusic();
  stopSpecial();
  paused = false;
  cfg.typingMode = $('#typingModeSelect').value || 'telex';
  cfg.internalIme = $('#internalImeToggle').checked;
  const name = cleanName($('#playerNameInput').value) || 'Chiến binh';
  $('#playerNameInput').value = name;
  rememberPlayer(name);
  const profile = getProfile(name);

  const heroBaseHp = CLASSES[cfg.classKey]?.baseHp || 480;
  G = {
    round: 1, playerName: name, profile, playerHp: heroBaseHp, maxHp: heroBaseHp,
    bossHp: 0, bossMaxHp: 0, bossDamage: 0, bossAttackEvery: 0,
    displayText: '', model: null, target: '', index: 0, score: 0,
    combo: 0, maxCombo: 0, fastStreak: 0, lastWordTime: 0, hadWordError: false,
    keys: 0, correct: 0, start: Date.now(),
    upgrades: { damageBonus: 0, critDamageBonus: 0, lifesteal: 0, maxHpBonus: 0, damageReduction: 0, cooldownReduction: 0, scoreBonus: 0, damageStacks: 0, critStacks: 0, lifestealStacks: 0, hpStacks: 0, defStacks: 0, cdStacks: 0, scoreStacks: 0 },
    recent: [], externalValue: '', externalLastGood: '', pendingExternalKeys: 0,
    bufferedToneStep: -1, bufferedToneKey: '', wordHits: 0, wordEndMeta: new Map(),
    pausedTotal: 0, pauseStarted: 0, bossEffectLast: '', bossEffect: null,
    bossBusy: false, bossArmed: false, lastBossComboSig: '', lastBossFirst: '',
    playerWeakUntil: 0, musicBlock: -1, musicBlockIndex: -1, musicResume: null,
    skillCooldowns: {},
    skillBuffs: { nextWordMult: 1, forceCrit: false, venomCharges: 0, dodgeCharges: 0, shieldCharges: 0, shieldReduction: 0, bossStunUntil: 0, bossSlowUntil: 0, stormCharges: 0 }
  };

  const c = CLASSES[cfg.classKey];
  document.documentElement.style.setProperty('--accent', c.accent);
  $('#className').textContent = c.name;
  $('#portrait').src = assetHero('idle');
  $('#hero').src = assetHero('idle');
  $('#recordBadge').classList.remove('show');
  renderSkills();
  show('game');
  loadRound(1, true);
  ticker = setInterval(updateHud, 450);
  skillUiTimer = setInterval(updateSkillUI, 180);
  updateProfileUI();
  updateBuffUI();
  updateImeGameUI();
  updateVolumeUI();
  refreshHandGuide();
  unlockAudio();
  if (cfg.internalIme) setTimeout(() => focusGameSink(true), 30);
  else focusExternalCapture();
}

function bossStats(round) {
  const r = Math.max(1, round);
  const archIndex = (r - 1) % BOSS_ARCHETYPES.length;
  const loop = Math.floor((r - 1) / BOSS_ARCHETYPES.length); // 0 for 1-10, 1 for 11-20, 2 for 21-30...
  const a = BOSS_ARCHETYPES[archIndex];

  // 1. Balanced Monotonic Boss HP Curve:
  // Smooth progression across all loops so Round 15-30 remains fun, thrilling, and beatable
  let hp = 1200;
  for (let i = 2; i <= r; i++) {
    const curArchIdx = (i - 1) % BOSS_ARCHETYPES.length;
    // Controlled step growth: 15-18% in early game, 10-12% in mid/endgame
    const stepGrowth = i <= 10
      ? (0.16 + (curArchIdx === 9 ? 0.08 : (curArchIdx === 0 ? 0.04 : 0.01)))
      : (0.11 + (curArchIdx === 9 ? 0.04 : 0.008));
    hp = Math.round(hp * (1 + stepGrowth) + 80);
  }

  // 2. Boss Size Scaling (Capped smoothly between 0.85 and 1.28)
  const baseSize = Math.min(1.28, 0.85 + Math.min(9, r - 1) * 0.042 + Math.min(0.06, loop * 0.02));

  // 3. Attack Power & Speed scaling
  const power = 1 + 0.09 * (r - 1);
  const baseDamage = Math.max(10, 12 + Math.floor((r - 1) * 1.1) + loop * 3);
  const attackEvery = Math.max(2800, 4800 - (r - 1) * 80);

  // 4. Tier Classification & Visual Corrupted Tint
  let tierPrefix = '', tierClass = 'tier-normal', tierBadge = 'TIÊU CHUẨN';
  if (loop === 1) {
    tierPrefix = '[HẮC ÁM] ';
    tierClass = 'tier-corrupted';
    tierBadge = '🔥 HẮC ÁM (LOOP 2)';
  } else if (loop === 2) {
    tierPrefix = '[HƯ KHÔNG] ';
    tierClass = 'tier-void';
    tierBadge = '🌌 HƯ KHÔNG (LOOP 3)';
  } else if (loop >= 3) {
    tierPrefix = '[THÁI CỔ] ';
    tierClass = 'tier-ancient';
    tierBadge = '👑 THÁI CỔ (LOOP ' + (loop + 1) + ')';
  }

  const bossTitle = `${tierPrefix}${a.boss}`;

  return {
    ...a,
    bossTitle,
    tierClass,
    tierBadge,
    loop,
    hp,
    damage: Math.max(1, Math.round(baseDamage * (1 + loop * 0.10))),
    attackEvery,
    power,
    size: baseSize,
    hue: ((r - 1) * 36) % 360,
    sat: 1 + Math.min(0.45, (r - 1) * 0.02),
    flip: a.flip || 1
  };
}

function applyRoundTheme(stats, target = '#bgA') {
  if (currentCustomBgId) return;
  const bg = $(target);
  if (!bg) return;
  bg.style.setProperty('--bg-hue', stats.hue + 'deg');
  bg.style.setProperty('--bg-sat', String(1.08 + Math.min(0.32, (G.round - 1) * 0.02)));
  $('#boss').style.setProperty('--boss-scale', stats.size.toFixed(3));
  $('#boss').style.setProperty('--boss-flip', String(stats.flip || 1));
  $('#boss').style.setProperty('--boss-hue', (stats.hue * 0.55) + 'deg');
  $('#boss').style.setProperty('--boss-sat', stats.sat.toFixed(2));
  const fxTheme = {
    slime: { core: '#67d8ff', glow: '#1791ff', ring: 'rgba(63,225,255,.55)' },
    golem: { core: '#b790ff', glow: '#764cff', ring: 'rgba(177,125,255,.55)' },
    void: { core: '#ff6af2', glow: '#7f2cff', ring: 'rgba(255,92,234,.58)' }
  }[stats.kind] || { core: '#ff6af2', glow: '#7f2cff', ring: 'rgba(255,92,234,.58)' };
  document.documentElement.style.setProperty('--boss-fx-core', fxTheme.core);
  document.documentElement.style.setProperty('--boss-fx-glow', fxTheme.glow);
  document.documentElement.style.setProperty('--boss-fx-ring', fxTheme.ring);
  document.documentElement.setAttribute('data-boss-kind', stats.kind);
}

function loadRound(round, initial = false) {
  G.round = round;
  G.strictCasing = round >= 3;
  G.requireEnter = round >= 2;
  G.transition = false;
  G.bossBusy = false;
  G.bossArmed = false;
  const s = bossStats(round);
  G.bossEffect = randomBossEffect();
  G.bossHp = G.bossMaxHp = s.hp;
  G.bossDamage = Math.max(1, Math.round(s.damage * (G.bossEffect.damageMult || 1)));
  G.bossAttackEvery = Math.max(2300, Math.round(s.attackEvery * (G.bossEffect.attackMult || 1)));
  G.bossCritChance = G.bossEffect.critChance || 0;
  G.bossCritMult = G.bossEffect.critMult || 1;
  G.bossLeech = G.bossEffect.leech || 0;
  G.lastBossComboSig = '';
  G.lastBossFirst = '';
  G.bossRaged = false;
  G.playerWeakUntil = 0;
  G.skillBuffs.bossStunUntil = 0;
  G.skillBuffs.bossSlowUntil = 0;

  updateAmbientTheme(round);

  if (round === 3) {
    setTimeout(() => {
      showDifficultyBanner('🔥 ĐỘ KHÓ NÂNG CAO: THỰC CHIẾN', 'Bắt buộc bấm SHIFT để viết hoa đúng chữ cái & bấm ENTER để dứt điểm câu!');
    }, 450);
  } else if (round === 6) {
    setTimeout(() => {
      showDifficultyBanner('⚡ ĐỘ KHÓ BẬC THẦY: THỬ THÁCH VÔ CỰC', 'Đoạn văn dài, danh từ riêng & thử thách tốc độ phản xạ cao!');
    }, 450);
  } else if (!initial && round > 1) {
    const hpInc = Math.max(25, Math.round(G.maxHp * 0.04));
    G.maxHp += hpInc;
    G.playerHp = Math.min(G.maxHp, G.playerHp + Math.round(G.maxHp * 0.30) + 50);
    if ((round - 1) % 3 === 0) {
      showImeToast(`⚔ Thế giới mới! Tăng +${hpInc} HP tối đa & Hồi phục thể lực!`);
      setTimeout(() => {
        showDifficultyBanner('🌌 THẾ GIỚI MỚI MỞ RA!', `Bước vào ${s.world} · Nhịp độ chiến đấu hào hùng hơn!`);
      }, 450);
    }
  }

  $('#worldText').textContent = s.world;
  $('#roundText').textContent = `VÒNG ${round}`;
  $('#bossName').textContent = `${s.bossTitle || s.boss} · Vòng ${round}`;
  const roundBonus = Math.round((s.power - 1) * 100), totalAtkMult = s.power * (G.bossEffect.damageMult || 1), totalAtkBonus = Math.round((totalAtkMult - 1) * 100);
  $('#bossPowerText').textContent = `Sức mạnh boss x${s.power.toFixed(2)}`;
  const bbt = $('#bossBonusText');
  if (bbt) bbt.textContent = `TỔNG BONUS: HP +${roundBonus}% · ATK +${totalAtkBonus}%${G.bossEffect.attackMult && G.bossEffect.attackMult !== 1 ? ` · Tốc đánh +${Math.round((1 - G.bossEffect.attackMult) * 100)}%` : ''}`;
  const bet = $('#bossEffectTag');
  if (bet) {
    bet.textContent = `${G.bossEffect.icon} ${G.bossEffect.name} · ${G.bossEffect.desc}`;
    bet.style.setProperty('--effect-color', G.bossEffect.color);
  }
  $('#levelText').textContent = `Vòng ${round}`;
  if (!currentCustomBgId) {
    $('#bgA').style.backgroundImage = `url('${s.bg}')`;
  }
  $('#bgA').className = 'battle-bg';
  $('#bgB').className = 'battle-bg next';
  applyRoundTheme(s, '#bgA');
  $('#boss').src = assetBoss('idle');
  $('#bossWrap').className = `fighter boss-wrap idle ${s.tierClass || ''}`;
  $('#hero').src = assetHero('idle');
  $('#heroWrap').className = 'fighter hero-wrap idle';
  $('#stageDots').innerHTML = BOSS_ARCHETYPES.map((_, n) => `<i class="${n === (round - 1) % BOSS_ARCHETYPES.length ? 'on' : ''}"></i>`).join('');
  nextPrompt();
  updateHud();
  clearInterval(bossTimer);
  stopSpecial();
  if (musicOn) playBattleMusic(false);
  if (!initial) safe(() => flash(0.12, '120,170,255'));
  showImeToast('Boss bắt đầu tấn công sau 2.5s hoặc sau phím gõ đầu tiên');
  setTimeout(() => {
    if (!G.bossArmed && !G.transition && G.round === round && $('#game').classList.contains('active')) {
      armBoss();
    }
  }, 2500);
}

function advanceRound() {
  const next = G.round + 1, s = bossStats(next), cur = $('#bgA'), nxt = $('#bgB');
  G.transition = true;
  nxt.style.backgroundImage = `url('${s.bg}')`;
  nxt.style.setProperty('--bg-hue', s.hue + 'deg');
  nxt.style.setProperty('--bg-sat', String(1.08 + Math.min(0.32, (next - 1) * 0.02)));
  cur.className = 'battle-bg out';
  nxt.className = 'battle-bg next in';
  setTimeout(() => {
    cur.style.backgroundImage = `url('${s.bg}')`;
    cur.style.setProperty('--bg-hue', s.hue + 'deg');
    cur.style.setProperty('--bg-sat', String(1.08 + Math.min(0.32, (next - 1) * 0.02)));
    cur.className = 'battle-bg';
    nxt.className = 'battle-bg next';
    loadRound(next, false);
  }, 1080);
}

function computeWordEndMeta(model) {
  const meta = new Map();
  if (!model || !model.chars) return meta;
  let i = 0;
  while (i < model.chars.length) {
    if (isLetter(model.chars[i])) {
      const start = i, letters = [];
      let endStep = -1, complex = 0;
      while (i < model.chars.length && isLetter(model.chars[i])) {
        const ch = model.chars[i], info = charInfo(ch);
        letters.push(ch);
        if (info.shape || info.tone || (info.base === 'd' && ch.toLocaleLowerCase('vi-VN') === 'đ')) complex++;
        endStep = Math.max(endStep, model.charEnd[i] ?? -1);
        i++;
      }
      const len = letters.length, difficulty = 1 + Math.min(0.45, complex * 0.055 + Math.max(0, len - 6) * 0.025);
      if (endStep >= 0) meta.set(endStep, { text: letters.join(''), letters: len, complex, difficulty, startChar: start, endChar: i - 1 });
    } else {
      i++;
    }
  }
  return meta;
}

function nextPrompt() {
  G.bufferedToneStep = -1;
  G.bufferedToneKey = '';
  let text = '';
  if (devPinnedPrompt) {
    text = normalizePromptText(devPinnedPrompt.text);
    G.promptTheme = devPinnedPrompt.theme || 'Luyện tập';
    devPinnedPrompt = null; // Clear single-use pin after loading
  } else {
    text = promptForRound(G.round);
    let tries = 0;
    while (G.recent.includes(text) && tries++ < 30) text = promptForRound(G.round);
  }
  G.recent.push(text);
  if (G.recent.length > 60) G.recent.shift();

  G.displayText = text;
  G.model = cfg.internalIme ? buildTypingModel(text, cfg.typingMode) : buildDirectModel(text);
  G.target = G.model.target;
  G.index = 0;
  G.wordEndMeta = computeWordEndMeta(G.model);
  G.externalValue = '';
  G.externalLastGood = '';
  G.pendingExternalKeys = 0;
  const capEl = $('#externalImeCapture');
  if (capEl) capEl.value = '';
  renderPrompt();
  guide();
  updateImeGameUI();
}

function rawKeystrokesForWord(wordText) {
  if (!wordText) return '';
  const model = buildTypingModel(wordText, cfg.typingMode);
  return model.target;
}

function renderPlainWord() {
  // Redundant raw row removed in favor of single unified interactive typing stage
}

function renderPrompt() {
  const chars = G.model.chars, isLong = G.displayText.length > 26;
  $('#wordPanel').classList.toggle('long', isLong);
  const form = G.round < 3 ? 'TỪ TIẾNG VIỆT' : G.round < 7 ? 'CỤM TỪ TIẾNG VIỆT' : G.round < 10 ? 'CÂU TIẾNG VIỆT' : 'ĐOẠN VĂN TIẾNG VIỆT';
  if ($('#promptLabel')) $('#promptLabel').textContent = `${form} · ${G.promptTheme || 'THỬ THÁCH'}`;

  const k = guideKey();
  // Update Unified Word / Keystroke Subtitle
  const rawPill = $('#rawInputText'), hintLabel = $('#typingHintLabel');
  if (rawPill) {
    if (isToneStep(G.index)) {
      const tInfo = getToneStepInfo(G.index);
      if (hintLabel) hintLabel.textContent = 'Gõ dấu thanh';
      rawPill.innerHTML = `GÕ DẤU <span style="color:#facc15;font-weight:900">${tInfo.toneName}</span>: bấm [ <strong>${keyLabel(k)}</strong> ] cho chữ "<strong>${escapeHtml(tInfo.targetChar)}</strong>"`;
    } else if (k === ' ' || k === 'space') {
      if (hintLabel) hintLabel.textContent = 'Phím tiếp theo';
      rawPill.innerHTML = `Nhấn phím <span style="color:#facc15;font-weight:900">[ SPACE ␣ ]</span> (Dấu Cách)`;
    } else {
      const bounds = wordBoundsForStep(G.index);
      if (bounds && G.model) {
        const activeWordChars = G.model.chars.slice(bounds[0], bounds[1] + 1).join('');
        const activeKeystrokes = rawKeystrokesForWord(activeWordChars);
        if (hintLabel) hintLabel.textContent = 'Từ đang gõ';
        rawPill.innerHTML = `${escapeHtml(activeWordChars)} (<span style="color:#94a3b8">${escapeHtml(activeKeystrokes)}</span>) · Phím: [ <strong>${keyLabel(k)}</strong> ]`;
      } else {
        if (hintLabel) hintLabel.textContent = 'Phím tiếp theo';
        rawPill.innerHTML = `Phím cần bấm: [ <strong>${keyLabel(k)}</strong> ]`;
      }
    }
  }

  // Update Sentence Progress Bar
  const sBar = $('#sentenceBarFill');
  if (sBar && G.model && G.model.target.length) {
    const pct = Math.min(100, Math.round((G.index / G.model.target.length) * 100));
    sBar.style.width = pct + '%';
  }

  if (!isLong) {
    $('#wordTiles').className = 'word-tiles';
    $('#wordTiles').innerHTML = chars.map((ch, i) => {
      const st = displayState(i);
      const isCur = st.includes('current');
      const isTone = st.includes('tone-target');
      if (ch === '\n') return `<span class="tile enter ${st}"><kbd>↵</kbd> ENTER</span>`;
      if (/\s/.test(ch)) {
        if (isCur) return `<span class="tile space current current-space"><span class="space-badge">␣ SPACE</span></span>`;
        return `<span class="tile space"></span>`;
      }
      if (isTone) {
        const tInfo = getToneStepInfo(G.index);
        const tKey = tInfo ? keyLabel(tInfo.key) : '';
        return `<span class="tile ${st}"><span class="char-main">${escapeHtml(ch)}</span><span class="tone-badge">${tKey}</span></span>`;
      }
      if (!isLetter(ch)) return `<span class="tile punct ${st}">${escapeHtml(ch)}</span>`;
      return `<span class="tile ${st}">${escapeHtml(ch)}</span>`;
    }).join('');
  } else {
    $('#wordTiles').className = 'word-tiles long-text';
    $('#wordTiles').innerHTML = chars.map((ch, i) => {
      const st = displayState(i);
      const isCur = st.includes('current');
      const isTone = st.includes('tone-target');
      if (ch === '\n') return `<span class="flow-punct enter-flow ${st}"><kbd>↵</kbd> ENTER</span>`;
      if (/\s/.test(ch)) {
        if (isCur) return `<span class="flow-char current current-space"><span class="space-badge">␣ SPACE</span></span>`;
        return `<span class="flow-char ${st}"> </span>`;
      }
      if (isTone) {
        const tInfo = getToneStepInfo(G.index);
        const tKey = tInfo ? keyLabel(tInfo.key) : '';
        return `<span class="flow-char ${st}"><span class="char-main">${escapeHtml(ch)}</span><span class="tone-badge">${tKey}</span></span>`;
      }
      if (!isLetter(ch)) return `<span class="flow-punct ${st}">${escapeHtml(ch)}</span>`;
      return `<span class="flow-char ${st}">${escapeHtml(ch)}</span>`;
    }).join('');

    requestAnimationFrame(() => {
      const cur = document.querySelector('#wordTiles .flow-char.current, #wordTiles .flow-punct.current, #wordTiles .current-space');
      const container = document.getElementById('wordTiles');
      if (cur && container) {
        const offsetTop = cur.offsetTop - container.offsetTop;
        const targetScroll = Math.max(0, offsetTop - 45);
        container.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }
    });
  }
}

function need() { return G.target[G.index] || ''; }
function guideKey() {
  const k = need();
  if (cfg.internalIme) return k;
  if (isLetter(k)) return charInfo(k).base;
  return k;
}

function keyLabel(k) {
  if (k === '\n' || k === 'enter') return 'ENTER ↵';
  const shift = {
    '?': 'Shift + /', '!': 'Shift + 1', ':': 'Shift + ;', '"': "Shift + '",
    '(': 'Shift + 9', ')': 'Shift + 0', '~': 'Shift + `', '@': 'Shift + 2',
    '#': 'Shift + 3', '$': 'Shift + 4', '%': 'Shift + 5', '^': 'Shift + 6',
    '&': 'Shift + 7', '*': 'Shift + 8', '_': 'Shift + -', '+': 'Shift + =',
    '{': 'Shift + [', '}': 'Shift + ]', '|': 'Shift + \\', '<': 'Shift + ,', '>': 'Shift + .'
  };
  if (shift[k]) return shift[k];
  if (k && /^[A-Z]$/.test(k)) return `Shift + ${k}`;
  return (k === ' ' ? 'SPACE' : (k || '').toUpperCase());
}

function homeHintFor(k) {
  if (!k) return '';
  if (k === ' ') return ' · ngón cái bấm Space';
  if (k === '\n' || k === 'enter') return ' · vươn từ ; sang Enter';
  const f = FINGER[k];
  if (!f) return '';
  const [side, finger] = f;
  if (side === 'left') {
    if (k === 'f') return ' · neo ngón trỏ (Home F)';
    if (k === 'd') return ' · neo ngón giữa (Home D)';
    if (k === 's') return ' · neo ngón áp út (Home S)';
    if (k === 'a') return ' · neo ngón út (Home A)';
    if (finger === 'index') return ' · vươn từ F sang';
    if (finger === 'middle') return ' · vươn từ D sang';
    if (finger === 'ring') return ' · vươn từ S sang';
    if (finger === 'pinky') return ' · vươn từ A sang';
  } else {
    if (k === 'j') return ' · neo ngón trỏ (Home J)';
    if (k === 'k') return ' · neo ngón giữa (Home K)';
    if (k === 'l') return ' · neo ngón áp út (Home L)';
    if (k === ';') return ' · neo ngón út (Home ;)';
    if (finger === 'index') return ' · vươn từ J sang';
    if (finger === 'middle') return ' · vươn từ K sang';
    if (finger === 'ring') return ' · vươn từ L sang';
    if (finger === 'pinky') return ' · vươn từ ; sang';
  }
  return '';
}

function guide() {
  const k = guideKey();
  const bk = baseKeyFor(k);
  const isShiftNeeded = k && k !== '\n' && k !== 'enter' && (/^[A-Z]$/.test(k) || /[~!@#$%^&*()_+{}|:"<>?]/.test(k));
  const f = FINGER[k] || FINGER[bk];

  $$('.key').forEach(el => {
    let isExp = el.dataset.key === bk;
    if (isShiftNeeded) {
      if (f && f[0] === 'left' && el.dataset.key === 'shift-right') isExp = true;
      if (f && f[0] === 'right' && el.dataset.key === 'shift-left') isExp = true;
    }
    el.classList.toggle('expected', isExp);
  });

  if ($('#currentKey')) {
    if (isToneStep(G.index)) {
      const tInfo = getToneStepInfo(G.index);
      $('#currentKey').textContent = `${keyLabel(k)} (Dấu ${tInfo.toneName})`;
    } else if (k === ' ' || k === 'space') {
      $('#currentKey').textContent = 'SPACE ␣';
    } else {
      $('#currentKey').textContent = keyLabel(k);
    }
  }

  if ($('#fingerLabel')) {
    if (k === '\n' || k === 'enter') {
      $('#fingerLabel').textContent = 'Ngón út tay phải · Nhấn ENTER chốt câu';
    } else if (k === ' ' || k === 'space') {
      $('#fingerLabel').textContent = 'Ngón cái hai tay · Bấm phím SPACE (Dấu Cách)';
    } else if (isToneStep(G.index)) {
      const tInfo = getToneStepInfo(G.index);
      const [side, finger] = f || ['left', 'index'];
      const h = homeHintFor(k);
      $('#fingerLabel').textContent = `${LABEL[finger]} tay ${side === 'left' ? 'trái' : 'phải'}${h} · Đặt dấu ${tInfo.toneName} cho "${tInfo.targetChar}"`;
    } else if (f) {
      const [side, finger] = f;
      const h = homeHintFor(k);
      if (isShiftNeeded) {
        const oppShift = side === 'left' ? 'Út phải (Shift)' : 'Út trái (Shift)';
        $('#fingerLabel').textContent = `${oppShift} + ${LABEL[finger]} tay ${side === 'left' ? 'trái' : 'phải'}`;
      } else {
        $('#fingerLabel').textContent = `${LABEL[finger]} tay ${side === 'left' ? 'trái' : 'phải'}${h}`;
      }
    } else {
      $('#fingerLabel').textContent = '—';
    }
  }

  renderPlainWord();

  const th = $('#toneStepHint');
  if (th) {
    if (isToneStep(G.index)) {
      const tInfo = getToneStepInfo(G.index);
      th.textContent = `ĐẶT DẤU ${tInfo.toneName}: chỉ nhấn phím [ ${keyLabel(k)} ] cho chữ “${tInfo.targetChar}”`;
      th.classList.add('show');
    } else {
      th.textContent = '';
      th.classList.remove('show');
    }
  }
  updateCompositionPreview();
  updateFingertipBeacon(k);
  refreshHandGuide();
}

function remindExpected() {
  const items = [$('.tile.current'), $('.flow-char.current'), $('.flow-punct.current'), $('.key.expected'), $('.readout'), $('#toneStepHint.show')].filter(Boolean);
  items.forEach(el => el.classList.remove('wrong-remind'));
  void document.body.offsetWidth;
  items.forEach(el => el.classList.add('wrong-remind'));
  setTimeout(() => items.forEach(el => el.classList.remove('wrong-remind')), 760);
}

function keyFromEvent(e) {
  const c = e.code || '';
  if (/^Key[A-Z]$/.test(c)) return c.slice(3).toLowerCase();
  if (/^Digit[0-9]$/.test(c)) {
    const n = c.slice(5);
    if (e.shiftKey) return { '1': '!', '9': '(', '0': ')' }[n] || n;
    return n;
  }
  if (c === 'Space') return ' ';
  if (c === 'Comma') return ',';
  if (c === 'Period') return '.';
  if (c === 'Slash') return e.shiftKey ? '?' : '/';
  if (c === 'Semicolon') return e.shiftKey ? ':' : ';';
  if (c === 'Quote') return e.shiftKey ? '"' : "'";
  if (c === 'Minus') return '-';
  return '';
}

function damageMultiplier() {
  const weak = Date.now() < (G.playerWeakUntil || 0) ? 0.85 : 1;
  return (1 + G.upgrades.damageBonus) * weak;
}

function applyLifesteal(damage, extra = 0) {
  const rate = Math.max(0, (G.upgrades?.lifesteal || 0) + extra);
  if (rate <= 0 || damage <= 0) return;
  const heal = damage * rate;
  if (heal > 0 && G.playerHp < G.maxHp) {
    const missing = G.maxHp - G.playerHp;
    const actualHeal = Math.min(missing, heal);
    G.playerHp = Math.min(G.maxHp, G.playerHp + actualHeal);
    spawnHealFloat(Math.max(1, Math.round(actualHeal)), true);
    playLocal('crit', 0.5);
    updateHud();
    applyDangerMusic();
  }
}

function armBoss() {
  if (G.bossArmed || G.transition) return;
  G.bossArmed = true;
  startBossTimer();
  $('#bossPowerText').textContent = `Boss đang phản công · combo skill tăng theo vòng`;
  showImeToast('Boss đã thức tỉnh!');
}

function wordDamageFor(meta) {
  const cc = CLASS_COMBAT[cfg.classKey];
  const comboBonus = (G.fastStreak || 0) >= 3 ? (1 + Math.min(0.80, (G.fastStreak) * 0.05)) : 1;
  const roundScale = 1 + (Math.max(1, G.round || 1) - 1) * 0.07;
  let mult = damageMultiplier() * comboBonus * roundScale * (G.skillBuffs.nextWordMult || 1), extraLeech = 0;
  if (G.skillBuffs.venomCharges > 0) { mult *= 1.30; extraLeech = 0.04; }
  if (G.skillBuffs.stormCharges > 0) mult *= 1.40;
  const base = Math.max(1, meta.letters) * cc.wordBase * 2 * meta.difficulty;
  return { damage: Math.max(1, Math.round(base * mult)), extraLeech, comboBonus };
}

function consumeWordSkillBuffs() {
  G.skillBuffs.nextWordMult = 1;
  G.skillBuffs.forceCrit = false;
  if (G.skillBuffs.venomCharges > 0) G.skillBuffs.venomCharges--;
  if (G.skillBuffs.stormCharges > 0) G.skillBuffs.stormCharges--;
  updateSkillUI();
}

function toneKeySet() {
  return cfg.typingMode === 'vni' ? new Set(['1', '2', '3', '4', '5']) : new Set(['s', 'f', 'r', 'x', 'j']);
}

function wordBoundsForStep(step) {
  if (!G.model || step < 0 || step >= G.model.stepMap.length) return null;
  const ci = G.model.stepMap[step], chars = G.model.chars;
  if (ci == null || !isLetter(chars[ci])) return null;
  let a = ci, b = ci;
  while (a > 0 && isLetter(chars[a - 1])) a--;
  while (b + 1 < chars.length && isLetter(chars[b + 1])) b++;
  return [a, b];
}

function consumeEarlyTone(key) {
  if (!G.model || G.index >= G.model.target.length) return false;
  if (!toneKeySet().has(key)) return false; // ONLY allow Vietnamese tone keys

  const bounds = wordBoundsForStep(G.index);
  if (!bounds) return false;

  // Search within the active word for the specific tone step si > G.index matching the typed key
  let toneSi = -1;
  for (let si = G.index + 1; si < G.model.target.length; si++) {
    const ci = G.model.stepMap[si];
    if (ci < bounds[0] || ci > bounds[1]) break; // Outside current word
    if (G.model.toneTargets && G.model.toneTargets[si] != null && G.model.target[si] === key) {
      toneSi = si;
      break;
    }
  }

  if (toneSi < 0) return false;

  // Splice out toneSi from G.model.target, stepMap, toneTargets, toneNames
  G.model.target = G.model.target.slice(0, toneSi) + G.model.target.slice(toneSi + 1);
  G.model.stepMap.splice(toneSi, 1);
  if (G.model.toneTargets) G.model.toneTargets.splice(toneSi, 1);
  if (G.model.toneNames) G.model.toneNames.splice(toneSi, 1);

  // Adjust charStart and charEnd for all characters
  for (let c = 0; c < G.model.chars.length; c++) {
    if (G.model.charStart[c] > toneSi) G.model.charStart[c]--;
    if (G.model.charEnd[c] >= toneSi) G.model.charEnd[c]--;
  }

  // Adjust wordEndMeta map keys
  if (G.wordEndMeta) {
    const newMeta = new Map();
    for (const [endStep, val] of G.wordEndMeta.entries()) {
      const newStep = endStep >= toneSi ? endStep - 1 : endStep;
      newMeta.set(newStep, val);
    }
    G.wordEndMeta = newMeta;
  }

  G.correct++;
  G.combo++;
  G.maxCombo = Math.max(G.maxCombo, G.combo);
  G.wrong = 0;
  if (!G.bossArmed) armBoss();

  renderPrompt();
  guide();
  updateCompositionPreview();
  updateHud();
  showImeToast(`✓ Đã nhận dấu ${keyLabel(key)}`);
  return true;
}

function correctUnit(countKeyCorrect = true) {
  if (countKeyCorrect) G.correct++;
  const completedStep = G.index;
  G.index++;
  G.combo++;
  G.maxCombo = Math.max(G.maxCombo, G.combo);
  G.wrong = 0;
  if (!G.bossArmed) armBoss();

  const meta = G.wordEndMeta?.get(completedStep);
  if (meta) {
    const now = Date.now();
    const wordDuration = G.lastWordTime ? (now - G.lastWordTime) : 1000;
    G.lastWordTime = now;

    // Fast word detection: <= 2400ms without error in current word
    if (!G.hadWordError && wordDuration <= 2400) {
      G.fastStreak = (G.fastStreak || 0) + 1;
      if (G.fastStreak === 3) {
        showImeToast('🔥 COMBO KÍCH HOẠT! +15% SÁT THƯƠNG');
      }
    } else {
      G.fastStreak = 1;
    }
    G.hadWordError = false;

    G.wordHits = (G.wordHits || 0) + 1;
    const cc = CLASS_COMBAT[cfg.classKey];
    const calc = wordDamageFor(meta);
    let crit = !!G.skillBuffs.forceCrit || G.wordHits % cc.critEvery === 0;
    let damage = calc.damage;

    if (crit) {
      const critMultiplier = (cc.critMult || 1.65) * (1 + (G.upgrades?.critDamageBonus || 0));
      damage = Math.round(damage * critMultiplier);
    }
    G.bossHp = Math.max(0, G.bossHp - damage);
    G.score += Math.round(damage * 5 * (1 + (G.round - 1) * 0.03) * (1 + (G.upgrades?.scoreBonus || 0)));
    applyLifesteal(damage, calc.extraLeech);
    safe(() => heroAttack(damage, true, crit));
    consumeWordSkillBuffs();
    if (G.bossHp <= 0) {
      updateHud();
      clearRound();
      return false;
    }
    if (isBossInRage() && !G.bossRaged) {
      G.bossRaged = true;
      triggerBossRagePhase();
    }
  }

  if (G.index >= G.model.target.length) {
    setTimeout(() => { if (!G.transition) nextPrompt(); }, 150);
    return false;
  }
  renderPrompt();
  guide();
  updateCompositionPreview();
  updateHud();
  return true;
}

function wrongUnit() {
  G.combo = 0;
  G.fastStreak = 0;
  G.hadWordError = true;
  G.wrong++;
  wordShake();
  remindExpected();
  if (G.wrong >= 3) {
    G.wrong = 0;
    bossAttack();
  }
  updateHud();
}

function escapeHtml(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function keyFromEvent(e) {
  if (!e) return '';
  if (e.key === 'Enter' || e.code === 'Enter' || e.code === 'NumpadEnter') return '\n';

  const codeMap = {
    Space: ' ',
    Backquote: '`',
    Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5',
    Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0',
    Minus: '-', Equal: '=',
    BracketLeft: '[', BracketRight: ']', Backslash: '\\',
    KeyQ: 'q', KeyW: 'w', KeyE: 'e', KeyR: 'r', KeyT: 't',
    KeyY: 'y', KeyU: 'u', KeyI: 'i', KeyO: 'o', KeyP: 'p',
    KeyA: 'a', KeyS: 's', KeyD: 'd', KeyF: 'f', KeyG: 'g',
    KeyH: 'h', KeyJ: 'j', KeyK: 'k', KeyL: 'l',
    Semicolon: ';', Quote: "'",
    KeyZ: 'z', KeyX: 'x', KeyC: 'c', KeyV: 'v', KeyB: 'b',
    KeyN: 'n', KeyM: 'm',
    Comma: ',', Period: '.', Slash: '/'
  };

  if (e.code && codeMap[e.code]) {
    const base = codeMap[e.code];
    if (e.shiftKey) {
      const shiftMap = {
        '`': '~', '1': '!', '2': '@', '3': '#', '4': '$', '5': '%',
        '6': '^', '7': '&', '8': '*', '9': '(', '0': ')',
        '-': '_', '=': '+', '[': '{', ']': '}', '\\': '|',
        ';': ':', "'": '"', ',': '<', '.': '>', '/': '?'
      };
      if (shiftMap[base]) return shiftMap[base];
      if (/^[a-z]$/.test(base)) return base.toUpperCase();
    }
    return base;
  }

  if (e.key) {
    if (e.key === 'Enter') return '\n';
    if (e.key === 'Spacebar' || e.key === ' ') return ' ';
    if (e.key.length === 1) return e.key;
  }

  return '';
}

function typedCharMatchesTarget(typed, target) {
  if (!typed || !target) return false;
  if (typed === target) return true;
  if (target === '\n' && (typed === '\n' || typed === 'enter')) return true;

  if (G && G.strictCasing) {
    return typed.normalize('NFC') === target.normalize('NFC');
  }

  // Relaxed casing for earlier rounds (Round 1-2)
  return typed.toLowerCase().normalize('NFC') === target.toLowerCase().normalize('NFC');
}

function keyDown(e) {
  // Global Escape key handler
  if (e.key === 'Escape' || e.code === 'Escape') {
    e.preventDefault();
    e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();

    // 1. Close any open non-pause modals (Guide, About) first
    const openModals = Array.from(document.querySelectorAll('.modal.show:not(.pause-modal):not(.upgrade-modal)'));
    if (openModals.length > 0) {
      openModals.forEach(m => m.classList.remove('show'));
      focusGameSink(true);
      return;
    }

    // 2. Close Volume popup if open
    const volPanel = $('#volumePanel');
    if (volPanel && volPanel.classList.contains('show')) {
      volPanel.classList.remove('show');
      $('#volumeBtn')?.classList.remove('on');
      $('#inGameVolumeBtn')?.classList.remove('on');
      focusGameSink(true);
      return;
    }

    // 3. Toggle Pause Menu in-game
    if ($('#game').classList.contains('active') && !$('#upgradeModal')?.classList.contains('show')) {
      togglePauseMenu();
    }
    return;
  }

  // Dev Mode hotkey F9: Available anywhere
  if (e.code === 'F9') {
    e.preventDefault(); e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    devTogglePanel();
    return;
  }

  if (!$('#game').classList.contains('active') || paused || G.transition || $('#upgradeModal')?.classList.contains('show') || e.ctrlKey || e.metaKey) return;

  // In-Game Dev Mode hotkeys: F8 (Kill boss), F7 / Shift+F7 (Next / Prev prompt), F6 (Auto-bot)
  if (e.code === 'F8') {
    e.preventDefault(); e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    devInstantKillBoss();
    return;
  }
  if (e.code === 'F7') {
    e.preventDefault(); e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    if (e.shiftKey) devPrevPrompt();
    else devNextPrompt();
    return;
  }
  if (e.code === 'F6') {
    e.preventDefault(); e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    devToggleAutoBot();
    return;
  }

  // Active skill shortcuts: F1-F3 or Alt + 1,2,3
  if (/^F[1-3]$/.test(e.code || '')) {
    e.preventDefault(); e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    useSkill(Number(e.code.slice(1)) - 1);
    setTimeout(() => focusGameSink(true), 0);
    return;
  }
  if (e.altKey && /^Digit[1-3]$/.test(e.code || '')) {
    e.preventDefault(); e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    useSkill(Number(e.code.slice(5)) - 1);
    setTimeout(() => focusGameSink(true), 0);
    return;
  }

  // UniKey / EVKey synthetic Backspaces: do not trigger wrong penalty or shake
  if (e.key === 'Backspace' || e.code === 'Backspace') {
    if (cfg.internalIme) {
      e.preventDefault();
      e.stopPropagation();
    }
    return;
  }

  // Modifiers & navigation keys without typing value
  if (/^(Shift|Control|Alt|Meta|CapsLock|Tab|Escape|Insert|Delete|Home|End|PageUp|PageDown|ArrowUp|ArrowDown|ArrowLeft|ArrowRight|NumLock|ScrollLock|Pause|ContextMenu|Dead|Unidentified)$/.test(e.key) ||
      /^(Shift|Control|Alt|Meta|CapsLock|Tab|Escape|Delete|Arrow)/.test(e.code || '')) {
    const k = keyFromEvent(e);
    if (k) safe(() => physicalPress(k));
    return;
  }

  const k = keyFromEvent(e);
  if (!k && (!e.key || (e.key.length !== 1 && e.key !== 'Enter'))) return;

  if (cfg.internalIme) {
    e.preventDefault(); e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    focusGameSink();
  }

  if (k) safe(() => physicalPress(k));
  G.keys++;

  if (!cfg.internalIme) {
    G.pendingExternalKeys = (G.pendingExternalKeys || 0) + 1;
    return;
  }

  const expectedKey = need();
  const rawKey = k || '';
  const typedKey = (e.key && (e.key === 'Enter' || e.key === ' ' || e.key.length === 1)) ? (e.key === 'Enter' ? '\n' : e.key) : rawKey;

  // 1. Direct match with required physical keystroke
  if (typedCharMatchesTarget(rawKey, expectedKey) || typedCharMatchesTarget(typedKey, expectedKey)) {
    correctUnit(true);
  }
  // 2. Direct Unicode match if UniKey or OS IME composed full accented letter (e.g. 'ê', 'đ', 'ư', 'ơ', 'ì')
  else if (G.model && G.index < G.model.target.length) {
    const ci = G.model.stepMap[G.index];
    const targetChar = (G.model.chars[ci] || '').toLowerCase();

    if (typedCharMatchesTarget(typedKey, targetChar) || typedCharMatchesTarget(rawKey, targetChar)) {
      const endStep = G.model.charEnd[ci];
      while (G.index <= endStep && !G.transition) {
        if (!correctUnit(true)) break;
      }
    }
    // 3. Flexible early tone mark placement
    else if (consumeEarlyTone(rawKey) || consumeEarlyTone(typedKey)) {
      // Applied early tone successfully
    }
    // 4. Tone step direct fallback
    else if (isToneStep(G.index)) {
      const info = charInfo(G.model.chars[ci]);
      const expectedTone = (cfg.typingMode === 'vni' ? VNI_TONE : TELEX_TONE)[info.tone];
      if (rawKey === expectedTone || typedKey === expectedTone) {
        correctUnit(true);
      } else {
        wrongUnit();
      }
    } else {
      wrongUnit();
    }
  } else {
    wrongUnit();
  }

  updateProfile(G.score, G.round);
  updateHud();
}

window.addEventListener('keydown', keyDown, true);

['beforeinput', 'compositionstart', 'compositionupdate', 'compositionend', 'input', 'textInput', 'paste', 'drop'].forEach(type => {
  document.addEventListener(type, e => {
    if (cfg.internalIme && $('#game').classList.contains('active')) {
      if (e.cancelable) e.preventDefault();
      e.stopPropagation();
      if (e.stopImmediatePropagation) e.stopImmediatePropagation();
      if (type === 'compositionstart' || type === 'compositionend') setTimeout(() => focusGameSink(true), 0);
    }
  }, true);
});

function externalInputChanged() {
  if (cfg.internalIme || !$('#game').classList.contains('active') || G.transition) return;
  const capEl = $('#externalImeCapture'), value = (capEl.value || '').normalize('NFC');
  G.externalValue = value;
  if (compatiblePrefix(value, G.displayText)) {
    G.correct += (G.pendingExternalKeys || 0);
    G.pendingExternalKeys = 0;
    G.externalLastGood = value;
    const exact = exactPrefixLength(value, G.displayText);
    while (G.index < exact && !G.transition) {
      if (!correctUnit(false)) break;
    }
    updateCompositionPreview(value);
    updateProfile(G.score, G.round);
    updateHud();
  } else {
    G.pendingExternalKeys = 0;
    wrongUnit();
    capEl.value = G.externalLastGood || '';
    G.externalValue = capEl.value;
    updateCompositionPreview(capEl.value);
    setTimeout(focusExternalCapture, 20);
  }
}

$('#externalImeCapture').addEventListener('input', externalInputChanged);
$('#externalImeCapture').addEventListener('compositionend', () => setTimeout(externalInputChanged, 0));

// ---------- SKILL DOCK & SKILLS ----------
function renderSkills() {
  const dock = $('#skillDock'), skills = HERO_SKILLS[cfg.classKey] || [];
  if (!dock) return;
  const hotkeys = ['Q', 'E', 'R'];
  dock.innerHTML = skills.map((s, i) => `
    <button class="skill-card" data-skill-slot="${i}" title="${s.name} (${hotkeys[i]} / F${i+1}): ${s.desc}">
      <span class="skill-icon">${s.icon}</span>
      <span class="skill-name">${s.name}</span>
      <kbd>${hotkeys[i]}</kbd>
      <i class="skill-cd"></i>
    </button>
  `).join('');
  dock.querySelectorAll('[data-skill-slot]').forEach(b => b.onclick = () => useSkill(Number(b.dataset.skillSlot)));
  updateSkillUI();
}

function skillCooldownSeconds(skill) {
  const cdMult = Math.max(0.35, 1 - (G.upgrades?.cooldownReduction || 0));
  return skill.cd * (CLASS_COMBAT[cfg.classKey]?.cooldownMult || 1) * cdMult;
}

function updateSkillUI() {
  const dock = $('#skillDock');
  if (!dock || !G.skillCooldowns) return;
  const now = Date.now(), skills = HERO_SKILLS[cfg.classKey] || [];
  dock.querySelectorAll('[data-skill-slot]').forEach((b, i) => {
    const s = skills[i], end = G.skillCooldowns[s?.id] || 0, remain = Math.max(0, (end - now) / 1000);
    b.classList.toggle('cooling', remain > 0);
    b.classList.toggle('ready', remain <= 0);
    const cd = b.querySelector('.skill-cd');
    if (cd) cd.textContent = remain > 0 ? remain.toFixed(remain < 3 ? 1 : 0) + 's' : 'SẴN SÀNG';
  });
  const status = [];
  if (G.skillBuffs?.dodgeCharges) status.push(`Né ${G.skillBuffs.dodgeCharges}`);
  if (G.skillBuffs?.shieldCharges) status.push(`Khiên ${G.skillBuffs.shieldCharges}`);
  if (G.skillBuffs?.venomCharges) status.push(`Độc ${G.skillBuffs.venomCharges}`);
  if (G.skillBuffs?.stormCharges) status.push(`Lôi ${G.skillBuffs.stormCharges}`);
  const p = $('#playerBonusText');
  if (p && status.length) p.dataset.skillStatus = status.join(' · ');
  else if (p) p.removeAttribute('data-skill-status');
}

function useSkill(slot) {
  if (paused || G.transition || !$('#game').classList.contains('active')) return;
  const skill = (HERO_SKILLS[cfg.classKey] || [])[slot];
  if (!skill) return;
  const now = Date.now(), ready = G.skillCooldowns[skill.id] || 0;
  if (now < ready) {
    showImeToast(`${skill.name}: còn ${Math.ceil((ready - now) / 1000)}s`);
    return;
  }
  G.lastHeroSkillId = skill.id;
  G.skillCooldowns[skill.id] = now + skillCooldownSeconds(skill) * 1000;
  const b = G.skillBuffs;

  // Handle distinct buff & skill effects
  switch (skill.id) {
    case 'shadow':
      b.nextWordMult = Math.max(b.nextWordMult, 1.75);
      b.forceCrit = true;
      break;
    case 'venom':
      b.venomCharges = 3;
      break;
    case 'evade':
      b.dodgeCharges = Math.max(b.dodgeCharges, 2);
      break;
    case 'heavy':
      b.nextWordMult = Math.max(b.nextWordMult, 2);
      break;
    case 'guard':
      b.shieldCharges = 2;
      b.shieldReduction = 0.60;
      break;
    case 'quake':
      b.bossStunUntil = now + 4000;
      b.nextWordMult = Math.max(b.nextWordMult, 1.4);
      break;
    case 'fire':
      b.nextWordMult = Math.max(b.nextWordMult, 1.65);
      break;
    case 'frost':
      b.bossSlowUntil = now + 10000;
      if (G.bossArmed) startBossTimer();
      setTimeout(() => { if (G.bossArmed && !G.transition) startBossTimer(); }, 10100);
      break;
    case 'storm':
      b.stormCharges = 3;
      break;
  }

  // Set distinct Sprite, Animation Class, Sound, and Visual VFX for EACH skill
  const hw = $('#heroWrap');
  let spritePose = 'skill';
  let animDuration = 600;

  if (cfg.classKey === 'assassin') {
    if (skill.id === 'shadow') {
      spritePose = 'attack2'; // Lướt trảm tàn ảnh
      hw.className = 'fighter hero-wrap skill-shadow';
      spawnAfterimages(5, 0.45);
      setTimeout(() => spawnSlashMark('cross', true), 220);
      playLocal('hero_skill_shadow', 0.95);
      setTimeout(() => playLocal('sfx_blade_slash', 0.8), 160);
      flash(0.35, '168,85,247');
      screenShake(6, 180);
      animDuration = 650;
    } else if (skill.id === 'venom') {
      spritePose = 'attack1'; // Đâm độc xoay người
      hw.className = 'fighter hero-wrap skill-venom';
      spawnSparks($('#heroWrap'), '#10b981', 22);
      playLocal('hero_skill_venom', 0.95);
      animDuration = 600;
    } else if (skill.id === 'evade') {
      spritePose = 'jump'; // Nhảy né trên không
      hw.className = 'fighter hero-wrap skill-evade';
      spawnAfterimages(3, 0.25);
      spawnSparks($('#heroWrap'), '#38bdf8', 18);
      playLocal('hero_skill_evade', 0.95);
      animDuration = 650;
    }
  } else if (cfg.classKey === 'warrior') {
    if (skill.id === 'heavy') {
      spritePose = 'attack1'; // Trọng trảm đao
      hw.className = 'fighter hero-wrap skill-heavy';
      setTimeout(() => spawnSlashMark('heavy', true), 240);
      playLocal('hero_skill_heavy', 1.0);
      setTimeout(() => playLocal('sfx_heavy_impact', 0.9), 200);
      screenShake(8, 200);
      animDuration = 700;
    } else if (skill.id === 'guard') {
      spritePose = 'jump'; // Giương khiên phòng thủ
      hw.className = 'fighter hero-wrap skill-guard';
      spawnSparks($('#heroWrap'), '#ffd66f', 24);
      playLocal('hero_skill_guard', 0.95);
      playLocal('sfx_shield_block', 0.9);
      animDuration = 650;
    } else if (skill.id === 'quake') {
      spritePose = 'attack2'; // Nện búa dập đất
      hw.className = 'fighter hero-wrap skill-quake';
      setTimeout(spawnGroundWave, 220);
      playLocal('hero_skill_quake', 1.0);
      setTimeout(() => playLocal('sfx_heavy_impact', 0.95), 180);
      flash(0.4, '239,68,68');
      screenShake(14, 280);
      animDuration = 750;
    }
  } else if (cfg.classKey === 'mage') {
    if (skill.id === 'fire') {
      spritePose = 'attack1'; // Bắn hỏa cầu
      hw.className = 'fighter hero-wrap skill-fire';
      spawnMageBolt('orb');
      playLocal('hero_skill_fire', 0.95);
      playLocal('sfx_fire_burst', 0.85);
      animDuration = 680;
    } else if (skill.id === 'frost') {
      spritePose = 'jump'; // Bay lơ lửng bão tuyết
      hw.className = 'fighter hero-wrap skill-frost';
      spawnMageBolt('frost');
      spawnSparks($('#bossWrap'), '#67e8f9', 24);
      playLocal('hero_skill_frost', 0.95);
      playLocal('sfx_ice_shatter', 0.85);
      animDuration = 720;
    } else if (skill.id === 'storm') {
      spritePose = 'skill'; // Triệu hồi thiên lôi
      hw.className = 'fighter hero-wrap skill-storm';
      spawnLightning();
      playLocal('hero_skill_storm', 1.0);
      playLocal('sfx_lightning', 0.95);
      flash(0.45, '192,132,252');
      screenShake(10, 240);
      animDuration = 750;
    }
  }

  $('#hero').src = assetHero(spritePose);

  setTimeout(() => {
    if (!G.transition) {
      $('#hero').src = assetHero('idle');
      hw.className = 'fighter hero-wrap idle';
    }
  }, animDuration);

  showImeToast(`${skill.icon} ${skill.name} · ${skill.desc}`);
  updateSkillUI();
  setTimeout(() => focusGameSink(true), 0);
}

// ---------- VISUAL EFFECTS & COMBAT NODES ----------
function combatNode(tag = 'i', cls = '', life = 900) {
  const el = document.createElement(tag);
  el.className = cls;
  $('#arena').appendChild(el);
  setTimeout(() => el.remove(), life);
  return el;
}

function fighterCenter(sel) {
  const a = $('#arena').getBoundingClientRect(), r = $(sel).getBoundingClientRect();
  return { x: r.left + r.width * 0.5 - a.left, y: r.top + r.height * 0.48 - a.top, w: r.width, h: r.height };
}

function spawnAfterimages(count = 4, travel = 0.46) {
  const arena = $('#arena'), ar = arena.getBoundingClientRect(), r = $('#heroWrap').getBoundingClientRect(), src = $('#hero').src;
  for (let i = 1; i <= count; i++) {
    const im = document.createElement('img');
    im.src = src;
    im.className = 'combat-afterimage';
    im.style.left = (r.left - ar.left) + 'px';
    im.style.top = (r.top - ar.top) + 'px';
    im.style.width = r.width + 'px';
    im.style.height = r.height + 'px';
    im.style.setProperty('--ghost-x', `${Math.round(innerWidth * travel * (i / (count + 1)))}px`);
    im.style.animationDelay = `${i * 28}ms`;
    arena.appendChild(im);
    setTimeout(() => im.remove(), 720);
  }
}

function spawnSlashMark(style = 'cross', crit = false) {
  const p = fighterCenter('#bossWrap'), el = combatNode('i', `combat-slash ${style}${crit ? ' crit' : ''}`, 720);
  el.style.left = p.x + 'px';
  el.style.top = p.y + 'px';
}

function spawnGroundWave() {
  const p = fighterCenter('#bossWrap');
  for (let i = 0; i < 2; i++) {
    const el = combatNode('i', 'ground-wave', 850 + i * 70);
    el.style.left = p.x + 'px';
    el.style.top = (p.y + p.h * 0.22) + 'px';
    el.style.animationDelay = `${i * 70}ms`;
  }
}

function spawnMageBolt(type = 'orb') {
  const from = fighterCenter('#heroWrap'), to = fighterCenter('#bossWrap'), el = combatNode('i', `mage-bolt ${type}`, 1000);
  el.style.left = from.x + 'px';
  el.style.top = from.y + 'px';
  el.style.setProperty('--bolt-x', (to.x - from.x) + 'px');
  el.style.setProperty('--bolt-y', (to.y - from.y) + 'px');
}

function spawnLightning() {
  const p = fighterCenter('#bossWrap'), el = combatNode('i', 'mage-lightning', 760);
  el.style.left = p.x + 'px';
  el.style.top = Math.max(0, p.y - p.h * 0.65) + 'px';
  el.style.height = Math.max(180, p.h * 0.95) + 'px';
}

function playHeroChoreo(pose, big = false, crit = false) {
  if (G.transition) return;
  const w = $('#heroWrap'), variant = (G.attackN - 1) % 3;
  $('#hero').src = assetHero(pose);
  w.className = 'fighter hero-wrap combat-' + cfg.classKey + '-' + variant + (big ? ' combat-big' : '') + (crit ? ' combat-crit' : '');
  if (cfg.classKey === 'assassin') {
    spawnAfterimages(crit ? 5 : 3, 0.38);
    setTimeout(() => { if (!G.transition) spawnSlashMark(variant === 0 ? 'cross' : variant === 1 ? 'arc' : 'vertical', crit); }, 150);
  } else if (cfg.classKey === 'warrior') {
    if (variant === 1 || big) setTimeout(() => { if (!G.transition) spawnGroundWave(); }, 150);
    setTimeout(() => { if (!G.transition) spawnSlashMark(variant === 2 ? 'arc' : 'heavy', crit); }, 150);
  } else {
    if (variant === 0) spawnMageBolt('orb');
    else if (variant === 1) spawnMageBolt('beam');
    else spawnLightning();
    setTimeout(() => { if (!G.transition) spawnSlashMark('magic', crit); }, 200);
  }
  const dur = 400;
  setTimeout(() => {
    if (!G.transition) {
      $('#hero').src = assetHero('idle');
      w.className = 'fighter hero-wrap idle';
    }
  }, dur);
}

function bossMotionClass(skill) {
  if (!skill) return 'cast boss-ritual';
  if (['slam', 'smash'].includes(skill.fx)) return 'cast boss-lunge';
  if (['drain', 'siphon'].includes(skill.fx)) return 'cast boss-drain';
  if (skill.fx === 'beam') return 'cast boss-beam';
  return 'cast boss-ritual';
}

function spawnBossMotionTrail(skill) {
  if (['slam', 'smash'].includes(skill?.fx)) {
    const p = fighterCenter('#bossWrap'), el = combatNode('i', 'boss-dash-dust', 700);
    el.style.left = p.x + 'px';
    el.style.top = (p.y + p.h * 0.32) + 'px';
  }
  if (['drain', 'siphon'].includes(skill?.fx)) {
    const a = fighterCenter('#bossWrap'), b = fighterCenter('#heroWrap'), el = combatNode('i', 'boss-drain-tether', 900);
    const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy), ang = Math.atan2(dy, dx) * 180 / Math.PI;
    el.style.left = a.x + 'px';
    el.style.top = a.y + 'px';
    el.style.width = len + 'px';
    el.style.transform = `rotate(${ang}deg)`;
  }
}

function setHeroPose(p, cls = 'idle', duration = 380) {
  const w = $('#heroWrap');
  w.className = `fighter hero-wrap ${cls}`;
  $('#hero').src = assetHero(p);
  if (duration) setTimeout(() => { if (!G.transition) { $('#hero').src = assetHero('idle'); w.className = 'fighter hero-wrap idle'; } }, duration);
}

function setBossPose(p, cls = 'idle', duration = 400) {
  const w = $('#bossWrap');
  const inRage = isBossInRage();
  w.className = `fighter boss-wrap ${cls}${inRage ? ' rage-mode' : ''}`;
  $('#boss').src = assetBoss(p);
  if (duration) {
    setTimeout(() => {
      if (!G.transition && G.bossHp > 0) {
        const defaultPose = inRage ? 'rage' : 'idle';
        $('#boss').src = assetBoss(defaultPose);
        w.className = `fighter boss-wrap ${defaultPose}${inRage ? ' rage-mode' : ''}`;
      }
    }, duration);
  }
}

function burst(sel) {
  const el = $(sel);
  if (!el) return;
  el.classList.remove('show');
  void el.offsetWidth;
  el.classList.add('show');
}

function showBossProjectileFx(skill) {
  const orb = $('#enemyOrb');
  if (!orb) return;
  const fxType = skill?.fx || 'slam';
  if (fxType === 'beam' || fxType === 'smash') orb.src = 'assets/fx/proj_6.webp';
  else if (fxType === 'drain' || fxType === 'siphon') orb.src = 'assets/fx/proj_1.webp';
  else orb.src = 'assets/fx/proj_10.webp';

  orb.dataset.skill = fxType;
  orb.classList.remove('show');
  void orb.offsetWidth;
  orb.classList.add('show');
  setTimeout(() => { if (orb) orb.classList.remove('show'); }, 850);
}

function bossCallout(text) {
  const el = $('#bossComboCallout');
  if (!el) return;
  el.textContent = text;
  el.classList.remove('show');
  void el.offsetWidth;
  el.classList.add('show');
}

function spawnSparks(target, color = '#ffd56d', count = 13) {
  const arena = $('#arena'), ar = arena.getBoundingClientRect(), r = (target || arena).getBoundingClientRect();
  for (let i = 0; i < count; i++) {
    const s = document.createElement('i');
    s.className = 'combat-spark';
    s.style.setProperty('--dx', (Math.random() * 140 - 70) + 'px');
    s.style.setProperty('--dy', (Math.random() * 140 - 70) + 'px');
    s.style.left = (r.left + r.width * (0.3 + Math.random() * 0.4) - ar.left) + 'px';
    s.style.top = (r.top + r.height * (0.25 + Math.random() * 0.5) - ar.top) + 'px';
    s.style.background = color;
    s.style.boxShadow = `0 0 10px ${color}`;
    arena.appendChild(s);
    setTimeout(() => s.remove(), 520);
  }
}

function spawnDamageEcho(dmg, crit = false) {
  const arena = $('#arena');
  for (let i = 0; i < (crit ? 3 : 2); i++) {
    const e = document.createElement('span');
    e.className = 'damage-echo' + (crit ? ' crit' : '');
    e.textContent = '-' + Math.max(1, Math.round(dmg * (0.26 + i * 0.12)));
    e.style.right = (15 + i * 3) + '%';
    e.style.top = (33 + i * 7) + '%';
    e.style.animationDelay = (i * 0.055) + 's';
    arena.appendChild(e);
    setTimeout(() => e.remove(), 850);
  }
}

function spawnHealFloat(v, isLifesteal = false) {
  const arena = $('#arena'), hero = $('#heroWrap');
  if (!arena) return;
  const e = document.createElement('span');
  e.className = 'heal-float' + (isLifesteal ? ' lifesteal' : '');
  e.textContent = `+${v} HP${isLifesteal ? ' 🩸' : ''}`;
  if (hero) {
    const ar = arena.getBoundingClientRect(), hr = hero.getBoundingClientRect();
    e.style.left = (hr.left + hr.width * 0.5 - ar.left) + 'px';
    e.style.top = (hr.top + hr.height * 0.18 - ar.top) + 'px';
  } else {
    e.style.left = '22%';
    e.style.top = '48%';
  }
  arena.appendChild(e);
  setTimeout(() => e.remove(), 950);
}

function screenShake(pow = 8, dur = 180) {
  const g = $('#game');
  g.style.setProperty('--shake-x', pow + 'px');
  g.classList.remove('shake');
  void g.offsetWidth;
  g.classList.add('shake');
  setTimeout(() => g.classList.remove('shake'), dur);
}

function flash(op = 0.45, color = '255,255,255') {
  const f = $('#flash');
  f.style.background = `rgba(${color},${op})`;
  f.classList.remove('on');
  void f.offsetWidth;
  f.classList.add('on');
}

function pop(sel, t) {
  const e = $(sel);
  if (!e) return;
  e.textContent = t;
  e.classList.remove('show');
  void e.offsetWidth;
  e.classList.add('show');
}

function heroAttack(dmg, big = false, crit = false) {
  G.attackN++;
  const variant = (G.attackN - 1) % 3, pose = big ? 'skill' : variant === 0 ? 'attack1' : variant === 1 ? 'attack2' : 'skill';
  playHeroChoreo(pose, big, crit);
  setBossPose('hit', 'hit', 380);
  const fx = $('#heroFx');
  fx.src = big ? (cfg.classKey === 'warrior' ? 'assets/fx/fx_6.webp' : cfg.classKey === 'mage' ? 'assets/fx/fx_9.webp' : CLASSES[cfg.classKey].fx) : CLASSES[cfg.classKey].fx;
  fx.classList.remove('show');
  void fx.offsetWidth;
  fx.classList.add('show');

  setTimeout(() => {
    burst('#bossImpact');
    spawnSparks($('#bossWrap'), crit ? '#fff0a5' : getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#ffd56d', big ? 24 : 14);
    spawnDamageEcho(dmg, crit);
    pop('#bossDamage', `-${dmg}`);
    playLocal(crit ? 'crit' : 'slash', crit ? 0.9 : 0.72);
    setTimeout(() => playLocal('impact', 0.6), 70);
    const kind = currentBoss().kind;
    if (kind === 'slime') setTimeout(() => playLocal('slimeHit', 0.65), 80);
    else if (kind === 'golem') setTimeout(() => playLocal('golemHit', 0.65), 80);
  }, cfg.classKey === 'mage' ? 360 : cfg.classKey === 'assassin' ? 220 : 260);

  if (big || crit || G.attackN % 3 === 0) attackVoice(big || crit);
  screenShake(big ? 11 : 6, big ? 230 : 160);
  if (crit) flash(0.62);
}

function effectiveBossAttackEvery() {
  let interval = G.bossAttackEvery;
  if (isBossInRage()) interval *= 0.75; // 25% faster in rage mode
  if (Date.now() < (G.skillBuffs?.bossSlowUntil || 0)) interval *= 1.6;
  return Math.max(1600, Math.round(interval));
}

function startBossTimer() {
  clearInterval(bossTimer);
  if (!G.bossArmed) return;
  bossTimer = setInterval(() => {
    if (!paused && !G.transition && G.bossHp > 0 && !G.bossBusy && !$('#upgradeModal').classList.contains('show')) bossAttack();
  }, effectiveBossAttackEvery());
}

function applyBossSkillHit(skill) {
  if (G.transition || G.playerHp <= 0) return;
  const b = G.skillBuffs || {};
  if (b.dodgeCharges > 0) {
    b.dodgeCharges--;
    bossCallout('NÉ TRÁNH!');
    spawnSparks($('#heroWrap'), '#85f4ff', 20);
    playLocal('slash', 0.45);
    updateSkillUI();
    return;
  }
  const isCrit = Math.random() < (G.bossCritChance || 0.15);
  const incomingDefense = Math.max(0.35, 1 - (G.upgrades?.damageReduction || 0));
  let dmg = Math.max(1, Math.round(G.bossDamage * (skill.mult || 1) * (isCrit ? (G.bossCritMult || 1.5) : 1) * (CLASS_COMBAT[cfg.classKey]?.incomingMult || 1) * incomingDefense));
  if (b.shieldCharges > 0) {
    dmg = Math.max(1, Math.round(dmg * (1 - (b.shieldReduction || 0.6))));
    b.shieldCharges--;
    bossCallout(`🛡 Chặn đòn · -${dmg}`);
  }
  if (devGodMode) {
    G.playerHp = G.maxHp;
  } else {
    G.playerHp = Math.max(0, G.playerHp - dmg);
  }
  const leech = Math.max(G.bossLeech || 0, skill.leech || 0);
  if (leech > 0) G.bossHp = Math.min(G.bossMaxHp, G.bossHp + dmg * leech);
  if (skill.weak) G.playerWeakUntil = Date.now() + (skill.weakMs || 7000);
  G.combo = 0;
  setHeroPose('hit', 'hit', 470);
  burst('#heroImpact');
  spawnSparks($('#heroWrap'), isCrit ? '#ffd45e' : '#ff7e73', isCrit ? 26 : 18);
  pop('#playerDamage', `-${dmg}${isCrit ? ' CRIT!' : ''}`);
  playLocal(isCrit ? 'crit' : 'impact', isCrit ? 0.75 : 0.65);
  hurtVoice(true);
  flash(isCrit ? 0.4 : 0.28, isCrit ? '255,190,80' : '255,90,90');
  screenShake(isCrit ? 17 : 13, isCrit ? 280 : 230);
  updateSkillUI();
  updateHud();
  if (G.playerHp <= 0) finish(false);
}

function performBossSkill(skill, position, total) {
  if (G.transition || G.playerHp <= 0) return;
  G.lastBossSkillExecuted = skill.id || skill.name;
  const inRage = isBossInRage();
  setBossPose(inRage ? 'rage' : (skill.pose || 'cast'), bossMotionClass(skill), 820);
  spawnBossMotionTrail(skill);
  bossCallout(`${position + 1}/${total} · ${skill.icon} ${skill.name}${inRage ? ' 🔥' : ''}`);
  showBossProjectileFx(skill);

  // Phát âm thanh đặc trưng riêng biệt của kỹ năng đó
  const sfxKey = skill.sfx || (position % 3 === 0 ? 'sfx_blade_slash' : position % 3 === 1 ? 'sfx_fire_burst' : 'sfx_heavy_impact');
  playLocal(sfxKey, 0.95);

  setTimeout(() => applyBossSkillHit(skill), 560);
}

function bossAttack() {
  if (G.transition || G.bossHp <= 0 || G.playerHp <= 0 || G.bossBusy || !G.bossArmed) return;
  if (Date.now() < (G.skillBuffs?.bossStunUntil || 0)) {
    bossCallout('💫 BOSS ĐANG CHOÁNG');
    return;
  }
  const inRage = isBossInRage();
  const combo = chooseBossSkillCombo();
  if (!combo.length) return;
  G.bossBusy = true;
  const warn = $('#warning');
  if (inRage) {
    warn.textContent = `🔥 CUỒNG NỘ (${Math.round((G.bossHp / G.bossMaxHp) * 100)}% HP) - COMBO ${combo.length} CHIÊU: ${combo.map(x => x.name).join(' ➔ ')}`;
    flash(0.22, '255,60,60');
  } else {
    warn.textContent = combo.length > 1 ? `⚠ COMBO ${combo.length} CHIÊU: ${combo.map(x => x.name).join(' + ')}` : `⚠ ${combo[0].name}`;
  }
  warn.classList.remove('show');
  void warn.offsetWidth;
  warn.classList.add('show');
  const interval = inRage ? 620 : 720;
  combo.forEach((skill, i) => setTimeout(() => performBossSkill(skill, i, combo.length), i * interval));
  setTimeout(() => { G.bossBusy = false; }, combo.length * interval + 700);
}

const VICTORY_PRAISES = [
  '🎉 ĐẠI THẮNG VANG DỘI! DIỆT GỌN BOSS!',
  '👑 TUYỆT ĐỈNH CHIẾN BINH! TỐC ĐỘ BẬC THẦY!',
  '🔥 TRẢM TƯỚNG DIỆT QUỶ! CHIẾN TÍCH LẪY LỪNG!',
  '⚡ THẦN SẦU CÔNG THỦ! VẠN NGƯỜI BÁI PHỤC!',
  '🏆 ĐỈNH CAO BÀN PHÍM! KHÔNG THỂ CẢN PHÁ!',
  '🌟 PHONG THÁI XUẤT CHÚNG! TỐC ĐỘ ÁP ĐẢO!'
];

function spawnVictoryConfetti(count = 50) {
  const arena = $('#arena');
  if (!arena) return;
  const colors = ['#ffd700', '#ff6b6b', '#48dbfb', '#1dd1a1', '#f368e0', '#ff9f43', '#ffffff', '#a29bfe'];
  for (let i = 0; i < count; i++) {
    const p = document.createElement('i');
    p.className = 'victory-confetti';
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 94 + 3;
    const top = Math.random() * 30 + 10;
    const sizeW = Math.random() * 8 + 6;
    const sizeH = Math.random() * 12 + 8;
    const cx = (Math.random() - 0.5) * 260;
    const cy = Math.random() * 240 + 160;
    const rot = Math.random() * 720 - 360;
    const dur = (Math.random() * 0.8 + 1.2).toFixed(2);
    const delay = (Math.random() * 0.35).toFixed(2);

    p.style.left = left + '%';
    p.style.top = top + '%';
    p.style.width = sizeW + 'px';
    p.style.height = sizeH + 'px';
    p.style.backgroundColor = color;
    p.style.boxShadow = `0 0 10px ${color}`;
    p.style.setProperty('--cx', cx + 'px');
    p.style.setProperty('--cy', cy + 'px');
    p.style.setProperty('--crot', rot + 'deg');
    p.style.animationDuration = dur + 's';
    p.style.animationDelay = delay + 's';

    arena.appendChild(p);
    setTimeout(() => p.remove(), (parseFloat(dur) + parseFloat(delay) + 0.2) * 1000);
  }
}

function triggerHeroVictoryChoreo() {
  const hw = $('#heroWrap');
  const h = $('#hero');
  if (!hw || !h) return;
  const cls = cfg.classKey || 'warrior';

  // Reset & trigger class-specific victory celebration movement
  hw.className = 'fighter hero-wrap';
  void hw.offsetWidth;

  if (cls === 'assassin') {
    // Sát Thủ: Nhào lộn phi thân, lướt tàn ảnh tím & đáp đất ninja ngầu lòi
    h.src = assetHero('jump');
    hw.classList.add('hero-victory-assassin');
    setTimeout(() => { if (G.transition) h.src = assetHero('attack2'); }, 300);
    setTimeout(() => { if (G.transition) h.src = assetHero('skill'); }, 700);
  } else if (cls === 'mage') {
    // Pháp Sư: Bay bổng lơ lửng giữa không trung & triệu hồi bão ma pháp ngũ sắc
    h.src = assetHero('jump');
    hw.classList.add('hero-victory-mage');
    setTimeout(() => { if (G.transition) h.src = assetHero('skill'); }, 400);
  } else {
    // Chiến Binh: Giậm chân rung chuyển đất, nhảy bổ lên cao & cắm đại đao vàng kim
    h.src = assetHero('attack1');
    hw.classList.add('hero-victory-warrior');
    setTimeout(() => {
      if (G.transition) {
        h.src = assetHero('jump');
        screenShake(8, 250);
      }
    }, 320);
    setTimeout(() => { if (G.transition) h.src = assetHero('skill'); }, 680);
  }
}

function clearRound() {
  if (G.transition) return;
  G.transition = true;
  clearInterval(bossTimer);
  $('#boss').src = assetBoss('defeat');
  $('#bossWrap').className = 'fighter boss-wrap dead';
  $('#clearBoss').textContent = currentBoss().boss;

  const praiseText = VICTORY_PRAISES[Math.floor(Math.random() * VICTORY_PRAISES.length)];
  const praiseEl = $('#clearPraise');
  if (praiseEl) praiseEl.textContent = praiseText;

  // Kích hoạt vũ điệu di chuyển chiến thắng độc nhất của từng Hero Class
  triggerHeroVictoryChoreo();

  // Phát âm thanh Boss gục chết & Tiếng Hero Reo Mừng Đại Thắng
  playLocal('boss_death', 1.0);
  setTimeout(() => playLocal('hero_victory', 0.95), 180);
  setTimeout(() => playLocal('wellDone', 0.9), 350);

  // Pháo hoa giấy kim tuyến rực rỡ
  spawnVictoryConfetti(55);

  const b = $('#clearBanner');
  b.classList.remove('show');
  void b.offsetWidth;
  b.classList.add('show');
  const missing = Math.max(0, G.maxHp - G.playerHp), heal = Math.min(missing, Math.round(G.maxHp * 0.50));
  G.playerHp = Math.min(G.maxHp, G.playerHp + heal);
  if (heal > 0) spawnHealFloat(heal);
  updateProfile(G.score, G.round);
  updateBuffUI();
  setTimeout(() => {
    const gt = $('#growthText');
    if (gt) gt.textContent = heal > 0 ? `HỒI +${heal} HP (50% HP TỐI ĐA)` : 'HP ĐÃ ĐẦY';
    burst('#growthText');
  }, 250);
  playSpecial('victory');
  setTimeout(() => showUpgradeModal(), 1350);
}

function formatTime(ms) {
  const totalSec = Math.floor(ms / 1000);
  const min = Math.floor(totalSec / 60);
  const sec = totalSec % 60;
  return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function updateHud() {
  if (!G.round) return;
  updateBuffUI();
  updateSkillUI();

  if ($('#playerHpBar')) $('#playerHpBar').style.width = `${Math.max(0, G.playerHp / G.maxHp * 100)}%`;
  if ($('#playerHpText')) $('#playerHpText').textContent = `${Math.round(G.playerHp).toLocaleString('vi-VN')}/${Math.round(G.maxHp).toLocaleString('vi-VN')}`;
  if ($('#bossHpBar')) $('#bossHpBar').style.width = `${Math.max(0, G.bossHp / G.bossMaxHp * 100)}%`;
  if ($('#bossHpText')) $('#bossHpText').textContent = `${Math.round(G.bossHp).toLocaleString('vi-VN')}/${Math.round(G.bossMaxHp).toLocaleString('vi-VN')}`;
  if ($('#score')) $('#score').textContent = Math.floor(G.score).toLocaleString('vi-VN');
  if ($('#combo')) $('#combo').textContent = `x${G.combo}`;
  if ($('#liveWpm')) $('#liveWpm').textContent = wpm();
  if ($('#liveAcc')) $('#liveAcc').textContent = acc() + '%';
  if ($('#liveCombo')) $('#liveCombo').textContent = G.combo;
  if ($('#comboBurst')) {
    const burst = $('#comboBurst');
    const isComboActive = (G.fastStreak || 0) >= 3;
    burst.classList.toggle('show', isComboActive);
    burst.classList.toggle('hot', (G.fastStreak || 0) >= 6);
    if (isComboActive) {
      const bonusPct = Math.round(Math.min(0.80, (G.fastStreak || 0) * 0.05) * 100);
      burst.innerHTML = `COMBO <b>x${G.fastStreak}</b><small style="display:block;font-size:10.5px;color:#86efac;font-style:normal;font-weight:800;margin-top:1px;">+${bonusPct}% DMG</small>`;
    }
  }

  updateProfileUI();
  applyDangerMusic();
}

function wordShake() {
  $('#wordPanel').animate([
    { transform: 'translateX(-50%)' },
    { transform: 'translateX(calc(-50% - 8px))' },
    { transform: 'translateX(calc(-50% + 7px))' },
    { transform: 'translateX(-50%)' }
  ], { duration: 190 });
  fallbackTone('hurt');
}

function acc() {
  return G.keys ? Math.round(G.correct / G.keys * 100) : 100;
}

function wpm() {
  const activePause = paused && G.pauseStarted ? (Date.now() - G.pauseStarted) : 0;
  const elapsed = Math.max(1000, Date.now() - G.start - (G.pausedTotal || 0) - activePause);
  const m = elapsed / 60000;
  return Math.round((G.correct / 5) / m);
}

function finish(win = false) {
  clearInterval(bossTimer);
  clearInterval(ticker);
  if (skillUiTimer) clearInterval(skillUiTimer);
  paused = false;
  $('#pauseModal')?.classList.remove('show');
  G.transition = true;
  updateProfile(G.score, G.round);
  if (win) {
    triggerHeroVictoryChoreo();
    spawnVictoryConfetti(65);
  }
  playSpecial(win ? 'victory' : 'defeat');
  const p = G.profile || getProfile(G.playerName), isRecord = G.score >= (p.bestScore || 0);
  $('#resultTitle').textContent = win ? 'Chiến thắng!' : 'Bạn đã bị hạ';
  $('#resultPlayerName').textContent = G.playerName;
  $('#rScore').textContent = Math.floor(G.score).toLocaleString('vi-VN');
  $('#rBest').textContent = Number(p.bestScore || 0).toLocaleString('vi-VN');
  $('#rRound').textContent = G.round;
  $('#rAcc').textContent = acc() + '%';
  $('#rWpm').textContent = wpm();
  $('#rCombo').textContent = G.maxCombo;
  $('#recordBadge').classList.toggle('show', isRecord);
  show('result');
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    if (musicOn && $('#game').classList.contains('active') && !$('#upgradeModal').classList.contains('show')) playBattleMusic();
    setTimeout(refreshHandGuide, 60);
  }
});

window.addEventListener('resize', () => setTimeout(refreshHandGuide, 40));
window.addEventListener('load', () => {
  initAmbientCanvas();
  initDevControls();
  initCardTooltipEvents();
  setTimeout(() => { guide(); refreshHandGuide(); if (gameCanOwnFocus()) focusGameSink(true); }, 120);
});

// ---------- DEV MODE & QA TEST ENGINE ----------
let devAutoBotInterval = null;
let devAutoBotPickingUpgrade = false;
let devGodMode = false;
let devPromptIndex = 0;
let devCategoryFilter = 'all';
let devPinnedPrompt = null;
let currentPromptFilter = 'all';
let currentPromptSearch = '';

function devGetAllPrompts(category = 'all') {
  const words = CURATED_WORDS.map((w, idx) => ({ theme: '🌿 Từ vựng tiếng Việt', text: w, cat: 'words', globalIdx: idx + 1, catIdx: idx + 1 }));
  const proverbs = CURATED_PROVERBS.map((p, idx) => ({ theme: '📜 ' + p.theme, text: p.text, cat: 'proverbs', globalIdx: 172 + idx + 1, catIdx: idx + 1 }));
  const inspiring = CURATED_INSPIRING_SENTENCES.map((s, idx) => ({ theme: '✨ ' + s.theme, text: s.text, cat: 'inspiring', globalIdx: 222 + idx + 1, catIdx: idx + 1 }));
  const stories = CURATED_STORIES.map((st, idx) => ({ theme: '📖 ' + st.theme, text: st.text, cat: 'stories', globalIdx: 248 + idx + 1, catIdx: idx + 1 }));
  const longDocs = CURATED_LONG_DOCUMENTS.map((ld, idx) => ({ theme: ld.theme, text: ld.text, cat: 'long', globalIdx: 263 + idx + 1, catIdx: idx + 1 }));

  if (category === 'words') return words;
  if (category === 'proverbs') return proverbs;
  if (category === 'inspiring') return inspiring;
  if (category === 'stories') return stories;
  if (category === 'long') return longDocs;

  return [...words, ...proverbs, ...inspiring, ...stories, ...longDocs];
}

function devUpdateStatsDisplay() {
  const stats = {
    words: CURATED_WORDS.length,
    proverbs: CURATED_PROVERBS.length,
    inspiring: CURATED_INSPIRING_SENTENCES.length,
    stories: CURATED_STORIES.length,
    long: CURATED_LONG_DOCUMENTS.length
  };
  const total = stats.words + stats.proverbs + stats.inspiring + stats.stories + stats.long;

  if ($('#devStatTotal')) $('#devStatTotal').textContent = total;
  if ($('#devStatWords')) $('#devStatWords').textContent = stats.words;
  if ($('#devStatProverbs')) $('#devStatProverbs').textContent = stats.proverbs;
  if ($('#devStatInspiring')) $('#devStatInspiring').textContent = stats.inspiring;
  if ($('#devStatStories')) $('#devStatStories').textContent = stats.stories;
  if ($('#devStatLong')) $('#devStatLong').textContent = stats.long;
  if ($('#devStatBgs')) $('#devStatBgs').textContent = BACKGROUND_PRESETS.length;

  const currentList = devGetAllPrompts(devCategoryFilter);
  if (devPromptIndex >= currentList.length) devPromptIndex = 0;
  if (devPromptIndex < 0) devPromptIndex = Math.max(0, currentList.length - 1);

  const curItem = currentList[devPromptIndex];
  if ($('#devPromptPos')) $('#devPromptPos').textContent = `${currentList.length ? devPromptIndex + 1 : 0} / ${currentList.length}`;
  if ($('#devPromptSlider')) {
    $('#devPromptSlider').max = currentList.length;
    $('#devPromptSlider').value = devPromptIndex + 1;
  }
  if ($('#devPromptPreview') && curItem) {
    $('#devPromptPreview').textContent = `[#${devPromptIndex + 1} · ${curItem.theme}] "${curItem.text}"`;
  }

  const bgBadge = $('#devBgPos');
  if (bgBadge) bgBadge.textContent = `${devBgIndex + 1} / ${BACKGROUND_PRESETS.length}`;
  const bgSel = $('#devBgSelect');
  if (bgSel && BACKGROUND_PRESETS[devBgIndex]) bgSel.value = BACKGROUND_PRESETS[devBgIndex].id;
}

function devApplyCurrentPrompt() {
  const currentList = devGetAllPrompts(devCategoryFilter);
  if (!currentList || !currentList.length) return;
  if (devPromptIndex >= currentList.length) devPromptIndex = 0;
  if (devPromptIndex < 0) devPromptIndex = currentList.length - 1;

  const item = currentList[devPromptIndex];
  devPinnedPrompt = item;

  if (item && G) {
    G.promptTheme = item.theme;
    G.displayText = normalizePromptText(item.text);
    G.model = cfg.internalIme ? buildTypingModel(G.displayText, cfg.typingMode) : buildDirectModel(G.displayText);
    G.target = G.model.target;
    G.index = 0;
    G.wordEndMeta = computeWordEndMeta(G.model);
    G.hadWordError = false;
    G.lastWordTime = Date.now();
    if (cfg.internalIme) resetInternalState();
    if ($('#game')?.classList.contains('active')) {
      renderPrompt();
      guide();
      updateHud();
    }
  }
  devUpdateStatsDisplay();
  if (item) {
    showImeToast(`📚 Đã nạp (${devPromptIndex + 1}/${currentList.length}): ${item.text.slice(0, 26)}...`);
  }
}

function devNextPrompt(e) {
  if (e && e.preventDefault) { e.preventDefault(); e.stopPropagation(); }
  const currentList = devGetAllPrompts(devCategoryFilter);
  if (!currentList || !currentList.length) return;
  devPromptIndex = (devPromptIndex + 1) % currentList.length;
  devApplyCurrentPrompt();
}

function devPrevPrompt(e) {
  if (e && e.preventDefault) { e.preventDefault(); e.stopPropagation(); }
  const currentList = devGetAllPrompts(devCategoryFilter);
  if (!currentList || !currentList.length) return;
  devPromptIndex = (devPromptIndex - 1 + currentList.length) % currentList.length;
  devApplyCurrentPrompt();
}

function devSelectPrompt(targetPrompt, closeAfter = false) {
  if (!targetPrompt) return;
  devPinnedPrompt = targetPrompt;
  let currentList = devGetAllPrompts(devCategoryFilter);
  let foundIdx = currentList.findIndex(x => x.text === targetPrompt.text);
  if (foundIdx < 0) {
    devCategoryFilter = 'all';
    const catSel = $('#devCategorySelect');
    if (catSel) catSel.value = 'all';
    currentList = devGetAllPrompts('all');
    foundIdx = currentList.findIndex(x => x.text === targetPrompt.text);
  }
  if (foundIdx >= 0) {
    devPromptIndex = foundIdx;
  }
  devApplyCurrentPrompt();
  if (closeAfter) closeAllPromptsModal();
}

function renderAllPromptsGrid(filter = 'all', search = '') {
  currentPromptFilter = filter;
  currentPromptSearch = (search || '').trim().toLowerCase();

  const grid = $('#allPromptsGrid');
  if (!grid) return;

  let all = devGetAllPrompts('all');
  if (filter !== 'all') {
    all = all.filter(p => p.cat === filter);
  }
  if (currentPromptSearch) {
    all = all.filter(p => p.text.toLowerCase().includes(currentPromptSearch) || p.theme.toLowerCase().includes(currentPromptSearch));
  }

  const badge = $('#allPromptsCountBadge');
  if (badge) badge.textContent = `${all.length} bài`;

  if (all.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: #94a3b8; padding: 30px;">Không tìm thấy bài gõ nào khớp với từ khóa "<b>${escapeHtml(currentPromptSearch)}</b>"</div>`;
    return;
  }

  const curList = devGetAllPrompts(devCategoryFilter);
  const curItem = curList[devPromptIndex];

  grid.innerHTML = all.map(p => {
    const isSelected = curItem && curItem.text === p.text;
    const wordCount = p.text.trim().split(/\s+/).length;
    const charCount = p.text.length;
    return `
      <div class="all-prompts-card ${isSelected ? 'selected' : ''}" data-prompt-text="${escapeHtml(p.text)}" title="Nhấp để nạp bài gõ này vào game">
        <div class="ap-meta">
          <span class="ap-theme">${p.theme}</span>
          <span class="ap-num">#${p.globalIdx}</span>
        </div>
        <p class="ap-text">${escapeHtml(p.text)}</p>
        <div class="ap-footer">
          <span class="ap-len">${wordCount} từ · ${charCount} ký tự</span>
          <button type="button" class="ap-pick-btn" data-pick-prompt="${escapeHtml(p.text)}">${isSelected ? '✓ Đang nạp' : '🎯 Gõ bài này'}</button>
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('[data-prompt-text]').forEach(card => {
    card.onclick = (e) => {
      e.preventDefault();
      const txt = card.dataset.promptText;
      const allPrompts = devGetAllPrompts('all');
      const target = allPrompts.find(x => x.text === txt);
      if (target) {
        devSelectPrompt(target, true);
        showImeToast(`🎯 Đã nạp: [${target.theme}] ${target.text.slice(0, 30)}...`);
      }
    };
  });
}

function showAllPromptsModal(e) {
  if (e && e.preventDefault) { e.preventDefault(); e.stopPropagation(); }
  const modal = $('#allPromptsModal');
  if (!modal) return;
  renderAllPromptsGrid(currentPromptFilter || 'all', $('#allPromptsSearch')?.value || '');
  modal.classList.add('show');
  $('#allPromptsSearch')?.focus();
  showImeToast('📚 Đã mở Bảng Tra Cứu Toàn Bộ 273 Bài Gõ');
}

function closeAllPromptsModal(e) {
  if (e && e.preventDefault) { e.preventDefault(); e.stopPropagation(); }
  $('#allPromptsModal')?.classList.remove('show');
  if (gameCanOwnFocus()) setTimeout(() => focusGameSink(true), 30);
}

let devPanelMinimized = false;

function devToggleMinimize(e) {
  if (e && e.preventDefault) { e.preventDefault(); e.stopPropagation(); }
  const p = $('#devPanel');
  if (!p) return;
  devPanelMinimized = !devPanelMinimized;
  p.classList.toggle('minimized', devPanelMinimized);
  const minBtn = $('#devMinimizeBtn');
  if (minBtn) minBtn.textContent = devPanelMinimized ? '+' : '🗕';
  const miniBar = $('#devMiniToolbar');
  const fullBody = $('#devFullBody');
  if (miniBar) miniBar.style.display = devPanelMinimized ? 'grid' : 'none';
  if (fullBody) fullBody.style.display = devPanelMinimized ? 'none' : 'flex';
  showImeToast(devPanelMinimized ? '🗕 Bảng Dev: ĐÃ THU NHỎ (Gọn gàng để quay video)' : '🗖 Bảng Dev: ĐÃ MỞ RỘNG ĐẦY ĐỦ');
  setTimeout(() => focusGameSink(true), 0);
}

function devTogglePanel(e) {
  if (e && e.preventDefault) { e.preventDefault(); e.stopPropagation(); }
  const p = $('#devPanel'), btn = $('#devFloatingToggle');
  if (!p) return;
  const isShow = p.classList.toggle('show');
  btn?.classList.toggle('active', isShow);
  devUpdateStatsDisplay();
  showImeToast(isShow ? '⚡ Bảng Dev Mode: ĐÃ MỞ (F9)' : '⚡ Bảng Dev Mode: ĐÃ ĐÓNG (F9)');
  setTimeout(() => focusGameSink(true), 0);
}

function devInstantKillBoss(e) {
  if (e && e.preventDefault) { e.preventDefault(); e.stopPropagation(); }
  if (G.bossHp <= 0 || G.transition) return;
  G.bossHp = 0;
  updateHud();
  clearRound();
  showImeToast(`💀 DEV: Đã hạ gục Boss ${currentBoss().boss}!`);
}

function devAutoTypeWord(e) {
  if (e && e.preventDefault) { e.preventDefault(); e.stopPropagation(); }
  if (!G || !G.model || G.bossHp <= 0) return;
  if ($('#upgradeModal')?.classList.contains('show')) {
    $('#upgradeModal')?.classList.remove('show');
    G.transition = false;
  }
  const bounds = wordBoundsForStep(G.index);
  if (bounds) {
    const lastCharIdx = bounds[1];
    const endStep = G.model.charEnd[lastCharIdx];
    while (G.index <= endStep && G.index < G.model.target.length) {
      if (!correctUnit(true)) break;
    }
  } else {
    correctUnit(true);
  }
  renderPrompt();
  guide();
  updateHud();
}

let devAutoBotSpeed = 'normal'; // 'normal' (~240ms, ~55 WPM) or 'fast' (~45ms, ~250 WPM)

function devSetBotSpeed(speed, e) {
  if (e && e.preventDefault) { e.preventDefault(); e.stopPropagation(); }
  devAutoBotSpeed = speed;
  $('#devBotSpeedNormalBtn')?.classList.toggle('active', speed === 'normal');
  $('#devBotSpeedFastBtn')?.classList.toggle('active', speed === 'fast');
  const msg = speed === 'normal' ? '🚶‍♂️ Tốc độ Bot: BÌNH THƯỜNG (~55 WPM · Như người gõ)' : '⚡ Tốc độ Bot: SIÊU TỐC (~250 WPM · Máy gõ)';
  showImeToast(msg);
  if (devAutoBotInterval) {
    clearInterval(devAutoBotInterval);
    devAutoBotInterval = null;
    devToggleAutoBot();
  }
}

function devToggleAutoBot(e) {
  if (e && e.preventDefault) { e.preventDefault(); e.stopPropagation(); }
  const btn = $('#devAutoBotBtn');
  const miniBtn = $('#devMiniAutoBotBtn');
  const badge = $('#devMiniBotBadge');
  if (devAutoBotInterval) {
    clearInterval(devAutoBotInterval);
    devAutoBotInterval = null;
    devAutoBotPickingUpgrade = false;
    btn?.classList.remove('active');
    miniBtn?.classList.remove('active');
    if (badge) badge.style.display = 'none';
    showImeToast('🤖 Auto-Bot: ĐÃ TẮT');
  } else {
    btn?.classList.add('active');
    miniBtn?.classList.add('active');
    if (badge) badge.style.display = 'inline-block';
    const delay = devAutoBotSpeed === 'normal' ? 240 : 45;
    const speedLabel = devAutoBotSpeed === 'normal' ? 'Bình Thường (~55 WPM)' : 'Siêu Tốc (~250 WPM)';
    showImeToast(`🤖 Auto-Bot: BẬT [${speedLabel}] - Tự gõ, dùng Kỹ năng F1/F2/F3 & Chọn thẻ`);
    devAutoBotInterval = setInterval(() => {
      if (paused) return;

      // 1. Auto-select upgrade card if modal is open
      const upgradeModal = $('#upgradeModal');
      if (upgradeModal && upgradeModal.classList.contains('show')) {
        if (!devAutoBotPickingUpgrade) {
          devAutoBotPickingUpgrade = true;
          setTimeout(() => {
            if (upgradeModal.classList.contains('show')) {
              const choices = Array.from(upgradeModal.querySelectorAll('[data-upgrade]'));
              if (choices.length > 0) {
                const rarityOrder = { legendary: 4, epic: 3, rare: 2, common: 1 };
                choices.sort((a, b) => {
                  const uA = UPGRADES.find(x => x.id === a.dataset.upgrade);
                  const uB = UPGRADES.find(x => x.id === b.dataset.upgrade);
                  const rA = rarityOrder[uA?.rarity || 'common'] || 0;
                  const rB = rarityOrder[uB?.rarity || 'common'] || 0;
                  return rB - rA;
                });
                const bestChoice = choices[0];
                const u = UPGRADES.find(x => x.id === bestChoice.dataset.upgrade);
                if (u) {
                  selectUpgrade(u.id);
                  showImeToast(`🤖 Auto-Bot: Đã tự chọn [${RARITY_LABELS[u.rarity] || 'THƯỜNG'}] ${u.title}`);
                }
              }
            }
            devAutoBotPickingUpgrade = false;
          }, devAutoBotSpeed === 'normal' ? 500 : 320);
        }
        return;
      }

      // 2. Auto-cast ready hero skills (F1, F2, F3) ensuring NO 2 CONSECUTIVE SKILLS ARE IDENTICAL
      if (!G.transition && G.bossHp > 0 && $('#game')?.classList.contains('active') && Math.random() < (devAutoBotSpeed === 'normal' ? 0.35 : 0.20)) {
        const skills = HERO_SKILLS[cfg.classKey] || [];
        const now = Date.now();
        const availableSlots = [];
        for (let i = 0; i < skills.length; i++) {
          const s = skills[i];
          const cdEnd = G.skillCooldowns[s.id] || 0;
          if (now >= cdEnd && s.id !== G.lastHeroSkillId) {
            availableSlots.push(i);
          }
        }
        if (availableSlots.length > 0) {
          const chosenSlot = availableSlots[0];
          useSkill(chosenSlot);
        }
      }

      // 3. Normal combat typing
      if (G.transition || G.bossHp <= 0 || !G.model) return;
      correctUnit(true);
    }, delay);
  }
}

function devToggleGodMode(e) {
  if (e && e.preventDefault) { e.preventDefault(); e.stopPropagation(); }
  devGodMode = !devGodMode;
  const btn = $('#devGodModeBtn');
  const miniBtn = $('#devMiniGodBtn');
  btn?.classList.toggle('active', devGodMode);
  miniBtn?.classList.toggle('active', devGodMode);
  if (devGodMode) {
    G.playerHp = G.maxHp;
    updateHud();
    showImeToast('💖 Bất Tử (God Mode): BẬT');
  } else {
    showImeToast('💖 Bất Tử (God Mode): TẮT');
  }
}

function devOpenUpgrades(e) {
  if (e && e.preventDefault) { e.preventDefault(); e.stopPropagation(); }
  if (G.transition) return;
  showUpgradeModal();
  showImeToast('🎴 DEV: Mở bảng chọn 3 thẻ nâng cấp ngẫu nhiên');
}

function devJumpToRound(targetRound) {
  const r = parseInt(targetRound, 10) || 1;
  G.round = r;
  G.transition = false;
  clearInterval(bossTimer);
  $('#upgradeModal')?.classList.remove('show');
  startRound(G.round);
  showImeToast(`⚡ DEV: Đã nhảy đến Vòng ${G.round} - ${currentBoss().boss}`);
}

function initDevControls() {
  const devPanel = $('#devPanel');
  if (devPanel) {
    // Robust event delegation so clicks on buttons inside dev panel never get blocked
    devPanel.addEventListener('click', (e) => {
      const target = e.target;
      if (!target) return;
      if (target.closest('#devCloseBtn')) { devTogglePanel(e); }
      else if (target.closest('#devMinimizeBtn') || target.closest('#devMiniExpandBtn')) { devToggleMinimize(e); }
      else if (target.closest('#devKillBossBtn') || target.closest('#devMiniKillBossBtn')) { devInstantKillBoss(e); }
      else if (target.closest('#devAutoBotBtn') || target.closest('#devMiniAutoBotBtn')) { devToggleAutoBot(e); }
      else if (target.closest('#devGodModeBtn') || target.closest('#devMiniGodBtn')) { devToggleGodMode(e); }
      else if (target.closest('#devPrevPromptBtn')) { devPrevPrompt(e); }
      else if (target.closest('#devNextPromptBtn')) { devNextPrompt(e); }
      else if (target.closest('#devPrevBgBtn')) { devPrevBg(e); }
      else if (target.closest('#devNextBgBtn')) { devNextBg(e); }
      else if (target.closest('#devAutoWordBtn')) { devAutoTypeWord(e); }
      else if (target.closest('#devUpgradesBtn')) { devOpenUpgrades(e); }
      else if (target.closest('#devAllCardsBtn')) { showAllCardsModal(e); }
      else if (target.closest('#devAllPromptsBtn')) { showAllPromptsModal(e); }
      else if (target.closest('#devJumpBtn')) {
        e.preventDefault(); e.stopPropagation();
        const sel = $('#devRoundSelect');
        if (sel) devJumpToRound(sel.value);
      }
    });

    // Direct pointer listeners on buttons for maximum responsiveness
    $('#devPrevPromptBtn')?.addEventListener('pointerdown', (e) => devPrevPrompt(e));
    $('#devNextPromptBtn')?.addEventListener('pointerdown', (e) => devNextPrompt(e));
    $('#devPrevBgBtn')?.addEventListener('pointerdown', (e) => devPrevBg(e));
    $('#devNextBgBtn')?.addEventListener('pointerdown', (e) => devNextBg(e));
    $('#devAllPromptsBtn')?.addEventListener('pointerdown', (e) => showAllPromptsModal(e));

    // Interactive slider scrubber
    $('#devPromptSlider')?.addEventListener('input', (e) => {
      devPromptIndex = Math.max(0, parseInt(e.target.value, 10) - 1);
      devApplyCurrentPrompt();
    });

    $('#devCategorySelect')?.addEventListener('change', (e) => {
      devCategoryFilter = e.target.value;
      devPromptIndex = 0;
      devApplyCurrentPrompt();
    });
    $('#devBgSelect')?.addEventListener('change', (e) => {
      setGameBackground(e.target.value);
    });
  }

  $('#devFloatingToggle')?.addEventListener('click', (e) => devTogglePanel(e));
  $('#closeAllCardsModal')?.addEventListener('click', (e) => closeAllCardsModal(e));
  $('#closeAllPromptsModal')?.addEventListener('click', (e) => closeAllPromptsModal(e));

  // Search input in all prompts modal
  $('#allPromptsSearch')?.addEventListener('input', (e) => {
    renderAllPromptsGrid(currentPromptFilter, e.target.value);
  });

  // Filter tabs in all prompts modal
  document.querySelectorAll('.all-prompts-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.all-prompts-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAllPromptsGrid(btn.dataset.promptFilter || 'all', $('#allPromptsSearch')?.value || '');
    });
  });

  document.querySelectorAll('.all-cards-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.all-cards-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAllCardsGrid(btn.dataset.cardFilter || 'all');
    });
  });

  devUpdateStatsDisplay();
}

// Global window exposure for direct HTML onclick attributes
window.devPrevPrompt = devPrevPrompt;
window.devNextPrompt = devNextPrompt;
window.devPrevBg = devPrevBg;
window.devNextBg = devNextBg;
window.devTogglePanel = devTogglePanel;
window.devInstantKillBoss = devInstantKillBoss;
window.devAutoTypeWord = devAutoTypeWord;
window.devToggleAutoBot = devToggleAutoBot;
window.devToggleGodMode = devToggleGodMode;
window.devOpenUpgrades = devOpenUpgrades;
window.showAllCardsModal = showAllCardsModal;
window.closeAllCardsModal = closeAllCardsModal;
window.showAllPromptsModal = showAllPromptsModal;
window.closeAllPromptsModal = closeAllPromptsModal;
window.devSelectPrompt = devSelectPrompt;

// Initialize dev controls immediately if DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDevControls);
} else {
  initDevControls();
}
