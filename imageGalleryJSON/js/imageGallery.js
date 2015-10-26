var ImageGallery = function(containerID){
    this.container = document.querySelector(containerID);
    this.index = 0;

    this.initElements();
    this.initHandlers();
}

ImageGallery.prototype = {
    initElements: function(){
        this.image = this.container.querySelector('img');
        this.previousButton = this.container.querySelector('.previousButton');
        this.nextButton = this.container.querySelector('.nextButton');
        this.numbering = this.container.querySelector('.numbering');
    },
    initHandlers: function(){
        this.previousButton.addEventListener('click', this.previousSlide.bind(this));
        this.nextButton.addEventListener('click', this.nextSlide.bind(this));
    },
    setData: function(imageURLs){
        this.imageURLs = imageURLs;
        this.updateSlide();
    },
    nextSlide: function(){
        this.index++;
        if(this.index == this.imageURLs.length){
            this.index = 0;
        }
        this.updateSlide();
    },
    previousSlide: function(){
        this.index--;
        if(this.index < 0){
            this.index = this.imageURLs.length - 1;
        }
        this.updateSlide();
    },
    updateSlide: function(){
        this.image.src = this.imageURLs[this.index];

        this.numbering.innerHTML = this.index + 1 + "/" + this.imageURLs.length;
    },
    loadData: function(url){
        console.log(url);
        // zorg ervoor dat je JSON kunt laden
        // en dat je imageURLs vult met jouw JSON array
        var req = new XMLHttpRequest();
   // welke url moet er worden opgehaald?
   req.open('GET', 'http://localhost:8888/pro/imageGalleryJSON/php/index.php', true);

   // we voegen een 'listener' toe om te kijken of de pagina geladen is
   // je kunt ook andere events gebruiken zoals readystatechange
   req.addEventListener('load', function () {
       var jsonString = req.responseText;
       console.log(JSON.parse(jsonString));
       console.log('bestand is binnen');
   });

   // we starten het laden van de pagina
   req.send();
    }
};
