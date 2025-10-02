// Varaible 
const add_task = document.getElementById('add_task');
const data_task = document.getElementById('data_task');
const cannel = document.getElementById('cannel');
const close__task = document.getElementById('close__data__task');

// Window Data task 
add_task.addEventListener('click', () => {
    data_task.style.display = 'block';
    const show = document.getElementById('show');
    show.addEventListener('click', () => {
        if (input_task.value == "" || input_date.value == ""){
            return 0
        }else{
            create__task.style.display = 'block';
            show.style.display = 'none';
        };
    });
});
cannel.addEventListener('click', () => {
    data_task.style.display = 'none';
});
close__task.addEventListener('click', () => {
    data_task.style.display = 'none';
});
// Get Input Value
let input_task = document.getElementById('input_task');
let input_date = document.getElementById('input_date');
let input_select = document.getElementById('input_select');
let input_textarea = document.getElementById('input_textarea');
const create__task = document.getElementById('create__task');

// Function Create Element
create__task.addEventListener('click', addelement);
function elementFromHtml(html){
    const template = document.createElement('template');
    template.innerHTML = html.trim()
    return template.content.firstElementChild;
}
function addelement(){
    const myElement = elementFromHtml(
    `
        <div id="content_value_task">
            <div id="div_one">
                <span> <i class="ri-menu-line"></i> </span>
                <input type="checkbox" id="value_checkbox">
                <label>${input_task.value}</label>
            </div>
            <div id="div_tow">
                <span>Day: ${input_date.value}</span>
                <span>Condition: ${input_select.value}</span>
            </div>
        </div>
    `
    );
    document.body.appendChild(myElement);
    data_task.style.display = 'none'; 
    const numTask = document.getElementById('numTask').innerHTML++;
    input_task.value = "";
    input_date.value = "";
    input_textarea.value = "";
    create__task.style.display = 'none';
    show.style.display = 'block';
};


