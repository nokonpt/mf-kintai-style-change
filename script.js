//
// # マネーフォワードクラウド勤怠をカスタマイズ
// - 必要なボタンだけ表示
// - 画面を自動リロード
// - 二度押し対策
// - Googleライクなボタンデザインに変更
// マネーフォワードの仕様が変わったら利用できなくなる為注意
//

// ウィンドウがアクティブになった際に画面をリロード
function play() {
  location.reload();
}
window.addEventListener('focus', play, false);

$(function(){
  const today = $('#web_time_recorder_form_user_time').val();
  // 8h,9h は出勤のみ表示
  const dataA = /(T23|T00)/g;
  // 16h,17h,18h,19h,20h,21h,22h,23h は退勤のみ表示
  const dataB = /(T07|T08|T09|T10|T11|T12|T13)/g;
  console.log(today);
  if(today.match(dataA)){
    console.log('出勤時間');
    $('.attendance-card-time-stamp-list li:nth-child(1) .attendance-card-time-stamp-button').attr('id', 'hackButtonDisplay');
    $('.attendance-card-time-stamp-list li:nth-child(2) .attendance-card-time-stamp-button').attr('id', 'hackButtonNone');
  }else if(today.match(dataB)){
    console.log('退勤時間');
    $('.attendance-card-time-stamp-list li:nth-child(2) .attendance-card-time-stamp-button').attr('id', 'hackButtonDisplay');
    $('.attendance-card-time-stamp-list li:nth-child(1) .attendance-card-time-stamp-button').attr('id', 'hackButtonNone');
  }else {
    console.log('なし');
  }
  // After clicking
  $('.attendance-card-time-stamp-button').click(function(){
    $('.attendance-card-time-stamp-button').attr('id', 'hackButton');
    $('.attendance-breadcrumbs-list').attr('id', 'hackBack');
    $('html').attr('id', 'hackBody');
  });
});
