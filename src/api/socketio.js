var results = [
  { x: 1, y: 1, label: "Dummy Option 1", weight: 0.3 },
  { x: 2, y: 1, label: "Dummy Option 2", weight: 0.5 },
  { x: 3, y: 1, label: "Dummy Option 3", weight: 0.2 },
  { x: 4, y: 1, label: "Dummy Option 4", weight: 0.1 },
  { x: 5, y: 1, label: "Dummy Option 5", weight: 0.6 }
];

export function subscribeToResults(id, callback) {
  setInterval(() => {
    for (var i = 0; i < results.length; i++) {
      results[i].y += Math.floor(Math.random() * 100 * results[i].weight);
    }
    //console.log(results);
    callback([...results]);
  }, 1000);
}

export function unsubscribeToResults(id) {}
