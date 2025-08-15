(() => {
  'use strict';

  const removeExistingElements = (head) => {
    head.querySelectorAll('.line-sticker-url').forEach((element) => {
      element.parentNode.removeChild(element);
    });
  };

  const createLinkIcon = () => {
    const linkIcon = document.createElement('div');
    linkIcon.innerHTML = '🔗';
    linkIcon.style = 'position: absolute; left: 8px; top: 50%; transform: translateY(-50%); pointer-events: none; z-index: 1;';
    return linkIcon;
  };

  const createInput = (url) => {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = url;
    input.classList.add('line-sticker-url', 'input', 'input-bordered', 'input-sm');
    input.style = 'width: 600px; padding-left: 32px;';
    input.addEventListener('click', () => {
      input.select();
    }, false);
    return input;
  };

  const createInputWrapper = (url) => {
    const inputWrapper = document.createElement('div');
    inputWrapper.style = 'position: relative; display: inline-block;';

    const linkIcon = createLinkIcon();
    const input = createInput(url);

    inputWrapper.appendChild(linkIcon);
    inputWrapper.appendChild(input);

    return inputWrapper;
  };

  const createOpenButton = (url) => {
    const button = document.createElement('button');
    button.textContent = 'Open';
    button.classList.add('btn', 'btn-soft', 'btn-sm');
    button.addEventListener('click', () => {
      window.open(url, '_blank');
    }, false);

    return button;
  };

  const createContainer = (url) => {
    const container = document.createElement('div');
    container.classList.add('line-sticker-url', 'flex', 'gap-2');
    container.style = `position: fixed; top: 10px; right: 10px; z-index: 999;`;

    const inputWrapper = createInputWrapper(url);
    const button = createOpenButton(url);

    container.appendChild(inputWrapper);
    container.appendChild(button);

    return container;
  };

  const extractURL = (image) => {
    const span = image.querySelector('span');

    return span.style.backgroundImage.match(/(https:\/\/.*)\?/)[1];
  };

  const showURL = (image) => {
    const url = extractURL(image);
    const head = document.querySelector('.LyHead');

    removeExistingElements(head);
    const container = createContainer(url);
    head.appendChild(container);
  };

  document.querySelectorAll('.FnImage').forEach((image) => {
    image.addEventListener('click', () => showURL(image), false);
  });
})();
