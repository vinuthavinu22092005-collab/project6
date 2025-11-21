
    const inputText = document.getElementById('inputText');
    const outputTextSpan = document.getElementById('hello');
    const resetBtn = document.getElementById('reset');
    
    
    const initialText = inputText.value;
    const baseFontSize = 16;
    let currentFontSize = baseFontSize;



    const updateOutput = () => {
        outputTextSpan.textContent = inputText.value;
    };
    
  
    const rcs = () => {
        outputTextSpan.style.color = '';
        outputTextSpan.style.fontSize = '';
    };

    document.getElementById('upper').addEventListener('click', () => {
        outputTextSpan.textContent = outputTextSpan.textContent.toUpperCase();
    });

    document.getElementById('lower').addEventListener('click', () => {
        outputTextSpan.textContent = outputTextSpan.textContent.toLowerCase();
    });

    document.getElementById('cap').addEventListener('click', () => {
        const text = outputTextSpan.textContent.toLowerCase();
        outputTextSpan.textContent = text.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    });


    document.getElementById('red').addEventListener('click', () => {
        rcs();
        outputTextSpan.style.color = '#ef4444'; 
    });

    document.getElementById('Blue').addEventListener('click', () => {
        rcs();
        outputTextSpan.style.color = '#3b82f6';
    });

    document.getElementById('green').addEventListener('click', () => {
        rcs();
        outputTextSpan.style.color = '#22c55e';
    });

    document.getElementById('big').addEventListener('click', () => {
        currentFontSize += 2;
        outputTextSpan.style.fontSize = `${currentFontSize}px`;
    });

    document.getElementById('small').addEventListener('click', () => {
        currentFontSize -= 2;
        outputTextSpan.style.fontSize = `${currentFontSize}px`;
    });
    
    
    resetBtn.addEventListener('click', () => {
        
        inputText.value = initialText;
        outputTextSpan.textContent = initialText;
    
        rcs();
        currentFontSize = baseFontSize;
    });