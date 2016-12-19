console.log('sanity check');

// var mainStuff = document.getElementById('mainContainer');

var redditData;
var bodyContainer = document.getElementById('mainContainer');
// body.appendChild(bodyContainer);


function getPic(){
  for(var i = 0; i < redditData.length; i++){
    var card = document.createElement('div');
    card.className = 'imgBox';
    //   card.addEventListener('click', (e) => {


    // });

    bodyContainer.appendChild(card);


    var oneImg = document.createElement('img');
    oneImg.src = redditData[i].data.url;
    oneImg.id = `image${i}`;
    oneImg.style.maxHeight = '300px';
    oneImg.style.maxWidth = '300px'; 
    card.appendChild(oneImg);
    console.log('data' + this.data);
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



