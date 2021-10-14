export const PROGRAM_IDS = {
  TUVUNG: 1,
  CHUHAN: 2,
  GRAMMAR: 3,
  NGHE: 4,
  HOITHOAI: 5,
  READING: 6,
  LUYENTHI: 7,
  THITHU: 8,
};

export const PROGRAM_TYPES = {
  1: 'TUVUNG',
  2: 'CHUHAN',
  3: 'GRAMMAR',
  4: 'NGHE',
  5: 'HOITHOAI',
  6: 'READING',
  7: 'LUYENTHI',
  8: 'THITHU',
};

export const PROGRAM_SLUGS = {
  'tu-vung': 'Từ vựng',
  kanji: 'Chữ Hán',
  'ngu-phap': 'Ngữ pháp',
  'luyen-nghe': 'Luyện nghe',
  'hoi-thoai': 'Hội thoại',
  'luyen-doc': 'Luyện đọc',
  'luyen-thi': 'Luyện thi',
  'thi-thu': 'Thi thử',
};

export const PROGRAM_API_ENDPOINTS = {
  'tu-vung': 'vocabs?', // ?
  kanji: 'boards?populate=cards?',
  'ngu-phap': 'grammar?',
  'luyen-nghe': 'listening-boards?',
  'hoi-thoai': 'dialog-boards?',
  'luyen-doc': 'reading-boards?',
  'luyen-thi': 'sub-tests?',
  'thi-thu': 'trial-tests?',
};

export const PROGRAM_SELECTED = 'boilerplate/ProgramPage/PROGRAM_SELECTED';
