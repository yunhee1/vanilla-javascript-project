function go() {
    showCircle(150, 150, 100, div => {
      //div에 'message-ball' css를 추가하세요.
      div.classList.add('message-ball');
      div.append("원이 다 그려졌어요");
    });
  }

  //함수 showCircle을 작성하세요.
  function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    // div style 의 width, height = 0 입니다
    // cx, cy는 원의 중심의 좌표입니다
    // div 의 클래스명은 'circle'입니다.
    // document의 body에 div를 추가하세요
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

  setTimeout(() => {
      //원의 radius 가 2배 픽셀이 되도록 해주세요.
      //div에 이벤트를 등록하세요. transition 속성을 활용하여 원의 크기를 커지게 해주세요. 
      //div 요소의 transition 이벤트 리스너를 제거하고, 콜백 함수 callback(div)을 호출하세요. 
      //원이 커지는 걸 완료한 후에 원에 글씨를 추가할 수 있도록 callback 함수를 등록해주세요.
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        callback(div);
      });
    }, 0);
  }