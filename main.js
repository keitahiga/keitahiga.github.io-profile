/*登録フォームのボタンクリックの動作*/
$('.signup-show').on('click',(e) => {
  $('#login').fadeIn();
});

$('#close-modal').on('click',(e) => {
  $('#login').fadeOut();
});

/*各foodのボタンを押した時の動作*/
$('#').on('click',(e) => {
  $('#login').fadeIn();
});

$('#').on('click',(e) => {
  $('#login').fadeOut();
});

// animatedクラスの付いた要素にwaypointを登録
$('.animated').waypoint({
  handler(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素にfadeInUpクラスを付けることで
       * アニメーションを開始
       */
      $(this.element).addClass('fadeInUp');

      /**
       * waypointを削除することで、この要素に対しては
       * これ以降handlerが呼ばれなくなる
       */
      this.destroy();
    }
  },

  // 要素が表示範囲の20%が画面に来たらhandlerを実行
  offset: '80%',
});
