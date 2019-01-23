$(() => {
  // 引数未指定で、要素の内容を取得、引数指定で、要素の内容書き換え
  // $('#img_unit').html('ここに、画像リストが表示されます');
  // alert($('#img_unit').html());
  // $('#img_unit').css('margin-top', '100px');

  // メソッドチェーンを用いた記述
  // $('#img_unit').html('ここに、画像リストが表示されます').css('margin-top', '100px');

  // jQueryでAjax通信 : getJSONメソッド
  // $.getJSON('https://h2o-space.com/htmlbook/images.php', (data) => {
  //   alert('データを受信しました');
  // });

  // getJSON を用いて要素を描画
  $.getJSON('https://h2o-space.com/htmlbook/images.php', (data) => {
    for (let i = 0; i < data.length; i++) {
      $('<div class="photo"></div>')
        .append('<img src="' + data[i].path + `">`)
        .append('<div class="inner"><p>' + data[i].caption + '<span>' + data[i].name + '</span></p></div>')
        .appendTo('#img_unit');
    }
  });
})