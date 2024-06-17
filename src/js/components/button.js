const button = function (data, type, id) {
  return `
        <button class="button" id="${id}" type="${type}">${data}</button>
        
        `;
};

export default button;
