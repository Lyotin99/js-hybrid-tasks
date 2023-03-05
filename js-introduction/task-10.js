const coneVolumeAndSurface = (arr) => {
	const radius = arr[0];
	const height = arr[1];

	const slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
	const volume = (Math.PI * radius * radius * height) / 3;
	const surfaceArea = Math.PI * radius * (radius + slantHeight);

	return {
		volume: volume,
		surfaceArea: surfaceArea.toFixed(2),
	};
};

const res = coneVolumeAndSurface([4, 6]);
console.log("task-10: ");
console.log(res.volume);
console.log(res.surfaceArea);
