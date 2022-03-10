const activityContainer = document.getElementById("activity-container");
const activityText = document.getElementById("activity");
const twitterBtn = document.getElementById("twitter");
const newActivityBtn = document.getElementById("new-activity");
const loader = document.getElementById("loader");


let apiActivity = {};

//Show loading
function loading() {
    loader.hidden = false;
    activityContainer.hidden = true;
}

// Hide loading
function complete() {
    activityContainer.hidden = false;
    loader.hidden = true;
}
    


//Show new activity
function newActivity() {
    loading();
    //Get the acitivity attribute from the returned object
    const activity = activities.activity;


    //Set Activity, hide loader
    activityText.textContent = activity;
    complete();
}

// Get Activity from API

async function getActivity() {
    loading();
    const apiUrl = "https://www.boredapi.com/api/activity/";

    try {
        const response = await fetch(apiUrl);
        activities = await response.json();
        newActivity();
    } catch(error) {
        alert(error)
    }
 }

//Tweet Quote 
function tweetActivity(){
    const twitterUrl= `https://twitter.com/intent/tweet?text=I am going to ${activityText.textContent} today!`;

    window.open(twitterUrl, "_blank");
}


//Event Listeners
newActivityBtn.addEventListener('click', getActivity);
twitterBtn.addEventListener('click', tweetActivity);


 // On Load
 getActivity();