$(function() {
    $('input[id="date"]').daterangepicker({
        "showWeekNumbers": false,
        "showISOWeekNumbers": false,
        "locale": {
            "format": "MM/DD/YYYY",
            "separator": " - ",
            "applyLabel": "Uygula",
            "cancelLabel": "İptal",
            "fromLabel": "From",
            "toLabel": "To",
            "daysOfWeek": [
                "Pzt",
                "Sal",
                "Çar",
                "Per",
                "Cum",
                "Cmt",
                "Pzr"
            ],
            "monthNames": [
                "Ocak",
                "Şubat",
                "Mart",
                "Nisan",
                "Mayıs",
                "Haziran",
                "Temmuz",
                "Ağustos",
                "Eylül",
                "Ekim",
                "Kasım",
                "Aralık"
            ],
            "firstDay": 1
        },
    }, 
    function(start, end, label) {
      console.log('Yeni Aralık Seçildi: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
    });
});