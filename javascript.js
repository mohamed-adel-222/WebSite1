var myCanvas = document.getElementById('c'),
    
    myContext = myCanvas.getContext('2d');
myContext.fillStyle = 'green';
/*myContext.fillRect(x, y, width, height);*/
myContext.fillRect(50, 50, 100, 50);

myContext.fillStyle = '#F00'; 
myContext.fillRect(30, 30, 100, 50);

myContext.StrokeStyle = '#00F';
myContext.lineWidth = 20;
myContext.strokeRect(200, 200, 300, 200);

myContext.fillRect(0, 0, 800, 400);
myContext.clearRect(10, 10, 100, 100);
