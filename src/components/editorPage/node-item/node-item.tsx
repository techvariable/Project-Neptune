import { Component, h, Prop } from '@stencil/core';

import state from '../store';

const DROPDOWN_ITEMS = ['View'];

@Component({
  tag: 'node-item',
  scoped: true,
})
export class NodeItem {
  @Prop() nodeError:null | string;
  render() {
    return (
      <div style={{ overflow: 'visible' }} class={'py-4 px-3 bg-gray-100 rounded-md'}>
        <ul class="space-y-2">
          {state.nodeList.map(item => {
            return (
              <li>
                <div class="flex justify-between p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-200">
                  <div class="ml-3">{item}</div>
                  <menu-drop-down listTitle={item} list={DROPDOWN_ITEMS} fetchData={nodeName => (state.selectedNodeName = nodeName)}></menu-drop-down>
                </div>
              </li>
            );
          })}
          {this.nodeError && <p class="px-3 py-2  border-l-4 text-center border-gray-300 bg-gray-200 w-full mt-4 mb-6">Failed to fetch node data</p>}
        </ul>
      </div>
    );
  }
}
