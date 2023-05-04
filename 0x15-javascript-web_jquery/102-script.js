$(document).ready(function() {
      $('#btn_translate').click(function() {
        let languageCode = $('#language_code').val();
        let apiUrl = 'https://www.fourtonfish.com/hellosalut/hello/' + languageCode;

        $.get(apiUrl, function(data) {
          $('#hello').text(data.hello);
        });
      });
    });
