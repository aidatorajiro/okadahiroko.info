motion = new Object();
motion.slide = function(tag, start, destination, necessary_time) {
  var fps = 60;
  var age = 0;
  var tagtop = start;
  tag.style.position = 'absolute';
  tag.style.top = tagtop + 'px';
  //-----
  var move_mean_top = (destination - start) / (fps * necessary_time);
  var func = function() {
    age++;
    tagtop += move_mean_top;
    if (age == necessary_time * fps)clearInterval(timerid);
    tag.style.top = Math.floor(tagtop) + 'px';
  };
  //------
  var timerid = setInterval(func, 1000 / fps);
};
motion.mean = function(end, start, fps, necessary_time, variable_name, command, end_command) {
  var mean = (end - start) / (fps * necessary_time);
  var age = 0;
  eval(variable_name + '=' + start);
  var func = function() {
    age++;
    eval(variable_name + '+=' + mean);
    eval(command);
    if (eval(variable_name) < end) {
      eval(end_command);
      clearInterval(timer);
    }
  }
  var timer = setInterval(func, 1000 / 60);
};


mk = slideul.getElementsByTagName('span');
mk.data = [];
ml = slideul.getElementsByTagName('p');
for (i = 0; i != ml.length; i++) {
  mk[i].style.visibility = 'hidden';
  ml[i].i = i;
  ml[i].onmouseover = function() {
    kwskbox.innerHTML = mk[this.i].innerHTML;
    motion.mean(100, 255, 60, 1, 'kwskbox_color', "kwskbox.style.color = 'rgb(' + Math.floor(kwskbox_color) + ', ' + Math.floor(kwskbox_color) + ', ' + Math.floor(kwskbox_color) + ')';");
  };
  motion.slide(ml[i], i * 40 + 300, i * 40, 1);
}
motion.mean(100, 255, 60, 1, 'slideul_color', "slideul.style.color = 'rgb(' + Math.floor(slideul_color) + ', ' + Math.floor(slideul_color) + ', ' + Math.floor(slideul_color) + ')';console.log(slideul_color);");