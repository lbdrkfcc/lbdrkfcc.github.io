$(function(){
    
    var geoData = [
        {
            ao: 'uao',
            ao_name: 'Южный АО',
            coordinatesAO: [55.610906, 37.681479],
            type: 'Point',
            coordinates: [55.666315, 37.626349],
            content: 'Каширское шоссе, дом 10 корп.3',
            title: 'Автосервис в ЮАО',
            time: '9:00 - 21:00',
            phone: '8(495)380-10-10'
        },
        {
            ao: 'uao',
            ao_name: 'Южный АО',
            coordinatesAO: [55.610906, 37.681479],
            type: 'Point',
            coordinates: [55.719957, 37.634595],
            content: 'ул. Дубининская, 76',
            title: 'Автосервис в ЮАО',
            time: '9:00 - 21:00',
            phone: '8(495)380-10-10'
        },
        {
            ao: 'cao',
            ao_name: 'Центральный АО',
            coordinatesAO: [55.753742, 37.615533],
            type: 'Point',
            coordinates: [55.731465, 37.685907],
            content: 'Михайловский проезд, д.1 стр.17',
            title: 'Автосервис в ЦАО',
            time: '9:00 - 21:00',
            phone: '8(495)380-10-10'
        },
        {
            ao: 'vao',
            ao_name: 'Восточный АО',
            coordinatesAO: [55.787710, 37.775631],
            type: 'Point',
            coordinates: [55.775241, 37.746229],
            content: '1-ая ул. Измайловского Зверинца, д. 8',
            title: 'Автосервис в ВАО',
            time: '9:00 - 21:00',
            phone: '8(495)380-10-10'
        },
        {
            ao: 'vao',
            ao_name: 'Восточный АО',
            coordinatesAO: [55.787710, 37.775631],
            type: 'Point',
            coordinates: [55.809808, 37.763072],
            content: 'ул. Амурская, 3 стр.32 (Гольяново)',
            title: 'Автосервис в ВАО',
            time: '9:00 - 21:00',
            phone: '8(495)380-10-10'
        },
        {
            ao: 'vao',
            ao_name: 'Восточный АО',
            coordinatesAO: [55.787710, 37.775631],
            type: 'Point',
            coordinates: [55.812929, 37.775263],
            content: 'ул. Монтажная, 11 стр.2',
            title: 'Автосервис в ВАО',
            time: '9:00 - 21:00',
            phone: '8(495)380-10-10'
        },
        {
            ao: 'zao',
            ao_name: 'Западный АО',
            coordinatesAO: [55.728003, 37.443533],
            type: 'Point',
            coordinates: [55.740745, 37.526411],
            content: 'Кутузовский проспект, 36, стр.15',
            title: 'Автосервис в ЗАО',
            time: '9:00 - 21:00',
            phone: '8(495)380-10-10'
        },
        {
            ao: 'zao',
            ao_name: 'Западный АО',
            coordinatesAO: [55.728003, 37.443533],
            type: 'Point',
            coordinates: [55.686421, 37.511948],
            content: 'проспект Вернадского, 12д',
            title: 'Автосервис в ЗАО',
            time: '9:00 - 21:00',
            phone: '8(495)380-10-10'
        },
        {
            ao: 'zao',
            ao_name: 'Западный АО',
            coordinatesAO: [55.728003, 37.443533],
            type: 'Point',
            coordinates: [55.705975, 37.406226],
            content: 'Сколковское шоссе, 31 стр.9',
            title: 'Автосервис в ЗАО',
            time: '9:00 - 21:00',
            phone: '8(495)380-10-10'
        },
        {
            ao: 'zao',
            ao_name: 'Западный АО',
            coordinatesAO: [55.728003, 37.443533],
            type: 'Point',
            coordinates: [55.773894, 37.439697],
            content: 'ул. Крылатская, 30 стр.3',
            title: 'Автосервис в ЗАО',
            time: '9:00 - 21:00',
            phone: '8(495)380-10-10'
        },
        {
            ao: 'uzao',
            ao_name: 'Юго-Западный АО',
            coordinatesAO: [55.662735, 37.576178],
            type: 'Point',
            coordinates: [55.637921, 37.588853],
            content: 'Северное Чертаново, дом 5 корп.Д стр.7',
            title: 'Автосервис в ЮЗАО',
            time: '9:00 - 21:00',
            phone: '8(495)380-10-10'
        },
        {
            ao: 'uzao',
            ao_name: 'Юго-Западный АО',
            coordinatesAO: [55.662735, 37.576178],
            type: 'Point',
            coordinates: [55.624347, 37.508292],
            content: 'ул. Профсоюзная, 144',
            title: 'Автосервис в ЮЗАО',
            time: '9:00 - 21:00',
            phone: '8(495)380-10-10'
        },
        {
            ao: 'uzao',
            ao_name: 'Юго-Западный АО',
            coordinatesAO: [55.662735, 37.576178],
            type: 'Point',
            coordinates: [55.693033, 37.578325],
            content: 'ул. Шверника, 2 стр.4',
            title: 'Автосервис в ЮЗАО',
            time: '9:00 - 21:00',
            phone: '8(495)380-10-10'
        },
        {
            ao: 'svao',
            ao_name: 'Северо-Восточный АО',
            coordinatesAO: [55.863833, 37.620366],
            type: 'Point',
            coordinates: [55.822185, 37.621543],
            content: 'ул. Академика Королева, дом 8, корп.3',
            title: 'Автосервис в СВАО',
            time: '9:00 - 21:00',
            phone: '8(495)380-10-10'
        },
        {
            ao: 'svao',
            ao_name: 'Северо-Восточный АО',
            coordinatesAO: [55.863833, 37.620366],
            type: 'Point',
            coordinates: [55.870157, 37.573744],
            content: 'ул. Поморская, 48А (Отрадное)',
            title: 'Автосервис в СВАО',
            time: '9:00 - 21:00',
            phone: '8(495)380-10-10'
        },
        {
            ao: 'sao',
            ao_name: 'Северный АО',
            coordinatesAO: [55.838384, 37.525765],
            type: 'Point',
            coordinates: [55.809869, 37.513350],
            content: 'ул. Балтийская, 11 (Сокол)',
            title: 'Автосервис в САО',
            time: '9:00 - 21:00',
            phone: '8(495)380-10-10'
        },
        {
            ao: 'szao',
            ao_name: 'Северо-Западный АО',
            coordinatesAO: [55.829370, 37.451546],
            type: 'Point',
            coordinates: [55.790175, 37.397243],
            content: 'ул. Маршала Прошлякова, дом 6 стр.28 (Строгино)',
            title: 'Автосервис в СЗАО',
            time: '9:00 - 21:00',
            phone: '8(495)380-10-10'
        },
        {
            ao: 'uvao',
            ao_name: 'Юго-Восточный АО',
            coordinatesAO: [55.692019, 37.754583],
            type: 'Point',
            coordinates: [55.677763, 37.854629],
            content: 'ул. Привольная, 70 к.1 (Жулебино)',
            title: 'Автосервис в ЮВАО',
            time: '9:00 - 21:00',
            phone: '8(495)380-10-10'
        },
        {
            ao: 'szao',
            ao_name: 'Северо-Западный АО',
            coordinatesAO: [55.829370, 37.451546],
            type: 'Point',
            coordinates: [55.871132, 37.399973],
            content: 'Путилковское шоссе, 1 (Куркино)',
            title: 'Автосервис на МКАД',
            time: '9:00 - 21:00',
            phone: '8(495)380-10-10'
        },
        
    ];
    
    var elem = $('.yamap-list>ul>li');
    var listAO = [];
    
    function unique(arr) {
      var result = [];
        nextInput: 
        for (var i = 0; i < arr.length; i++) {
          var str = arr[i]; 
          for (var j = 0; j < result.length; j++) { 
            if (result[j] == str) continue nextInput; 
          }
          result.push(str);
        }

      return result;
    }
    
    
    
    geoData.forEach(function(i,item,arr){
        
        if (listAO.includes(geoData[item].ao)) {
            $('.yamap-list>ul').find('[data-ao='+geoData[item].ao+']').append('<a href="#" data-coordinates='+geoData[item].coordinates+'>'+geoData[item].content+'</a>');
        } else {
            listAO.push(geoData[item].ao);
            listAO = unique(listAO);
            
            $('.yamap-list>ul').append('<li data-ao='+geoData[item].ao+'><h4 class="list-title">'+geoData[item].ao_name+'</h4>');
            $('.yamap-list>ul').find('[data-ao='+geoData[item].ao+']').append('<a href="#" data-coordinates='+geoData[item].coordinates+'>'+geoData[item].content+'</a>');
        }
        
        
    });
                    
    console.log(listAO);
    
    geoData.forEach(function(i,item,arr){
        
        
        
        
        
        
//        if( !tryAO() ){
//            $('.yamap-list>ul>li').append('<a href="#">'+geoData[item].content+'</a><br>');
//        } else {
//            $('.yamap-list>ul').append('<li data-ao='+geoData[item].ao+'><h4 class="list-title">'+geoData[item].ao_name+'</h4>');
//        }
        
    });
    
//    console.log( $('.yamap-list>ul>li') );
    
    
    
//    $('.yamap-list').html('addressList');
    
    ymaps.ready(init);
    var myMap;
    
    function init(){     
        myMap = new ymaps.Map("ya_map", {
            center: [55.76, 37.64],
            zoom: 10,
        });
//        myMap.behaviors.disable(['scrollZoom']);
         MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
             '<div class="yamap-ballon">'+
                '<div class="yamap-ballon-close">&#215;</div>'+
                '<div class="yamap-ballon-body">'+
                 '$[[options.contentLayout observeSize minWidth=260 maxWidth=260 maxHeight=280]]'+
                '</div>'+
                '<a href="http://diagnosis.nakolesah.top/record/" class="yamap-ballon-button">Записаться</a>'+
                '<div class="yamap-ballon-arrow"></div>'+
             '</div>',{
                 /**
                 * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
                 * @function
                 * @name build
                 */
                build: function () {
                    this.constructor.superclass.build.call(this);

                    this._$element = $('.yamap-ballon', this.getParentElement());

                    this.applyElementOffset();

                    this._$element.find('.yamap-ballon-close')
                        .on('click', $.proxy(this.onCloseClick, this));
                },

                /**
                 * Удаляет содержимое макета из DOM.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                 * @function
                 * @name clear
                 */
                clear: function () {
                    this._$element.find('.yamap-ballon-close')
                        .off('click');

                    this.constructor.superclass.clear.call(this);
                },

                /**
                 * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onSublayoutSizeChange
                 */
                onSublayoutSizeChange: function () {
                    MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

                    if(!this._isElement(this._$element)) {
                        return;
                    }

                    this.applyElementOffset();

                    this.events.fire('shapechange');
                },

                /**
                 * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name applyElementOffset
                 */
                applyElementOffset: function () {
                    var h = this._$element[0].offsetHeight;
//                    if(h < 280){
//                        h = 280;
//                    }
                    this._$element.css({
                        left: -(this._$element[0].offsetWidth / 2),
                        top: -(h + 65)
                    });
                },

                /**
                 * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onCloseClick
                 */
                onCloseClick: function (e) {
                    e.preventDefault();

                    this.events.fire('userclose');
                },

                /**
                 * Используется для автопозиционирования (balloonAutoPan).
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
                 * @function
                 * @name getClientBounds
                 * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
                 */
                getShape: function () {
                    if(!this._isElement(this._$element)) {
                        return MyBalloonLayout.superclass.getShape.call(this);
                    }

                    var position = this._$element.position();

                    return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                        [position.left, position.top], [
                            position.left + this._$element[0].offsetWidth,
                            position.top + this._$element[0].offsetHeight + this._$element.find('.yamap-ballon-arrow')[0].offsetHeight
                        ]
                    ]));
                },

                /**
                 * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                 * @function
                 * @private
                 * @name _isElement
                 * @param {jQuery} [element] Элемент.
                 * @returns {Boolean} Флаг наличия.
                 */
                _isElement: function (element) {
                    return element && element[0] && element.find('.yamap-ballon-arrow')[0];
                }
             });
        
         MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '$[properties.balloonContent]'
         );
        
        function getBallonContent(arr){
            var content = 
                '<div class="yamap-ballon-title">'+arr.title+'</div>'+
                '<div class="yamap-ballon-block"><span class="yamap-ballon-lable">Телефон</span>'+arr.phone+'</div>'+
                '<div class="yamap-ballon-block"><span class="yamap-ballon-lable">Адрес</span>'+arr.content+'</div>'+
                '<div class="yamap-ballon-block"><span class="yamap-ballon-lable">Время работы</span>'+arr.time+'</div>';
            
            return content;
        }
        
        myCollection = new ymaps.Collection;
        geoData.forEach(function(i,item,arr){
            myPlacemark = new ymaps.Placemark(arr[item].coordinates,{
                balloonContent: getBallonContent(arr[item]),
            },{
                iconColor: 'red',
                balloonLayout: MyBalloonLayout,
                hideIconOnBalloonOpen: false
            });
            myCollection.add(myPlacemark);
        });
        myMap.geoObjects.add(myCollection);

        
        $(document).click(function(e) {
            
            if ($(e.target).closest(".yamap").length || $(e.target).closest(".yamap-ballon-close").length){
                return;
            } 
            $('.ao').removeClass('ao-active');
            e.stopPropagation();
            
            myMap.setCenter([55.76, 37.64], 10);
            
            myCollection.removeAll();
            $('.yamap-list>ul>li').removeClass('yamap-hide');
            
            geoData.forEach(function(i,item,arr){
                myPlacemark = new ymaps.Placemark(arr[item].coordinates,{
                    balloonContent: getBallonContent(arr[item]),
                },{
                    iconColor: 'red',
                    balloonLayout: MyBalloonLayout,
                    hideIconOnBalloonOpen: false
                });
                myCollection.add(myPlacemark);
            });
            myMap.geoObjects.add(myCollection);
        });
        
        
        $('.yamap-list>ul>li>a').click(function(){
            
            var elemData = $(this).data('coordinates');
            console.log(elemData);
            myCollection.removeAll();
            geoData.forEach(function(i,item,arr){
                if(elemData == arr[item].coordinates){
                    myPlacemark = new ymaps.Placemark(arr[item].coordinates,{
                        balloonContent: getBallonContent(arr[item]),
                    },{
                        iconColor: 'red',
                        balloonLayout: MyBalloonLayout,
                        hideIconOnBalloonOpen: false
                    });
                    myCollection.add(myPlacemark);
                    myMap.setCenter(arr[item].coordinates, 10);
                }
            });
            
//            $('.yamap-list>ul>li').each(function(){
//                if( $(this).data('ao') == elemData ){
//                    $(this).removeClass('yamap-hide');
//                } else {
//                    $(this).addClass('yamap-hide');
//                }
//            });
            
        });
        
    }
    
});