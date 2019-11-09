let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      alert(tabs[0].url);
   }
);

window.onload = function() {
       //when the document is finished loading, replace everything
       //between the <a ...> </a> tags with the value of splitText
   document.getElementById("myLink").innerHTML=url;
} 

changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };
