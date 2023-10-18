$(document).ready(function(){
      $('form').on('submit', function(e){
            e.preventDefault();
            var inputString = $("#nome-tarefa").val();
            $('ul').append('<li>'+inputString+'</li>');
            return false;
      })
})

$('ul').on('click', 'li', function(){
      $(this).css('text-decoration', 'line-through');
})