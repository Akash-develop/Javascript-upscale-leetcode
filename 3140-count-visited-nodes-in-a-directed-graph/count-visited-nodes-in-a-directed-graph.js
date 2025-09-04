/**
 * @param {number[]} edges
 * @return {number[]}
 */
var countVisitedNodes = function(edges) {
      const n = edges.length;
    const answer = new Array(n).fill(0);
    const visited = new Array(n).fill(0);

    function dfs(node, pathMap) {
        if (visited[node] === 2) return answer[node];
        if (visited[node] === 1) {
            let cycleLen = pathMap.size - pathMap.get(node);
            for (let [v, idx] of pathMap.entries()) {
                if (idx >= pathMap.get(node)) {
                    answer[v] = cycleLen;
                    visited[v] = 2;
                }
            }
            return answer[node];
        }

        visited[node] = 1;
        pathMap.set(node, pathMap.size);
        const next = edges[node];
        const res = dfs(next, pathMap);

        if (answer[node] === 0) {
            answer[node] = 1 + answer[next];
            visited[node] = 2;
        }

        pathMap.delete(node);
        return answer[node];
    }

    for (let i = 0; i < n; i++) {
        if (visited[i] === 0) {
            dfs(i, new Map());
        }
    }

    return answer;
};