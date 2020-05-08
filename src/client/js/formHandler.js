
function handleSubmit(event) {
    const getSentiment = async (url = '', data = {}) => {
        // Get set the params we need for returned weather record
        let analysis = {}
        const rWRecord = await fetch(url, {
            method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
    try {
        return await rWRecord.json();
       
        }
        catch (error) {
            console.log('Error(postWEntry):', error)
        }
    }
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    // call the checkForUrl and on callback, do this.
    Client.checkForUrl(formText, (result,error) => { 
        if (result) {
    // Submit fetch request
            getSentiment('http://localhost:8081/sentiment', {url: formText}).then((result) => { 
                console.log('This and'+result)
            })
        }
        else { 
            alert(error);
            //TODO: Modify what went wrong
        }
    })


}

export { handleSubmit }
