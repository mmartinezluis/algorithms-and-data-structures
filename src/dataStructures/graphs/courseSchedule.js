// /**
//  * @param {number} numCourses
//  * @param {number[][]} prerequisites
//  * @return {boolean}
//  */

var can_finish = function (num_courses, prerequisites) {
  let graph = new Map();

  prerequisites.forEach((pre) => {
    if (!graph.has(pre[1])) graph.set(pre[1], [pre[0]]);
    else graph.get(pre[1]).push(pre[0]);
  });
  let visited = {};
  for (let vertex of [...graph.keys()]) {
    if (dfs(vertex, graph, visited)) return false;
    visited = {};
  }
  return true;
};

function dfs(vertex, graph, visited) {
  if (!graph.has(vertex)) return false;
  visited[vertex] = true;
  console.log(vertex);
  for (let neighbor of graph.get(vertex)) {
    if (visited[neighbor]) return true;
    if (dfs(neighbor, graph, visited)) return true;
  }
  return false;
}

// const prerequisites = [
//     ['B','A'],
//     ['C','A'],
//     ['B','C'],
//     ['D','C'],
//     ['E','D'],
//     ['E','C']
// ]
const prerequisites = [
  ["B", "A"],
  ["C", "A"],
  ["B", "C"],
  ["D", "C"],
  ["E", "D"],
  ["C", "E"],
];

can_finish(0, prerequisites);

var canFinish = function (numCourses, prerequisites) {
  let graph = new Map();
  let exploring = new Set();
  let visited = new Set();

  for (let [child, parent] of prerequisites) {
    if (graph.has(parent)) graph.get(parent).push(child);
    else graph.set(parent, [child]);
  }

  for (let [child, parent] of graph) {
    if (dfs(child)) return false;
  }
  return true;

  function dfs(node) {
    exploring.add(node);
    let neighbors = graph.get(node);
    if (neighbors) {
      for (let neighbor of neighbors) {
        if (visited.has(neighbor)) continue;
        if (exploring.has(neighbor)) return true;
        if (dfs(neighbor)) return true;
      }
    }
    exploring.delete(node);
    visited.add(node);
    return false;
  }
};

function canFinish(numCourses, prerequisites) {
  const seen = new Set();
  const seeing = new Set();
  const adj = [...Array(numCourses)].map((r) => []);

  for (let [u, v] of prerequisites) {
    adj[v].push(u);
  }

  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c)) {
      return false;
    }
  }
  return true;

  function dfs(v) {
    if (seen.has(v)) return true;
    if (seeing.has(v)) return false;

    seeing.add(v);
    for (let nv of adj[v]) {
      if (!dfs(nv)) {
        return false;
      }
    }
    seeing.delete(v);
    seen.add(v);
    return true;
  }
}
