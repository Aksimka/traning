new Vue({
    el: '#app',
    data:{
        lessons:[
            {
                id: 0,
                parent: 0,
                name: 'Введение в HTML',
                description: 'В этом уроке вы приобретете фундаментальные знания об html. Мы изучим структуру DOM, теги метаданных < meta > и основные теги для создания базовой разметки html документа',
                views: '1178',
                author: {
                    nick: 'Aksimka',
                    pic: 'images/icon.jpg',
                    url: 'https://vk.com/id16830545'
                },
                bg: 'images/item-bg.png',
                shadow: true,
                disabled: false,
                liked: false,
                questions: 7,
                progressStep: function () {
                    return 100/this.questions;
                },
                progress: 0,
                progressColor: function () {
                    if(this.progress <25){
                        return '#ff958c';
                    }
                    else if(this.progress >=25 && this.progress < 50){
                        return '#ffcf7e';
                    }
                    else if(this.progress >=50 && this.progress < 75){
                        return '#f4ff6f';
                    }
                    else if(this.progress >=75){
                        return '#a1ff85';
                    }
                },
                status: function () {
                    if(this.progress < 99){
                        return 'Ongoing...'
                    }
                    else if(this.progress > 99){
                        return 'finished'
                    }
                },
                statusColor: function () {
                    if(this.progress < 99){
                        return '#f2ff8a';
                    }
                    else if(this.progress > 99){
                        return '#a1ff85';
                    }
                }

            },
            {
                id: 1,
                parent: 0,
                name: 'Теги',
                description: 'Мы расскажем вам, как использовать теги и в каких случаях какой тег лучше подойдет для решения той или иной задачи',
                views: '982',
                author: {
                    nick: 'Mihal',
                    pic: 'images/misha.jpg',
                    url: 'https://vk.com/id245941363'
                },
                bg: 'images/tags.jpg',
                shadow: false,
                disabled: true,
                liked: false,
                questions: 12,
                progressStep: function () {
                  return 100/this.questions;
                },
                progress: 0,
                progressColor: function () {
                    if(this.progress <25){
                        return '#ff958c';
                    }
                    else if(this.progress >=25 && this.progress < 50){
                        return '#ffcf7e';
                    }
                    else if(this.progress >=50 && this.progress < 75){
                        return '#f2ff8a';
                    }
                    else if(this.progress >=75){
                        return '#a1ff85';
                    }
                },
                status: function () {
                    if(this.progress < 99){
                        return 'Ongoing...'
                    }
                    else if(this.progress > 99){
                        return 'finished'
                    }
                },
                statusColor: function () {
                    if(this.progress < 99){
                        return '#f2ff8a';
                    }
                    else if(this.progress > 99){
                        return '#a1ff85';
                    }
                }
            },
            {
                id: 2,
                parent: 1,
                name: 'Атрибуты',
                description: 'В данном уроке вы узнаете атрибуты тегов, такие как: class, id, hidden и другие. И, конечно же, научитесь работать с ними.',
                views: '2814',
                author: {
                    nick: 'Spaceman',
                    pic: 'images/artur.jpg',
                    url: 'https://vk.com/last_round'
                },
                bg: 'images/atributes.jpg',
                shadow: false,
                disabled: true,
                liked: false,
                questions: 15,
                progressStep: function () {
                    return 100/this.questions;
                },
                progress: 0,
                progressColor: function () {
                    if(this.progress <25){
                        return '#ff958c';
                    }
                    else if(this.progress >=25 && this.progress < 50){
                        return '#ffcf7e';
                    }
                    else if(this.progress >=50 && this.progress < 75){
                        return '#f2ff8a';
                    }
                    else if(this.progress >=75){
                        return '#a1ff85';
                    }
                },
                status: function () {
                    if(this.progress < 99){
                        return 'Ongoing...'
                    }
                    else if(this.progress > 99){
                        return 'finished'
                    }
                },
                statusColor: function () {
                    if(this.progress < 99){
                        return '#f2ff8a';
                    }
                    else if(this.progress > 99){
                        return '#a1ff85';
                    }
                }
            }

        ]
    },
    filters:{
        cutting: function (value) {
            return value.slice(0,70) + '. . .';
        }
    },
    methods:{
        isLiked: function (id) {
            var item = this.lessons[id].liked;
            if(item === false){
                item = this.lessons[id].liked = true;
            }
            else{
                item = this.lessons[id].liked = false;
            }
        },
        progress: function (id) {
            var pro = this.lessons[id].progress;
            var step = this.lessons[id].progressStep();
            if(pro < 99){
                this.lessons[id].progress = pro + step;
                if(this.lessons[id].progress >= 99){
                    this.lessons[id+1].disabled = false;
                }
                return pro;
            }
            else{
                return 100;
            }
         }
    }
});