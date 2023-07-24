<template>
    <div class="">
        <div>
            {{ data}}
        </div>
        <VueFlow v-model="elements" />
    </div>
</template>

<script setup>
import { VueFlow  } from '@vue-flow/core'
import dagre from 'dagre'
import graphlib from 'graphlib'

console.log(dagre)

dagre.graphlib = graphlib

const g = new dagre.graphlib.Graph();

g.setGraph({});

// Default to assigning a new object as a label for each new edge.
g.setDefaultEdgeLabel(function() { return {}; });

// Add nodes to the graph. The first argument is the node id. The second is
// metadata about the node. In this case we're going to add labels to each of
// our nodes.
g.setNode("kspacey",    { label: "Kevin Spacey",  width: 144, height: 100 });
g.setNode("swilliams",  { label: "Saul Williams", width: 160, height: 100 });
g.setNode("bpitt",      { label: "Brad Pitt",     width: 108, height: 100 });
g.setNode("hford",      { label: "Harrison Ford", width: 168, height: 100 });
g.setNode("lwilson",    { label: "Luke Wilson",   width: 144, height: 100 });
g.setNode("kbacon",     { label: "Kevin Bacon",   width: 121, height: 100 });

// Add edges to the graph.
g.setEdge("kspacey",   "swilliams");
g.setEdge("swilliams", "kbacon");
g.setEdge("bpitt",     "kbacon");
g.setEdge("hford",     "lwilson");
g.setEdge("lwilson",   "kbacon");

dagre.layout(g);

g.nodes().forEach(function(v) {
    console.log("Node " + v + ": " + JSON.stringify(g.node(v)));
});
g.edges().forEach(function(e) {
    console.log("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(g.edge(e)));
});

// const g = new dagre.graphlib.Graph();

const elements = ref([
    // Nodes
    // An input node, specified by using `type: 'input'`
    { id: '1', type: 'input', label: 'Node 1', position: { x: 250, y: 5 } },

    // Default nodes, you can omit `type: 'default'`
    { id: '2', label: 'Node 2', position: { x: 100, y: 100 }, },
    { id: '3', label: 'Node 3', position: { x: 400, y: 100 } },

    // An output node, specified by using `type: 'output'`
    { id: '4', type: 'output', label: 'Node 4', position: { x: 400, y: 200 } },

    // Edges
    // Most basic edge, only consists of an id, source-id and target-id
    { id: 'e1-3', source: '1', target: '3' },

    // An animated edge
    { id: 'e1-2', source: '1', target: '2', animated: true },
])

const { data } = await useFetch('http://127.0.0.1:5000/')




</script>

<style scoped>

</style>