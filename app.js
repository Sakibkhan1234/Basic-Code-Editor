document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const copyButton = document.getElementById('copyButton');
    const saveButton = document.getElementById('saveButton');
    const lockButton = document.getElementById('lockButton');
  
    copyButton.addEventListener('click', () => {
      editor.select();
      document.execCommand('copy');
      alert('Code copied to clipboard!');
    });
  
    saveButton.addEventListener('click', () => {
      alert('Code saved!');
    });
  
    let isLocked = false;
  
    lockButton.addEventListener('click', () => {
      isLocked = !isLocked;
      editor.readOnly = isLocked;
      lockButton.innerText = isLocked ? 'Unlock' : 'Lock';
    });
  });
  