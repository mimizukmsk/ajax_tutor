const ajax = new XMLHttpRequest();

// 通信を開始
ajax.open('GET', 'https://h2o-space.com/htmlbook/images.php');
// 受け取るデータを指定する (標準は 'text': DOMStringデータ型)
ajax.responseType = 'json';
// 値を送信
ajax.send(null);

ajax.onreadystatechange = function() {
  // データ受信が完了、かつ、通信先から帰ってきた status が 200(正常) だった場合
  if (ajax.readyState === XMLHttpRequest.DONE && ajax.status === 200) {
    for (let i = 0; i < this.response.length; i++) {
      const data = this.response[i];

      const img = document.createElement('img');
      img.setAttribute('src', data.path);

      const caption = document.createElement('div');
      caption.className = 'inner';
      caption.innerHTML = '<p>' + data.caption + '<span>' + data.name + '</span></p>';

      const div = document.createElement('div');
      div.className = 'photo';
      div.appendChild(img);
      div.appendChild(caption);

      document.getElementById('img_unit').appendChild(div);
    }
  }
};