

      function output_value(myRange,demo){
        var myRange=myRange;
        var demo=demo;

        var slider = document.getElementById(myRange);
        var output = document.getElementById(demo);
        output.innerHTML = slider.value;

        slider.oninput = function() {
        output.innerHTML = this.value;
        }
      }
      output_value('myRange1','demo1');
      output_value('myRange2','demo2');
      output_value('myRange3','demo3');
      output_value('myRange4','demo4');
      output_value('myRange5','demo5');
      output_value('myRange6','demo6');
  


