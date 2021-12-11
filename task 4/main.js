for (let p of document.getElementsByTagName('p')) {
  let hr = document.createElement('hr');
  p.insertAdjacentElement('afterend', hr);
}