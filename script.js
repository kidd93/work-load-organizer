
let currentHour = moment().format('H'); 
document.querySelector("#currentDay").textContent = 
    moment().format("dddd MMM Do YYYY");

const hours = ['9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];

hours.forEach((hour,i) => {
    
    let thisHour = i+9;
    document.querySelector('.container').innerHTML +=
        `<div class="time-block row">
            <div class="hour col-6 col-md-1">${hour}</div>
            <textarea class="${thisHour<currentHour ? 'past' : thisHour == currentHour ? 'present' : 'future'} description col-6 col-md-10"></textarea>
            <div class="col-6 col-md-1">
                <button class="saveBtn" onclick="saveStorage()">save</button>
            </div>
        </div>`
});

let store = eval(localStorage.hours) || [];

const displayStorage = () => {
    store.forEach((item,i) => {
        $('textarea').eq(i).val(item);
    });
};

displayStorage();

const saveStorage = () => {
    store = [];
    hours.forEach((hour,i) => {
        store.push($('textarea').eq(i).val())
    });
    localStorage.hours = JSON.stringify(store);
};
