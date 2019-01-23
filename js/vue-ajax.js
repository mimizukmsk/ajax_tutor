const app = new Vue({
  el: '#img_unit',
  data: {
    Photos: []
  },
  created: function() {
    $.getJSON(
      "https://h2o-space.com/htmlbook/images.php",
      data => this.Photos = data
    );
  }
});