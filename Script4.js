// JavaScript source code
const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/wtfjenos/idk/?amount=1')
		.then(res => res.json())
		.then(res => {
			countEl.innerHTML = res.value;
		})
}