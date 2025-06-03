// 입력값 변경될 때마다 해당 국가 총합 계산 후 업데이트
document.querySelectorAll('.country').forEach(countryEl => {
  const inputs = countryEl.querySelectorAll('.cost-input');
  const totalSpan = countryEl.querySelector('.total-cost span');

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      let sum = 0;
      inputs.forEach(i => {
        const val = parseInt(i.value);
        if (!isNaN(val)) sum += val;
      });
      totalSpan.textContent = sum;
    });
  });
});
const travelData = [
  { country: '일본', emoji: '🇯🇵', 숙박: 80, 식비: 30, 교통: 20 },
  { country: '태국', emoji: '🇹🇭', 숙박: 50, 식비: 20, 교통: 10 },
  { country: '프랑스', emoji: '🇫🇷', 숙박: 120, 식비: 50, 교통: 30 },
  { country: '호주', emoji: '🇦🇺', 숙박: 100, 식비: 40, 교통: 25 }
];

// travelData를 HTML에 뿌려주는 코드 작성
