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

    var linkPic = document.createElement('a');
    linkPic.href = `http://www.reddit.com${redditData[i].data.permalink}`;
    linkPic.className = "linkPic";
    linkPic.appendChild(card);
    bodyContainer.appendChild(linkPic);


     var oneImg = document.createElement('img');
    oneImg.src = redditData[i].data.url.split('gifv').join('gif').split('&amp;').join('&');
    oneImg.id = `image${i}`;
    oneImg.className = "thisImage";
    card.appendChild(oneImg);

    var imageTitle = document.createElement('div');
    imageTitle.className = 'title';
    var titleName = redditData[i].data.title;
    imageTitle.innerHTML = titleName;
    card.appendChild(imageTitle);

    var authorName = redditData[i].data.author;
    var upLike = redditData[i].data.ups;
    var dateTime = moment.unix(redditData[i].data.created_utc).fromNow();

    var infoStuff = document.createElement('div');
    infoStuff.className = "infoStuff";
    infoStuff.innerHTML = `by ${authorName} &#9679 &#8593;${upLike} &#9679 ${dateTime}`;
    card.appendChild(infoStuff);

    

    }

  }

  
}


// function getBoard (){
//    var boardLink = document.getElementById('board');
//   var boardName = document.createElement('a');
//   boardName.href = `http://www.reddit.com${boardData}.data.permalink}`;
//   boardName.appendChild(boardLink);
//   bodyContainer.appendChild(boardName);
// }

// function boardRequest (){
//  boardData = JSON.parse(this.responseText).data.children;
//  getBoard();
// }

//   var boardReq = new XMLHttpRequest();
//   boardReq.addEventListener('load', boardRequest);
//   boardReq.open("GET","https://www.reddit.com/r/puppies.json"); 
//   boardReq.send();



function reqListener () {

 redditData = JSON.parse(this.responseText).data.children;
  console.log(redditData);
  getPic();
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://www.reddit.com/r/redpandas.json"); 
oReq.send();



