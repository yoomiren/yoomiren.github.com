var imgSrc = "http://payload100.cargocollective.com/1/9/296422/4317770/"; //Root directory.
var imgName;
var dataLength = picsData.length;
var loopLength = 3; //Set loop length.
var initItemsLength = 9; //set initial items length.
var itemDelay = 300; //Set delay between appended items.

//Create elements:
function getItem(param) {
  //Find data:
  var imgName = picsData[param].thumbName;
  //Create image:
  var image = new Image();
  image.className = 'img-item';
  image.src = imgSrc + imgName;
  //Create title:
  var title = document.createElement('span');
  title.className = "thumb-title";
  titleText = document.createTextNode(picsData[param].title);
  title.appendChild(titleText);
  //Create container:
  var item = document.createElement('div');
  item.className = picsData[param].classes;
  item.appendChild(title);
  item.appendChild(image);
  return item;
}

//Append initial items:
function appendItemInit(){
  for (i=0; i<initItemsLength; i++) {
    (function(i){
      setTimeout(function(){
        if (initItemsLength<dataLength) {
          //Get item:
          var elems = getItem(i);
          //Create jQuery object:
          var $elems = $(elems);
          //Append item:
          $(".grid").append($elems);
          // console.log(picsData[i].id);
        }
        else {
          $('.append-button').hide();
          $(".status").fadeIn();
        };
      }, itemDelay * i);
    }(i)); //Add delay between appended items.
  };
};
appendItemInit();

//Append new items:
function appendItem(){
  for (i=0; i<loopLength; i++) {
    (function(i){
      setTimeout(function(){
        if (initItemsLength<dataLength) {
          //Get item:
          var elems = getItem(initItemsLength);
          //Create jQuery object:
          var $elems = $(elems);
          //Append item:
          $(".grid").append($elems);
          // console.log(picsData[initItemsLength].id);
          //Modify items counter:
          initItemsLength += 1;
        }
        else {
          $('.append-button').hide();
          $(".status").fadeIn();
        };
      }, itemDelay * i);
    }(i)); //Add delay between appended items.
  };
};
$('.append-button').click(function() {
  appendItem();
});

//Infinite Scroll (trigger):
$(window).scroll(function() {
  if(Math.ceil($(window).scrollTop() + window.innerHeight) == $(document).height()) {
    appendItem();
  }
});

//Lightbox:
//Binding DOM after newly appended elements.
$(document).on('click', '.item', function() {
  //Find item into JSON:
  var thisItem = $(this).find(".img-item").attr("src");
  var n = thisItem.lastIndexOf('/');
  var result = thisItem.substring(n + 1);
  var index = picsData.map(function(e) { return e.thumbName; }).indexOf(result);
  console.log(index);
  //Lightbox display (fade in):
  $(".lightbox").css({
    "background": "url("+imgSrc+picsData[index].imgName+") no-repeat center",
    "background-size": "contain"
  });
  $(".sandbox").fadeIn(100);
  //Hide scrollbar
  $("html").css({"overflow-y": "hidden"});
});
//Lightbox display (fade out):
$(".sandbox").click(function(){
  $(".sandbox").fadeOut(100);
  //Show scrollbar:
  $("html").css({"overflow-y": "auto"});
});