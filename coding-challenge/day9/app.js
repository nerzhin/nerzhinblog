let stat = {
	highest: 0,
	steps: 0
};

let dataArr = [];

const inputField = document.querySelector('.value');
const btn = document.querySelector('.post');
const answerField = document.querySelector('.answer').querySelector('p');
const chartField = document.querySelector('#chart');

function restart() {
	dataArr = [];
	stat.highest = 0;
	stat.steps = 0;
};

function collatzSequence(n) {
	let odd = false;
	let result = n;
	while (result != 1) {
		(result % 2 === 0) ? odd = true : odd = false;
		if (odd) {
			(stat.highest > result) ? '' : stat.highest = result;
			stat.steps++;
			dataArr.push([stat.steps, result]);
			result /= 2;
			/*console.log(result);*/			
		} else {
			(stat.highest > result) ? '' : stat.highest = result;
			stat.steps++;
			dataArr.push([stat.steps, result]);
			result = (result * 3) + 1;
			/*console.log(result);*/
		};
	};
	dataArr.push([stat.steps+1, 1]);
	answerField.textContent = `Collatz Sequence done. 
		Started value was ${n}, 
		computer get to 1 by ${stat.steps} steps and get hightest value ${stat.highest}.`;
};

function drawChart() {
	let data = [
	{
		x: [],
		y: [],
		type: 'scatter'
	}];

	let layout = {
  font: {
    family: 'Courier New, monospace',
    size: 22,
    color: 'blue'
  },
  autosize: false,
  width: 280,
  height: 280,
  margin: {
    l: 10/*50*/,
    r: 10/*50*/,
    b: 0/*100*/,
    t: 10/*100*/,
    pad: 10
  },
  plot_bgcolor: '#111625'
};

	dataArr.forEach(function(item) {
		data[0].x.push(item[0]);
		data[0].y.push(item[1]);
	});

	Plotly.newPlot(chartField, data, layout, {displayModeBar: false});
};

function btnResponse() {
	let number = Number(inputField.value);
	if (number === 0 || null || undefined || '') {
		console.log('error');
	} else {
		restart();
		collatzSequence(number);
		drawChart();
	};
};

btn.addEventListener('click', btnResponse);