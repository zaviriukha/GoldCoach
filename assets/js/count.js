        function getRelativeDate(days, hours, minutes) {
            var date = new Date((new Date()).getTime() + 60000 /* milisec */ * 60 /* minutes */ * 24 /* hours */ * days /* days */ );
            date.setHours(hours || 0);
            date.setMinutes(minutes || 0);
            date.setSeconds(0);
            return date;
        }

        $('#clock-1').timeTo({
            timeTo: new Date('Dec 01 2018 23:00:00'),
            displayCaptions: true,
            fontSize: 28,
            captionSize: 12,
            languages: {
                pl: {
                    days: 'дней',
                    hours: 'часов',
                    min: 'минут',
                    sec: 'секунд'
                }
            },
            lang: 'ru',
            theme: "black",
        });