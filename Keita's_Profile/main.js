/*メニューバーをクリックしたときの動作*/
$('#header_btn').on('click',(e) => {
	$('#menu_contents').fadeIn();
	$('#header_btn').fadeOut();
});
/*メニューコンテンツを閉じるときの動作*/

$('#close-modal').on('click',(e) => {
	$('#menu_contents').fadeOut();
	$('#header_btn').fadeIn();
});

/*menuボタンを押したときの各々の動作*/
$('#menu_container li').on('click',(e) => {
	$('#menu_contents').fadeOut();
	$('#header_btn').fadeIn();
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

  // 要素が表示範囲の30%が画面に来たらhandlerを実行
  offset: '70%',
});