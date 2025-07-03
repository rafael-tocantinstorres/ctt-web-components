import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import './Pagination';

interface TableItem {
  id: number;
  name: string;
  email: string;
  department: string;
  status: string;
}

@customElement('stateful-pagination-wrapper')
export class StatefulPaginationWrapper extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .table-container {
      margin-bottom: 20px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      overflow: hidden;
    }
    
    .data-table {
      width: 100%;
      border-collapse: collapse;
      font-family: var(--ctt-font-family, 'Segoe UI', sans-serif);
    }
    
    .data-table th,
    .data-table td {
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .data-table th {
      background-color: #f5f5f5;
      font-weight: 600;
      color: #333;
    }
    
    .data-table tr:nth-child(even) {
      background-color: #f9f9f9;
    }
    
    .data-table tr:hover {
      background-color: #f0f0f0;
    }
    
    .status-badge {
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
    }
    
    .status-active {
      background-color: #e8f5e8;
      color: #2e7d32;
    }
    
    .status-inactive {
      background-color: #ffebee;
      color: #c62828;
    }
    
    .demo-header {
      margin-bottom: 20px;
      padding: 20px;
      background-color: #f8f9fa;
      border-radius: 8px;
    }
    
    .demo-header h3 {
      margin: 0 0 10px 0;
      color: #333;
    }
    
    .demo-header p {
      margin: 0;
      color: #666;
      font-size: 14px;
    }

    .demo-header ul {
      margin: 10px 0 0 20px;
      color: #666;
      font-size: 14px;
    }
  `;

  @property({ type: Array })
  data: TableItem[] = [];

  @state()
  private currentPage = 1;

  @state()
  private itemsPerPage = 10;

  @state()
  private itemsPerPageOptions = [
    { label: '5', value: 5 },
    { label: '10', value: 10 },
    { label: '20', value: 20 },
    { label: '50', value: 50 },
  ];

  private get totalPages(): number {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  private get currentItems(): TableItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.data.slice(startIndex, endIndex);
  }

  private handlePageChange(e: CustomEvent) {
    this.currentPage = e.detail.page;
  }

  private handleItemsPerPageChange(e: CustomEvent) {
    this.itemsPerPage = e.detail.itemsPerPage;
    this.currentPage = 1; // Reset to first page when changing items per page
  }

  render() {
    return html`
      <div class="demo-header">
        <h3>🧪 Teste Interativo de Paginação</h3>
        <p>Esta tabela demonstra o funcionamento completo da paginação. Teste as funcionalidades:</p>
        <ul>
          <li>Navegação entre páginas usando os botões</li>
          <li>Alteração do número de itens por página</li>
          <li>Visualização dos dados atualizados em tempo real</li>
        </ul>
      </div>
      
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Departamento</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${this.currentItems.map(item => html`
              <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.department}</td>
                <td>
                  <span class="status-badge ${item.status === 'Ativo' ? 'status-active' : 'status-inactive'}">
                    ${item.status}
                  </span>
                </td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
      
      <ctt-pagination
        .currentPage=${this.currentPage}
        .totalPages=${this.totalPages}
        .itemsPerPage=${this.itemsPerPage}
        .totalItems=${this.data.length}
        .itemsPerPageOptions=${this.itemsPerPageOptions}
        @page-changed=${this.handlePageChange}
        @items-per-page-changed=${this.handleItemsPerPageChange}
      ></ctt-pagination>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stateful-pagination-wrapper': StatefulPaginationWrapper;
  }
}