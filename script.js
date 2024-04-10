function countdown() {
    var count = 3; // 초기 카운트다운 값

    var countdownElement = document.getElementById("countdown");

    // 카운트다운 시작
    var timer = setInterval(function() {
        countdownElement.textContent = count;
        count--;

        // 카운트가 0이 되면 랜덤 숫자를 선택하고 다시 카운트다운 시작
        if (count < 0) {
            var randomNumber = Math.floor(Math.random() * 20) + 1;
            countdownElement.textContent = randomNumber;
            count = 3; // 다시 카운트다운을 위해 초기화
        }
    }, 1000); // 1초마다 업데이트

    // 카운트다운 중지 (무한 루프 방지)
    setTimeout(function() {
        clearInterval(timer);
    }, 30000); // 30초 동안 카운트다운
}

// 페이지가 로드될 때 countdown 함수를 호출하여 카운트다운 시작
window.onload = countdown;
