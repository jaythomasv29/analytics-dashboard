/**
 * Built with the jQuery plugin
 *
 **/
$('.percentage').easyPieChart({
  animate: 1000,
  lineWidth: 4,
  onStep: function(value) {
    this.$el.find('span').text(Math.round(value));
  },
  onStop: function(value, to) {
    this.$el.find('span').text(Math.round(to));
  }
});