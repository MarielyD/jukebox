$(document).ready(function(){
  getSong(1);

  $.ajax({
    url: "https://stg-resque.hakuapp.com/albums.json",
    method: "GET",
    dataType: 'jsonp'
  })
  //populate album info
  .done(function( data ) {
    $.each(data, function(index, value){
      $('#boutique').append(albumFill(value));
    })
  })
  .done(function(){
    carouselStart();
  });

  //star favorite
  $(document).on("click", '.fa.fa-star', function(){
    $(this).toggleClass('clicked');
  })

})

//filling in album pics
function albumFill(value){
  return '<li data-id="'+value.id+'">' +
  '<div class="album-body">' +
  '<img class="album-pics" src=' + value.cover_photo_url + ' alt="" />' +
  '</div>' +

  '<div class="album-body">' +
  '<div class="song">'+ value.name +'</div>' +
  '<div class="artist">' + value.artist_name + '</div>' +
  '</div>' +

  '</li>';

}

//get song data
function getSong(albumId){

  $.ajax({
    url: "https://stg-resque.hakuapp.com/songs.json?album_id=" + albumId,
    method: "GET",
    dataType: 'jsonp'
  })
  .done(function( data ) {
    $('#playlist').html('')

    var filterData = data.sort(function(a, b) {
      return (a.song_order - b.song_order);
    });

    $.each(filterData, function(index, value){
      $('#playlist').append(songFill(value));
    })
    $('.fa.fa-star').balloon({
      html: true,
      contents: '<p>MARK AS FAVORITE</p>',
      css: {
        fontFamily: 'roboto',
        backgroundColor: '#bababa',
        fontSize: '5px',
        color: '#fff',
        zIndex:'3'
      }
    });
  })

}

//populate song list 
function songFill(value){
  var songType = "";
  if (value.song_label === null) {
    category = " ";
  }else{
    $.each(value.song_label, function(i,value){
      songType += '<span id="song-label">'+ value +'</span>';
    })
  }
  return '<li class="list-group-item clearfix">' +
  '<div class="col-sm-1 text-center">' +
  '<span id="number">' + value.song_order + '</span>' +
  '</div>' +
  '<div class="col-sm-1 text-center">' +
  '<span id="star">'+'<i class="fa fa-star"></i>'+'</span>'+
  '</div>' +
  '<div class="col-lg-8">' +
  '<span id="song-name">' + value.song_name + '</span>'
  + songType +
  '</div>' +
  '<span id="minutes">' + value.song_duration + '</span>' +
  '</li>';

}

// Or with custom options:
function carouselStart(){
  $('#boutique').boutique({
    container_width:	880,
    front_img_width:	210,
    front_img_height:	210,
    starter:	3,
    speed:	900,
    hovergrowth:	0,
    behind_opacity:	1,
    back_opacity:	1,
    behind_size:	1,
    back_size:	1,
    freescroll:	false,
    move_on_click:	true
  });
}
