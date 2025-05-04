import { Candidate } from '@/types';

/**
 * 후보자 데이터
 * 모든 페이지에서 재사용 가능한 후보자 정보입니다.
 * 추후 Supabase에서 데이터를 가져오는 것으로 대체될 예정입니다.
 */
export const candidates: Candidate[] = [
  {
    id: 'lee-jaemyung',
    name: '이재명',
    party: '더불어민주당',
    age: 58,
    birthplace: '경기도 안양시',
    education: ['중앙대학교 법학과 졸업'],
    career: ['제20대 더불어민주당 대선 후보', '전 경기도지사', '전 성남시장'],
    slogan: '지속 가능한 미래를 위한 혁신',
    profileImage: '/images/candidates/lee-jaemyung.jpg',
  },
  {
    id: 'han-donghun',
    name: '김문수',
    party: '국민의힘',
    age: 67,
    birthplace: '경상남도 창녕군',
    education: ['서울대학교 법학과 졸업'],
    career: ['제20대 국민의힘 대선 경선 후보', '전 자유한국당 대표', '전 경상남도지사'],
    slogan: '국민과 함께하는 새로운 정치',
    profileImage: '/images/candidates/han-donghun.jpg',
  },
  {
    id: 'lee-junseok',
    name: '이준석',
    party: '국민의힘',
    age: 36,
    birthplace: '서울특별시',
    education: ['서울대학교 컴퓨터공학과 졸업'],
    career: ['제20대 국민의힘 대표', '전 미래통합당 최고위원', '전 한국미래연합 공동대표'],
    slogan: '경제 성장과 사회 안정을 위해',
    profileImage: '/images/candidates/lee-junseok.jpg',
  },
  {
    id: 'sim-sangjeong',
    name: '심상정',
    party: '정의당',
    age: 63,
    birthplace: '서울특별시',
    education: ['한양대학교 사회학과 졸업'],
    career: ['제20대 정의당 대선 후보', '전 정의당 대표', '제21대 국회의원'],
    slogan: '불평등 해소와 정의로운 사회 실현',
    profileImage: '/images/candidates/sim-sangjeong.jpg',
  },
  {
    id: 'ahn-cheolsoo',
    name: '안철수',
    party: '국민의당',
    age: 60,
    birthplace: '부산광역시',
    education: ['서울대학교 의과대학 졸업', 'KAIST 박사'],
    career: ['제20대 국민의당 대선 후보', '전 바른미래당 대표', '전 서울시장 후보'],
    slogan: '과학기술 혁신으로 대한민국 도약',
    profileImage: '/images/candidates/ahn-cheolsoo.jpg',
  }
];

/**
 * 후보자 ID로 후보자 정보 찾기
 * @param id 후보자 ID
 * @returns 후보자 정보 또는 undefined
 */
export const getCandidateById = (id: string): Candidate | undefined => {
  return candidates.find(candidate => candidate.id === id);
};

/**
 * 비교를 위한 후보자 정책 데이터
 * 카테고리별로 각 후보의 정책 요약을 담고 있습니다.
 */
export const comparisonData = {
  "경제": {
    "lee-jaemyung": "디지털 경제 전환 가속화 · AI 산업 육성 · 중소기업 혁신 지원 · 공정경제 생태계 구축",
    "han-donghun": "대기업 규제 완화 · 투자 활성화 · 세금 감면 · 기업 중심 경제 회복",
    "lee-junseok": "스타트업 생태계 육성 · 디지털 혁신 기업 지원 · 청년 창업 지원 · 미래산업 투자 확대",
    "sim-sangjeong": "대기업 지배구조 개혁 · 노동자 경영참여 · 사회적 경제 확대 · 재벌개혁과 경제민주화",
    "ahn-cheolsoo": "디지털 기술기반 경제 혁신 · 벤처기업 지원 확대 · R&D 투자 증가 · 규제 샌드박스 도입"
  },
  "복지": {
    "lee-jaemyung": "기본소득 도입 · 전국민 재난지원금 · 복지사각지대 해소 · 돌봄노동 공공화",
    "han-donghun": "선별적 복지 확대 · 민간 참여 확대 · 자립형 복지체계 · 고령화 대비 연금개혁",
    "lee-junseok": "청년 기본소득 · 디지털 복지플랫폼 · 맞춤형 복지서비스 · 세대 간 형평성 제고",
    "sim-sangjeong": "보편적 복지 확대 · 국가책임 돌봄체계 · 아동수당 확대 · 기초연금 강화",
    "ahn-cheolsoo": "과학기술 기반 스마트 복지 · 예방중심 의료체계 · 맞춤형 사회안전망 · 삶의 질 향상"
  },
  "교육": {
    "lee-jaemyung": "교육 불평등 해소 · 공교육 강화 · 평생학습 체계 · 디지털 교육 확대",
    "han-donghun": "교육 자율성 확대 · 경쟁력 강화 · 수월성 교육 · 입시제도 안정화",
    "lee-junseok": "AI 교육 혁신 · 디지털 리터러시 · 평생교육 체계 · 메타버스 교육 플랫폼",
    "sim-sangjeong": "무상교육 확대 · 대학서열화 해소 · 교육불평등 해소 · 민주시민교육 강화",
    "ahn-cheolsoo": "디지털 교육 혁명 · 창의융합 인재양성 · 글로벌 교육 경쟁력 강화 · 교사 전문성 강화"
  },
  "외교/안보": {
    "lee-jaemyung": "한미동맹 강화 · 남북 평화경제 · 균형외교 · 동북아 협력체계 구축",
    "han-donghun": "한미일 안보협력 강화 · 북핵 강경대응 · 국방력 증강 · 자주국방 역량 강화",
    "lee-junseok": "실용적 대미외교 · 글로벌 디지털 협력 · 신흥 안보 대응 · 스마트 국방",
    "sim-sangjeong": "평화외교 · 남북대화 재개 · 동북아 평화체제 구축 · 평화적 핵문제 해결",
    "ahn-cheolsoo": "과학기술 외교 강화 · 사이버 안보 강화 · 실용적 대북정책 · 글로벌 협력 확대"
  },
  "환경": {
    "lee-jaemyung": "2050 탄소중립 추진 · 녹색일자리 창출 · 순환경제 활성화 · 신재생에너지 전환",
    "han-donghun": "원전 확대 · 친환경 산업 육성 · 그린뉴딜 추진 · 미세먼지 저감",
    "lee-junseok": "스마트 그린시티 · 그린테크 산업 육성 · 신재생에너지 확대 · 디지털 탄소중립",
    "sim-sangjeong": "그린뉴딜 강화 · 탈원전 정책 · 환경정의 실현 · 생태계 보전 확대",
    "ahn-cheolsoo": "과학기술 활용 환경문제 해결 · 원전-신재생 조화 · 녹색기술 혁신 · 탄소중립 로드맵"
  },
  "주거/부동산": {
    "lee-jaemyung": "250만호 주택공급 · 공공임대 확대 · 부동산 투기 근절 · 1인 가구 주거 지원",
    "han-donghun": "규제 완화로 주택공급 확대 · 재건축 활성화 · 세제 개편 · 민간 중심 주택시장",
    "lee-junseok": "청년 주택 공급 확대 · 스마트 주거서비스 · 세대별 맞춤형 주택정책 · 도심 재생",
    "sim-sangjeong": "주택공공성 강화 · 주택불평등 해소 · 토지공개념 도입 · 1가구 1주택 정책",
    "ahn-cheolsoo": "기술 기반 주택공급 혁신 · 스마트시티 개발 · 주거복지 향상 · 미래형 주택 보급"
  },
  "일자리": {
    "lee-jaemyung": "공공일자리 100만개 창출 · 디지털 일자리 육성 · 노동권 강화 · 일자리 안전망 확충",
    "han-donghun": "기업 중심 일자리 창출 · 노동시장 유연화 · 소상공인 지원 · 신산업 육성",
    "lee-junseok": "청년 혁신 일자리 · 플랫폼 노동 보호 · 미래형 일자리 교육 · 세대상생형 고용",
    "sim-sangjeong": "노동시간 단축 · 양질의 공공일자리 · 정규직 전환 · 노동자 권리 보장",
    "ahn-cheolsoo": "디지털 혁신 일자리 · 벤처창업 생태계 · AI-인간 협업형 일자리 · 글로벌 인재 양성"
  },
  "보건/의료": {
    "lee-jaemyung": "공공의료 확대 · 감염병 대응체계 구축 · 건강보험 보장성 강화 · 의료격차 해소",
    "han-donghun": "민간 의료 혁신 지원 · 디지털 헬스케어 육성 · 의료 효율성 제고 · 바이오산업 육성",
    "lee-junseok": "디지털 헬스케어 플랫폼 · AI 의료 서비스 · 의료 빅데이터 활용 · 미래 의료 혁신",
    "sim-sangjeong": "국가 책임 의료 · 의료 공공성 강화 · 의료불평등 해소 · 의약품 공공성 확대",
    "ahn-cheolsoo": "의사 출신의 전문성 · 디지털 의료 혁신 · 바이오 신약 개발 · 국가 의료체계 효율화"
  }
};

/**
 * 정책 카테고리 설명
 * 각 정책 카테고리에 대한 설명을 제공합니다.
 */
export const categoryDescriptions = {
  "경제": "각 후보의 경제 정책, 산업 육성, 경제 성장, 공정경제 관련 공약",
  "복지": "사회 안전망, 기본소득, 연금, 사회보장 관련 정책",
  "교육": "교육 정책, 교육 개혁, 디지털 교육, 학제 개편 등",
  "외교/안보": "외교 정책, 국방, 안보, 한반도 평화, 국제 관계 등",
  "환경": "환경 정책, 탄소중립, 신재생에너지, 환경 보호 등",
  "주거/부동산": "주택 정책, 부동산 규제, 임대 정책, 주거 복지 등",
  "일자리": "고용 정책, 일자리 창출, 노동권, 노동시장 개혁 등",
  "보건/의료": "의료 정책, 건강보험, 공공의료, 감염병 대응, 의료 혁신 등"
}; 