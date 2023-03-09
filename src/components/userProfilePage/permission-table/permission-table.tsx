import { Component, Host, h, Prop, State } from '@stencil/core';
import { combinePermissions } from '../../../utils/utils';

@Component({
  tag: 'permission-table',
  styleUrl: 'permission-table.css',
  scoped: true,
})
export class PermissionTable {
  @Prop() permissionstring: string;
  @State() permissions: {}[];
  @State() table: {}[] = [];
  @State() tableBody: {} = {};

  operations: string[] = ['read', 'write', 'update', 'delete'];
  componentWillLoad() {
    this.permissions = JSON.parse(this.permissionstring);
    this.table = combinePermissions(this.permissions);
    const tableBody = {};
    this.operations.forEach(i => {
      const property = [];

      Object.keys(this.table).map(item => {
        property.push(this.table[item][i]);
      });
      tableBody[i] = property;
    });
    this.tableBody = tableBody;
  }
  render() {
    return (
      <Host>
        <slot>
          <div class="flex gap-4 border-2 border-gray-500 relative overflow-x-auto">
            <div class="h-64 relative">
              <table class="overflow-y-auto h-full min-w-full table-auto w-full text-sm text-center text-gray-500 dark:text-gray-400">
                <thead class="text-xs uppercase tracking-wider sticky top-0">
                  <tr>
                    <th scope="col" class="w-64 px-6 py-4 text-gray-500 bg-gray-100 hover:text-gray-700 ">
                      Property
                    </th>
                    {this.operations.map(item => {
                      return (
                        <th scope="col" class="w-80 px-6 py-4 text-gray-500 bg-gray-100 hover:text-gray-700 ">
                          {item}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(this.table).map(item => {
                    return (
                      <tr class="border-b border-gray-200">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          {item}
                        </th>
                        {Object.keys(this.table[item]).map(value => {
                          return (
                            <td class="px-6 py-4">
                              {this.table[item][value] === true ? (
                                <div>
                                  <svg class="w-5 h-5 text-green-500 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      fill-rule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                              ) : (
                                <div>
                                  <svg class="w-5 h-5 text-red-700 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      fill-rule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </slot>
      </Host>
    );
  }
}
