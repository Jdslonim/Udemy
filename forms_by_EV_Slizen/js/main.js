window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    //Timer

    let deadLine = '2019-01-08 24:00';

    function getTimeRemaning (endtime) {
        let t = Date.parse(deadLine) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaning(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            if (hours.textContent.length <= 1) {
                hours.textContent = "0" + t.hours;
            }
            if (minutes.textContent.length <= 1) {
                minutes.textContent = "0" + t.minutes;
            }
            if (seconds.textContent.length <= 1) {
                seconds.textContent = "0" + t.seconds;
            }
            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
        }
    }

    setClock('timer', deadLine);

    //Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        morer = document.querySelectorAll('.description-btn');

    more.addEventListener('click', function(){
        modal(this);
    });

    close.addEventListener('click', function(){
        modal(this);
    });

    for (let i = 0; i < morer.length; i++) {
        morer[i].addEventListener('click', function() {
            modal(this);
        });
    }

    function modal(btn) {
        if (btn !== close) {
            overlay.style.display = 'block';
            btn.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        } else {
            overlay.style.display = 'none';
            btn.classList.remove('more-splash');
            document.body.style.overflow = '';
        }
    }

    //Form

    let message = {
        loading: 'Загрузка',
        seccess: 'Спасибо, скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        backcallForm = document.querySelector('#form'),
        inputForm = form.getElementsByTagName('input'),
        inputBackcallForm = backcallForm.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    function workThisForm (form) {
        form.addEventListener('submit', function(event){
            event.preventDefault();
            form.appendChild(statusMessage);
    
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    
            let formData = new FormData(form);
    
            let obj = {};
            formData.forEach(function(value, key){
                obj[key] = value;
            });
            let json = JSON.stringify(obj);
    
            request.send(json);
    
            request.addEventListener('readystatechange', function(){
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.seccess;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });
    
                function cleanInput(input) {
                    for (let i = 0; i < input.length; i++) {
                        input[i].value = '';
                    }
                }
                cleanInput(inputForm);
                cleanInput(inputBackcallForm);
    
        });
    }

    workThisForm(form);
    workThisForm(backcallForm);

});
