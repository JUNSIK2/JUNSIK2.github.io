const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
const email = document.querySelector('#email');
const dialog = document.querySelector('.subscribe_modal');
const scrollTopButton = document.querySelector('.top-scroll-button');
const sideBar = document.querySelector('.side-bar');

// 이메일 유효성 검사
document.querySelector('.subscribe_btn').addEventListener('click', () => {
    if(exptext.test(email.value) == false) {
        alert('이메일 형식이 올바르지 않습니다.');
    } else {
        dialog.showModal();
    }
});

// 모달 닫기
document.querySelector('.ok_btn').addEventListener('click', () => {
    dialog.close();
});


// 탑 스크롤
document.querySelector('.top-scroll-button').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 최상단 스크롤 버튼 감추기
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// 사이드바
document.querySelector('.side-button').addEventListener('click', () => {
    sideBar.style.display  = 'block';
});

document.querySelector('.close-side-bar').addEventListener('click', () => {
    sideBar.style.display  = 'none';
});

// 카카오맵 api
var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴