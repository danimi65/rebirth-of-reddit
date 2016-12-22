console.log('sanity check');

// var mainStuff = document.getElementById('mainContainer');

var redditData;
var bodyContainer = document.getElementById('mainContainer');
// body.appendChild(bodyContainer);


function checkForTheGood(picUrl){
  var goodUrl = ['jpg', 'png', 'gif', 'jpeg', 'reddituploads'];
  for(var i = 0; i < picUrl.length; i++){
    if(picUrl.indexOf(goodUrl[i]) > -1){
      return true;
    }
  }
  return false;
}

function getPic(){
  for(var i = 0; i < redditData.length; i++){
    if(checkForTheGood(redditData[i].data.url)){
    var card = document.createElement('div');
    card.className = 'imgBox';

    bodyContainer.appendChild(card);

    var oneImg = document.createElement('img');
    oneImg.src = redditData[i].data.url.split('gifv').join('gif').split('&amp;').join('&');
    oneImg.id = `image${i}`;
    oneImg.style.maxHeight = '400px';
    oneImg.style.maxWidth = '400px'; 
    card.appendChild(oneImg);
    console.log('data' + this.data);
    }
    }

  
}


function reqListener () {

 redditData = JSON.parse(this.responseText).data.children;
  console.log(redditData);
  getPic();
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://www.reddit.com/r/redpandas.json"); 
oReq.send();



