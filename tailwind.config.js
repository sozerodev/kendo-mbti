/** 
 * Tailwind CSS 설정 파일
 * - Tailwind: CSS 유틸리티 클래스 라이브러리
 * - 미리 정의된 클래스들로 빠른 스타일링 가능 (예: text-center, bg-blue-500)
 */
module.exports = {
  // 어떤 파일에서 Tailwind 클래스를 찾을지 설정
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app/**/*.vue"
  ],
  theme: {
    extend: {
      // 커스텀 색상, 폰트 등을 추가할 수 있음
      fontFamily: {
        'korean': ['Noto Sans KR', 'sans-serif']
      }
    },
  },
  plugins: [],
}