import React, { useState } from 'react';
import TreeView from 'devextreme-react/tree-view';
import 'devextreme/dist/css/dx.light.css';

function App() {

  const [divisoes, setDivisoes] = useState([]);

  function renderTreeViewItem(item) {
    return `${item.name}`;
  }

  function treeViewSelectionChanged(e) {
    syncSelection(e.component);
  }

  function treeViewContentReady(e) {
    syncSelection(e.component);
  }

  function syncSelection(treeView) {
    const selectedEmployees = treeView.getSelectedNodes()
      .map((node) => node.itemData);
    console.log(selectedEmployees);
  }

  function addDivisao() {
    const divisao = {
      id: Math.floor(Math.random() * (100 - 1)) + 1,
      name: 'Sintonia Feminina',
    };

    setDivisoes([...divisoes, divisao]);
  }

  return (
    <div className="App">
      <TreeView
        id="treeview"
        items={divisoes}
        width={340}
        selectNodesRecursive={true}
        selectByClick={true}
        showCheckBoxesMode={'normal'}
        selectionMode={'single'}
        onSelectionChanged={treeViewSelectionChanged}
        onContentReady={treeViewContentReady}
        itemRender={renderTreeViewItem}
      />
      <button onClick={addDivisao}>clique aqui</button>
    </div>
  );
}

export default App;

export const divisoes = [{
  id: 1,
  name: 'Sintonia Final Geral',
  expanded: true,
  items: [{
    id: 2,
    name: 'Sintonia Geral do Sistema',
    expanded: true,
    items: [{
      id: 3,
      name: 'Sintonia das Colônias',
    },
    {
      id: 4,
      name: 'Sintonia Feminina',
    },
    {
      id: 5,
      name: 'Sintonia das Comarcas',
    },
    {
      id: 6,
      name: 'Sintonia dos COP\'S',
    },
    ],
  }, {
    id: 7,
    name: 'Sintonia Geral dos outros Estados',
    expanded: true,
    items: [{
      id: 8,
      name: 'Sul',
    }, {
      id: 9,
      name: 'Norte',
    }, {
      id: 10,
      name: 'Oeste',
    },
    {
      id: 11,
      name: 'C. Oeste',
    },
    {
      id: 12,
      name: 'Nordeste',
    },
    ],
  }, {
    id: 13,
    name: 'Apoio da Sintonia Final Geral',
    expanded: true,
    items: [{
      id: 14,
      name: 'Setor Financeiro',
    }, {
      id: 15,
      name: 'Sintonia dos Gravatas',
    }],
  }],
}];