


const btn = document.querySelector('button');

// Must be triggered some kind of "user activation"


btn.onclick = async (filesArray) => {
    if (navigator.canShare) {
        navigator.share({
            title: 'Botolic Supreme Bot',
            text: 'Download the most advanced Supreme bot, for FREE.',
            url: 'https://www.botolic.com',
        })
    }else {
        console.log("Cannot share")
    }
}