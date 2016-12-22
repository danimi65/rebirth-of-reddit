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

    var author = document.createElement('div');
    author.className = 'author';
    var authorName = redditData[i].data.author;
    author.innerHTML = 'by ' + authorName;
    card.appendChild(author);

    // var dateDiv = document.createElement('div');
    // dateDiv.className = 'dateDiv';
    // dateTime = moment.unix(redditData[i].data.created_utc);
    // var today = new Date();
    // var timeFromToday = document.createTextNode(dateTime.from(today));
    // dateDiv.innerHTML = timeFromToday;
    // card.appendChild(timeFromToday);
    

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



