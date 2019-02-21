export const go = (input) => {
  const data = { ...input };
  const iframe = document.createElement('iframe');

  iframe.onload = () => {
    iframe.contentWindow.postMessage(data, '*');
  };
  iframe.src = '/page-2';

  document.body.appendChild(iframe);
}

