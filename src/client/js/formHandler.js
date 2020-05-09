async function fetchSentiment(url,objData) { 
    const fetchResult = await fetch(url, {method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(objData)});
    let result = await fetchResult.json();
    console.log(result);
    return result
}
function changeInfo(data) { 
    console.log(data)
    document.getElementById('results').innerHTML = JSON.stringify(data);
}
function handleSubmit(event) {
   
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('textContent').value
    // call the checkForUrl and on callback, do this.
    Client.checkForUrl(formText, (result,error) => { 
        if (result) {
    // call fetch function
            fetchSentiment(`http://localhost:8081/sentimentTest`,{text:formText}).then((data) => { 
                changeInfo(data)
            });

                
        }
        else { 
            alert(error);
            //TODO: Modify what went wrong
        }
    })


}

export { handleSubmit }
