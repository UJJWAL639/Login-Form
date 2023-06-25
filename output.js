const paragraph = document.querySelector('#paragraph');
const params = new URLSearchParams(window.location.search);

// paragraph.value.add("<br>");

params.forEach((value, key) => {
    paragraph.append(`${key} --> ${value}`);
    paragraph.append(document.createElement('br'));
});
