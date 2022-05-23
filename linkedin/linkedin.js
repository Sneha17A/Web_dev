const result = document.querySelector('.result');

const dialog = document.querySelector('.example-dialog');
// dialog.addEventListener('close', (event) => {
//     result.textContent = 'dialog was closed';
// });

const openDialog = document.querySelector('.open-dialog');
openDialog.addEventListener('click', () => {
  if (typeof dialog.showModal === 'function') {
      dialog.showModal();
      result.textContent = '';
  } else {
      result.textContent = 'The dialog API is not supported by this browser';
  }
});

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
    dialog.close();
});

// pencil code
const result_1 = document.querySelector('.result-1');

const dialog_1 = document.querySelector('.example-dialog-1');

const openDialog_1 = document.querySelector('.open-dialog-1');
openDialog_1.addEventListener('click', () => {
  if (typeof dialog_1.showModal === 'function') {
      dialog_1.showModal();
      result_1.textContent = '';
  } else {
      result_1.textContent = 'The dialog API is not supported by this browser';
  }
});

const closeButton_1 = document.querySelector('.close-1');
closeButton_1.addEventListener('click', () => {
    dialog_1.close();
});

document.getElementById('people').addEventListener('click',user_info);

// function getData() {
//     fetch('https://randomuser.me/api/?results=1')
//     .then(res => res.json())
//     .then(data => {
//        let author =  data.results;
//     //    console.log(author);
//         let output = '';
//         author.forEach(function (lists) {
//             output += `<p class="fw-bold">${lists.name.first} ${lists.name.last}</p>`;
//         });
//         document.getElementById('user_name').innerHTML = output;
//     });
// }
// getData();

function user_info() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
       let author =  data.results;
       console.log(author);
        let output = '';
        let user_name_op = '';
        author.forEach(function (lists) {
            output += `<p><b>Name: </b> ${lists.name.first} ${lists.name.last}</p>
            <p><b>Cell number: </b> ${lists.cell} </p>
            <p><b>Mail id: </b> ${lists.email}</p>
            <p><b>Location: </b> ${lists.location.street.number} ${lists.location.city} ${lists.location.state} ${lists.location.postcode}</p>
            <p><b>Date of Birth: </b> ${lists.dob.date}</p>
            `;
            user_name_op = `<p><b> ${lists.name.first} ${lists.name.last}</b></p>`;
        });
        document.getElementById('user_info').innerHTML = output;
        document.getElementById('user_name').innerHTML = user_name_op;
    });
}
// user_info();