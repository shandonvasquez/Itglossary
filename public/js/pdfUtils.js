// pdfUtils.js

function downloadPDF(pdfUrl, filename = 'downloaded_file.pdf') {
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
  export { downloadPDF };
  