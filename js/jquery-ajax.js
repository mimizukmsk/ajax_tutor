$(() => {
  $.getJSON('https://h2o-space.com/htmlbook/images.php', (data) => {
    for (let i = 0; i < data.length; i++) {
      $('<div class="photo"></div>')
        .append('<img src="' + data[i].path + `">`)
        .append('<div class="inner"><p>' + data[i].caption + '<span>' + data[i].name + '</span></p></div>')
        .appendTo('#img_unit');
    }
  });
})