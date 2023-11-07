$(function () {
    const currentHour = dayjs().format('H');
    const currentDate = dayjs().format('dddd, MMMM D, YYYY');
  
    function updateHourlyColor() {
      $('.time-block').each(function () {
        const blockHour = parseInt($(this).attr('id'));
        if (blockHour === currentHour) {
          $(this).addClass('present').removeClass('past future');
        } else if (blockHour < currentHour) {
          $(this).addClass('past').removeClass('present future');
        } else {
          $(this).addClass('future').removeClass('past present');
        }
      });
    }
  
    function saveText() {
      $('.saveBtn').on('click', function () {
        const key = $(this).parent().attr('id');
        const value = $(this).siblings('.description').val();
        localStorage.setItem(key, value);
      });
    }
  
    function loadText() {
      $('.time-block').each(function () {
        const key = $(this).attr('id');
        const value = localStorage.getItem(key);
        $(this).find('.description').val(value);
      });
    }
  
    function updateDate() {
      const dateElement = $('#date');
      dateElement.text(currentDate);
    }
  
    updateHourlyColor();
    saveText();
    loadText();
    updateDate();
    setInterval(updateDate, 3600000); // Update the date every minute
  });