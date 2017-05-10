//define the Queue class
function Queue() {
	this.queueData = [];
	this.displayQueue = displayQueue;
	this.lengthOfQueue = lengthOfQueue;
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.clearQueue = clearQueue;
}

function displayQueue() {
	return this.queueData;
}

function lengthOfQueue(){
	return this.queueData.length;
}

function enqueue(elem) {
	this.queueData.push(elem);
}

function dequeue() {
	return this.queueData.shift();
}

function clearQueue() {
	this.queueData = [];
}